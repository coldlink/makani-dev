import { Head } from "$fresh/runtime.ts";
import { ProseSection } from "../../components/ProseSection.tsx";

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
            <ProseSection>
                <h1>CV/Resume</h1>
                <p>
                    If you would like a copy of my full CV/Resume please get in
                    touch using one of the contact methods below.
                </p>
            </ProseSection>
        </>
    );
}
