export default function Nav() {
    return (
        <nav class="w-full flex flex-row mt-4 mb-8 ml-2 mr-2">
            <div class="grow">
                <a
                    href="/"
                    class="flex items-center font-bold text-stone-950 hover:text-stone-700 dark:text-stone-100 dark:hover:text-stone-200"
                >
                    Mahesh Makani
                </a>
            </div>
            <ul class="flex space-x-4">
                <li>
                    <a
                        href="/work"
                        class="flex items-center text-stone-950 hover:text-stone-700 dark:text-stone-100 dark:hover:text-stone-200"
                    >
                        Work
                    </a>
                </li>
                <li>
                    <a
                        href="/projects"
                        class="flex items-center text-stone-950 hover:text-stone-700 dark:text-stone-100 dark:hover:text-stone-200"
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a
                        href="/cv"
                        class="flex items-center text-stone-950 hover:text-stone-700 dark:text-stone-100 dark:hover:text-stone-200"
                    >
                        CV/Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
}
