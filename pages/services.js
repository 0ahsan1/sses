import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import Counter2 from "@/components/sections/Counter2";
import Services1 from "@/components/sections/Services1";
import { strapiApiPath } from "@/constants/ApiPath";
import { getFilteredStrapiContent } from "@/services/ApiService";

export default function Service({ data, layout }) {
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
      <Layout breadcrumbTitle="Services" data={layout} objKey="services">
        <Services1 data={data?.servicePage} objKey="services" />
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
        slug: "services",
      },
    ]);
    const servicePage = await getFilteredStrapiContent(
      strapiApiPath.SERVICE_PAGE
    );
    if (layout && profile) {
      layout["profile"] = profile;
    }
    if (banners && banners.length) {
      layout["banner"] = banners[0];
    }

    data["servicePage"] = servicePage;

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
