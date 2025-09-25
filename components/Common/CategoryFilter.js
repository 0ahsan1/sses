export const CategoryFilter = () => {
	return <div className="py-8 bg-white border-b border-gray-200">
		<div className="max-w-7xl mx-auto px-6">
			<div className="flex flex-wrap gap-3 justify-center">
				{categories.map((category) => (
					<Button
						key={category}
						variant="outline"
						className="hover:bg-orange-50 hover:border-orange-200 hover:text-orange-700"
					>
						{category}
					</Button>
				))}
			</div>
		</div>
	</div>
	
}