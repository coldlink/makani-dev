/**
 * License component to display copyright information and license details.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.year - The year to display in the copyright notice. Defaults to the current year.
 * @returns {JSX.Element} The rendered License component.
 */
export const License = (
	{ year = new Date().getUTCFullYear().toString() }: { year?: string },
) => {
	return (
		<div class="text-xs text-start text-stone-600 dark:text-stone-400 mt-6">
			{/* @ts-ignore -- cc licence */}
			<span xmlns:cc="http://creativecommons.org/ns#">
				&copy; Mahesh Makani {year}. All photos licensed under{" "}
				<a
					class="text-xs underline hover:text-stone-700 dark:hover:text-stone-300 inline"
					href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
					target="_blank"
				>
					CC BY-SA 4.0
				</a>. Contact me for high-res versions or commercial use.
			</span>
		</div>
	);
};
