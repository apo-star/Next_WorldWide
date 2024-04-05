"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
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
import Image from "next/image";

export default function Home() {
	const firstText = useRef(null);
	const secondText = useRef(null);
	const slider = useRef(null);
	const body = useRef(null);
	let xPercent = 0;
	let direction = -1;
	const description = useRef(null);
	const isInView = useInView(description);
	const phrase = "PLTW UTHM - Official PLTW X UTHM Edition";
	const ball = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ball,
		offset: ["start end", "end start"],
	});

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

	const textRef = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: body.current,
				start: "top center",
				end: "250px",
				scrub: true,
			},
		});

		tl.to(textRef.current, {
			y: -200,
			opacity: 0,
			duration: 5,
			ease: "power1.inOut",
		});
	}, []);

	const tableData = [
		{ size: "S", length: 26, width: 17.5 },
		{ size: "M", length: 27, width: 18.5 },
		{ size: "L", length: 28, width: 19.5 },
		{ size: "XL", length: 29, width: 20.5 },
		{ size: "XXL", length: 30, width: 21.5 },
		{ size: "XXXL", length: 31, width: 22.5 },
		{ size: "XXXXL", length: 32, width: 23.5 },
	];

	const height = useTransform(scrollYProgress, [0, 0.8], [50, 0]);

	return (
		<>
			<div className="overflow-x-hidden">
				<main className="relative flex h-[100vh] overflow-hidden">
					<div className="min-h-screen mx-auto">
						<img
							src="/images/pic1.png"
							alt="background"
							className="md:w-full md:h-full blur-sm md:px-0 px-5 pt-44"
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
					className={`${styles.description} bg-blue-900 py-20 p-10 md:p-20 text-white mt-50px md:mt-[200px]`}
				>
					<div
						className={`${styles.body} grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto text-5xl`}
					>
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
						<motion.p
							variants={opacity}
							animate={isInView ? "open" : "closed"}
							className="md:col-span-1 md:w-4/5 w-full"
						>
							<Table className="border rounded-md w-full">
								<TableCaption>Jersey Size</TableCaption>
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
				<div className="flex items-center flex-col mt-[300px] space-x-[20vw]">
					<div ref={body} className="mb-[200px] grid grid-cols-5">
						<div ref={textRef} className="col-span-4 mt-10">
							<p className="ms-10 md:m-0 font-bold text-5xl md:text-8xl">
								Interested to wear?
							</p>
							<h4 className="scroll-m-20 ms-10 mt-10 text-xl font-semibold tracking-tight">
								Hurry Up & Grab it
							</h4>
						</div>
					</div>
				</div>
				<div ref={ball}>
					<div className="grid md:grid-cols-12 grid-cols-1 mt-20 bg-red-600">
						<div className="col-span-5 p-20">
							<Carousel>
								<CarouselContent>
									<CarouselItem>
										<img src="/images/pic1.png" alt="pic" className="md:w-3/6 mx-auto" />
									</CarouselItem>
									<CarouselItem>
										<img src="/images/pic2.png" alt="pic" className="md:w-3/6 mx-auto" />
									</CarouselItem>
								</CarouselContent>
								<CarouselPrevious />
								<CarouselNext />
							</Carousel>
						</div>
						<div className="col-span-7 p-20 text-center items-center">
							<h1 className="scroll-m-20 text-4xl font-extrabold tracking-wider lg:text-5xl md:mt-20 mb-5">
								Preview
							</h1>
							<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
								Enhance your style with our University-logo adorned sublimation jersey!
							</h3>
						</div>
					</div>
					<motion.div className="relative" style={{ height }}>
						<div className="absolute h-[1550%] w-[120%] left-[-10%] rounded-b-[2000%] bg-red-600 shadow-lg"></div>
					</motion.div>
				</div>
				<div className="min-h-screen bg-black">Hafiz</div>
			</div>
		</>
	);
}
