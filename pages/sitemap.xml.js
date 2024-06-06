function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <!--	created with www.mysitemapgenerator.com	-->
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>https://www.sses.pk/</loc>
<lastmod>2024-06-06T12:05:35+01:00</lastmod>
<priority>0.4</priority>
</url>
<url>
<loc>https://www.sses.pk/services-details/solar-water-pumping-system/</loc>
<lastmod>2024-06-06T12:05:35+01:00</lastmod>
<priority>0.1</priority>
</url>
<url>
<loc>https://www.sses.pk/about/</loc>
<lastmod>2024-06-06T12:05:37+01:00</lastmod>
<priority>0.8</priority>
</url>
<url>
<loc>https://www.sses.pk/services/</loc>
<lastmod>2024-06-06T12:05:38+01:00</lastmod>
<priority>0.8</priority>
</url>
<url>
<loc>https://www.sses.pk/project/</loc>
<lastmod>2024-06-06T12:05:38+01:00</lastmod>
<priority>0.8</priority>
</url>
<url>
<loc>https://www.sses.pk/faq/</loc>
<lastmod>2024-06-06T12:05:39+01:00</lastmod>
<priority>0.8</priority>
</url>
<url>
<loc>https://www.sses.pk/contact/</loc>
<lastmod>2024-06-06T12:05:39+01:00</lastmod>
<priority>0.8</priority>
</url>
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  // Send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}
