import { strapiImageLoader } from "@/helpers/util"
import { NextSeo } from "next-seo"
import Head from "next/head"


export const NextSeoCom = (meta) => {
  console.log('NextSeoCom', meta)
  return <Head>
      <NextSeo
        title={meta.title}
        description={meta.description}
        openGraph={{
          title: meta.og_title,
          description: meta.og_description,
          images: [
            {
              url: strapiImageLoader(meta.og_image?.url),
              width: meta.og_image?.width,
              height: meta.og_image?.height,
              alt: meta.og_image?.alternativeText,
              type: meta.og_image?.mime,
            },
          ],
        }}
        twitter={{
          handle: "",
          site: "@MTFXLIVE",
          cardType: "summary",
        }}
      />
  </Head>
}