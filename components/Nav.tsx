type NavProps = {
	route?: string | null;
};

export default function Nav({ route }: NavProps) {
	const activeRoute = route?.split("/")?.[1] || "home";

	return (
		<header class="flex-initial">
			<nav class="w-full grid grid-cols-1 sm:grid-cols-2 mb-4 pt-4 pb-4 border-b border-b-primary-600 dark:border-b-primary-400">
				<div class="flex justify-center sm:justify-start">
					<a
						href="/"
						class="flex items-center font-bold text-primary-300 dark:text-primary-700 transition-colors duration-300 hover:text-primary-600 hover:dark:text-primary-400"
					>
						Mahesh Makani
					</a>
				</div>
				<ul class="flex space-x-4 justify-center sm:justify-end">
					<li>
						<a
							href="/blog"
							class={`flex items-center transition-colors duration-300 hover:text-primary-600 hover:dark:text-primary-400 ${
								activeRoute === "blog"
									? "text-primary-300 dark:text-primary-700"
									: "text-text dark:text-textDark"
							}`}
						>
							Blog
						</a>
					</li>
					<li>
						<a
							href="/photos"
							class={`flex items-center transition-colors duration-300 hover:text-primary-600 hover:dark:text-primary-400 ${
								activeRoute === "photos"
									? "text-primary-300 dark:text-primary-700"
									: "text-text dark:text-textDark"
							}`}
						>
							Photography
						</a>
					</li>
					<li>
						<a
							href="/work"
							class={`flex items-center transition-colors duration-300 hover:text-primary-600 hover:dark:text-primary-400 ${
								activeRoute === "work"
									? "text-primary-300 dark:text-primary-700"
									: "text-text dark:text-textDark"
							}`}
						>
							Work
						</a>
					</li>
					<li>
						<a
							href="/projects"
							class={`flex items-center transition-colors duration-300 hover:text-primary-600 hover:dark:text-primary-400 ${
								activeRoute === "projects"
									? "text-primary-300 dark:text-primary-700"
									: "text-text dark:text-textDark"
							}`}
						>
							Projects
						</a>
					</li>
					<li>
						<a
							href="/contact"
							class={`flex items-center transition-colors duration-300 hover:text-primary-600 hover:dark:text-primary-400 ${
								activeRoute === "contact"
									? "text-primary-300 dark:text-primary-700"
									: "text-text dark:text-textDark"
							}`}
						>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
