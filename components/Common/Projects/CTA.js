import {Button} from "@/components/ui/button";
import React from "react";

export const CTA = ()=>{
	return(
		<div className="py-20 bg-gradient-to-r from-orange-600 to-yellow-500">
			<div className="max-w-4xl mx-auto px-6 text-center">
				<h2 className="text-4xl font-bold text-white mb-6">
					Ready to Join Our Success Stories?
				</h2>
				<p className="text-xl text-orange-100 mb-8">
					Get a custom solar solution designed specifically for your property
				</p>
				<Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
					Start Your Solar Journey
				</Button>
			</div>
		</div>
	)
}