import type { Metadata } from "next";
import {
	Inter as FontSans,
	Fira_Sans,
	JetBrains_Mono,
	Courier_Prime,
	Oswald,
	Bebas_Neue,
	Pacifico,
	Roboto,
	Montserrat,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Headers from "@/components/header";
import { Toaster } from "sonner";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

const firaSansFont = Fira_Sans({
	weight: "400",
	subsets: ["greek"],
	variable: "--font-sans",
});

const JetBrainsMonoFont = JetBrains_Mono({
	weight: "400",
	subsets: ["cyrillic-ext"],
	variable: "--font-sans",
});

const CourierPrimeFont = Courier_Prime({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-sans",
});

const oswaldFont = Oswald({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-sans",
});

const BebasNeueFont = Bebas_Neue({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-sans",
});

const PacificoFont = Pacifico({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-sans",
});

const RobotoFont = Roboto({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-sans",
});

const MontserratFont = Montserrat({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "PLTW. WorldWide",
	description: "Merch",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<link rel="icon" href="/images/pltw.png" sizes="any" />
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					RobotoFont.variable
				)}
			>
				<Headers />
				<Toaster richColors />
				{children}
			</body>
		</html>
	);
}
