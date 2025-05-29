import { Handlers, PageProps } from "$fresh/server.ts";
import { Album, findAlbumFromSlug } from "@/routes/photos/(_utils)/albums.ts";
import Error404 from "@/routes/_404.tsx";
import { getImagorUrl } from "@/utils/imagor.ts";
import { Breadcrumb } from "@/routes/photos/(_components)/breadcrumb.tsx";
import { License } from "@/routes/photos/(_components)/license.tsx";
import { defaultHandlerFunction, HandlerData } from "@/utils/handler.ts";
import { ProseSection } from "@/components/ProseSection.tsx";
import { parseMarkdown } from "@/utils/markdown.tsx";

type DataAlbum = {
	album: Album | undefined;
	markdownDescription?: string;
};

const Gallery = ({
	album,
}: {
	album: Album;
}) => {
	return (
		<div class="columns-1 sm:columns-2 md:columns-3 gap-4">
			{album.photos.map((photo, i) => (
				<a href={`/photos/${album.slug}/${photo.slug}`} class="group">
					<picture key={i}>
						{/* AVIF format */}
						<source
							type="image/avif"
							srcSet={getImagorUrl(
								`fit-in/540x540/filters:format(avif):quality(80)/${photo.src}`,
							)}
						/>

						{/* WEBP format */}
						<source
							type="image/webp"
							srcSet={getImagorUrl(
								`fit-in/540x540/filters:format(webp):quality(80)/${photo.src}`,
							)}
						/>

						{/* Default JPEG format (fallback) */}
						<img
							loading="lazy"
							class="h-auto max-w-full rounded-lg mb-4 hover:shadow-lg border-2 border-transparent hover:border-primary-400 dark:hover:border-primary-600"
							src={getImagorUrl(
								`fit-in/540x540/filters:format(jpeg):quality(80)/${photo.src}`,
							)}
							alt={photo.src}
							width={540}
							height={540}
						/>
					</picture>
				</a>
			))}
		</div>
	);
};

export const handler: Handlers = {
	async GET(_req, ctx) {
		const album = findAlbumFromSlug(ctx.params.album);

		const markdownDescription = album?.description &&
			await parseMarkdown(
				`### ${album.name}\n\n_${
					album.dates ? `${album.dates} / ` : ""
				}${album.photos.length} photos_\n\n${album.description}`,
			);

		return defaultHandlerFunction<DataAlbum>(
			_req,
			ctx,
			{
				title: `${album?.name} | Photography`,
				description:
					`Photos from the ${album?.name} album. A collection of photos taken by myself, all licensed under CC BY-NC-SA 4.0 unless otherwise stated.`,
				album,
				markdownDescription,
			},
		);
	},
};
export default function PhotoAlbum(props: PageProps<HandlerData<DataAlbum>>) {
	const album = props.data.album;

	if (!album) {
		return <Error404 />;
	}

	return (
		<>
			<Breadcrumb
				album={album}
			/>
			{props.data.markdownDescription && (
				<ProseSection
					className="mb-6 prose-sm sm:prose-base prose-p:mt-3 prose-p:mb-3 prose-ul:mb-3 prose-ul:mt-3"
					dangerouslySetInnerHTML={{
						__html: props.data.markdownDescription,
					}}
				/>
			)}
			<Gallery album={album} />
			<License year={album.copyrightYear} />
		</>
	);
}
