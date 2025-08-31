import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import {useEffect, useState} from "react";

export  function FAQ({data}) {
	const [openIndex, setOpenIndex] = useState(null);
	useEffect(() => {
		setOpenIndex(null);
	}, [data])
	return (
		<div className="bg-white dark:bg-gray-900">
			<div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
				<div className="mx-auto max-w-4xl">
					<h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
						{data.title}
					</h2>
					<dl className="mt-16 divide-y divide-gray-900/10 dark:divide-white/10">
						{data.items.map((faq,index) => (
							<Disclosure key={faq.title} as="div" className="py-6 first:pt-0 last:pb-0">
								<dt>
									<DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900 dark:text-white">
										<span className="text-base/7 font-semibold">{faq.title}</span>
										<span className="ml-6 flex h-7 items-center">
                        <span className="ml-6 flex h-7 items-center">
                              {openIndex === index ? (
	                              <MinusIcon aria-hidden="true" className="h-6 w-6" />
                              ) : (
	                              <PlusIcon aria-hidden="true" className="h-6 w-6" />
                              )}
                            </span>
                    </span>
									</DisclosureButton>
								</dt>
								<DisclosurePanel as="dd" className="mt-2 pr-12">
									<p className="text-base/7 text-gray-600 dark:text-gray-400"
									dangerouslySetInnerHTML={{ __html: faq.description }}
									/>
								</DisclosurePanel>
							</Disclosure>
						))}
					</dl>
				</div>
			</div>
		</div>
	)
}
