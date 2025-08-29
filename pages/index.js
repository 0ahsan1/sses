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
import axios from "axios";

export default function Home({ data,error }) {
  const objKey = "main";
  console.log(data,error);
  
  return (
    <>
    <NextSeoCom meta={data?.meta_info} />
    <main>
     {/*<Layout headerCls="transparent-header" data={layout} objKey={objKey}>*/}
        <Banner1
          data={data?.banner}
          sliderImages={data?.sliderImages}
          objKey={objKey}
        />
        <Features1 data={data?.boards} objKey={"main-board-1"} />
        <About1 data={data?.aboutSection} objKey={objKey} />
        <Services1 data={data?.servicePage} objKey={"services"} />
        <Project1 data={data?.boards} objKey={"main-board-3"} />
        {/*<Team1 data={data?.boards} objKey={"team"} />*/}
         {/*<Counter1 /> */}
        <Testimonial1 data={data?.boards} objKey={"testimonials"} />
         {/*<Blog1 /> */}
         {/*<Newsletter1 /> */}
      {/*</Layout>*/}
     </main>
    </>
  );
}

export async function getStaticProps() {
    const slug = 'home';
  try {
      const content = await getFilteredStrapiContent(strapiApiPath.WEB_PAGES,[
        {
            slug: slug,
            type: '$eq'
        }])

    return {
      props: {
          data: content ? JSON.parse(JSON.stringify(content[0])) : {},
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
