import type { Album } from "@/routes/photos/(_utils)/albums.ts";

/**
 * Birds of Japan
 *
 * @type {Album}
 */
export const BirdsOfJapan: Album = {
	name: "Birds of Japan",
	slug: "birds-japan",
	dates: "April 2024",
	description: `
Photos of various birds taken in Japan during my trip there in April 2024.

Featuring heron after noods, black kites, japanese white wagtail, white cheeked starling, brown eared bulbul, little grebe in blossom, sparrow butts.
	`,
	copyrightYear: "2024",
	photos: [
		{
			src: "20240415-3_87A1072-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "bird-japan-heron-noodles",
		},
		{
			src: "20240408-0_87A9665-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "bird-japan-little-grebe",
		},
		{
			src: "20240411-2_87A0110-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "bird-japan-black-kite-1",
		},
		{
			src: "20240413-2_87A0633-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "bird-japan-black-kite-2",
		},
		{
			src: "20240418-3_87A1204-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "bird-japan-brown-eared-bulbul",
		},
		{
			src: "20240413-2_87A0521-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "bird-japan-varied-tit",
		},
		{
			src: "20240413-2_87A0724-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "bird-japan-sparrow-butt",
		},
		{
			src: "20240415-3_87A1076-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "bird-japan-heron-closeup",
		},
		{
			src: "20240420-3_87A1636-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "bird-japan-sparrow-grass",
		},
		{
			src: "20240420-3_87A1731-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "bird-japan-white-cheeked-starling",
		},
		{
			src: "20240423-3_87A2728-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "bird-japan-white-wagtail",
		},
		{
			src: "20240411-2_87A0093-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "bird-japan-sparrow-reed",
		},
	],
};
