import { Handlers, PageProps } from "$fresh/server.ts";
import { extract } from "$std/front_matter/yaml.ts";
import { Head } from "$fresh/runtime.ts";
import { marked } from "npm:marked";
import { ProseSection } from "@/components/ProseSection.tsx";
import Error404 from "@/routes/_404.tsx";

interface Page {
	markdown: string;
	data: Record<string, unknown>;
}

// replace starting and trailing slashes with empty string
// and replace any other slashes with a dash
// to get a clean route which can be used as a filename
// for the markdown file
const cleanRoute = (route: string) =>
	route.replace(/^\/|\/$/g, "").replace(/\//g, "-");

export const markdownHandler: Handlers<Page> = {
	async GET(_req, ctx) {
		try {
			const raw = await Deno.readTextFile(
				`markdown/${cleanRoute(ctx.route)}.md`,
			);

			const { attrs, body } = extract(raw);

			return ctx.render({
				markdown: await marked.parse(body, {
					async: true,
					gfm: true,
				}),
				data: attrs,
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
		<>
			<Head>
				<title>{data.data.title as string} | Mahesh Makani</title>
				<meta
					name="description"
					content={data.data.description as string}
				/>
			</Head>
			<ProseSection
				dangerouslySetInnerHTML={{
					__html: data.markdown,
				}}
			/>
		</>
	);
}
