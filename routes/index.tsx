import { ProseSection } from "@/components/ProseSection.tsx";
import { basicHandler } from "@/utils/handler.ts";
import { getImagorUrl } from "../utils/imagor.ts";

export const handler = basicHandler({
	title: "Mahesh Makani",
	description: "Software Developer",
});
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
				<img
					class="rounded-lg h-48 sm:h-72 md:h-full"
					src={getImagorUrl(
						"fit-in/540x540/filters:format(jpeg):quality(80)/PXL_20240413_010322043_crop.jpg",
					)}
					alt="A photo of Mahesh Makani, under a cherry blossom tree. He is smiling and looking towards the top left of the image."
				/>
			</div>
		</section>
	);
}
