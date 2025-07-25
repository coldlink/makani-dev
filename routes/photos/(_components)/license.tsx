/**
 * License component to display copyright information and license details.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.year - The year to display in the copyright notice. Defaults to the current year.
 * @returns {JSX.Element} The rendered License component.
 */
export const License = (
	{
		year = new Date().getUTCFullYear().toString(),
		isPhoto = false,
		noLicense = false,
	}: {
		year?: string;
		isPhoto?: boolean;
		noLicense?: boolean;
	},
) => {
	return (
		<div class="text-xs text-start text-text dark:text-textDark mt-6">
			{isPhoto
				? (
					// @ts-ignore -- cc license tag
					<span xmlns:cc="http://creativecommons.org/ns#">
						&copy; Mahesh Makani {year}. {noLicense
							? (
								<b>
									This photo is NOT licensed for any use.
								</b>
							)
							: (
								<>
									This photo is licensed under{" "}
									<a
										class="text-xs underline hover:text-primary-600 hover:dark:text-primary-400 inline"
										href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
										target="_blank"
									>
										CC BY-NC-SA 4.0
									</a>. Contact me for high-res versions or commercial use.
								</>
							)}
					</span>
				)
				: (
					// @ts-ignore -- cc license tag
					<span xmlns:cc="http://creativecommons.org/ns#">
						&copy; Mahesh Makani {year}. Photos licensed under{" "}
						<a
							class="text-xs underline hover:text-primary-600 hover:dark:text-primary-400 inline"
							href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
							target="_blank"
						>
							CC BY-NC-SA 4.0
						</a>{" "}
						unless otherwise stated on the photo page. Contact me for high-res
						versions or commercial use.
					</span>
				)}
		</div>
	);
};
