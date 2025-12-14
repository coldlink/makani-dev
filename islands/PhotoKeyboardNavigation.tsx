// deno-lint-ignore-file jsx-no-useless-fragment
import type { Album } from "@/routes/photos/(_utils)/albums.ts";
import type { PhotoIndex } from "@/routes/photos/[album]/[photo].tsx";
import { IS_BROWSER } from "fresh/runtime";

interface PhotoKeyboardNavigationProps {
	album: Album;
	photoIndex: PhotoIndex;
}

export default function PhotoKeyboardNavigation(
	{ album, photoIndex }: PhotoKeyboardNavigationProps,
) {
	if (!IS_BROWSER) {
		return <></>;
	}

	document.addEventListener("keydown", function (event) {
		if (event.key === "Escape") {
			const lighboxOpen = this.location.hash.includes("lightbox");

			if (lighboxOpen) {
				this.location.hash = "";
			}
		}

		if (event.key === "ArrowLeft" && photoIndex.prev !== -1) {
			this.location.href = `/photos/${album.slug}/${
				album.photos[photoIndex.prev].slug
			}`;
		}

		if (event.key === "ArrowRight" && photoIndex.next !== -1) {
			this.location.href = `/photos/${album.slug}/${
				album.photos[photoIndex.next].slug
			}`;
		}

		if (event.key === "Backspace") {
			this.location.href = `/photos/${album.slug}`;
		}
	});

	return <></>;
}
