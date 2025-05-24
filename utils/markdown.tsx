import { Handlers, PageProps } from "$fresh/server.ts";
import { extract } from "$std/front_matter/yaml.ts";
import { marked } from "npm:marked";
import { ProseSection } from "@/components/ProseSection.tsx";
import Error404 from "@/routes/_404.tsx";
import { HandlerData } from "./handler.ts";

interface Page {
	markdown: string;
	published_at?: string;
}

export const parseMarkdown = async (raw: string) => {
	return await marked.parse(raw, {
		async: true,
		gfm: true,
	});
};

// replace starting and trailing slashes with empty string
// to get a clean route which can be used as a filename
// for the markdown file
const cleanRoute = (route: string) => route.replace(/^\/|\/$/g, "");

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
