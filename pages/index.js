import Layout from "@/components/layout/Layout";

import Banner1 from "@/components/sections/Banner1";
import Brand1 from "@/components/sections/Brand1";
import Features1 from "@/components/sections/Features1";
import About1 from "@/components/sections/About1";
import Services1 from "@/components/sections/Services1";
import Project1 from "@/components/sections/Project1";
import Team1 from "@/components/sections/Team1";
import Counter1 from "@/components/sections/Counter1";
import Testimonial1 from "@/components/sections/Testimonial1";
import Blog1 from "@/components/sections/Blog1";
import Newsletter1 from "@/components/sections/Newsletter1";
import { strapiApiPath } from "@/constants/ApiPath";
import { getFilteredStrapiContent } from "@/services/ApiService";

export default function Home({ data }) {
    console.log('data: ', data);

    return (
        <>
            <Layout headerCls="transparent-header">
                <Banner1 />
                <Features1 />
                <About1 />
                <Services1 />
                <Project1 />
                <Team1 />
                {/* <Counter1 /> */}
                <Testimonial1 />
                {/* <Blog1 /> */}
                {/* <Newsletter1 /> */}
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    try {
        let data = await getFilteredStrapiContent(strapiApiPath.HOME);
        // const layout = await getFilteredStrapiContent(
        //     strapiApiPath.BUSINESS.LAYOUT
        // );

        return {
            props: {
                // layout: layout ?? {},
                data: data ?? {},
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