import * as React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { StarIcon } from "@heroicons/react/20/solid";
import {UserCircle} from "lucide-react"; // Or wherever you import it from
import Autoplay from "embla-carousel-autoplay"
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";

export default function TestimonialCarousel({data}) {
	const plugin = React.useRef(
		Autoplay({ delay: 2000, stopOnInteraction: true })
	)
	
	return (
		<section className="bg-white px-6 py-16 sm:py-18 lg:px-8 dark:bg-gray-900">
			<Carousel className="max-w-7xl mx-auto"
			          plugins={[plugin.current]}
			          onMouseEnter={plugin.current.stop}
			          onMouseLeave={plugin.current.reset}
			>
				<CarouselContent>
					{data.map((t) => (
						<CarouselItem key={t.id}  className="basis-1/2 flex justify-center px-4">
							<Card className="w-full rounded-2xl">
								<CardHeader>
									<p className="sr-only">5 out of 5 stars</p>
									<div className="flex justify-start gap-x-1 text-primary-color dark:text-indigo-400">
										<StarIcon className="w-5 h-5" />
										<StarIcon className="w-5 h-5" />
										<StarIcon className="w-5 h-5" />
										<StarIcon className="w-5 h-5" />
										<StarIcon className="w-5 h-5" />
									</div>
								</CardHeader>
								<CardContent className="mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9 dark:text-white">
									{t.description}
								</CardContent>
								<CardFooter className="mt-10 flex items-center gap-x-6 justify-start">
									<UserCircle />
									<div className="text-sm leading-6">
										<div className="font-semibold text-gray-900 dark:text-white">{t.title}</div>
										<div className="mt-0.5 text-gray-600 dark:text-gray-400">{t.subtitle}</div>
									</div>
								</CardFooter>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</section>
	);
}
