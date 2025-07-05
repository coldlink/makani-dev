import type { Album } from "@/routes/photos/(_utils)/albums.ts";

/**
 * Kyoto Wanders
 *
 * @type {Album}
 */
export const Kyoto: Album = {
	name: "Kyoto Wanders",
	slug: "kyoto-wanders",
	dates: "April 2024",
	description: `
My second trip to Kyoto after my first in 2018. However, it was my partner's first time in Japan, so while I repeated a few things, it was still great to spend a few days exploring the city and seeing things through a different lens.

This album is a selection of my favourites from the trip, including some of the temples, shrines, and other sights we visited. I also got to see some cats, which is always a bonus!	
	`,
	copyrightYear: "2024",
	photos: [
		{
			src: "20240414-3_87A0799-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "kyoto-mossy-inari",
		},
		{
			src: "20240414-3_87A0862-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "kyoto-fushimi-inari-portrait",
			noLicense: true,
		},
		{
			src: "20240413-2_87A0394-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "kyoto-temple-buddhas",
		},
		{
			src: "20240414-3_87A0819-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "kyoto-cat-2",
		},

		{
			src: "20240413-2_87A0583-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "kyoto-mt-hiei-view",
		},
		{
			src: "20240413-2_87A0590-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "kyoto-cat-1",
		},
		{
			src: "20240413-2_87A0599-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "kyoto-rail-infra",
		},
		{
			src: "20240414-3_87A0903-Pano.jpg",
			timezone: "Asia/Tokyo",
			slug: "kyoto-city-panorama",
			panorama: true,
		},
		{
			src: "20240415-3_87A1002-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "kyoto-philosopher-path",
		},
		{
			src: "20240415-3_87A1037-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "kyoto-single-train",
		},
		{
			src: "20240413-2_87A0388-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "kyoto-temple-path",
		},
		{
			src: "20240413-2_87A0658-Pano.jpg",
			timezone: "Asia/Tokyo",
			slug: "kyoto-kiyomizu-city-panorama",
			panorama: true,
		},
	],
};
