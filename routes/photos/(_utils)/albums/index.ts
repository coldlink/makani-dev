import { Album } from "@/routes/photos/(_utils)/albums.ts";
import { IzuPeninsula } from "@/routes/photos/(_utils)/albums/izu.ts";
import { Kyoto } from "@/routes/photos/(_utils)/albums/kyoto.ts";
import { TokyoSkytreeVistas } from "@/routes/photos/(_utils)/albums/skytree.ts";
import { TokyoDay } from "@/routes/photos/(_utils)/albums/tokyo-day.ts";
import { TokyoNight } from "@/routes/photos/(_utils)/albums/tokyo-night.ts";
import { BirdsOfJapan } from "@/routes/photos/(_utils)/albums/birds-japan.ts";
import { MtFuji } from "@/routes/photos/(_utils)/albums/mt-fuji.ts";
import { TeamLabBorderless } from "@/routes/photos/(_utils)/albums/teamlab-borderless.ts";
import { KewMarch24 } from "@/routes/photos/(_utils)/albums/kew-march-24.ts";

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
	TeamLabBorderless,
	BirdsOfJapan,
	MtFuji,
	KewMarch24,
];
