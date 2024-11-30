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
		<a
			href={`/photos/${slug}`}
			class="max-w-sm mx-auto relative rounded-lg hover:shadow-lg border-2 border-transparent hover:border-stone-400 dark:hover:border-stone-600"
		>
			<picture class="max-w-full h-auto object-cover rounded-lg">
				{/* AVIF format */}
				<source
					type="image/avif"
					media="(max-width: 639px)"
					srcSet={getImagorUrl(
						`300x300/filters:format(avif):quality(80)/${imageCover}`,
					)}
					width={300}
					height={200}
				/>
				<source
					type="image/avif"
					media="(min-width: 640px)"
					srcSet={getImagorUrl(
						`400x400/filters:format(avif):quality(80)/${imageCover}`,
					)}
					width={390}
					height={260}
				/>

				{/* WEBP format */}
				<source
					type="image/webp"
					media="(max-width: 639px)"
					srcSet={getImagorUrl(
						`300x300/filters:format(webp):quality(80)/${imageCover}`,
					)}
					width={300}
					height={200}
				/>
				<source
					type="image/webp"
					media="(min-width: 640px)"
					srcSet={getImagorUrl(
						`400x400/filters:format(webp):quality(80)/${imageCover}`,
					)}
					width={390}
					height={260}
				/>

				{/* Default JPEG format (fallback) */}
				<img
					class="h-auto max-w-full rounded-lg object-cover"
					src={getImagorUrl(
						`400x400/filters:format(avif):quality(80)/${imageCover}`,
					)}
					width={390}
					height={260}
					alt={`Cover photo for the album ${name}`}
				/>
			</picture>

			<div class="absolute bottom-0 left-0 right-0 h-20 bg-stone-50/50 dark:bg-stone-950/50 backdrop-blur text-white p-2 rounded-b-lg">
				<h4 class="text-l tracking-tight text-stone-900 dark:text-stone-100">
					{name}
				</h4>
				{dates && (
					<p class="text-sm text-stone-700 dark:text-stone-300">
						{dates}
					</p>
				)}
				<p class="text-sm text-stone-700 dark:text-stone-300">
					{photoCount} photos
				</p>
			</div>
		</a>
	);
};
