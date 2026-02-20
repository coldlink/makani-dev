import { Rss } from "lucide-preact";
import { define } from "@/utils/utils.ts";
import { ProseSection } from "@/components/ProseSection.tsx";
import { extract } from "@std/front-matter/yaml";
import { join } from "@std/path/join";
import { page } from "fresh";
import { getImagorUrl } from "@/utils/imagor.ts";
import { Head } from "@/components/Head.tsx";

export interface Post {
	slug: string;
	title: string;
	publishedAt: Date;
	description: string;
	image?: {
		src: string;
		alt: string;
	};
	hidden?: boolean;
}

type Blog = {
	posts: Post[];
};

export const description =
	"Musings, walks, walkthroughs, and other things related to Mahesh.";

async function getPost(slug: string): Promise<Post | null> {
	const text = await Deno.readTextFile(join("markdown/blog", `${slug}.md`));
	const { attrs } = extract<Post>(text);
	return {
		slug,
		title: attrs.title as string,
		publishedAt: new Date(attrs.publishedAt),
		description: attrs.description as string,
		image: attrs.image
			? {
				src: attrs.image.src,
				alt: attrs.image.alt,
			}
			: undefined,
		hidden: attrs.hidden as boolean,
	};
}

export async function getPosts(): Promise<Post[]> {
	const files = Deno.readDir("markdown/blog");
	const promises = [];
	for await (const file of files) {
		const slug = file.name.replace(".md", "");
		promises.push(getPost(slug));
	}
	const posts = (await Promise.all(promises)) as Post[];
	posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
	return posts.filter((post) => !post.hidden);
}

function Post(props: { post: Post }) {
	const { post } = props;
	return (
		<li class="mb-8 ms-4">
			<div class="absolute w-3 h-3 bg-primary-200 rounded-full -start-1.5 border border-white dark:border-primary-900 dark:bg-primary-700">
			</div>

			<a class="relative -top-1.5 block" href={`/blog/${post.slug}`}>
				<div class="flex flex-col-reverse sm:flex-row sm:items-center gap-4">
					{post.image && (
						<div class="sm:shrink-0 sm:w-40 md:w-48">
							<picture class="block">
								{/* AVIF format */}
								<source
									type="image/avif"
									srcSet={getImagorUrl(
										`fit-in/400x300/filters:format(avif):quality(80)/${post.image.src}`,
									)}
								/>

								{/* WEBP format */}
								<source
									type="image/webp"
									srcSet={getImagorUrl(
										`fit-in/400x300/filters:format(webp):quality(80)/${post.image.src}`,
									)}
								/>

								{/* Default JPEG format (fallback) */}
								<img
									loading="lazy"
									class="w-full h-auto rounded-lg object-cover border-2 border-transparent hover:border-primary-400 dark:hover:border-primary-600 transition-all duration-300 aspect-4/3"
									src={getImagorUrl(
										`fit-in/400x300/filters:format(jpeg):quality(80)/${post.image.src}`,
									)}
									alt={post.image.alt}
									width={400}
									height={300}
								/>
							</picture>
						</div>
					)}
					<div class="flex-1">
						<time class="mb-1 text-sm font-normal leading-none text-primary-400 dark:text-primary-950">
							{new Intl.DateTimeFormat("en-GB", {
								dateStyle: "long",
								timeZone: "Europe/London",
							}).format(new Date(post.publishedAt))}
						</time>
						<h3 class="mb-1 text-lg font-serif text-primary-300 dark:text-primary-700 transition-colors duration-300 hover:text-primary-600 hover:dark:text-primary-400">
							{post.title}
						</h3>
						<p class="text-base font-normal text-text dark:text-text-dark">
							{post.description}
						</p>
					</div>
				</div>
			</a>
		</li>
	);
}

export const handler = define.handlers({
	async GET() {
		const posts = await getPosts();

		return page<Blog>({
			posts,
		});
	},
});

export default define.page<typeof handler>(function BlogIndexPage(ctx) {
	const { posts } = ctx.data;
	return (
		<>
			<Head title="Blog" description={description} />
			<ProseSection className="mb-8">
				<h1>Blog</h1>
				<p>
					<a href="/blog/rss.xml" class="inline-block">
						<Rss class="inline-block me-2" />
						RSS feed
					</a>
				</p>
			</ProseSection>
			<ol class="relative border-s border-primary-200 dark:border-primary-700 max-w-[80ch]">
				{posts.map((post) => <Post post={post} key={post.slug} />)}
			</ol>
		</>
	);
});
