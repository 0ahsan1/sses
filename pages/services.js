import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import Counter2 from "@/components/sections/Counter2";
import Services1 from "@/components/sections/Services1";

export default function Service() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <Layout breadcrumbTitle="Services">
        <Services1 />
      </Layout>
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
    data["boards"] = boards;
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
