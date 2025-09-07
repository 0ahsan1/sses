// pages/blogs/index.js
import BlogsPage from "@/components/BlogsPage"; // your component from canvas

export async function getServerSideProps({ query }) {
	const STRAPI_URL =
		process.env.NEXT_PUBLIC_STRAPI_URL ||
		process.env.STRAPI_URL ||
		"https://dev-content.sses.pk";
	
	const token = process.env.STRAPI_TOKEN; // optional (if public read is disabled)
	const headers = token ? { Authorization: `Bearer ${token}` } : {};
	
	// incoming query params (with defaults)
	const page = Number(query.page || 1);
	const pageSize = Number(query.pageSize || 9);
	const q = (query.q || "").toString();
	const tag = query.tag ? query.tag.toString() : null;
	
	const params = new URLSearchParams();
	
	// populate fields (mirror your client component)
	params.set("populate[cover][fields][0]", "url");
	params.set("populate[cover][fields][1]", "alternativeText");
	params.set("populate[author][populate][avatar][fields][0]", "url");
	params.set("populate[tags]", "*");
	
	// filters
	if (q.trim()) {
		params.set("filters[$or][0][title][$containsi]", q.trim());
		params.set("filters[$or][1][excerpt][$containsi]", q.trim());
	}
	if (tag) {
		params.set("filters[tags][name][$eq]", tag);
	}
	
	// sorting + pagination
	params.set("sort", "publishedAt:desc");
	params.set("pagination[page]", String(page));
	params.set("pagination[pageSize]", String(pageSize));
	
	const url = `${STRAPI_URL}/api/blogs?${params.toString()}`;
	
	try {
		const res = await fetch(url, { headers });
		if (!res.ok) {
			const body = await res.text();
			return {
				props: {
					ssrError: `Failed to fetch blogs (${res.status}). ${body.slice(0, 200)}`,
					initialBlogs: [],
					initialTotal: 0,
					initialPage: page,
					initialQ: q,
					initialTag: tag,
				},
			};
		}
		
		const json = await res.json();
		const items = json?.data || [];
		const total = json?.meta?.pagination?.total || items.length;
		
		return {
			props: {
				// You can pass these into your BlogsPage to hydrate initial state (optional)
				initialBlogs: items,
				initialTotal: total,
				initialPage: page,
				initialQ: q,
				initialTag: tag,
				apiBase: STRAPI_URL,
				token: token || null,
			},
		};
	} catch (err) {
		return {
			props: {
				ssrError: err?.message || "Unknown server error",
				initialBlogs: [],
				initialTotal: 0,
				initialPage: page,
				initialQ: q,
				initialTag: tag,
				apiBase: STRAPI_URL,
				token: token || null,
			},
		};
	}
}

export default function BlogsIndex(props) {
	// Your current BlogsPage fetches on the client.
	// You can still render it as-is, or (recommended) teach it to accept
	// initialBlogs/initialTotal to avoid the first-load spinner.
	return <BlogsPage apiBase={props.apiBase} token={props.token} />;
}
