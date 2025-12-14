import { define } from "@/utils/utils.ts";
import { description, getPosts, Post } from "./index.tsx";

const formatToRFC822 = (date: Date): string => {
	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	const dayName = days[date.getUTCDay()];
	const day = date.getUTCDate().toString().padStart(2, "0");
	const month = months[date.getUTCMonth()];
	const year = date.getUTCFullYear();
	const hours = date.getUTCHours().toString().padStart(2, "0");
	const minutes = date.getUTCMinutes().toString().padStart(2, "0");
	const seconds = date.getUTCSeconds().toString().padStart(2, "0");

	const timezone = "+0000";

	return `${dayName}, ${day} ${month} ${year} ${hours}:${minutes}:${seconds} ${timezone}`;
};

const item = (post: Post) => `
    <item>
        <title>${post.title}</title>
        <link>https://makani.dev/blog/${post.slug}</link>
        <description>${post.description}</description>
        <pubDate>${formatToRFC822(post.publishedAt)}</pubDate>
        <guid>https://makani.dev/blog/${post.slug}</guid>
        <author>contact@makani.dev (Mahesh Makani)</author>
    </item>
`;

export const handler = define.handlers({
	async GET() {
		const title: string = "Blog | Mahesh Makani";
		const url: string = "https://makani.dev/blog";

		const posts = await getPosts();

		const rss: string = `
            <?xml version="1.0" encoding="UTF-8" ?>
            <rss version="2.0">
                <channel>
                    <title>${title}</title>
                    <link>${url}</link>
                    <description>${description}</description>
                    <language>en-gb</language>
                    <managingEditor>contact@makani.dev (Mahesh Makani)</managingEditor>
                    <pubDate>${
			formatToRFC822(
				posts[0]?.publishedAt || new Date(),
			)
		}</pubDate>
                    <lastBuildDate>${
			formatToRFC822(
				posts[0]?.publishedAt || new Date(),
			)
		}</lastBuildDate>
                    <copyright>Copyright © ${
			new Date().getFullYear()
		} Mahesh Makani</copyright>
                    <image>
                        <url>https://makani.dev/favicon-96x96.png</url>
                        <title>${title}</title>
                        <link>${url}</link>
                        <width>96</width>
                        <height>96</height>
                    </image>
                    <ttl>3600</ttl>
                    ${posts.map((post) => item(post)).join("\n")}
                </channel>
            </rss>
        `.trim();

		const headers = new Headers({
			"Cache-Control": `public, max-age=3600, s-maxage=86400`,
			"Content-Type": "application/xml",
		});

		return new Response(
			rss,
			{
				headers,
			},
		);
	},
});
