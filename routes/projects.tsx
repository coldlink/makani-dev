import MarkdownPage, {
	markdownHandler,
	type MarkdownPageProps,
} from "@/utils/markdown.tsx";

export const handler = markdownHandler;
export default function Projects(props: MarkdownPageProps) {
	return MarkdownPage(props);
}
