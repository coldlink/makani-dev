import type { Album } from "@/routes/photos/(_utils)/albums.ts";

/**
 * Many sights of Mount Fuji
 *
 * @type {Album}
 */
export const MtFuji: Album = {
	name: "Mount Fuji Views",
	slug: "mt-fuji",
	dates: "April 2024",
	description: `
In 2018, I visited Mount Fuji for the first time, but it was shrouded in clouds, and was unable to even get a glimpse at it. This time, I was determined to get some clear views of Japan's iconic peak, and how I did succeed!

Hokusai may have done ["Thirty-six Views of Mount Fuji"](https://en.wikipedia.org/wiki/Thirty-six_Views_of_Mount_Fuji), but heres my own "Seven Views of Mount Fuji" from my visit.
	`,
	copyrightYear: "2024",
	photos: [
		{
			src: "20240411-1_87A9877-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "mt-fuji-1",
		},
		{
			src: "20240411-1_87A9883-Enhanced-NR-2.jpg",
			timezone: "Asia/Tokyo",
			slug: "mt-fuji-2",
		},
		{
			src: "20240411-1_87A9914-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "mt-fuji-3",
		},
		{
			src: "20240411-2_87A0063-Enhanced-NR-2.jpg",
			timezone: "Asia/Tokyo",
			slug: "mt-fuji-4",
		},
		{
			src: "20240411-2_87A0073-Enhanced-NR-2.jpg",
			timezone: "Asia/Tokyo",
			slug: "mt-fuji-5",
		},
		{
			src: "20240411-2_87A0162-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "mt-fuji-6",
		},
		{
			src: "20240411-2_87A0290-Enhanced-NR-2.jpg",
			timezone: "Asia/Tokyo",
			slug: "mt-fuji-7",
		},
	],
};
