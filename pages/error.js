import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Custom404() {
  return (
    <>
      <Layout breadcrumbTitle="Error Pages">
        <section className="error-area pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="error-img">
                  <img src="/assets/img/images/404_img.png" alt="" />
                </div>
                <div className="error-content">
                  <h2 className="title">Oops! Page Not Found.</h2>
                  <Link href="/" className="btn">
                    Back to Home page
                  </Link>
                </div>
              </div>
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
