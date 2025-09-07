import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
// If you use shadcn/ui, keep these imports. Otherwise, replace the few components with plain <div>/<button>/<input> wrappers.
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, User, Tag, Search, ArrowRight } from "lucide-react";

/**
 * BlogsPage — Hero + Blog list UI for Strapi v5 (pure JS)
 *
 * Requirements:
 * - Strapi v5 collection type: `blogs` (adjust the endpoint if your API uses another name)
 * - Public "find" permission for blogs OR pass a token prop
 * - Images served from Strapi's Upload plugin
 *
 * Usage:
 * <BlogsPage apiBase="https://dev-content.sses.pk" token={process.env.NEXT_PUBLIC_STRAPI_TOKEN} />
 */
export default function BlogsPage({ apiBase, token, pageSize = 9 }) {
	const STRAPI_URL = process.env?.NEXT_PUBLIC_STRAPI_URL
	const [blogs, setBlogs] = useState([]);
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(0);
	const [loading, setLoading] = useState(true);
	const [loadingMore, setLoadingMore] = useState(false);
	const [error, setError] = useState(null);
	
	const [q, setQ] = useState("");
	const [activeTag, setActiveTag] = useState(null);
	
	const hasMore = blogs.length < total;
	
	const headers = useMemo(() => {
		const h = {};
		if (token) h["Authorization"] = `Bearer ${token}`;
		return h;
	}, [token]);
	
	function makeImageUrl(url) {
		if (!url) return undefined;
		if (url.startsWith("http")) return url;
		return `${STRAPI_URL}${url}`;
	}
	
	const queryString = useMemo(() => {
		const params = new URLSearchParams();
		
		// Base populate for common fields (adjust to match your model)
		params.set("populate[cover][fields][0]", "url");
		params.set("populate[cover][fields][1]", "alternativeText");
		params.set("populate[author][populate][avatar][fields][0]", "url");
		params.set("populate[tags]", "*");
		
		// Filters
		if (q.trim()) {
			params.set("filters[$or][0][title][$containsi]", q.trim());
			params.set("filters[$or][1][excerpt][$containsi]", q.trim());
		}
		if (activeTag) {
			params.set("filters[tags][name][$eq]", activeTag);
		}
		
		// Sorting & pagination
		params.set("sort", "publishedAt:desc");
		params.set("pagination[page]", String(page));
		params.set("pagination[pageSize]", String(pageSize));
		
		return params.toString();
	}, [q, activeTag, page, pageSize]);
	
	async function fetchBlogs({ append = false } = {}) {
		try {
			if (append) setLoadingMore(true); else setLoading(true);
			setError(null);
			
			const res = await fetch(`${STRAPI_URL}/api/blogs?${queryString}`, { headers });
			if (!res.ok) {
				const text = await res.text();
				throw new Error(`Failed to fetch blogs (${res.status}). Body: ${text.slice(0, 200)}...`);
			}
			const json = await res.json();
			const items = json?.data || [];
			const pagination = json?.meta?.pagination || { total: items.length };
			
			setBlogs((prev) => (append ? [...prev, ...items] : items));
			setTotal(pagination.total || items.length);
		} catch (e) {
			setError(e?.message || "Unknown error");
		} finally {
			setLoading(false);
			setLoadingMore(false);
		}
	}
	
	useEffect(() => {
		// Reset to first page whenever query/tag changes
		setPage(1);
	}, [q, activeTag]);
	
	useEffect(() => {
		fetchBlogs({ append: page > 1 });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page, queryString, STRAPI_URL]);
	
	const allTags = useMemo(() => {
		const tagSet = new Set();
		blogs.forEach((b) => {
			const tags = b?.attributes?.tags?.data || [];
			tags.forEach((t) => t?.attributes?.name && tagSet.add(t.attributes.name));
		});
		return Array.from(tagSet).sort((a, b) => a.localeCompare(b));
	}, [blogs]);
	
	return (
		<div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
			{/* Hero */}
			<section className="relative overflow-hidden">
				<div className="absolute inset-0 -z-10 opacity-50 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
				<div className="mx-auto max-w-6xl px-6 py-16">
					<motion.h1
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900"
					>
						Insights & Stories
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="mt-3 max-w-2xl text-slate-600"
					>
						Read our latest articles, tutorials, and product updates.
					</motion.p>
					
					{/* Search + Tags */}
					<div className="mt-8 flex flex-col gap-4">
						<div className="flex items-center gap-3">
							<div className="relative w-full">
								<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
								<Input
									placeholder="Search articles..."
									value={q}
									onChange={(e) => setQ(e.target.value)}
									className="pl-9 h-11 rounded-2xl shadow-sm"
								/>
							</div>
							<Button onClick={() => setQ("")} variant="secondary" className="rounded-2xl">
								Clear
							</Button>
						</div>
						
						{allTags.length > 0 && (
							<div className="flex flex-wrap items-center gap-2">
								<span className="text-sm text-slate-500 flex items-center gap-1"><Tag className="h-4 w-4" /> Tags:</span>
								<Badge
									onClick={() => setActiveTag(null)}
									className={`cursor-pointer rounded-2xl px-3 py-1 ${activeTag === null ? "bg-slate-900 text-white" : ""}`}
								>
									All
								</Badge>
								{allTags.map((t) => (
									<Badge
										key={t}
										onClick={() => setActiveTag(t === activeTag ? null : t)}
										className={`cursor-pointer rounded-2xl px-3 py-1 ${activeTag === t ? "bg-slate-900 text-white" : ""}`}
									>
										{t}
									</Badge>
								))}
							</div>
						)}
					</div>
				</div>
			</section>
			
			{/* Content */}
			<section className="mx-auto max-w-6xl px-6 pb-20">
				{error && (
					<div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700">
						{error}
					</div>
				)}
				
				{/* Grid */}
				{loading && page === 1 ? (
					<BlogSkeletonGrid />
				) : blogs.length === 0 ? (
					<EmptyState />
				) : (
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{blogs.map((item) => (
							<BlogCard key={item.id} item={item} makeImageUrl={makeImageUrl} />
						))}
					</div>
				)}
				
				{/* Load more */}
				{hasMore && (
					<div className="mt-10 flex justify-center">
						<Button
							onClick={() => setPage((p) => p + 1)}
							disabled={loadingMore}
							className="rounded-2xl px-6"
						>
							{loadingMore ? "Loading..." : (
								<span className="inline-flex items-center gap-2">Load more <ArrowRight className="h-4 w-4" /></span>
							)}
						</Button>
					</div>
				)}
			</section>
		</div>
	);
}

