import {Button} from "@/components/ui/button";

export const NewsLetterSignUp = ()=>{
	return (
		<div className="py-20 bg-gradient-to-r from-orange-600 to-yellow-500">
			<div className="max-w-4xl mx-auto px-6 text-center">
				<h2 className="text-4xl font-bold text-white mb-6">
					Stay Updated with Solar News
				</h2>
				<p className="text-xl text-orange-100 mb-8">
					Get the latest solar industry insights, policy updates, and installation tips delivered to your inbox
				</p>
				<div className="flex max-w-md mx-auto">
					<input
						type="email"
						placeholder="Enter your email address"
						className="flex-1 px-4 py-3 rounded-l-lg border-0 text-gray-900"
					/>
					<Button className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-r-lg">
						Subscribe
					</Button>
				</div>
			</div>
		</div>
	)
}