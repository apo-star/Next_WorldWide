import React, { useState } from "react";
// import styles from "./style.module.css";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../anim";
import Curve from "./Curve";
import Footer from "./Footer";

export default function index() {
	const pathname = usePathname();
	const [selectedIndicator, setSelectedIndicator] = useState(pathname);

	return (
		<motion.div
			variants={menuSlide}
			initial="initial"
			animate="enter"
			exit="exit"
			className="fixed top-0 right-0 h-screen bg-gray-900 text-white"
		>
			<div className="flex flex-col justify-between h-full p-20">
				<div
					onMouseLeave={() => {
						setSelectedIndicator(pathname);
					}}
					className="flex flex-col"
				>
					<div className="text-xl text-gray-600 uppercase border-b border-gray-600 mb-4">
						Navigation
					</div>
					<p className="font-extrabold text-3xl"></p>
				</div>
				<Footer />
			</div>
			<Curve />
		</motion.div>
	);
}
