import { strapiImageLoader } from "@/helpers/util"
import { NextSeo } from "next-seo"


export const NextSeoCom = (meta) => {

  return <NextSeo
        title={meta.title}
        description={meta.description}
        openGraph={{
          title: meta.title,
          description: meta.description,
          images: [
            {
              url: 'https://content.sses.pk/uploads/logonew_34af3ac113.png',
              width: 4500,
              height: 1728,
              alt: 'SSES logo',
              type: 'image/png',
            },
          ],
        }}
        twitter={{
          handle: "",
          site: "@MTFXLIVE",
          cardType: "summary",
        }}
      />
}