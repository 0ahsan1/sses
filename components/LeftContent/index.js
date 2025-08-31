import {ChevronDoubleRightIcon, CloudArrowUpIcon, LockClosedIcon, ServerIcon} from '@heroicons/react/20/solid'
import Image from "next/image";
import {strapiImageLoader} from "@/helpers/util";

const features = [
	{
		name: 'Push to deploy.',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
		icon: CloudArrowUpIcon,
	},
	{
		name: 'SSL certificates.',
		description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
		icon: LockClosedIcon,
	},
	{
		name: 'Database backups.',
		description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
		icon: ServerIcon,
	},
]

export default function LeftContent({data}) {
	return (
		<div className="container bg-white py-24 sm:py-32 dark:bg-gray-900">
			<div className=" max-w-full px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<div className="lg:pr-8 lg:pt-4">
						<div className="lg:max-w-lg">
							<h2 className="text-base/7 font-semibold text-primary-color">{data?.subtitle}</h2>
							<p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
								{data?.title}
							</p>
							<p className="mt-6 text-lg/8 text-gray-800 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: data?.description }} />
							<dl className="mt-4 max-w-xl space-y-2 text-base/7 text-gray-800 lg:max-w-none dark:text-gray-400">
								{data?.items?.map((feature) => (
										<>
											<dt className=" font-semibold text-gray-900 dark:text-white d-block">
												<ChevronDoubleRightIcon className={'d-inline h-7 w-7 text-primary-color'} />
												{feature.title}
											</dt>{' '}
											<dd className={'pl-7'}>
												{feature?.description}
											</dd>
										</>
								))}
							</dl>
						</div>
					</div>
					<Image src={data?.image[0]?.url} width={1900} height={280} alt={""} loader={strapiImageLoader} />
				</div>
			</div>
		</div>
	)
}
