import ExifReader, { Tags } from "exifreader";
import { getImagorUrl } from "@/utils/imagor.ts";

/**
 * Photo
 *
 * @typedef {Object} Photo
 * @property {string} src - Name of the photo file as stored in s3.
 * @property {string} slug - URL slug of the photo.
 * @property {string} [timezone] - Timezone of the photo, if known, otherwise defaults to `Europe/London`. Based on https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 */
export type Photo = {
	src: string;
	slug: string;
	timezone?: "Europe/London" | "Asia/Tokyo";
};

/**
 * Album
 *
 * @typedef {Object} Album
 * @property {string} name - Name of the album.
 * @property {string} slug - URL slug of the album.
 * @property {Photo[]} photos - Array of photos in the album, order matters.
 * @property {string} [dates] - Date string to display for the album.
 * @property {string} copyrightYear - Year that the album is licensed.
 */
export type Album = {
	name: string;
	slug: string;
	photos: Photo[];
	dates?: string;
	copyrightYear?: string;
};

/**
 * Tokyo Skytree Vistas
 *
 * @type {Album}
 */
const TokyoSkytreeVistas: Album = {
	name: "Tokyo Skytree Vistas",
	slug: "tokyo-skytree-vistas",
	dates: "April 2024",
	copyrightYear: "2024",
	photos: [
		{
			src: "20240420-3_87A1791-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "skytree-rainbow",
		},
		{
			src: "20240425-3_87A2870-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "skytree-tokyo-bay",
		},
		{
			src: "20240425-3_87A2874-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "skytree-sports-school-1",
		},
		{
			src: "20240425-3_87A2876-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "skytree-sports-school-2",
		},
		{
			src: "20240425-3_87A2918-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "skytree-sunset-gradient",
		},
		{
			src: "20240425-3_87A2922-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "skytree-burnt-city",
		},
		{
			src: "20240425-3_87A2945-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "skytree-tokyo-tower-sunset",
		},
		{
			src: "20240425-3_87A2962-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "skytree-twilight-cityscape",
		},
		{
			src: "20240425-3_87A3002-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "skytree-azumabashi-asakusa-night",
		},
		{
			src: "20240425-3_87A3014-Enhanced-NR.jpg",
			timezone: "Asia/Tokyo",
			slug: "skytree-tower-night",
		},
	],
};

/**
 * @name ALBUMS
 * @description Array of all albums to display, order matters.
 * @type {Album[]}
 * @constant
 */
export const ALBUMS: Album[] = [
	TokyoSkytreeVistas,
];

/**
 * @name findAlbumFromSlug
 * @description Find an album from the url slug.
 * @param slug - URL slug of the album.
 * @returns {Album} - Album object if found, undefined otherwise.
 */
export const findAlbumFromSlug = (slug: string): Album | undefined => {
	return ALBUMS.find((album) => album.slug === slug);
};

/**
 * @name findPhotoInAlbum
 * @description Find a photo in an album from the photo src.
 * @param album - Album object to search.
 * @param slug - URL slug of the photo.
 * @returns {Photo} - Photo object if found, undefined otherwise.
 */
export const findPhotoInAlbum = (
	album: Album,
	slug: string,
): [Photo | undefined, number] => {
	const index = album.photos.findIndex((photo) => photo.slug === slug);
	return [album.photos[index], index];
};

/**
 * @name getPhotoExif
 * @description Get exif data for a photo.
 *
 * We're not using the imagor /meta functionality here as ExifReader
 * returns more detailed exif information.
 *
 * So we load a super small image, and then get the exif data from it.
 *
 * @param photo - Photo object to get exif for.
 * @returns {Promise<Tags>} - Metadata object. TODO: Validate this.
 */
export const getPhotoExif = async (photo: Photo): Promise<Tags> => {
	const tags = await ExifReader.load(getImagorUrl(
		`fit-in/1x1/${photo.src}`,
	));

	return tags;
};