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

export const markdownHandler: Handlers<Page> = {
    async GET(_req, ctx) {
        try {
            const raw = await Deno.readTextFile(
                `routes/(markdown)/${ctx.params.slug}.md`,
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
            <ProseSection>
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.markdown,
                    }}
                />
            </ProseSection>
        </>
    );
}
