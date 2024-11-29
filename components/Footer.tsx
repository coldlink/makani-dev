import {
	IoLogoGithub,
	IoLogoInstagram,
	IoLogoLinkedin,
	IoMailOutline,
} from "react-icons/io5";

export default function Footer() {
	return (
		<footer class="flex space-x-10 justify-center items-center pt-4 mt-4 mb-4 border-t border-t-stone-600 dark:border-t-stone-400">
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="mailto:contact@makani.dev"
				title="Contact - Email"
				class="block text-stone-900 dark:text-stone-50 transition-colors duration-300 hover:text-stone-600 hover:dark:text-stone-400"
			>
				<IoMailOutline class="size-6 md:size-8" />
			</a>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.linkedin.com/in/mahesh-makani/"
				title="Contact - LinkedIn"
				class="block  text-stone-900 dark:text-stone-50 transition-colors duration-300 hover:text-stone-600 hover:dark:text-stone-400"
			>
				<IoLogoLinkedin class="size-6 md:size-8" />
			</a>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/coldlink"
				title="Contact - GitHub"
				class="block  text-stone-900 dark:text-stone-50 transition-colors duration-300 hover:text-stone-600 hover:dark:text-stone-400"
			>
				<IoLogoGithub class="size-6 md:size-8" />
			</a>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.instagram.com/coldlink_/"
				title="Contact - Instagram"
				class="block  text-stone-900 dark:text-stone-50 transition-colors duration-300 hover:text-stone-600 hover:dark:text-stone-400"
			>
				<IoLogoInstagram class="size-6 md:size-8" />
			</a>
		</footer>
	);
}
