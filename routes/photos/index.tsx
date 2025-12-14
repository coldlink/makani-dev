import { Head } from "@/components/Head.tsx";
import { ProseSection } from "@/components/ProseSection.tsx";
import { define } from "@/utils/utils.ts";
import { License } from "./(_components)/License.tsx";
import { ALBUMS } from "./(_utils)/albums/index.ts";
import { Album } from "./(_components)/Album.tsx";

export default define.page(function Photos() {
	return (
		<section>
			<Head
				title="Photography"
				description="Photography by Mahesh Makani. A collection of photos taken by myself, all licensed under CC BY-NC-SA 4.0 unless otherwise stated."
			/>
			<ProseSection className="mb-8">
				<h1>Photography</h1>
			</ProseSection>
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
});
