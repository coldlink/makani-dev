import { PageProps } from "$fresh/server.ts";
import MarkdownPage, { markdownHandler } from "@/utils/markdown.tsx";

export const handler = markdownHandler;
export default function BlogPost(props: PageProps) {
	return MarkdownPage(props);
}
