import { Github, Instagram, Linkedin, ShoppingBag } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";
import { toast } from "sonner";

export default function Index() {
	const handleClick = () => {
		const promise = () =>
			new Promise((resolve) =>
				setTimeout(() => resolve({ name: "Sonner" }), 1000)
			);

		toast.promise(promise, {
			loading: "Loading...",
			success: () => {
				return "Good Choice";
			},
			error: "Error",
		});

		setTimeout(() => {
			window.open(
				"https://docs.google.com/forms/d/e/1FAIpQLSde44xXB1OSBiUkskWN7aib_gESVTCsuNvSI3dr8Tn7AArrjg/viewform?usp=sf_link"
			);
		}, 2000);
	};

	return (
		<>
			<div className="min-h-screen bg-black">
				<div className=" text-white mx-auto p-5 md:px-48 md:pt-52 md:pb-20">
					<div
						// href="https://docs.google.com/forms/d/e/1FAIpQLSde44xXB1OSBiUkskWN7aib_gESVTCsuNvSI3dr8Tn7AArrjg/viewform?usp=sf_link"
						// target="_blank"
						className="flex md:justify-start justify-center hover:text-blue-200 max-w-4xl  md:mt-0 mt-20"
						onClick={handleClick}
					>
						<div className="rounded-full md:p-5 bg-white md:block hidden">
							<ShoppingBag className="w-20 h-20 md:w-32 md:h-32 text-black" />
						</div>
						<h1 className="scroll-m-20 md:mt-16 md:ms-10 text-4xl text-center font-extrabold tracking-wider lg:text-7xl">
							Click here to BUY
						</h1>
					</div>
					<div className="flex justify-center md:justify-end md:m-0 m-10">
						<Link
							href="https://www.instagram.com/p/C5VckRoB001/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
							target="_blank"
						>
							<Instagram className="md:h-20 h-10 md:w-20 w-10  text-white hover:text-pink-700" />
						</Link>
					</div>
				</div>
				<Separator className="w-4/5 mx-auto" />
				<div className=" text-white mx-auto md:px-52">
					<h2 className="scroll-m-20 text-center py-6 md:py-16 text-5xl font-semibold tracking-tight first:mt-0">
						Contacts
					</h2>
					<div className="grid grid-cols-6 md:grid-cols-12 my-10">
						<div className="col-span-6 text-center p-6">
							<Link href="https://wa.link/nrwpef" target="_blank">
								<Button className="w-48 md:w-96 py-10 md:p-14 rounded-full text-md md:text-2xl hover:bg-blue-800">
									Ruzainish aka Zai
								</Button>
							</Link>
						</div>
						<div className="col-span-6 text-center p-6">
							<Link href="https://wa.link/3tnaky" target="_blank">
								<Button className="w-48 md:w-96 py-10 md:p-14 rounded-full text-md md:text-2xl hover:bg-red-800">
									Fariez aka Aryz
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center text-white border-t-2 border-purple-400 bg-black">
				<div className="pt-4">
					<section className="mb-4 flex justify-center space-x-7">
						<Link href="https://github.com/apiz23" className="hover:text-blue-400">
							<Github />
						</Link>
					</section>
				</div>

				<div className="text-center p-3">© 2024 Hafizu Copyright:</div>
			</div>
		</>
	);
}
