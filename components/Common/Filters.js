import {Button} from "@/components/ui/button";
import {Filter} from "lucide-react";
import {useState} from "react";

export const Filters = () => {
	const filterButtons = [
		{ key: "all", label: "All Projects", count: projects.length },
		{ key: "residential", label: "Residential", count: projects.filter(p => p.type === "residential").length },
		{ key: "commercial", label: "Commercial", count: projects.filter(p => p.type === "commercial").length },
		{ key: "industrial", label: "Industrial", count: projects.filter(p => p.type === "industrial").length },
		{ key: "agricultural", label: "Agricultural", count: projects.filter(p => p.type === "agricultural").length }
	];
	const [activeFilter, setActiveFilter] = useState("all");
	
	return (
		<div className="py-12 bg-white border-b border-gray-200">
			<div className="max-w-7xl mx-auto px-6">
				<div className="flex items-center justify-between flex-wrap gap-4">
					<div className="flex items-center">
						<Filter className="w-5 h-5 text-gray-500 mr-3" />
						<h2 className="text-xl font-semibold text-gray-900">Filter Projects</h2>
					</div>
					<div className="flex flex-wrap gap-3">
						{filterButtons.map((filter) => (
							<Button
								key={filter.key}
								variant={activeFilter === filter.key ? "default" : "outline"}
								className={activeFilter === filter.key ? "bg-orange-600 hover:bg-orange-700" : ""}
								onClick={() => setActiveFilter(filter.key)}
							>
								{filter.label} ({filter.count})
							</Button>
						))}
					</div>
				</div>
			</div>
		</div>
	
	)
}