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
import { getFilteredStrapiContent } from "@/services/ApiService";
import { NextSeoCom } from "@/components/meta/NextSeoCom";

export default function Home({ data, layout }) {
  const objKey = "main";
  return (
    <>
    <NextSeoCom data={{...layout?.meta}} />
    <main>
     <Layout headerCls="transparent-header" data={layout} objKey={objKey}>
        <Banner1
          data={data?.banner}
          sliderImages={data?.sliderImages}
          objKey={objKey}
        />
        <Features1 data={data?.boards} objKey={"main-board-1"} />
        <About1 data={data?.aboutSection} objKey={objKey} />
        <Services1 data={data?.servicePage} objKey={"services"} />
        <Project1 data={data?.boards} objKey={"main-board-3"} />
        <Team1 data={data?.boards} objKey={"team"} />
        {/* <Counter1 /> */}
        <Testimonial1 data={data?.boards} objKey={"testimonials"} />
        {/* <Blog1 /> */}
        {/* <Newsletter1 /> */}
      </Layout>
     </main>
    </>
  );
}

export async function getStaticProps() {
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
    const boards = await getFilteredStrapiContent(strapiApiPath.BOARDS);
    const aboutSection = await getFilteredStrapiContent(
      strapiApiPath.ABOUT_SECTION_HOME
    );
    const sliderImages = await getFilteredStrapiContent(
      strapiApiPath.SLIDER_IMAGES
    );
    const team = await getFilteredStrapiContent(strapiApiPath.TEAM);
    const testimonials = await getFilteredStrapiContent(
      strapiApiPath.TESTIMONIALS
    );

    const servicePage = await getFilteredStrapiContent(
      strapiApiPath.SERVICE_PAGE
    );

    if (layout && profile) {
      layout["profile"] = profile;
    }
    if (banners && banners.length) {
      data["banner"] = banners[0];
    }
    data["boards"] = boards;
    data["servicePage"] = servicePage;
    data["aboutSection"] = aboutSection;
    data["sliderImages"] = sliderImages;
    data["team"] = team;
    data["testimonials"] = testimonials;

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
