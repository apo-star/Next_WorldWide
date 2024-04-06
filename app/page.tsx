"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion, useInView } from "framer-motion";
import styles from "./style.module.css";
import { slideUp, opacity } from "./animation";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import Lenis from "@studio-freight/lenis";
import Section3 from "@/components/section3";
import Jersey from "@/components/jersey";
import Contact from "@/components/contact";

export default function Home() {
	const firstText = useRef(null);
	const secondText = useRef(null);
	const slider = useRef(null);
	let xPercent = 0;
	let direction = -1;
	const description = useRef(null);
	const isInView = useInView(description);
	const phrase = "PLTW UTHM - Official PLTW X UTHM Edition";

	useEffect(() => {
		const lenis = new Lenis();
		lenis.on("scroll", ScrollTrigger.update);

		gsap.ticker.add((time: any) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);
		gsap.registerPlugin(ScrollTrigger);
		gsap.to(slider.current, {
			scrollTrigger: {
				trigger: document.documentElement,
				scrub: 0.25,
				start: 0,
				end: window.innerHeight,
				onUpdate: (e) => (direction = e.direction * -1),
			},
			x: "-500px",
		});
		requestAnimationFrame(animate);
	}, []);

	const animate = () => {
		if (xPercent < -100) {
			xPercent = 0;
		} else if (xPercent > 0) {
			xPercent = -100;
		}
		gsap.set(firstText.current, { xPercent: xPercent });
		gsap.set(secondText.current, { xPercent: xPercent });
		requestAnimationFrame(animate);
		xPercent += 0.1 * direction;
	};

	const tableData = [
		{ size: "S", length: 26, width: 17.5 },
		{ size: "M", length: 27, width: 18.5 },
		{ size: "L", length: 28, width: 19.5 },
		{ size: "XL", length: 29, width: 20.5 },
		{ size: "XXL", length: 30, width: 21.5 },
		{ size: "XXXL", length: 31, width: 22.5 },
		{ size: "XXXXL", length: 32, width: 23.5 },
	];

	return (
		<>
			<div className="overflow-x-hidden">
				<main className="relative flex h-[100vh] overflow-hidden">
					<div className="min-h-screen mx-auto">
						<img
							src="/images/pic1.png"
							alt="background"
							className="md:w-full md:h-full md:px-0 px-5 md:pt-20 pt-32"
						/>
					</div>
					<div className="absolute" style={{ top: `calc(100vh - 400px)` }}>
						<div ref={slider} className="relative whitespace-nowrap md:mt-0 mt-20">
							<p
								ref={firstText}
								className="relative text-[120px] md:text-[230px] m-0 font-semibold pr-12 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-black to-blue-500 animate-gradient"
							>
								PLTW WorldWide -
							</p>
							<p
								ref={secondText}
								className="absolute text-[120px] md:text-[230px] left-full top-0 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-black to-blue-500 animate-gradient"
							>
								PLTW WorldWide -
							</p>
						</div>
					</div>
				</main>
				<div
					ref={description}
					className={`${styles.description} min-h-screen bg-blue-900 py-20 p-10 md:pt-52 text-white mt-50px md:mt-[300px]`}
				>
					<div
						className={`${styles.body} grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 mx-auto text-5xl`}
					>
						<div>
							<p className="px-5 text-center">
								{phrase.split(" ").map((word, index) => {
									return (
										<span key={index} className={styles.mask}>
											<motion.span
												variants={slideUp}
												custom={index}
												animate={isInView ? "open" : "closed"}
												key={index}
											>
												{word}
											</motion.span>
										</span>
									);
								})}
							</p>
							<div className="flex justify-center space-x-10 md:mb-0 mb-5">
								<img
									src="/images/pltwLogo.jpg"
									alt="pltw"
									className="md:w-72 md:h-72 w-36 h-36 rounded-full md:mt-5"
								/>
								<img
									src="/images/logo.png"
									alt="pltw"
									className="md:w-72 md:h-80 w-36 h-36 p-5 md:mt-5"
								/>
							</div>
						</div>
						<motion.p
							variants={opacity}
							animate={isInView ? "open" : "closed"}
							className="md:col-span-1 md:w-5/5 w-full"
						>
							<Table className="border rounded-md w-full">
								<TableCaption className="text-gray-200">Jersey Size</TableCaption>
								<TableHeader>
									<TableRow className="bg-black">
										<TableHead className="w-[100px] text-center text-white">
											Size
										</TableHead>
										<TableHead className="text-center text-white">Length</TableHead>
										<TableHead className="text-center text-white">Width</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{tableData.map((rowData, index) => (
										<TableRow key={index} className="text-center">
											<TableCell className="font-bold">{rowData.size}</TableCell>
											<TableCell>{rowData.length}</TableCell>
											<TableCell>{rowData.width}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</motion.p>
					</div>
				</div>
				<Section3 />
				<Jersey />
				<Contact />
			</div>
		</>
	);
}
