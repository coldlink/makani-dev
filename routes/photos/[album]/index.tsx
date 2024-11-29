import { PageProps } from "$fresh/server.ts";
import { Album, findAlbumFromSlug } from "@/routes/photos/(_utils)/albums.ts";
import Error404 from "@/routes/_404.tsx";
import { getImagorUrl } from "@/utils/imagor.ts";
import { Breadcrumb } from "@/routes/photos/(_components)/breadcrumb.tsx";
import { License } from "@/routes/photos/(_components)/license.tsx";

const Gallery = ({
	album,
}: {
	album: Album;
}) => {
	return (
		<div class="columns-2 md:columns-3 lg:columns-4 gap-4">
			{album.photos.map((photo, i) => (
				<a href={`/photos/${album.slug}/${photo.slug}`} class="group">
					<picture key={i}>
						{/* AVIF format */}
						<source
							type="image/avif"
							media="(max-width: 767px)"
							srcSet={getImagorUrl(
								`fit-in/360x540/filters:format(avif):quality(80)/${photo.src}`,
							)}
						/>
						<source
							type="image/avif"
							media="(max-width: 1023px)"
							srcSet={getImagorUrl(
								`fit-in/330x495/filters:format(avif):quality(80)/${photo.src}`,
							)}
						/>
						<source
							type="image/avif"
							media="(min-width: 1024px)"
							srcSet={getImagorUrl(
								`fit-in/300x450/filters:format(avif):quality(80)/${photo.src}`,
							)}
						/>

						{/* WEBP format */}
						<source
							type="image/webp"
							media="(max-width: 767px)"
							srcSet={getImagorUrl(
								`fit-in/360x540/filters:format(webp):quality(80)/${photo.src}`,
							)}
						/>
						<source
							type="image/webp"
							media="(max-width: 1023px)"
							srcSet={getImagorUrl(
								`fit-in/330x495/filters:format(webp):quality(80)/${photo.src}`,
							)}
						/>
						<source
							type="image/webp"
							media="(min-width: 1024px)"
							srcSet={getImagorUrl(
								`fit-in/300x450/filters:format(webp):quality(80)/${photo.src}`,
							)}
						/>

						{/* Default JPEG format (fallback) */}
						<img
							class="h-auto max-w-full rounded-lg mb-4 hover:shadow-lg transition-shadow duration-200"
							src={getImagorUrl(
								`fit-in/360x540/filters:format(avif):quality(80)/${photo.src}`,
							)}
							alt={photo.src}
						/>
					</picture>
				</a>
			))}
		</div>
	);
};

export default function PhotoAlbum(props: PageProps) {
	const album = findAlbumFromSlug(props.params.album);

	if (!album) {
		return <Error404 />;
	}

	return (
		<>
			<Breadcrumb
				album={album}
			/>
			<Gallery album={album} />
			<License year={album.copyrightYear} />
		</>
	);
}
