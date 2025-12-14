import Footer from "./Footer.tsx";
import Nav from "./Nav.tsx";
import { define } from "@/utils/utils.ts";

export default define.layout(function Layout({ Component, route }) {
	return (
		<>
			<Nav route={route} />
			<main>
				<Component />
			</main>
			<Footer />
		</>
	);
});
