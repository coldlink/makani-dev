import { Head } from "$fresh/runtime.ts";

export default function CV() {
    return (
        <>
            <Head>
                <title>Mahesh Makani | CV/Resume</title>
                <meta
                    name="description"
                    content="Hello! I'm Mahesh Makani, a software developer based in Hertfordshire and London, UK. Here you can find my CV/Resume."
                />
            </Head>
            <section class="prose sm:prose-sm md:prose-md lg:prose-lg prose-stone dark:prose-invert">
                <h1>CV/Resume</h1>
                <p>
                    If you would like a copy of my full CV/Resume please get in
                    touch using one of the contact methods below.
                </p>
            </section>
        </>
    );
}
