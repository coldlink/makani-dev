import { Album } from "@/routes/photos/(_components)/album.tsx";
import { ALBUMS } from "@/routes/photos/(_utils)/albums.ts";
import { Breadcrumb } from "@/routes/photos/(_components)/breadcrumb.tsx";
import { License } from "@/routes/photos/(_components)/license.tsx";
import { Head } from "$fresh/runtime.ts";

/**
 * /photos route
 */
export default function Photos() {
	return (
		<>
			<Head>
				<title>Photography | Mahesh Makani</title>
				<meta
					name="description"
					content="Photography by Mahesh Makani. A collection of photos taken by myself, all licensed under CC BY-NC-SA 4.0."
				/>
			</Head>
			<section>
				<Breadcrumb />
				<div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
					{ALBUMS.map((album, i) => (
						<Album
							album={album}
							key={i}
						/>
					))}
				</div>
				<License />
			</section>
		</>
	);
}
