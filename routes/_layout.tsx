import { PageProps } from "$fresh/server.ts";
import Footer from "@/components/Footer.tsx";
import Nav from "@/components/Nav.tsx";

export default function Layout({ Component }: PageProps) {
    return (
        <>
            <Nav />
            <main>
                <Component />
            </main>
            <Footer />
        </>
    );
}
