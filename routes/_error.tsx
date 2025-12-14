import { HttpError } from "fresh";
import { define } from "@/utils/utils.ts";
import { Head } from "@/components/Head.tsx";

export default define.page(function ErrorPage(ctx) {
	const error = ctx.error; // Contains the thrown Error or HTTPError
	if (error instanceof HttpError) {
		const status = error.status; // HTTP status code

		// Render a 404 not found page
		if (status === 404) {
			return (
				<div class="px-4 py-8 mx-auto">
					<Head
						title="404 - Page not found"
						description="The page you were looking for doesn't exist."
					/>
					<div class="max-w-3xl mx-auto flex flex-col items-center justify-center">
						<h1 class="text-4xl font-bold text-text dark:text-text-dark">
							404 - Page not found
						</h1>
						<p class="my-4 text-text dark:text-text-dark">
							The page you were looking for doesn't exist.
						</p>
						<a
							href="/"
							class="underline text-primary-400 dark:text-primary-800"
						>
							Go back home
						</a>
					</div>
				</div>
			);
		}
	}

	return (
		<div class="px-4 py-8 mx-auto">
			<Head title="Error - An unexpected error occurred" />
			<div class="max-w-3xl mx-auto flex flex-col items-center justify-center">
				<h1 class="text-4xl font-bold text-text dark:text-text-dark">
					An unexpected error occurred
				</h1>
				<p class="my-4 text-text dark:text-text-dark">
					If this keeps happening, please contact me.
				</p>
				<a
					href="/"
					class="underline text-primary-400 dark:text-primary-800"
				>
					Go back home
				</a>
			</div>
		</div>
	);
});
