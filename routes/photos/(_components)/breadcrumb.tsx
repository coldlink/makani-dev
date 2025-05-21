import { Album, Photo } from "@/routes/photos/(_utils)/albums.ts";

/**
 * Generic breadcrumb component for each crumb
 */
const Crumb = ({
	href,
	text,
	divider,
}: {
	href: string;
	text: string;
	divider: boolean;
}) => {
	return (
		<li class="flex cursor-pointer items-center text-base text-text dark:text-textDark transition-colors duration-300 hover:text-primary-600 hover:dark:text-primary-400">
			<a href={href}>{text}</a>
			{divider && (
				<span class="pointer-events-none mx-2 text-text dark:text-textDark transition-colors duration-300 ">
					/
				</span>
			)}
		</li>
	);
};

/**
 * Breadcrumb component specific to the photos pages
 *
 * By default, the breadcrumb will show the "Photos" link.
 * If an album is provided, it will show the album name.
 * If a photo and album are provided, it will show the photo name.
 *
 * @param {Album} album - Album object.
 * @param {Photo} photo - Photo object.
 */
export const Breadcrumb = (
	{ album, photo }: { album?: Album; photo?: Photo },
) => {
	return (
		<nav aria-label="breadcrumb" class="w-full mb-4">
			<ol class="flex flex-wrap items-center rounded-md">
				<Crumb href="/photos" text="Photography" divider={!!album} />
				{album && (
					<Crumb
						href={`/photos/${album.slug}`}
						text={album.name}
						divider={!!photo}
					/>
				)}
				{album && photo && (
					<Crumb
						href={`/photos/${album.slug}/${photo.slug}`}
						text={photo.slug}
						divider={false}
					/>
				)}
			</ol>
		</nav>
	);
};
