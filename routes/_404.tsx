import { basicHandler } from "@/utils/handler.ts";

export const handler = basicHandler({
	title: "404 - Page not found | Mahesh Makani",
	description: "The page you were looking for doesn't exist.",
});
export default function Error404() {
	return (
		<div class="px-4 py-8 mx-auto">
			<div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
				<h1 class="text-4xl font-bold text-text dark:text-textDark">
					404 - Page not found
				</h1>
				<p class="my-4 text-text dark:text-textDark">
					The page you were looking for doesn't exist.
				</p>
				<a href="/" class="underline text-primary-400 dark:text-primary-800">
					Go back home
				</a>
			</div>
		</div>
	);
}
