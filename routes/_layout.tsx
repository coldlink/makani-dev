import { PageProps } from "$fresh/server.ts";
import Footer from "@/components/Footer.tsx";
import Nav from "@/components/Nav.tsx";

export default function Layout({ Component, route }: PageProps) {
	return (
		<>
			<Nav route={route} />
			<main>
				<Component />
			</main>
			<Footer />
		</>
	);
}
