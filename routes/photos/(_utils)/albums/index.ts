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
import { WildLife } from "@/routes/photos/(_utils)/albums/wildlife.ts";
import { Edinburgh24 } from "@/routes/photos/(_utils)/albums/edinburgh-24.ts";
import { KewOct23 } from "@/routes/photos/(_utils)/albums/kew-oct-23.ts";
import { Miscellaneous } from "@/routes/photos/(_utils)/albums/miscellaneous.ts";
import { Daily2025 } from "@/routes/photos/(_utils)/albums/2025.ts";
import { BemptonCliffs } from "@/routes/photos/(_utils)/albums/bempton-cliffs.ts";
import { Glastonbury25 } from "@/routes/photos/(_utils)/albums/glastonbury-25.ts";
import { OlympusFilm } from "./olympus-film.ts";

/**
 * @name ALBUMS
 * @description Array of all albums to display, order matters.
 * @type {Album[]}
 * @constant
 */
export const ALBUMS: Album[] = [
	Daily2025,
	OlympusFilm,
	Glastonbury25,
	BemptonCliffs,
	WildLife,
	Miscellaneous,
	Edinburgh24,
	IzuPeninsula,
	TokyoSkytreeVistas,
	Kyoto,
	TokyoDay,
	TokyoNight,
	TeamLabBorderless,
	BirdsOfJapan,
	MtFuji,
	KewMarch24,
	KewOct23,
];
