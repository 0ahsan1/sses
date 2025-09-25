export const ShortBanner = () => {
	return (
		<div className="bg-gradient-to-br from-slate-900 to-blue-900 py-20">
			<div className="max-w-4xl mx-auto px-6 text-center">
				<h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
					Solar Solutions for Every Need
				</h1>
				<p className="text-xl text-gray-300 mb-8">
					From residential rooftops to industrial complexes, we have the perfect solar solution for you
				</p>
				<Button size="lg" className="bg-orange-600 hover:bg-orange-700">
					Get Custom Quote
				</Button>
			</div>
		</div>
	)
}