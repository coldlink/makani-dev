import { ProseSection } from "@/components/ProseSection.tsx";
import { getImagorUrl } from "@/utils/imagor.ts";

export default function Home() {
	return (
		<section class="justify-center mx-auto flex flex-col-reverse sm:flex-row gap-4 items-center h-full">
			<ProseSection className="text-center basis-auto sm:basis-full">
				<h1>Mahesh Makani</h1>
				<h2>Software Developer</h2>
				<p>
					he/him
				</p>
				<p>
					Cruising the information superhighway 🏄
				</p>
				<p>
					Coding along the full stack across the way 👨‍💻
				</p>
				<p>
					Based in Hertfordshire and London, UK 🌍
				</p>
			</ProseSection>
			<div class="basis-auto sm:basis-full flex justify-center">
				<picture>
					{/* AVIF format */}
					<source
						type="image/avif"
						srcSet={getImagorUrl(
							"fit-in/432x540/filters:format(avif):quality(80)/PXL_20240413_010322043_crop.jpg",
						)}
						width={432}
						height={540}
					/>

					{/* WEBP format */}
					<source
						type="image/webp"
						srcSet={getImagorUrl(
							"fit-in/432x540/filters:format(webp):quality(80)/PXL_20240413_010322043_crop.jpg",
						)}
						width={432}
						height={540}
					/>

					{/* Default JPEG format (fallback) */}
					<img
						loading="lazy"
						width={432}
						height={540}
						class="w-auto rounded-lg h-48 sm:h-72 md:h-full"
						src={getImagorUrl(
							"fit-in/432x540/filters:format(jpeg):quality(80)/PXL_20240413_010322043_crop.jpg",
						)}
						alt="A photo of Mahesh Makani, under a cherry blossom tree. He is smiling and looking towards the top left of the image."
					/>
				</picture>
			</div>
		</section>
	);
}
