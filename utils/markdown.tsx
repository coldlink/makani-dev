import { Handlers, PageProps } from "$fresh/server.ts";
import { extract } from "$std/front_matter/yaml.ts";
import { marked } from "npm:marked";
import { ProseSection } from "@/components/ProseSection.tsx";
import Error404 from "@/routes/_404.tsx";
import { HandlerData } from "./handler.ts";

interface Page {
	markdown: string;
}

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
				markdown: await marked.parse(body, {
					async: true,
					gfm: true,
				}),
				...attrs,
			});
		} catch (error) {
			console.error(error);
			return ctx.render(undefined);
		}
	},
};

export default function MarkdownPage({ data }: PageProps<Page | null>) {
	if (!data) {
		return <Error404 />;
	}

	return (
		<ProseSection
			dangerouslySetInnerHTML={{
				__html: data.markdown,
			}}
		/>
	);
}
