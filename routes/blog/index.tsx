import { PageProps } from "$fresh/server.ts";
import { Handlers } from "$fresh/server.ts";
import { extract } from "$std/front_matter/yaml.ts";
import { join } from "$std/path/mod.ts";
import { ProseSection } from "@/components/ProseSection.tsx";
import { defaultHandlerFunction } from "@/utils/handler.ts";
import { IoLogoRss } from "react-icons/io5";

export interface Post {
	slug: string;
	title: string;
	publishedAt: Date;
	description: string;
	hidden?: boolean;
}

type Blog = {
	posts: Post[];
};

export const description: string =
	"Musings, walks, walkthroughs, and other things related to Mahesh.";

async function getPost(slug: string): Promise<Post | null> {
	const text = await Deno.readTextFile(join("markdown/blog", `${slug}.md`));
	const { attrs } = extract(text);
	return {
		slug,
		title: attrs.title as string,
		publishedAt: new Date(attrs.published_at as string),
		description: attrs.description as string,
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
	const posts = await Promise.all(promises) as Post[];
	posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
	return posts.filter((post) => !post.hidden);
}

function Post(props: { post: Post }) {
	const { post } = props;
	return (
		<li class="mb-8 ms-4">
			<div class="absolute w-3 h-3 bg-primary-200 rounded-full -start-1.5 border border-white dark:border-primary-900 dark:bg-primary-700">
			</div>

			<a class="relative -top-1.5" href={`/blog/${post.slug}`}>
				<time class="mb-1 text-sm font-normal leading-none text-primary-400 dark:text-primary-950">
					{new Intl.DateTimeFormat("en-GB", {
						dateStyle: "long",
						timeZone: "Europe/London",
					}).format(new Date(post.publishedAt))}
				</time>
				<h3 class="text-lg font-serif text-primary-300 dark:text-primary-700 transition-colors duration-300 hover:text-primary-600 hover:dark:text-primary-400">
					{post.title}
				</h3>
				<p class="mb-4 text-base font-normal text-text dark:text-textDark">
					{post.description}
				</p>
			</a>
		</li>
	);
}

export const handler: Handlers = {
	async GET(_req, ctx) {
		const posts = await getPosts();

		return defaultHandlerFunction<Blog>(
			_req,
			ctx,
			{
				title: "Blog",
				description,
				posts,
			},
		);
	},
};

export default function BlogIndexPage(props: PageProps<Blog>) {
	const { posts } = props.data;
	return (
		<>
			<ProseSection className="mb-8">
				<h1>Blog</h1>
				<p>
					<a href="/blog/rss.xml" class="inline-block">
						<IoLogoRss class="inline-block me-2" />
						RSS feed
					</a>
				</p>
			</ProseSection>
			<ol class="relative border-s border-primary-200 dark:border-primary-700 max-w-[80ch]">
				{posts.map((post) => <Post post={post} key={post.slug} />)}
			</ol>
		</>
	);
}
