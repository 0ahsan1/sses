import { Card, CardContent } from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

export const BlogCard = ({post})=>{
	
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
	return <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
		<div className="aspect-[4/3] relative overflow-hidden">
			<img
				src={post.image}
				alt={post.title}
				className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
			/>
		</div>
		
		<CardContent className="p-6">
			<Badge className={`mb-3 ${getCategoryColor(post.category)}`}>
				{post.category}
			</Badge>
			
			<h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-orange-600 transition-colors cursor-pointer">
				{post.title}
			</h3>
			
			<p className="text-gray-600 mb-4 line-clamp-3">
				{post.excerpt}
			</p>
			
			<div className="flex items-center justify-between text-gray-500 text-sm mb-4">
				<div className="flex items-center">
					<User className="w-4 h-4 mr-1" />
					<span>{post.author}</span>
				</div>
				<div className="flex items-center">
					<Clock className="w-4 h-4 mr-1" />
					<span>{post.readTime}</span>
				</div>
			</div>
			
			<div className="flex items-center justify-between">
				<div className="flex items-center text-gray-500 text-sm">
					<Calendar className="w-4 h-4 mr-1" />
					<span>{post.date}</span>
				</div>
				<Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50">
					Read More <ArrowRight className="w-4 h-4 ml-1" />
				</Button>
			</div>
		</CardContent>
	</Card>
	
}