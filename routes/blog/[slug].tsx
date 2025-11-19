import MarkdownPage, {
	markdownHandler,
	type MarkdownPageProps,
} from "@/utils/markdown.tsx";

export const handler = markdownHandler;
export default function BlogPost(props: MarkdownPageProps) {
	return MarkdownPage(props);
}
