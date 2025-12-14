import { Head as FreshHead } from "fresh/runtime";
import { State } from "@/utils/utils.ts";

export function Head({ title, description }: State) {
	return (
		<FreshHead>
			{title
				? <title>{title} | Mahesh Makani</title>
				: <title>Mahesh Makani | Software Developer</title>}
			{description ? <meta name="description" content={description} /> : (
				<meta
					name="description"
					content="Hello! I'm Mahesh Makani, a software developer based in Hertfordshire and London, UK. I'm cruising the information superhighway and coding along the full stack across the way."
				/>
			)}
		</FreshHead>
	);
}