function BlogCard({ item, makeImageUrl }) {
	const a = item?.attributes || {};
	const cover = a?.cover?.data?.attributes || {};
	const img = makeImageUrl(cover?.url);
	
	const date = a?.publishedAt ? new Date(a.publishedAt) : null;
	const author = a?.author?.data?.attributes;
	const tags = a?.tags?.data || [];
	
	return (
		<motion.div
			initial={{ opacity: 0, y: 12 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.35 }}
		>
			<Card className="overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow">
				<a href={`#/blog/${item.id}`} className="block">
					<div className="aspect-[16/10] bg-slate-100">
						{img ? (
							<img
								src={img}
								alt={cover?.alternativeText || a.title}
								className="h-full w-full object-cover"
								loading="lazy"
							/>
						) : (
							<div className="h-full w-full bg-gradient-to-br from-slate-100 to-slate-200" />
						)}
					</div>
				</a>
				
				<div className="p-5">
					<div className="flex flex-wrap gap-2 mb-3">
						{tags.slice(0, 3).map((t) => (
							<Badge key={t.id} className="rounded-2xl">{t?.attributes?.name}</Badge>
						))}
					</div>
					
					<a href={`#/blog/${item.id}`} className="block">
						<h3 className="text-lg font-semibold text-slate-900 line-clamp-2">{a.title}</h3>
						{a.excerpt && (
							<p className="mt-2 text-sm text-slate-600 line-clamp-3">{a.excerpt}</p>
						)}
					</a>
					
					<div className="mt-4 flex items-center justify-between text-xs text-slate-500">
						<div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-4 w-4" /> {date ? date.toLocaleDateString() : "—"}
              </span>
							<span className="inline-flex items-center gap-1">
                <User className="h-4 w-4" /> {author?.name || "Unknown"}
              </span>
						</div>
						<a href={`#/blog/${item.id}`} className="text-slate-700 hover:text-slate-900 font-medium">Read</a>
					</div>
				</div>
			</Card>
		</motion.div>
	);
}

function BlogSkeletonGrid() {
	return (
		<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{Array.from({ length: 9 }).map((_, i) => (
				<Card key={i} className="overflow-hidden rounded-2xl">
					<Skeleton className="h-40 w-full" />
					<div className="p-5 space-y-3">
						<Skeleton className="h-5 w-3/4" />
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-5/6" />
						<div className="flex gap-2">
							<Skeleton className="h-6 w-16" />
							<Skeleton className="h-6 w-16" />
						</div>
					</div>
				</Card>
			))}
		</div>
	);
}

function EmptyState() {
	return (
		<div className="rounded-2xl border border-slate-200 p-10 text-center">
			<h3 className="text-lg font-semibold text-slate-900">No articles found</h3>
			<p className="mt-1 text-slate-600">Try clearing filters or search for another term.</p>
		</div>
	);
}
