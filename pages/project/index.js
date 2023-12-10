import Layout from "@/components/layout/Layout";
import Link from "next/link";
import {
  Project1,
  Project3,
  Project10,
  Project11,
  Project12,
  Project13,
  Project14,
  Project15,
  Project16,
  Project17,
  Project2,
  Project4,
  Project5,
  Project6,
  Project7,
  Project8,
  Project9,
} from "@/components/content/projects";
import { getFilteredStrapiContent } from "@/services/ApiService";
import { strapiApiPath } from "@/constants/ApiPath";
import Image from "next/image";
import { strapiImageLoader } from "@/helpers/util";

export const projects = [
  {
    title: "Shah Noorani",
    type: "SOLAR WATER PUMPING SYSTEM",
    link: "shah-noorani",
    media: { url: "/assets/img/project1/project-01.jpg" },
    content: <Project1 />,
  },
  {
    title: "Harambove, Khuzdar",
    type: "SOLAR WATER PUMPING SYSTEM",
    link: "harambove-wadh",
    media: { url: "/assets/img/project1/project-02.jpg" },
    content: <Project2 />,
  },
  {
    title: "Noorani Dargah",
    type: "SOLAR WATER PUMPING SYSTEM",
    link: "noorani-dargah",
    media: { url: "/assets/img/project1/project-03.jpg" },
    content: <Project3 />,
  },
  {
    title: "Yusuf Shah Goth",
    type: "SOLAR WATER PUMPING SYSTEM",
    link: "yusuf-shah-goth",
    media: { url: "/assets/img/project1/project-04.jpg" },
    content: <Project4 />,
  },
  {
    title: "Khuzdar Sunni",
    type: "SOLAR WATER PUMPING SYSTEM",
    link: "khuzdar-sunni",
    media: { url: "/assets/img/project1/project-05.jpg" },
    content: <Project5 />,
  },
  {
    title: "Trickle Irrigation",
    type: "SOLAR WATER PUMPING SYSTEM",
    link: "trickle-irrigation",
    media: { url: "/assets/img/project1/project-06.jpg" },
    content: <Project6 />,
  },
  {
    title: "Tuk District Khuzdar",
    type: "SOLAR WATER PUMPING SYSTEM",
    link: "tuk-district-khuzdar",
    media: { url: "/assets/img/project1/project-07.jpg" },
    content: <Project7 />,
  },
  {
    title: "Kaka Heer, Wadh",
    type: "SOLAR WATER PUMPING SYSTEM",
    link: "kaka-heer-wadh",
    media: { url: "/assets/img/project1/project-08.jpg" },
    content: <Project8 />,
  },
  {
    title: "Lasbela University",
    type: "SOLAR WATER PUMPING SYSTEM",
    link: "lasbela-university",
    media: { url: "/assets/img/project1/project-09.jpg" },
    content: <Project9 />,
  },
  {
    title: "Gulshan e Maymar",
    type: "On GRID SOLAR SYSTEM",
    link: "gulshan-e-maymar",
    media: { url: "/assets/img/project1/project-10.jpg" },
    content: <Project10 />,
  },
  {
    title: "KDA Scheme",
    type: "On GRID SOLAR SYSTEM",
    link: "kda-scheme-1-ext",
    media: { url: "/assets/img/project1/project-11.jpg" },
    content: <Project11 />,
  },
  {
    title: "Azeem Town Safoora",
    type: "Off GRID SOLAR SYSTEM",
    link: "azeem-town-safoora",
    media: { url: "/assets/img/project1/project-12.jpg" },
    content: <Project12 />,
  },
  {
    title: "Itehaad Town Orangi",
    type: "Off GRID SOLAR SYSTEM",
    link: "itehaad-town-orangi",
    media: { url: "/assets/img/project1/project-13.jpg" },
    content: <Project13 />,
  },
  {
    title: "Karsaz, Karachi",
    type: "Off GRID SOLAR SYSTEM",
    link: "karsaz-karachi",
    media: { url: "/assets/img/project1/project-14.jpg" },
    content: <Project14 />,
  },
  {
    title: "Solar Geysers",
    type: "OTHER PROJECTS",
    link: "Solar-Geysers",
    media: { url: "/assets/img/project1/project-15.jpg" },
    content: <Project15 />,
  },
  {
    title: "Solar Street Lights",
    type: "OTHER PROJECTS",
    link: "solar-street-light",
    media: { url: "/assets/img/project1/project-16.jpg" },
    content: <Project16 />,
  },
];

export default function Project({ data, layout }) {
  const pageData = data?.pageData;
  pageData["projects"] = data?.projects ?? projects;

  return (
    <>
      <Layout data={layout} objKey={"projects"}>
        <section className="inner-project-area pt-115 pb-90">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center mb-60">
                  <span className="sub-title">{pageData?.subtitle}</span>
                  <h2 className="title">{pageData?.title}</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              {pageData?.projects.map((item, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-10">
                  <div className="project-item-two text-center">
                    <div className="project-thumb-two">
                      <Link href={"/project-details/" + item?.slug}>
                        <Image
                          src={item?.background_image?.url}
                          width={482}
                          height={482}
                          loader={strapiImageLoader}
                        />
                        {/* <img src={item.media.url} alt="" /> */}
                      </Link>
                    </div>
                    <div className="project-content-two">
                      <span>{item?.type}</span>
                      <h2 className="title">
                        <Link href={"/project-details/" + item?.slug}>
                          {item?.project_identifier}
                        </Link>
                      </h2>
                      <Link
                        href={"/project-details/" + item?.slug}
                        className="link-btn"
                      >
                        <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                    <h5 className="mt-3">{item?.project_identifier}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  try {
    let data = {};
    const layout = (await getFilteredStrapiContent(strapiApiPath.LAYOUT)) ?? {};
    const profile = await getFilteredStrapiContent(
      strapiApiPath.COMPANY_PROFILE
    );
    const banners = await getFilteredStrapiContent(strapiApiPath.BANNERS, [
      {
        slug: "projects",
      },
    ]);
    data["pageData"] = await getFilteredStrapiContent(
      strapiApiPath.PROJECT_PAGE
    );
    data["projects"] = await getFilteredStrapiContent(strapiApiPath.PROJECTS);

    if (profile) {
      layout["profile"] = profile;
    }

    if (banners && banners.length) {
      layout["banner"] = banners[0];
    }

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
