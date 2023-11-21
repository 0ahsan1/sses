import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import { useRouter } from "next/router";
import { projects } from "../project";

export default function ProjectDetails() {
  const router = useRouter();
  let comp = <></>;
  const { slug } = router.query;
  comp = projects.find((s) => s.link === slug).content;
  console.log("comp", comp);

  return (
    <>
      <Layout breadcrumbTitle="Project Details">
        <div>
          <section className="project-details-area pt-120">
            <div className="container">
              <div className="row">{comp}</div>
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

// export async function getStaticProps() {
//   try {
//     let data = {};
//     const layout = await getFilteredStrapiContent(strapiApiPath.LAYOUT);
//     const profile = await getFilteredStrapiContent(
//       strapiApiPath.COMPANY_PROFILE
//     );
//     const banners = await getFilteredStrapiContent(strapiApiPath.BANNERS, [
//       {
//         slug: "main",
//       },
//     ]);
//     const boards = await getFilteredStrapiContent(strapiApiPath.BOARDS);
//     const aboutSection = await getFilteredStrapiContent(
//       strapiApiPath.ABOUT_SECTION
//     );
//     const sliderImages = await getFilteredStrapiContent(
//       strapiApiPath.SLIDER_IMAGES
//     );
//     const team = await getFilteredStrapiContent(strapiApiPath.TEAM);
//     const testimonials = await getFilteredStrapiContent(
//       strapiApiPath.TESTIMONIALS
//     );

//     if (layout && profile) {
//       layout["profile"] = profile;
//     }

//     if (banners && banners.length) {
//       data["banner"] = banners[0];
//     }
//     data["boards"] = boards;
//     data["aboutSection"] = aboutSection;
//     data["sliderImages"] = sliderImages;
//     data["team"] = team;
//     data["testimonials"] = testimonials;

//     return {
//       props: {
//         layout: layout ?? {},
//         data: data,
//       },
//       revalidate: 20,
//     };
//   } catch (error) {
//     return {
//       props: {
//         error: JSON.parse(JSON.stringify(error)),
//       },
//     };
//   }
// }
