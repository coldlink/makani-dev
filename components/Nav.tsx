export default function Nav() {
    return (
        <nav class="w-full flex flex-row mb-4 pt-4 pb-4 border-b border-b-stone-400">
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
