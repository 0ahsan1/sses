import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import { useRouter } from "next/router";
import { projects } from "../project";
import { getFilteredStrapiContent } from "@/services/ApiService";
import { strapiApiPath } from "@/constants/ApiPath";
import { Project1 } from "@/components/content/projects";

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
                <Project1 data={project} />
              </div>
            </div>
          </section>
          {/* project-details-area-end */}
          {/* brand-area */}
          <Brand3 />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps(context) {
  console.log("context: ", context);
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
    const boards = await getFilteredStrapiContent(strapiApiPath.BOARDS);
    const aboutSection = await getFilteredStrapiContent(
      strapiApiPath.ABOUT_SECTION
    );
    const sliderImages = await getFilteredStrapiContent(
      strapiApiPath.SLIDER_IMAGES
    );
    const team = await getFilteredStrapiContent(strapiApiPath.TEAM);
    const testimonials = await getFilteredStrapiContent(
      strapiApiPath.TESTIMONIALS
    );

    if (layout && profile) {
      layout["profile"] = profile;
    }

    if (banners && banners.length) {
      data["banner"] = banners[0];
    }
    data["layout"] = layout;
    data["boards"] = boards;
    data["projects"] = projects;
    data["aboutSection"] = aboutSection;
    data["sliderImages"] = sliderImages;
    data["team"] = team;
    data["testimonials"] = testimonials;

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
  let paths = [{ params: { slug: "5-k-w-kangoori-shah-noorani" } }];
  return {
    paths: paths,
    fallback: false,
  };
};
