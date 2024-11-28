export default function Nav() {
	return (
		<header>
			<nav class="w-full flex flex-row mb-4 pt-4 pb-4 border-b border-b-stone-600 dark:border-b-stone-400">
				<div class="grow">
					<a
						href="/"
						class="flex items-center font-bold text-stone-900 dark:text-stone-50 transition-colors duration-300 hover:text-stone-600 hover:dark:text-stone-400"
					>
						Mahesh Makani
					</a>
				</div>
				<ul class="flex space-x-4">
					<li>
						<a
							href="/work"
							class="flex items-center text-stone-900 dark:text-stone-50 transition-colors duration-300 hover:text-stone-600 hover:dark:text-stone-400"
						>
							Work
						</a>
					</li>
					<li>
						<a
							href="/projects"
							class="flex items-center text-stone-900 dark:text-stone-50 transition-colors duration-300 hover:text-stone-600 hover:dark:text-stone-400"
						>
							Projects
						</a>
					</li>
					<li>
						<a
							href="/cv"
							class="flex items-center text-stone-900 dark:text-stone-50 transition-colors duration-300 hover:text-stone-600 hover:dark:text-stone-400"
						>
							CV/Resume
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
