import { Album, findAlbumFromSlug } from "../(_utils)/albums.ts";
import { getImagorUrl } from "@/utils/imagor.ts";
import { define } from "@/utils/utils.ts";
import { parseMarkdown } from "@/utils/markdown.tsx";
import { HttpError, page } from "fresh";
import { Breadcrumb } from "../(_components)/Breadcrumb.tsx";
import { License } from "../(_components)/License.tsx";
import { ProseSection } from "@/components/ProseSection.tsx";
import { Head } from "@/components/Head.tsx";

type DataAlbum = {
	album: Album | undefined;
	markdownDescription?: string;
};

const Gallery = ({ album }: { album: Album }) => {
	return (
		<div class="columns-1 sm:columns-2 md:columns-3 gap-4">
			{album.photos.map((photo, i) => (
				<a href={`/photos/${album.slug}/${photo.slug}`} class="group">
					<picture key={i}>
						{/* AVIF format */}
						<source
							type="image/avif"
							srcSet={getImagorUrl(
								`fit-in/540x540/filters:format(avif):quality(80)/${photo.src}`
							)}
						/>

						{/* WEBP format */}
						<source
							type="image/webp"
							srcSet={getImagorUrl(
								`fit-in/540x540/filters:format(webp):quality(80)/${photo.src}`
							)}
						/>

						{/* Default JPEG format (fallback) */}
						<img
							loading="lazy"
							class="h-auto max-w-full rounded-lg mb-4 hover:shadow-lg border-2 border-transparent hover:border-primary-400 dark:hover:border-primary-600"
							src={getImagorUrl(
								`fit-in/540x540/filters:format(jpeg):quality(80)/${photo.src}`
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

export const handler = define.handlers({
	async GET(ctx) {
		const album = findAlbumFromSlug(ctx.params.album);

		const markdownDescription =
			album?.description &&
			(await parseMarkdown(
				`### ${album.name}\n\n_${album.dates ? `${album.dates} / ` : ""}${
					album.photos.length
				} photos_\n\n${album.description}`
			));

		return page<DataAlbum>({
			album,
			markdownDescription,
		});
	},
});

export default define.page<typeof handler>(function PhotoAlbum(ctx) {
	const { album, markdownDescription } = ctx.data;

	if (!album) {
		throw new HttpError(404);
	}

	return (
		<>
			<Head
				title={`${album?.name} | Photography`}
				description={`Photos from the ${album?.name} album. A collection of photos taken by myself, all licensed under CC BY-NC-SA 4.0 unless otherwise stated.`}
			/>
			<Breadcrumb album={album} />
			{markdownDescription && (
				<ProseSection
					className="mb-6 prose-sm sm:prose-base prose-p:mt-3 prose-p:mb-3 prose-ul:mb-3 prose-ul:mt-3"
					dangerouslySetInnerHTML={{
						__html: markdownDescription,
					}}
				/>
			)}
			<Gallery album={album} />
			<License year={album.copyrightYear} />
		</>
	);
});
