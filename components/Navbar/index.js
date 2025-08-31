"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Services", href: "/services" },
	{ name: "Projects", href: "/project" },
	{ name: "FAQ", href: "/faq" },
	{ name: "Contact", href: "/contact" },
];

export function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900 dark:border-gray-800">
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				{/* Logo */}
				<Link href="/" className="text-xl font-bold text-primary-color dark:text-indigo-400">
					SSES
				</Link>
				
				{/* Desktop Menu */}
				<nav className="hidden md:flex gap-6">
					{navItems.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="text-sm font-medium text-gray-700 hover:text-primary-color dark:text-gray-300 dark:hover:text-indigo-400"
						>
							{item.name}
						</Link>
					))}
				</nav>
				
				{/* CTA Button (Optional) */}
				<div className="hidden md:block">
					<Button asChild className={`bg-primary-color`}>
						<Link className={`text-white`} href="/contact">Get a Quote</Link>
					</Button>
				</div>
				
				{/* Mobile Menu */}
				<div className="md:hidden">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon">
								<Menu className="h-6 w-6" />
								<span className="sr-only">Open Menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="w-64 p-6 bg-white">
							<nav className="flex flex-col gap-4">
								{navItems.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className="text-base font-medium text-gray-900 hover:text-primary-color dark:text-gray-300 dark:hover:text-indigo-400"
									>
										{item.name}
									</Link>
								))}
								<Button asChild className="mt-4 bg-primary-color text-white">
									<Link href="/contact">Get a Quote</Link>
								</Button>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
