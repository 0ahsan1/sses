import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'
import Image from "next/image";
import {strapiImageLoader} from "@/helpers/util";

const features = [
	{
		name: 'Unlimited inboxes',
		description:
			'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
		href: '#',
		icon: InboxIcon,
	},
	{
		name: 'Manage team members',
		description:
			'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.',
		href: '#',
		icon: UsersIcon,
	},
	{
		name: 'Spam report',
		description:
			'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
		href: '#',
		icon: TrashIcon,
	},
]

export default function Feature({ data }) {
	return (
		<div className="bg-gray-100 py-24 sm:py-32 dark:bg-gray-900">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left">
					<h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
						{data?.title || "Our Features"}
					</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: data?.description }}>
					</p>
				</div>
				
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 justify-items-center">
						{data?.items?.map((item) => (
							<div
								key={item.id}
								className="flex flex-col items-center text-center max-w-sm "
							>
								<dt className="text-base font-semibold text-gray-900 dark:text-white">
									{item?.image?.url && (
										<div className="mb-6 flex size-16 items-center justify-center rounded-lg">
											<Image
												loader={strapiImageLoader}
												src={item.image.url}
												width={400}
												height={400}
												alt={item.image.alternativeText || item.title}
												className="h-12 w-12 object-contain"
											/>
										</div>
									)}
									{item.title}
								</dt>
								
								<dd className="mt-2 flex flex-auto flex-col text-base text-gray-600 dark:text-gray-400">
									<p className="flex-auto">{item.description}</p>
									
									{item?.button?.length > 0 && (
										<p className="mt-6">
											<a
												href={item.button[0]?.url || "#"}
												className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
											>
												{item.button[0]?.label || "Learn more"} <span aria-hidden="true">→</span>
											</a>
										</p>
									)}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	)
}

