import { IS_BROWSER } from "$fresh/runtime.ts";

type Props = {
	// Define the ID of the element to attach the lightbox to
	// If not provided, it defaults to "image"
	id?: string;
	// Define the attribute to get the image URL from
	url?: "src" | "data-uri";
};

export default function LightboxIsland({ id = "image", url = "src" }: Props) {
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
					new window.Viewer(
						document.getElementById(id)!,
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
							url,
						},
					);
				}}
			/>
		</>
	);
}
