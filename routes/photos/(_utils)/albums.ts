import ExifReader, { Tags } from "exifreader";
import { getImagorUrl } from "@/utils/imagor.ts";
import { ALBUMS } from "@/routes/photos/(_utils)/albums/index.ts";

/**
 * Photo
 *
 * @typedef {Object} Photo
 * @property {string} src - Name of the photo file as stored in s3.
 * @property {string} slug - URL slug of the photo.
 * @property {string} [timezone] - Timezone of the photo, if known, otherwise defaults to `Europe/London`. Based on https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 * @property {boolean} [noLicense] - If true, the photo is not licensed under CC BY-NC-SA 4.0.
 */
export type Photo = {
	src: string;
	slug: string;
	timezone?:
		| "Europe/Amsterdam"
		| "Europe/London"
		| "Asia/Tokyo"
		| "+01:00"; // used to manually fix timezone where the camera was set to the wrong timezone
	noLicense?: boolean;
};

/**
 * Album
 *
 * @typedef {Object} Album
 * @property {string} name - Name of the album.
 * @property {string} slug - URL slug of the album.
 * @property {Photo[]} photos - Array of photos in the album, order matters.
 * @property {string} [description] - Description of the album.
 * @property {string} [dates] - Date string to display for the album.
 * @property {string} copyrightYear - Year that the album is licensed.
 */
export type Album = {
	name: string;
	slug: string;
	photos: Photo[];
	description?: string; // make this optional until all albums have descriptions
	dates?: string;
	copyrightYear?: string;
};

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
	const tags = await ExifReader.load(
		getImagorUrl(
			`fit-in/1x1/${photo.src}`,
		),
		{
			includeUnknown: true,
		},
	);

	return tags;
};
