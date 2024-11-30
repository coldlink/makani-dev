import {
	findAlbumFromSlug,
	findPhotoInAlbum,
	getPhotoExif,
} from "@/routes/photos/(_utils)/albums.ts";
import { RouteContext } from "$fresh/src/server/types.ts";
import Error404 from "@/routes/_404.tsx";
import { Breadcrumb } from "@/routes/photos/(_components)/breadcrumb.tsx";
import { getImagorUrl } from "@/utils/imagor.ts";
import {
	IoChevronBackCircle,
	IoChevronForwardCircle,
	IoReturnDownBack,
} from "react-icons/io5";
import { License } from "@/routes/photos/(_components)/license.tsx";

/**
 * @name PhotoPage
 * @description Photo page component.
 */
export default async function PhotoPage(_: Request, ctx: RouteContext) {
	const album = findAlbumFromSlug(ctx.params.album);

	if (!album) {
		return <Error404 />;
	}

	const [photo, photoIndex] = findPhotoInAlbum(album, ctx.params.photo);

	if (!photo) {
		return <Error404 />;
	}

	const exif = await getPhotoExif(photo);

	const nextPhotoIndex = photoIndex !== album.photos.length - 1
		? photoIndex + 1
		: -1;
	const prevPhotoIndex = photoIndex !== 0 ? photoIndex - 1 : -1;

	const date = new Date(exif.DateCreated?.description!);

	return (
		<>
			<Breadcrumb
				album={album}
				photo={photo}
			/>
			<section class="grid grid-cols-4 md:grid-cols-6 gap-1">
				{exif.DateCreated && (
					<div class="col-start-1 col-span-3 md:col-span-5 text-xs italic text-start text-stone-600 dark:text-stone-400">
						{new Intl.DateTimeFormat("en-GB", {
							dateStyle: "full",
							timeStyle: "short",
							timeZone: photo.timezone || "Europe/London",
						}).format(date)}
					</div>
				)}
				{exif.GPSLatitude && exif.GPSLongitude && (
					<div class="col-start-4 md:col-start-6 col-span-1 text-xs italic underline text-end text-stone-600 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300">
						<a
							href={`https://www.google.com/maps/place/${
								(+exif.GPSLatitude.description).toFixed(3)
							},${(+exif.GPSLongitude.description).toFixed(3)}`}
							target="_blank"
						>
							Location
						</a>
					</div>
				)}
				<div class="col-span-2 md:col-start-1 md:col-span-1 text-xs text-start italic text-stone-600 dark:text-stone-400">
					{exif.Model?.description}
				</div>
				<div class="col-span-2 md:col-span-1 text-xs italic text-end md:text-center text-stone-600 dark:text-stone-400">
					{exif.LensModel?.description}
				</div>
				<div class="col-span-1 text-xs italic text-start md:text-center text-stone-600 dark:text-stone-400">
					{exif.FocalLength?.description}
				</div>
				<div class="col-span-1 text-xs italic text-center text-stone-600 dark:text-stone-400">
					{exif.FNumber?.description}
				</div>
				<div class="col-span-1 text-xs italic text-center text-stone-600 dark:text-stone-400">
					{exif.ShutterSpeedValue?.description}s
				</div>
				<div class="col-span-1 text-xs italic text-end text-stone-600 dark:text-stone-400">
					ISO {exif.ISOSpeedRatings?.description}
				</div>
				<a
					href="#lightbox"
					class="col-span-full"
					alt="open lightbox"
					aria-label="open lightbox"
				>
					<picture>
						{/* AVIF format */}
						<source
							type="image/avif"
							srcSet={getImagorUrl(
								`fit-in/2000x2000/filters:format(avif):quality(80)/${photo.src}`,
							)}
						/>

						{/* WEBP format */}
						<source
							type="image/webp"
							srcSet={getImagorUrl(
								`fit-in/2000x2000/filters:format(webp):quality(80)/${photo.src}`,
							)}
						/>

						{/* Default JPEG format (fallback) */}
						<img
							class="max-h-full max-w-full rounded-lg border-2 border-transparent hover:border-stone-400 dark:hover:border-stone-600"
							src={getImagorUrl(
								`fit-in/2000x2000/filters:format(avif):quality(80)/${photo.src}`,
							)}
							alt={photo.src}
						/>
					</picture>
				</a>
				<div class="col-span-2 md:col-span-4 text-xs text-start text-stone-600 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300">
					<a
						href={`/photos/${album.slug}`}
						class="text-sm flex flex-row"
					>
						<IoReturnDownBack class="size-5" />&nbsp;
						<span class="underline">
							Back to album
						</span>
					</a>
				</div>
				{prevPhotoIndex !== -1 && (
					<div class="col-span-1 col-start-3 md:col-start-5 text-xs text-start text-stone-600 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300">
						<a
							href={`/photos/${album.slug}/${
								album.photos[prevPhotoIndex].slug
							}`}
							class="text-sm flex flex-row justify-end"
						>
							<IoChevronBackCircle class="self-center size-5" />&nbsp;<span class="underline">
								Previous
							</span>
						</a>
					</div>
				)}
				{nextPhotoIndex !== -1 && (
					<div class="col-span-1 col-start-4 md:col-start-6 text-xs text-end text-stone-600 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300">
						<a
							href={`/photos/${album.slug}/${
								album.photos[nextPhotoIndex].slug
							}`}
							class="text-sm flex flex-row justify-end"
						>
							<span class="underline">
								Next
							</span>&nbsp;<IoChevronForwardCircle class="self-center size-5" />
						</a>
					</div>
				)}
				<a href="#" alt="close lightbox" aria-label="close lightbox">
					<div
						id="lightbox"
						class="hidden fixed h-screen w-screen supports-[height:100dvh]:h-dvh supports-[width:100dvw]:w-dvw target:flex justify-center items-center inset-0 p-4 bg-stone-950/70 backdrop-blur-md overflow-auto"
					>
						<picture class="flex justify-center items-center h-full w-auto">
							{/* AVIF format */}
							<source
								type="image/avif"
								srcSet={getImagorUrl(
									`fit-in/2000x2000/filters:format(avif):quality(80)/${photo.src}`,
								)}
							/>

							{/* WEBP format */}
							<source
								type="image/webp"
								srcSet={getImagorUrl(
									`fit-in/2000x2000/filters:format(webp):quality(80)/${photo.src}`,
								)}
							/>

							{/* Default JPEG format (fallback) */}
							<img
								class="max-h-full max-w-full rounded-lg"
								src={getImagorUrl(
									`fit-in/2000x2000/filters:format(avif):quality(80)/${photo.src}`,
								)}
								alt={photo.src}
							/>
						</picture>
					</div>
				</a>
			</section>
			<License
				year={date.getUTCFullYear().toString()}
				isPhoto
				noLicense={photo.noLicense}
			/>
		</>
	);
}
