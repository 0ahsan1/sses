// pages/blogs/[slug].js
export async function getServerSideProps({ params }) {
	const { slug } = params;
	const STRAPI_URL =
		process.env.NEXT_PUBLIC_STRAPI_URL ||
		process.env.STRAPI_URL ||
		"https://dev-content.sses.pk";
	
	const token = process.env.STRAPI_TOKEN; // optional
	const headers = token ? { Authorization: `Bearer ${token}` } : {};
	
	const p = new URLSearchParams();
	p.set("filters[slug][$eq]", slug);
	p.set("populate[cover][fields][0]", "url");
	p.set("populate[cover][fields][1]", "alternativeText");
	p.set("populate[author][populate][avatar][fields][0]", "url");
	p.set("populate[tags]", "*");
	
	const url = `${STRAPI_URL}/api/blogs?${p.toString()}`;
	
	try {
		const res = await fetch(url, { headers });
		if (!res.ok) return { notFound: true };
		const json = await res.json();
		const entry = Array.isArray(json?.data) ? json.data[0] : null;
		
		if (!entry) return { notFound: true };
		
		return {
			props: {
				blog: entry,
				apiBase: STRAPI_URL,
			},
		};
	} catch {
		return { notFound: true };
	}
}

export default function BlogDetail({ blog, apiBase }) {
	if (!blog) return null;
	
	const a = blog.attributes || {};
	const cover = a?.cover?.data?.attributes;
	const img = cover?.url
		? (cover.url.startsWith("http") ? cover.url : `${apiBase}${cover.url}`)
		: null;
	
	return (
		<main className="mx-auto max-w-3xl px-6 py-12">
			<h1 className="text-3xl font-bold">{a.title}</h1>
			{img && (
				<img
					src={img}
					alt={cover?.alternativeText || a.title}
					className="mt-6 rounded-xl"
				/>
			)}
			{a.excerpt && <p className="mt-4 text-slate-600">{a.excerpt}</p>}
			{a.content && (
				<article
					className="prose mt-8"
					dangerouslySetInnerHTML={{ __html: a.content }} // or render rich text properly
				/>
			)}
		</main>
	);
}
