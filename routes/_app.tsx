import { type PageProps } from "$fresh/server.ts";
import { HandlerData } from "@/utils/handler.ts";

const umamiScriptUrl = Deno.env.get("UMAMI_SCRIPT_URL");
const umamiSiteId = Deno.env.get("UMAMI_WEBSITE_ID");

export default function App(
	props: PageProps<HandlerData>,
) {
	const { Component, data = {} } = props;
	return (
		<html lang="en">
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				{data?.title
					? <title>{data.title} | Mahesh Makani</title>
					: <title>Mahesh Makani</title>}
				{data?.description
					? (
						<meta
							name="description"
							content={data.description}
						/>
					)
					: (
						<meta
							name="description"
							content="Hello! I'm Mahesh Makani, a software developer based in Hertfordshire and London, UK. I'm cruising the information superhighway and coding along the full stack across the way."
						/>
					)}
				<link rel="stylesheet" href="/styles.css" />
				<link
					rel="icon"
					type="image/png"
					href="/favicon-96x96.png"
					sizes="96x96"
				/>
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<meta name="apple-mobile-web-app-title" content="makani.dev" />
				<link rel="manifest" href="/site.webmanifest" />
				{props.route.startsWith("/blog")
					? (
						<link
							rel="alternate"
							type="application/rss+xml"
							title="Mahesh Makani's Blog RSS Feed"
							href="/blog/rss.xml"
						/>
					)
					: null}
				{umamiScriptUrl && umamiSiteId
					? (
						<script
							defer
							src={umamiScriptUrl}
							data-website-id={umamiSiteId}
						>
						</script>
					)
					: null}
			</head>
			<body>
				<Component />
			</body>
		</html>
	);
}
