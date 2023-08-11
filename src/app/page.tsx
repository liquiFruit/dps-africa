import MainNav from "@/components/main-navigation"
import Image from "next/image"

import heroImg from "@/../public/dps-ceilings-1.jpg"
import PaletteChecker from "@/components/palette-checker"
import { Button } from "@/components/ui/button"

export default function Home() {
	return (
		<main>
			<Hero />
			<PaletteChecker />
		</main>
	)
}

function Hero() {
	return (
		<section className="min-h-screen relative">
			<Image
				src={heroImg.src}
				alt="A picture of a stretch ceiling office."
				placeholder="blur"
				blurDataURL={heroImg.blurDataURL}
				fill
				className="object-cover"
			/>

			{/* Mask */}
			<svg className="absolute w-full h-screen ">
				<defs>
					<mask id="myMask">
						<rect className="w-full h-full fill-white" />
						<circle
							cx="100%"
							cy="50%"
							r="max(50vw, 50vh)"
							fill="black"
						/>
					</mask>
				</defs>

				<rect
					className="w-full h-full fill-background/80"
					mask="url(#myMask)"
				/>
			</svg>

			<div className="absolute left-1/2 -translate-x-[min(50vw,45rem)] top-1/2 -translate-y-1/2 max-w-[min(50vw,40rem)]">
				<h1 className="font-black text-5xl text-primary mb-8">
					STRETCH CEILINGS & WALLS
				</h1>

				<p className="leading-loose tracking-widest">
					DPS is a world leader in stretch ceilings and wall
					manufacturing. For 25 years we have helped bring to life
					amazing design ideas and have created some of the most
					stunning spaces. Over 1 000 000 m2 of DPS stretch ceilings
					have been installed across the world in both commercial and
					residential areas. DPS stretch ceilings and walls are 100%
					recyclable and covered by industry standard certificates
					(CE, Fire classification etc). All DPS stretch ceilings and
					walls have a 10-year warranty.
				</p>

				<div className="flex flex-row w-full children:w-full gap-4 mt-4">
					<Button size={"lg"}>Contact Us</Button>

					<Button size={"lg"} variant={"secondary"}>
						View Catalogue
					</Button>
				</div>
			</div>
		</section>
	)
}
