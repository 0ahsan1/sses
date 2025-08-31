import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from "next/link"
import Image from "next/image"
import { strapiImageLoader } from "@/helpers/util"

export function HeroBanner({ data }) {
	return (
		<div className="relative bg-white dark:bg-gray-900">
			<div className="mx-auto max-w-full lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
				<div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-48 lg:pt-40 xl:col-span-6">
					<div className="mx-auto max-w-xl lg:mx-0">
						<h1 className="mt-24 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:mt-10 sm:text-7xl dark:text-white">
							{data?.title}
						</h1>
						<p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: data?.description }} />
						
						{data?.button && data.button.length > 0 && (
							<div className="flex flex-wrap gap-4 mt-4">
								{data.button.map((btn, idx) => (
									<Link
										key={idx}
										href={btn.link}
										className="btn wow fadeInUp"
										data-wow-delay={`${0.2 + idx * 0.2}s`}
									>
										{btn.label}
									</Link>
								))}
							</div>
						)}
					</div>
				</div>
				<div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
					<Image
						alt=""
						loader={strapiImageLoader}
						width={2400}
						height={700}
						src={data?.image.url}
						className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full dark:bg-gray-800"
					/>
				</div>
			</div>
		</div>
	)
}
