import Layout from "@/components/layout/Layout";

import Banner1 from "@/components/sections/Banner1";
import Brand1 from "@/components/sections/Brand1";
import Features1 from "@/components/sections/Features1";
import About1 from "@/components/sections/About1";
import Services1 from "@/components/sections/Services1";
import Project1 from "@/components/sections/Project1";
import Team1 from "@/components/sections/Team1";
import Testimonial1 from "@/components/sections/Testimonial1";
import { strapiApiPath } from "@/constants/ApiPath";
import {getFilteredStrapiContent, strapiBasePath, strapiConfig} from "@/services/ApiService";
import { NextSeoCom } from "@/components/meta/NextSeoCom";
import axios from "axios";
import qs from 'qs';
import {HeroBanner} from "@/components/Banner";
import LeftContent from "@/components/LeftContent";
import {Navbar} from "@/components/Navbar";
import CTA from "@/components/CTA";
import {FAQ} from "@/components/FAQ";

export default function Services({ data,error }) {
  const objKey = "main";
  console.log('content',data);
  return (
      <>
        <NextSeoCom meta={data?.meta_info} />
        <Navbar />
        <main>
          {/*<Layout headerCls="transparent-header" data={layout} objKey={objKey}>*/}
            {data?.banner && <HeroBanner data={data.banner} />}
            {data?.boardA && <Features1 data={data.boardA} objKey="main-board-1" />}
            {data?.boardB && <LeftContent data={data.boardB} objKey={objKey} />}
            {data?.service_section && <Services1 data={data.service_section} objKey="services" />}
            {data?.ctaA && <CTA data={data.ctaA} objKey="cta" />}
            {data?.project_section && <Project1 data={data.project_section} objKey="main-board-3" />}
            {data?.boardC && <Team1 data={data.boardC} objKey="team" />}
            {data?.ctaB && <CTA data={data.ctaB} objKey="cta" />}
            {data?.testimonial && <Testimonial1 data={data.testimonial} objKey="testimonials" />}
            {data?.faq && <FAQ data={data.faq} objKey="faq" />}
            {data?.ctaC && <CTA data={data.ctaC} objKey="cta" />}
          {/*<Blog1 /> */}
          {/*<Newsletter1 /> */}
          {/*</Layout>*/}
        </main>
      </>
  );
}

export async function getServerSideProps() {
  const queryObject = {
    filters: { slug: { $eq: "services" } },
    populate: {
      meta_info: { populate: { image: true, keywords: true } },
      banner: { populate: "*" },
      service_section: {
        populate: {
          services: {
            populate: {
              image: true,          // Populate image inside each service
              button: {
                populate:'*'      // Populate icon inside button inside each service
              }
            }
          },
          button: {
            populate: {
              icon: true           // Populate icon inside main button of the service_section
            }
          }
        }
      },
      project_section: {
        populate: {
          projects: {
            populate: {
              image: true,
              info: true
            }
          },
          button: {
            populate: "*"
          }
        }
      },
      ctaA: { populate: "*" },
      ctaB: { populate: "*" },
      ctaC: { populate: "*" },
      testimonial: { populate: "*" },
      faq: { populate: "*" },
      boardA: { populate: {
          items: { populate: { image: true, bg_image: true, button: { populate: { icon: true } } } },
          image: true,
          button: { populate: { icon: true } },
        }},
      boardB: { populate: {
          items: { populate: { image: true, bg_image: true, button: { populate: { icon: true } } } },
          image: true,
          button: { populate: { icon: true } },
        }},
      boardC: { populate: {
          items: { populate: { image: true, bg_image: true, button: { populate: { icon: true } } } },
          image: true,
          button: { populate: { icon: true } },
        }},
      boardD: { populate: {
          items: { populate: { image: true, bg_image: true, button: { populate: { icon: true } } } },
          image: true,
          button: { populate: { icon: true } },
        }},
      boardE: { populate: {
          items: { populate: { image: true, bg_image: true, button: { populate: { icon: true } } } },
          image: true,
          button: { populate: { icon: true } },
        }},
      boardF: { populate: {
          items: { populate: { image: true, bg_image: true, button: { populate: { icon: true } } } },
          image: true,
          button: { populate: { icon: true } },
        }},
      boardG: { populate: {
          items: { populate: { image: true, bg_image: true, button: { populate: { icon: true } } } },
          image: true,
          button: { populate: { icon: true } },
        }},
    },
  };
  
  try {
    const { data: resp } = await axios.get(
        `${strapiBasePath}/webpages`,
        {
          // keep your auth headers etc. inside this same config object
          ...strapiConfig,
          params: queryObject,
          paramsSerializer: {
            serialize: (params) => qs.stringify(params, { encodeValuesOnly: true }),
          },
        }
    );
    
    // Strapi v4 shape: { data: [ { id, attributes: {...} } ], meta: {...} }
    const pageEntry = resp?.data?.[0] ?? null;
    
    console.log("Strapi meta:", resp?.meta);
    console.log("Found page id:", pageEntry?.id);
    
    return {
      props: {
        // if you want just attributes:
        data: pageEntry ? pageEntry : null,
      },
    };
  } catch (err) {
    // log useful error info
    console.error("Strapi error:", err?.response?.status, err?.response?.data || err?.message);
    return {
      props: {
        error: err?.response?.data ?? { message: err?.message || "Unknown error" },
      },
    };
  }
}

