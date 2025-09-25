export const ShortBanner = ()=>{
	return (
		<div className="bg-gradient-to-br from-slate-900 to-blue-900 py-20">
			<div className="max-w-4xl mx-auto px-6 text-center">
				<h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
					Our Solar Projects
				</h1>
				<p className="text-xl text-gray-300 mb-8">
					Explore our completed solar installations across Pakistan
				</p>
				<div className="grid md:grid-cols-4 gap-6 text-white">
					<div className="text-center">
						<div className="text-3xl font-bold text-orange-400">2000+</div>
						<div className="text-gray-300">Completed Projects</div>
					</div>
					<div className="text-center">
						<div className="text-3xl font-bold text-green-400">50MW+</div>
						<div className="text-gray-300">Installed Capacity</div>
					</div>
					<div className="text-center">
						<div className="text-3xl font-bold text-blue-400">₨50Cr+</div>
						<div className="text-gray-300">Customer Savings</div>
					</div>
					<div className="text-center">
						<div className="text-3xl font-bold text-purple-400">5★</div>
						<div className="text-gray-300">Average Rating</div>
					</div>
				</div>
			</div>
		</div>
	)
}