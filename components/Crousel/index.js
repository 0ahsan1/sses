import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import {strapiImageLoader} from "@/helpers/util";
import RichTextRenderer from "@/components/RichTextRenderer";
import {strapiImagePath} from "@/services/ApiService";

// adjust this if needed

export function CarouselComp({ data }) {
	return (
		<Carousel
			className="w-[300px] sm:w-full mx-auto"
			orientation='horizontal'
		>
			<CarouselContent className={'w-[300px] sm:w-full h-[450px] sm:h-full'}>
				{data?.map((post) => (
					<CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
						<Card className="p-1 rounded-3xl">
							<CardContent className="p-2 flex flex-col items-start justify-between rounded-2xl bg-white dark:bg-gray-900">
								<div className="relative w-full">
									<Image
										alt=""
										src={post.image?.url}
										loader={strapiImageLoader}
										width={500}
										height={500}
										className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] dark:bg-gray-800"
									/>
									<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10" />
								</div>
								
								<div className="mt-4 w-full">
									<div className="text-xs mb-2">
										<a
											href={'services-details/'+post.slug}
											className="inline-block rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:bg-gray-800"
										>
											{post.slug}
										</a>
									</div>
									
									<h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
										<a href={'services-details/'+post.slug} className="block">
											{post.title}
										</a>
									</h3>
									
									<p className="mt-3 line-clamp-3 text-sm text-gray-600 dark:text-gray-400">
										<RichTextRenderer
											content={post.description}
											mediaBaseUrl={strapiImagePath}
										/>
									</p>
								</div>
							</CardContent>
						</Card>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
