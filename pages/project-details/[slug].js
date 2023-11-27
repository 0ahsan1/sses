import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import { useRouter } from "next/router";
import { projects } from "../project";
import { getFilteredStrapiContent } from "@/services/ApiService";
import { strapiApiPath } from "@/constants/ApiPath";
import { Project1 } from "@/components/content/projects";
import Image from "next/image";
import { dateFormatter, strapiImageLoader } from "@/helpers/util";

export default function ProjectDetails({ data }) {
  const router = useRouter();
  const { slug } = router.query;
  const project = (data.projects ?? projects).find((s) => s.slug === slug);

  return (
    <>
      <Layout breadcrumbTitle="Project Details" data={data?.layout}>
        <div>
          <section className="project-details-area pt-120">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="project-details-wrap">
                    <div className="project-details-thumb">
                      <Image
                        src={project?.media?.url}
                        alt=""
                        width={956}
                        height={390}
                        loader={strapiImageLoader}
                      />
                    </div>
                    <div className="project-details-content">
                      <h2 className="title">{project?.about_project_text}</h2>
                      <p className="info-one">{project?.content}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <aside className="project-sidebar">
                    <div className="project-widget">
                      <h4 className="widget-title">
                        {project?.project_details_text}
                      </h4>
                      <div className="project-info-list">
                        <ul className="list-wrap">
                          <li>
                            <span>Date :</span>{" "}
                            {dateFormatter(new Date(project?.date), "LL")}
                          </li>
                          <li>
                            <span>Clients :</span> {project?.clients}
                          </li>
                          <li>
                            <span>Category:</span> {project?.category}
                          </li>
                          <li>
                            <span>Location :</span> {project?.location}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </section>
          {/* project-details-area-end */}
          {/* brand-area */}
          <Brand3 data={data?.sliderImages} />
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
    const projects = await getFilteredStrapiContent(strapiApiPath.PROJECTS, [
      {
        slug,
      },
    ]);
    const sliderImages = await getFilteredStrapiContent(
      strapiApiPath.SLIDER_IMAGES,
      [
        {
          slug: "projects",
        },
      ]
    );

    if (layout && profile) {
      layout["profile"] = profile;
    }
    data["layout"] = layout;
    data["projects"] = projects;
    data["sliderImages"] = sliderImages;

    return {
      props: {
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
  const projects = await getFilteredStrapiContent(strapiApiPath.PROJECTS, [], {
    limit: 10,
  });
  // let paths = [];
  let paths = [
    {
      params: {
        slug: "",
      },
    },
  ];
  for (let i = 0; i < projects.length; i++) {
    paths.push({
      params: { slug: `${projects[i].slug}` },
    });
  }
  return {
    paths: paths,
    fallback: false,
  };
};
