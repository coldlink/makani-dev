import { Album } from "@/routes/photos/(_components)/album.tsx";
import { License } from "@/routes/photos/(_components)/license.tsx";
import { ALBUMS } from "@/routes/photos/(_utils)/albums/index.ts";
import { basicHandler } from "@/utils/handler.ts";
import { ProseSection } from "@/components/ProseSection.tsx";
import { Breadcrumb } from "./(_components)/breadcrumb.tsx";

/**
 * /photos route
 */
export const handler = basicHandler({
	title: "Photography",
	description:
		"Photography by Mahesh Makani. A collection of photos taken by myself, all licensed under CC BY-NC-SA 4.0 unless otherwise stated.",
});
export default function Photos() {
	return (
		<section>
			<ProseSection className="mb-8">
				<h1>Photography</h1>
			</ProseSection>
			<Breadcrumb />
			<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
				{ALBUMS.map((album, i) => (
					<Album
						album={album}
						key={i}
					/>
				))}
			</div>
			<License />
		</section>
	);
}
