import { Head } from "@/components/Head.tsx";
import { ProseSection } from "@/components/ProseSection.tsx";
import { define } from "@/utils/utils.ts";
import { page } from "fresh";
import { join } from "@std/path/join";
import { extract } from "@std/front-matter/yaml";

export interface TrackerPost {
	slug: string;
	title: string;
	description: string;
}

type TrackerIndex = {
	posts: TrackerPost[];
};

async function getPage(slug: string): Promise<TrackerPost | null> {
	const text = await Deno.readTextFile(join("markdown/tracker", `${slug}.md`));
	const { attrs } = extract<TrackerPost>(text);
	return {
		slug,
		title: attrs.title as string,
		description: attrs.description as string,
	};
}

async function getPages(): Promise<TrackerPost[]> {
	const files = Deno.readDir("markdown/tracker");
	const promises = [];
	for await (const file of files) {
		const slug = file.name.replace(".md", "");
		promises.push(getPage(slug));
	}
	const posts = (await Promise.all(promises)) as TrackerPost[];
	posts.sort((a, b) => (b.slug > a.slug ? 1 : -1));
	return posts;
}

export const handler = define.handlers({
	async GET() {
		const posts = await getPages();

		return page<TrackerIndex>({
			posts,
		});
	},
});

export default define.page<typeof handler>(function TrackerIndexPage(ctx) {
	const { posts } = ctx.data;
	return (
		<>
			<Head title="Tracker" description="Personal tracker and updates" />
			<ProseSection className="mb-8">
				<h1>Tracker</h1>
			</ProseSection>
			<ol class="relative border-s border-primary-200 dark:border-primary-700 max-w-[80ch]">
				{posts.map((post) => (
					<li class="mb-10 ml-4">
						<div class="absolute w-3 h-3 bg-primary-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-primary-900 dark:bg-primary-700">
						</div>
						<a
							href={`/tracker/${post.slug}`}
							class="mb-1 text-lg font-serif text-primary-300 dark:text-primary-700 transition-colors duration-300 hover:text-primary-600 hover:dark:text-primary-400"
						>
							{post.title}
						</a>
						<p class="text-base font-normal text-text dark:text-text-dark">
							{post.description}
						</p>
					</li>
				))}
			</ol>
		</>
	);
});
