// components/RichTextRenderer.jsx
import React from "react";
// If you're on Next.js and want optimized images:
import Image from "next/image"; // or delete + use <img />

function classNames(...xs) {
	return xs.filter(Boolean).join(" ");
}

function withBase(url, base) {
	if (!url) return "";
	if (/^https?:\/\//i.test(url)) return url;
	if (!base) return url; // assume already absolute or proxied
	return `${base}${url}`;
}

function renderLeaf(node, idx) {
	let el = node.text ?? null;
	
	if (node.code) {
		el = <code className="rounded bg-zinc-100 px-1 py-0.5 text-[.95em]">{el}</code>;
	}
	if (node.bold) el = <strong>{el}</strong>;
	if (node.italic) el = <em>{el}</em>;
	if (node.underline) el = <u>{el}</u>;
	if (node.strikethrough) el = <s>{el}</s>;
	
	return <React.Fragment key={idx}>{el}</React.Fragment>;
}

function renderInline(children = [], mediaBaseUrl) {
	return children.map((child, i) => {
		if (child.type === "link") {
			const url = withBase(child.url, mediaBaseUrl);
			return (
				<a
					key={`link-${i}-${url}`}
					href={url}
					target={/^https?:\/\//.test(url) ? "_blank" : undefined}
					rel="noopener noreferrer"
					className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
				>
					{renderInline(child.children, mediaBaseUrl)}
				</a>
			);
		}
		
		if (child.type === "image" || child.image) {
			const img = child.image || child;
			const src = withBase(img.url, mediaBaseUrl);
			
			// If not on Next.js, replace with: <img src={src} alt={img.alternativeText || ""} />
			return (
				<span key={`img-${i}`} className="inline-block align-middle mx-2 my-1">
          <Image
	          src={src}
	          alt={img.alternativeText || ""}
	          width={img.width || 800}
	          height={img.height || 450}
	          className="inline-block rounded"
          />
        </span>
			);
		}
		
		return renderLeaf(child, i);
	});
}

function renderBlock(block, idx, mediaBaseUrl) {
	switch (block.type) {
		case "paragraph":
			return (
				<p key={idx} className="mb-4 leading-relaxed text-gray-800">
					{renderInline(block.children, mediaBaseUrl)}
				</p>
			);
		
		case "heading": {
			const lvl = block.level ?? 2;
			const map = {
				1: "text-3xl md:text-4xl font-extrabold tracking-tight mt-6 mb-3",
				2: "text-2xl md:text-3xl font-bold tracking-tight mt-5 mb-3",
				3: "text-xl md:text-2xl font-semibold mt-4 mb-2.5",
				4: "text-lg md:text-xl font-semibold mt-4 mb-2",
				5: "text-base md:text-lg font-semibold mt-3 mb-1.5",
				6: "text-base font-semibold mt-3 mb-1.5",
			};
			const className = classNames(map[lvl] || map[2], "text-gray-900");
			const Tag = `h${lvl}`;
			return <Tag key={idx} className={className}>{renderInline(block.children, mediaBaseUrl)}</Tag>;
		}
		
		case "list": {
			const ordered = block.format === "ordered";
			const ListTag = ordered ? "ol" : "ul";
			return (
				<ListTag key={idx} className={classNames("mb-4 pl-6", ordered ? "list-decimal" : "list-disc")}>
					{(block.children || []).map((li, i) => (
						<li key={`li-${idx}-${i}`} className="mb-1">
							{renderInline(li.children, mediaBaseUrl)}
						</li>
					))}
				</ListTag>
			);
		}
		
		case "list-item":
			return (
				<li key={idx} className="mb-1">
					{renderInline(block.children, mediaBaseUrl)}
				</li>
			);
		
		case "quote":
			return (
				<blockquote key={idx} className="mb-4 border-l-4 border-zinc-300 pl-4 italic text-zinc-700">
					{renderInline(block.children, mediaBaseUrl)}
				</blockquote>
			);
		
		case "code": {
			const codeText =
				block.code ??
				(block.children || []).map((c) => c.text ?? "").join("");
			return (
				<pre key={idx} className="mb-4 overflow-auto rounded-lg bg-zinc-900 p-4 text-zinc-100 text-sm">
          <code className="whitespace-pre">{codeText}</code>
        </pre>
			);
		}
		
		case "thematicBreak":
			return <hr key={idx} className="my-8 border-zinc-200" />;
		
		case "image": {
			const img = block.image;
			if (!img?.url) return null;
			const src = withBase(img.url, mediaBaseUrl);
			return (
				<figure key={idx} className="my-6">
					<Image
						src={src}
						alt={img.alternativeText || ""}
						width={img.width || 1200}
						height={img.height || 675}
						className="rounded"
					/>
					{img.alternativeText ? (
						<figcaption className="mt-2 text-sm text-gray-500">{img.alternativeText}</figcaption>
					) : null}
				</figure>
			);
		}
		
		default:
			return (
				<div key={idx} className="mb-4">
					{renderInline(block.children, mediaBaseUrl)}
				</div>
			);
	}
}

export default function RichTextRenderer({ content, mediaBaseUrl }) {
	if (!content || !Array.isArray(content) || content.length === 0) return null;
	return <div>{content.map((b, i) => renderBlock(b, i, mediaBaseUrl))}</div>;
}
