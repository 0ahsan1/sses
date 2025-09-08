import RichTextRenderer from "@/components/RichTextRenderer";
import {strapiImagePath} from "@/services/ApiService";
import Link from "next/link";

export default function CTA({data}) {
	return (
		<div className="bg-gray-900 dark:bg-white">
			<div className="px-6 my-6  py-20 lg:px-8 ">
				<div className="mx-auto max-w-7xl text-center">
					<h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl dark:text-gray-900">
						{data?.title}
					</h2>
					<p className="mx-auto mt-6 max-w-5xl text-pretty text-lg/8 !text-white dark:text-gray-300">
						<RichTextRenderer content={data?.description} mediaBaseUrl={strapiImagePath} />
					</p>
					<div className="flex items-center justify-center gap-x-6">
						{data?.button && data.button.length > 0 && (
							<div className="flex flex-wrap gap-4 mt-2">
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
			</div>
		</div>
	)
}
