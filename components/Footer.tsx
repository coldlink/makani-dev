import {
	IoLogoGithub,
	IoLogoInstagram,
	IoLogoLinkedin,
	IoMailOutline,
} from "react-icons/io5";

export default function Footer() {
	return (
		<footer class="flex space-x-10 justify-center items-center pt-4 mt-4 mb-4 border-t border-t-primary-600 dark:border-t-primary-400">
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="mailto:contact@makani.dev"
				title="Contact - Email"
				class="block text-text dark:text-textDark transition-colors duration-300 hover:text-primary-600 hover:dark:text-primary-400"
			>
				<IoMailOutline class="size-6 md:size-8" />
			</a>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.linkedin.com/in/mahesh-makani/"
				title="Contact - LinkedIn"
				class="block text-text dark:text-textDark transition-colors duration-300 hover:text-primary-600 hover:dark:text-primary-400"
			>
				<IoLogoLinkedin class="size-6 md:size-8" />
			</a>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/coldlink"
				title="Contact - GitHub"
				class="block text-text dark:text-textDark transition-colors duration-300 hover:text-primary-600 hover:dark:text-primary-400"
			>
				<IoLogoGithub class="size-6 md:size-8" />
			</a>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.instagram.com/coldlink_/"
				title="Contact - Instagram"
				class="block text-text dark:text-textDark transition-colors duration-300 hover:text-primary-600 hover:dark:text-primary-400"
			>
				<IoLogoInstagram class="size-6 md:size-8" />
			</a>
		</footer>
	);
}
