// import { Service1 } from "@/components/content/services";
import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Service1,
  Service2,
  Service3,
  Service4,
  Service5,
} from "@/components/content/services";
import { getFilteredStrapiContent } from "@/services/ApiService";
import { strapiApiPath } from "@/constants/ApiPath";
import Image from "next/image";
import { strapiImageLoader } from "@/helpers/util";

const services = [
  {
    slug: "solar-water-pumping-system",
    title: "Solar Water Pumping System",
    img: ``,
    content: <Service1 />,
  },
  {
    slug: "On-Grid-Solar-PV-System",
    title: "ON-GRID SOLAR SYSTEM",
    img: ``,
    content: <Service2 />,
  },
  {
    slug: "Off-Grid-Solar-PV-System",
    title: "OFF-GRID SOLAR SYSTEM",
    img: ``,
    content: <Service3 />,
  },
  {
    slug: "Hybrid-Solar-PV-System",
    title: "Hybrid Solar PV System",
    img: ``,
    content: <Service4 />,
  },
  {
    slug: "Solar-Water-Heater-System",
    title: "Metal Engineering",
    img: ``,
    content: <Service5 />,
  },
];
export default function ServiceDetails({ data, layout }) {
  const pageData = data?.pageData;
  const service = data?.service;

  return (
    <>
      <Layout breadcrumbTitle="Service Details" data={layout}>
        <div>
          <section className="services-details-area pt-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="services-details-wrap">
                    <div className="services-details-thumb">
                      <Image
                        src={service?.media?.url}
                        alt=""
                        width={956}
                        height={390}
                        loader={strapiImageLoader}
                      />
                    </div>
                    <h2 className="title">{service?.title}</h2>
                    <div
                      className="services-details-content"
                      dangerouslySetInnerHTML={{
                        __html: service?.content,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                  <aside className="services-sidebar">
                    <div className="services-widget">
                      <h4 className="widget-title">
                        {pageData?.all_services_text}
                      </h4>
                      <div className="our-services-list">
                        <ul className="list-wrap">
                          <li>
                            <Link href="/services-details/solar-water-pumping-system">
                              Solar Water Pumping System
                              <i className="fas fa-arrow-right" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/services-details/On-Grid-Solar-PV-System">
                              ON-GRID SOLAR SYSTEM
                              <i className="fas fa-arrow-right" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/services-details/Off-Grid-Solar-PV-System">
                              OFF-GRID SOLAR SYSTEM
                              <i className="fas fa-arrow-right" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/services-details/Hybrid-Solar-PV-System">
                              Hybrid Solar PV System
                              <i className="fas fa-arrow-right" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/services-details/Solar-Water-Heater-System">
                              Metal Engineering
                              <i className="fas fa-arrow-right" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="services-widget widget-bg"
                      data-background="/assets/img/services/sw_bg.jpg"
                    >
                      <h4 className="widget-title">{pageData?.qoute_text}</h4>
                      <form action="#" className="sidebar-form">
                        <div className="form-grp">
                          <input
                            id="name"
                            type="text"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="form-grp">
                          <input
                            id="email"
                            type="text"
                            placeholder="Your Email Address"
                          />
                        </div>
                        <div className="form-grp">
                          <input
                            id="phone"
                            type="text"
                            placeholder="Your Phone"
                          />
                        </div>
                        <div className="form-grp">
                          <input
                            id="subject"
                            type="text"
                            placeholder="Enter Subject"
                          />
                        </div>
                        <div className="form-grp">
                          <textarea id="message" placeholder="Your Message" />
                        </div>
                        <button type="submit" className="btn btn-two">
                          {pageData?.button_text}
                        </button>
                      </form>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </section>
          {/* services-details-area-end */}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  try {
    let data = {};
    const layout = await getFilteredStrapiContent(strapiApiPath.LAYOUT);
    const profile = await getFilteredStrapiContent(
      strapiApiPath.COMPANY_PROFILE
    );
    const banners = await getFilteredStrapiContent(strapiApiPath.BANNERS, [
      {
        slug: "main",
      },
    ]);

    const pageData =
      (await getFilteredStrapiContent(strapiApiPath.SERVICE_LAYOUT)) ?? {};
    const services = await getFilteredStrapiContent(strapiApiPath.SERVICES, [
      {
        slug: slug,
      },
    ]);

    if (layout && profile) {
      layout["profile"] = profile;
    }

    if (banners && banners.length) {
      data["banner"] = banners[0];
    }

    if (services && services.length) {
      data["service"] = services[0];
    }
    data["pageData"] = pageData;

    return {
      props: {
        layout: layout ?? {},
        data: data,
      },
      revalidate: 20,
    };
  } catch (error) {
    return {
      props: {
        error: JSON.parse(JSON.stringify(error)),
      },
    };
  }
}

export const getStaticPaths = async () => {
  const services = await getFilteredStrapiContent(strapiApiPath.SERVICES, [], {
    limit: 10,
  });
  let paths = [
    {
      params: {
        slug: "",
      },
    },
  ];
  for (let i = 0; i < services.length; i++) {
    paths.push({
      params: { slug: `${services[i].slug}` },
    });
  }
  return {
    paths: paths,
    fallback: false,
  };
};
