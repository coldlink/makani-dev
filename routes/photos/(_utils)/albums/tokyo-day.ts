import type { Album } from "@/routes/photos/(_utils)/albums.ts";

/**
 * Tokyo Day Vibes
 *
 * @type {Album}
 */
export const TokyoDay: Album = {
	name: "Tokyo Day Vibes",
	slug: "tokyo-day-vibes",
	dates: "April 2024",
	description: `
A collection of photos capturing a snapshot of the vibes of Tokyo during the daytime.
	`,
	copyrightYear: "2024",
	photos: [
		{
			src: "20240420-3_87A1612-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "tokyo-station-sketch",
			noLicense: true,
		},
		{
			src: "20240425-3_87A2833-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "tokyo-construction",
		},
		{
			src: "20240418-3_87A1386-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "tokyo-peter-pan-camera",
			noLicense: true,
		},
		{
			src: "20240418-3_87A1508-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "tokyo-disney-teens",
			noLicense: true,
		},
		{
			src: "20240425-3_87A2760-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "tokyo-hamarikyuu-gardens-man",
		},
		{
			src: "20240420-3_87A1697-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "tokyo-skytree-ueno-park",
		},
		{
			src: "20240425-3_87A2785-Pano.jpg",
			timezone: "Asia/Tokyo",
			slug: "tokyo-hamarikyuu-gardens-pano",
			panorama: true,
		},
		{
			src: "20240426-3_87A3051-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "tokyo-kanda-river",
		},
		{
			src: "20240426-3_87A3076-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "tokyo-walking-sumida",
			noLicense: true,
		},
		{
			src: "20240408-0_87A9513-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "tokyo-row-blossoms",
			noLicense: true,
		},
	],
};
