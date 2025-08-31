import RichTextRenderer from "@/components/RichTextRenderer";
import {strapiImagePath} from "@/services/ApiService";
import Link from "next/link";

export default function CTA({data}) {
	return (
		<div className="bg-white dark:bg-gray-900">
			<div className="px-6 my-6 lg:px-8 ">
				<div className="mx-auto max-w-7xl text-center  border-1 rounded-2xl py-20">
					<h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
						{data?.title}
					</h2>
					<p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600 dark:text-gray-300">
						<RichTextRenderer content={data?.description} mediaBaseUrl={strapiImagePath} />
					</p>
					<div className="flex items-center justify-center gap-x-6">
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
			</div>
		</div>
	)
}
