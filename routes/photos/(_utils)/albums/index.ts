import { Album } from "@/routes/photos/(_utils)/albums.ts";
import { IzuPeninsula } from "@/routes/photos/(_utils)/albums/izu.ts";
import { Kyoto } from "@/routes/photos/(_utils)/albums/kyoto.ts";
import { TokyoSkytreeVistas } from "@/routes/photos/(_utils)/albums/skytree.ts";
import { TokyoDay } from "@/routes/photos/(_utils)/albums/tokyo-day.ts";
import { TokyoNight } from "@/routes/photos/(_utils)/albums/tokyo-night.ts";
import { BirdsOfJapan } from "@/routes/photos/(_utils)/albums/birds-japan.ts";
import { MtFuji } from "@/routes/photos/(_utils)/albums/mt-fuji.ts";

/**
 * @name ALBUMS
 * @description Array of all albums to display, order matters.
 * @type {Album[]}
 * @constant
 */
export const ALBUMS: Album[] = [
	IzuPeninsula,
	TokyoSkytreeVistas,
	Kyoto,
	TokyoDay,
	TokyoNight,
	BirdsOfJapan,
	MtFuji,
];
