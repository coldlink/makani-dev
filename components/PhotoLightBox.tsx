import { Photo } from "@/routes/photos/(_utils)/albums.ts";
import { getImagorUrl } from "@/utils/imagor.ts";

type PhotoLightBoxProps = {
	photo: Photo;
};

export default function PhotoLightBox({ photo }: PhotoLightBoxProps) {
	return (
		<>
			<a
				href="#lightbox"
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
						loading="lazy"
						class="w-auto max-h-[70dvh] rounded-lg border-2 border-transparent hover:border-primary-400 dark:hover:border-primary-600"
						src={getImagorUrl(
							`fit-in/2000x2000/filters:format(jpeg):quality(80)/${photo.src}`,
						)}
						alt={photo.src}
						width={2000}
						height={2000}
					/>
				</picture>
			</a>
			<a href="#" aria-label="close lightbox">
				<div
					id="lightbox"
					class="hidden fixed h-screen w-screen supports-[height:100dvh]:h-dvh supports-[width:100dvw]:w-dvw target:flex justify-center items-center inset-0 p-4 bg-primary-50/70 backdrop-blur-md overflow-auto"
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
							loading="lazy"
							fetchPriority="low"
							class="w-auto max-h-full max-w-full rounded-lg"
							src={getImagorUrl(
								`fit-in/2000x2000/filters:format(jpeg):quality(80)/${photo.src}`,
							)}
							alt={photo.src}
							width={2000}
							height={2000}
						/>
					</picture>
				</div>
			</a>
		</>
	);
}
