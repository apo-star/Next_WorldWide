import { motion, useScroll, useTransform } from "framer-motion";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from "../ui/carousel";
import { useRef } from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../ui/accordion";

export default function index() {
	const ball = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ball,
		offset: ["start end", "end start"],
	});
	const height = useTransform(scrollYProgress, [0, 0.8], [50, 0]);

	return (
		<>
			<div ref={ball}>
				<div className="grid md:grid-cols-12 grid-cols-1 mt-20 bg-red-600">
					<div className="col-span-5 p-16">
						<Carousel>
							<CarouselContent>
								<CarouselItem>
									<img src="/images/pic1.png" alt="pic" className="md:w-4/6 mx-auto" />
								</CarouselItem>
								<CarouselItem>
									<img src="/images/pic2.png" alt="pic" className="md:w-4/6 mx-auto" />
								</CarouselItem>
							</CarouselContent>
							<CarouselPrevious />
							<CarouselNext />
						</Carousel>
					</div>
					<div className="col-span-7 p-20 text-center items-center float-start text-white">
						<h1 className="scroll-m-20 text-4xl font-extrabold tracking-wider lg:text-5xl md:mt-20 mb-5">
							Preview
						</h1>
						<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
							Enhance your style with our University-logo adorned sublimation jersey!
						</h3>
						<Accordion
							type="single"
							collapsible
							className="mt-10 max-w-xl mx-auto px-5 rounded-lg "
						>
							<AccordionItem value="item-1">
								<AccordionTrigger>Overview</AccordionTrigger>
								<AccordionContent>
									<ul className="text-left text-lg ps-5 mt-2 space-y-1 list-disc list-inside">
										<li>Thick and comfortable fabric quality</li>
										<li>Suitable colors for Men & Women</li>
										<li>Cheap price with best quality </li>
									</ul>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<Accordion
							type="single"
							collapsible
							className="mt-5 max-w-xl mx-auto px-5 rounded-lg "
						>
							<AccordionItem value="item-1">
								<AccordionTrigger>Shipping</AccordionTrigger>
								<AccordionContent>
									<ul className="text-left text-lg ps-5 mt-2 space-y-1 list-disc list-inside">
										<li>RM8.00 - Peninsular Malaysia</li>
										<li>RM15.00 - Sabah/Sarawak</li>
										<li>Self-pickup - UTHM PARIT RAJA & PAGOH</li>
									</ul>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
						<h3 className="scroll-m-20 mt-16 text-2xl font-semibold tracking-tight">
							Cheap price with the best quality - open for{" "}
							<span className="text-blue-800 font-bold">400</span> orders only
						</h3>
					</div>
				</div>
				<motion.div className="relative" style={{ height }}>
					<div className="absolute h-[1550%] w-[120%] left-[-10%] rounded-b-[2000%] bg-red-600 shadow-lg"></div>
				</motion.div>
			</div>
		</>
	);
}
