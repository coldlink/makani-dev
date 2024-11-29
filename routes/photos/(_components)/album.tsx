import { getImagorUrl } from "@/utils/imagor.ts";
import { Album as AlbumT } from "@/routes/photos/(_utils)/albums.ts";

/**
 * Album component as shown on the /photos page
 */
export const Album = ({
	album,
}: {
	album: AlbumT;
}) => {
	// metadata for the album
	const { name, slug, dates, photos } = album;

	// number of photos in the album
	const photoCount = photos.length;

	// randomly select a photo from the album to use as the cover
	const imageCover = photos[Math.floor(Math.random() * photos.length)].src;

	return (
		<div class="max-w-sm rounded-lg hover:shadow-lg transition-shadow duration-200 bg-stone-200 dark:bg-stone-700">
			<a href={`/photos/${slug}`}>
				<picture>
					{/* AVIF format */}
					<source
						type="image/avif"
						media="(max-width: 639px)"
						srcSet={getImagorUrl(
							`300x200/filters:format(avif):quality(80)/${imageCover}`,
						)}
						width={300}
						height={200}
					/>
					<source
						type="image/avif"
						media="(min-width: 640px)"
						srcSet={getImagorUrl(
							`390x260/filters:format(avif):quality(80)/${imageCover}`,
						)}
						width={390}
						height={260}
					/>

					{/* WEBP format */}
					<source
						type="image/webp"
						media="(max-width: 639px)"
						srcSet={getImagorUrl(
							`300x200/filters:format(webp):quality(80)/${imageCover}`,
						)}
						width={300}
						height={200}
					/>
					<source
						type="image/webp"
						media="(min-width: 640px)"
						srcSet={getImagorUrl(
							`390x260/filters:format(webp):quality(80)/${imageCover}`,
						)}
						width={390}
						height={260}
					/>

					{/* Default JPEG format (fallback) */}
					<img
						class="h-auto max-w-full rounded-t-lg"
						src={getImagorUrl(
							`390x260/filters:format(avif):quality(80)/${imageCover}`,
						)}
						width={390}
						height={260}
						alt={`Cover photo for the album ${name}`}
					/>
				</picture>
				<div class="p-2">
					<h4 class="text-xl tracking-tight text-stone-900 dark:text-stone-100">
						{name}
					</h4>
					{dates && (
						<p class="font-normal text-stone-700 dark:text-stone-300">
							{dates}
						</p>
					)}
					<p class="font-normal text-stone-700 dark:text-stone-300">
						{photoCount} photos
					</p>
				</div>
			</a>
		</div>
	);
};
