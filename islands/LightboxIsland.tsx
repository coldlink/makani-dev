import { IS_BROWSER } from "$fresh/runtime.ts";

export default function LightboxIsland() {
	if (!IS_BROWSER) {
		return;
	}

	return (
		<>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/viewerjs/1.11.7/viewer.min.css"
			/>
			<script
				src="https://cdnjs.cloudflare.com/ajax/libs/viewerjs/1.11.7/viewer.min.js"
				onLoad={() => {
					// @ts-ignore -- Viewer is not defined in TypeScript
					// deno-lint-ignore no-window
					const _viewer = new window.Viewer(
						document.getElementById("image")!,
						{
							navbar: false,
							title: false,
							toolbar: {
								zoomIn: {
									show: true,
								},
								zoomOut: {
									show: true,
								},
								reset: {
									show: true,
								},
								oneToOne: {
									show: true,
								},
							},
							className: "viewerjs",
							viewed() {
								_viewer.zoomTo(1);
							},
						},
					);
				}}
			/>
		</>
	);
}
