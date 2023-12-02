import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { getFilteredStrapiContent } from "@/services/ApiService";
import { strapiApiPath } from "@/constants/ApiPath";
import Image from "next/image";
import { strapiImageLoader } from "@/helpers/util";
import { services } from "@/components/sections/items";
import { useRouter } from "next/router";

export default function ServiceDetails({ data, layout }) {
  const router = useRouter();
  const pageData = data?.pageData;
  data["services"] = data?.services ?? services;
  const service = data.services.find((d) => d.slug === router?.query?.slug);

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
                          {data.services.map((item) => {
                            return (
                              <li>
                                <Link
                                  href={`${item?.button_link}/${item?.slug}`}
                                  shallow={true}
                                >
                                  {item?.service_identifier}
                                  <i className="fas fa-arrow-right" />
                                </Link>
                              </li>
                            );
                          })}
                          {/* <li>
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
                          </li> */}
                        </ul>
                      </div>
                    </div>
                    <div
                      className="services-widget widget-bg"
                      data-background="/assets/img/services/sw_bg.jpg"
                    >
                      <h4 className="widget-title">{data?.form?.title}</h4>
                      <form action="#" className="sidebar-form">
                        {data?.form?.input_fields &&
                          data?.form?.input_fields.map((item, index) => {
                            return item?.type !== "textarea" ? (
                              <div key={index} className="form-grp">
                                <input
                                  id={item?.id}
                                  type={item?.type}
                                  placeholder={item?.placeholder}
                                />
                              </div>
                            ) : (
                              <div key={index} className="form-grp">
                                <textarea
                                  id={item?.id}
                                  placeholder={item?.placeholder}
                                />
                              </div>
                            );
                          })}
                        <button type="submit" className="btn btn-two">
                          {data?.form.button_text}
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
    let data = {
      slug,
    };
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
    const services = await getFilteredStrapiContent(strapiApiPath.SERVICES);
    const form = await getFilteredStrapiContent(strapiApiPath.QUOTATION_FORM);

    if (layout && profile) {
      layout["profile"] = profile;
    }

    if (banners && banners.length) {
      data["banner"] = banners[0];
    }

    data["pageData"] = pageData;
    data["services"] = services;
    data["form"] = form;

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
