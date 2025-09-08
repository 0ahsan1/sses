import { useEffect } from "react";
import BackToTop from "../elements/BackToTop";
import Footer from "@/components/Footer";
import {Navbar} from "@/components/Navbar";

export default function MainLayout({
	children,
                               }) {
	useEffect(() => {
		const WOW = require("wowjs");
		window.wow = new WOW.WOW({
			live: false,
		});
		window.wow.init();
	}, []);
	return (
		<>
			<Navbar />
			<main>
				{children}
			</main>
			<Footer />
			<BackToTop />
		</>
	);
}
