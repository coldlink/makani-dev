import { Handlers, PageProps } from "$fresh/server.ts";
import { extract } from "$std/front_matter/yaml.ts";
import { ProseSection } from "@/components/ProseSection.tsx";
import Error404 from "@/routes/_404.tsx";
import { HandlerData } from "./handler.ts";
import rehypeRaw from "npm:rehype-raw";
import rehypeStringify from "npm:rehype-stringify";
import remarkDirective from "npm:remark-directive";
import remarkGfm from "npm:remark-gfm";
import remarkParse from "npm:remark-parse";
import remarkRehype from "npm:remark-rehype";
import { unified } from "npm:unified";
import { visit } from "unist-util-visit";
import type { Root } from "npm:mdast";
import { fromHtml } from "hast-util-from-html";
import { getImagorUrl } from "./imagor.ts";
import { renderToString } from "$fresh/src/server/deps.ts";

interface Page {
	markdown: string;
	published_at?: string;
}

const mdYoutube = (id: string, alt: string) => {
	return renderToString(
		<>
			<iframe
				loading="lazy"
				class="youtube"
				src={`https://www.youtube.com/embed/${id}`}
				allow="picture-in-picture"
				allowFullScreen
				title={alt}
			/>
			<figcaption>{alt}</figcaption>
		</>,
	);
};

const mdPhoto = (src: string, alt: string, resolution?: string) => {
	const resize = (() => {
		if (resolution === "high") {
			return [2000, 1500];
		}

		if (resolution === "panorama") {
			return [3000, 1000];
		}

		return [1280, 1000];
	})();

	return renderToString(
		<>
			<picture>
				<source
					type="image/avif"
					srcset={`${
						getImagorUrl(
							`fit-in/${resize[0]}x${[
								resize[1],
							]}/filters:format(avif):quality(80)/${src}`,
						)
					}`}
				/>
				<source
					type="image/webp"
					srcset={`${
						getImagorUrl(
							`fit-in/${resize[0]}x${[
								resize[1],
							]}/filters:format(webp):quality(80)/${src}`,
						)
					}`}
				/>
				<img
					loading="lazy"
					class="w-auto max-h-[70dvh] rounded-lg border-2 border-transparent"
					src={`${
						getImagorUrl(
							`fit-in/${resize[0]}x${[
								resize[1],
							]}/filters:format(jpeg):quality(80)/${src}`,
						)
					}`}
					alt={alt}
					width={resize[0]}
					height={resize[1]}
				/>
			</picture>
			<figcaption>{alt}</figcaption>
		</>,
	);
};

const processor = unified()
	.use(remarkParse)
	.use(remarkDirective)
	.use(remarkGfm)
	.use(() => {
		return function (tree: Root, file) {
			visit(tree, function (node) {
				if (
					node.type === "containerDirective" ||
					node.type === "leafDirective" ||
					node.type === "textDirective"
				) {
					if (node.name === "youtube") {
						const data = node.data || (node.data = {});
						const attributes = node.attributes || {};

						const { id } = attributes;

						if (node.type === "textDirective") {
							file.fail(
								"Unexpected `:youtube` text directive, use two colons for a leaf directive",
								node,
							);
						}

						if (!id) {
							file.fail("Unexpected missing `id` on `youtube` directive", node);
						}

						const tree = fromHtml(
							mdYoutube(id as string, attributes.alt as string || ""),
							{ fragment: true },
						);
						data.hName = "figure";

						// deno-lint-ignore no-explicit-any
						data.hChildren = tree.children as any;
					}

					if (node.name === "photo") {
						const data = node.data || (node.data = {});
						const attributes = node.attributes || {};

						const { src, alt, resolution } = attributes;

						if (!src || !alt) {
							file.fail(
								"Unexpected missing `slug` or `src` on `photo` directive",
								node,
							);
						}

						const tree = fromHtml(
							mdPhoto(src as string, alt as string, resolution as string),
							{ fragment: true },
						);
						data.hName = "figure";

						// deno-lint-ignore no-explicit-any
						data.hChildren = tree.children as any;
					}
				}
			});
		};
	})
	.use(remarkRehype, { allowDangerousHtml: true })
	.use(rehypeRaw)
	.use(rehypeStringify);

// replace starting and trailing slashes with empty string
// to get a clean route which can be used as a filename
// for the markdown file
const cleanRoute = (route: string) => route.replace(/^\/|\/$/g, "");

export const parseMarkdown = async (raw: string) => {
	return (await (processor.process(raw))).value.toString();
};

export const markdownHandler: Handlers<HandlerData<Page>> = {
	async GET(_req, ctx) {
		try {
			const raw = await Deno.readTextFile(
				`markdown/${cleanRoute(ctx.url.pathname)}.md`,
			);

			const { attrs, body } = extract(raw);

			return ctx.render({
				markdown: await parseMarkdown(body),
				...attrs,
			});
		} catch (error) {
			console.error(error);
			return ctx.render(undefined);
		}
	},
};

export default function MarkdownPage({ data }: PageProps<HandlerData<Page>>) {
	if (!data) {
		return <Error404 />;
	}

	return (
		<>
			<ProseSection className={`${data.published_at ? "mb-4" : "mb-8"}`}>
				<h1>
					{data.title}
				</h1>
				{data.published_at && (
					<time class="text-xs">
						{new Intl.DateTimeFormat("en-GB", {
							dateStyle: "long",
							timeZone: "Europe/London",
						}).format(new Date(data.published_at))}
					</time>
				)}
			</ProseSection>
			<ProseSection
				dangerouslySetInnerHTML={{
					__html: data.markdown,
				}}
			/>
		</>
	);
}
