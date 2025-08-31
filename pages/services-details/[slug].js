import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import { useRouter } from "next/router";
import { projects } from "../project";
import {getFilteredStrapiContent, strapiBasePath, strapiConfig} from "@/services/ApiService";
import { strapiApiPath } from "@/constants/ApiPath";
import { Project1 } from "@/components/content/projects";
import Image from "next/image";
import { dateFormatter, strapiImageLoader } from "@/helpers/util";
import { NextSeoCom } from "@/components/meta/NextSeoCom";
import axios from "axios";
import qs from "qs";
import {FAQ} from "@/components/FAQ";

export default function ServiceDetails({ data }) {
  
  console.log('ServiceDetails',data)
  return (
      <>
        <NextSeoCom meta={data?.meta_info} />
        
        <div>
          <section className="project-details-area pt-120">
            <div className="container">
              <div className="px-48">
                <div className="col-lg-12">
                  <div className="project-details-wrap">
                    <div className="project-details-thumb">
                      <Image
                          src={data?.image[0]?.url}
                          alt=""
                          width={956}
                          height={390}
                          loader={strapiImageLoader}
                      />
                    </div>
                    <div className="">
                      <h1 className="text-5xl max-w-5xl">{data?.title}</h1>
                      <p className="info-one"
                         dangerouslySetInnerHTML={{__html: data?.content}}
                      />
                    </div>
                  </div>
                </div>
                {/*<div className="col-lg-4">*/}
                {/*  <aside className="project-sidebar">*/}
                {/*    <div className="project-widget">*/}
                {/*      <h4 className="widget-title">*/}
                {/*        {'Project Details'}*/}
                {/*      </h4>*/}
                {/*      <div className="project-info-list">*/}
                {/*        <table class="table-auto text-sm">*/}
                {/*          <tr>*/}
                {/*            <th>Date</th>*/}
                {/*            <td className="px-4 py-2">{dateFormatter(new Date(data?.info?.date), "LL")} </td>*/}
                {/*          </tr>*/}
                {/*          <tr>*/}
                {/*            <th>Client</th>*/}
                {/*            <td className="px-4 py-2">{data?.info?.customer}</td>*/}
                {/*          </tr>*/}
                {/*          <tr>*/}
                {/*            <th>Category</th>*/}
                {/*            <td className="px-4 py-2">{data?.info?.category}</td>*/}
                {/*          </tr>*/}
                {/*          <tr>*/}
                {/*            <th>Location</th>*/}
                {/*            <td className="px-4 py-2">{data?.info?.location}</td>*/}
                {/*          </tr>*/}
                {/*        </table>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*  </aside>*/}
                {/*</div>*/}
              </div>
            </div>
          </section>
          <FAQ data={data?.faq} />
        </div>
      </>
  );
}

export async function getServerSideProps(context) {
  const slug = context.params.slug;
  console.log('slug',slug)
  const queryObject = {
    filters: { slug: { $eq: slug } },
    populate: {
      meta_info: { populate: { image: true, keywords: true } },
      image: true,
      faq: { populate: "*" },
    },
  };
  try {
    const { data: resp } = await axios.get(
        `${strapiBasePath}/services`,
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
