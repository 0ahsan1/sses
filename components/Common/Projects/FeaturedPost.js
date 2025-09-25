import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
export const FeaturedPost = ()=>{
	
	const featuredPost = {
		id: 1,
		title: "Pakistan's Solar Revolution: Government Incentives and Net Metering Policy 2024",
		excerpt: "Complete guide to Pakistan's new net metering policies, tax benefits, and government incentives for solar installations.",
		image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800",
		category: "Policy Updates",
		author: "Solar Expert Team",
		date: "December 15, 2024",
		readTime: "8 min read",
		featured: true
	};
	const getCategoryColor = (category) => {
		const colors = {
			"Policy Updates": "bg-blue-100 text-blue-800",
			"Technology": "bg-green-100 text-green-800",
			"Cost Analysis": "bg-purple-100 text-purple-800",
			"Case Studies": "bg-orange-100 text-orange-800",
			"Maintenance": "bg-red-100 text-red-800",
			"Agriculture": "bg-emerald-100 text-emerald-800"
		};
		return colors[category] || "bg-gray-100 text-gray-800";
	};
	return <Card className="mb-16 overflow-hidden shadow-xl border-0">
		<div className="grid lg:grid-cols-2 gap-0">
			<div className="aspect-[4/3] lg:aspect-auto relative">
				<img
					src={featuredPost.image}
					alt={featuredPost.title}
					className="w-full h-full object-cover"
				/>
				<div className="absolute top-6 left-6">
					<Badge className="bg-orange-600 text-white text-sm px-3 py-1">
						Featured Article
					</Badge>
				</div>
			</div>
			
			<CardContent className="p-8 lg:p-12 flex flex-col justify-center">
				<Badge className={`w-fit mb-4 ${getCategoryColor(featuredPost.category)}`}>
					{featuredPost.category}
				</Badge>
				
				<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
					{featuredPost.title}
				</h2>
				
				<p className="text-gray-600 mb-6 text-lg leading-relaxed">
					{featuredPost.excerpt}
				</p>
				
				<div className="flex items-center text-gray-500 mb-6 space-x-4">
					<div className="flex items-center">
						<User className="w-4 h-4 mr-2" />
						<span className="text-sm">{featuredPost.author}</span>
					</div>
					<div className="flex items-center">
						<Calendar className="w-4 h-4 mr-2" />
						<span className="text-sm">{featuredPost.date}</span>
					</div>
					<div className="flex items-center">
						<Clock className="w-4 h-4 mr-2" />
						<span className="text-sm">{featuredPost.readTime}</span>
					</div>
				</div>
				
				<Button className="bg-orange-600 hover:bg-orange-700 w-fit">
					Read Full Article
					<ArrowRight className="w-4 h-4 ml-2" />
				</Button>
			</CardContent>
		</div>
	</Card>
	
}