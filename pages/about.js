import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import Brand1 from "@/components/sections/Brand1";
import Brand3 from "@/components/sections/Brand3";
import Testimonial1 from "@/components/sections/Testimonial1";
import { aboutSection } from "@/components/sections/items";
import { strapiApiPath } from "@/constants/ApiPath";
import { strapiImageLoader } from "@/helpers/util";
import { getFilteredStrapiContent } from "@/services/ApiService";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
const settings = {
  dots: true,
  autoplay: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function About({ data, layout }) {
  const objKey = "about";
  const aboutSection = data?.aboutSection ?? aboutSection;

  return (
    <>
      <Layout breadcrumbTitle="About Us" data={layout} objKey={objKey}>
        <section className="about-area inner-about-area pt-120 pb-120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                <div className="about-img-wrap">
                  <Image
                    src={aboutSection?.items[0]?.background_image?.url}
                    alt=""
                    className="wow fadeInRight"
                    data-wow-delay=".2s"
                    width={334}
                    height={543}
                    loader={strapiImageLoader}
                  />
                  <Image
                    src={aboutSection?.items[1]?.background_image?.url}
                    alt=""
                    className="wow fadeInRight"
                    data-wow-delay=".4s"
                    width={213}
                    height={386}
                    loader={strapiImageLoader}
                  />
                  <div className="about-experiences-wrap">
                    {aboutSection?.items.map((item) => {
                      return (
                        <div className="experiences-item">
                          <div className="icon">
                            <Image
                              src={item?.media?.url}
                              width={28}
                              height={32}
                              loader={strapiImageLoader}
                            />
                          </div>
                          <div className="content">
                            <h6 className="title">{item.title}</h6>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="about-content">
                  <div className="section-title mb-25">
                    <span className="sub-title">{aboutSection.subtitle}</span>
                    <h2 className="title">{aboutSection.title}</h2>
                  </div>
                  <p>{aboutSection.content}</p>
                  <div className="about-list">
                    <ul className="list-wrap">
                      <li>
                        <i className="fas fa-check" />
                        With our head office located in Karachi, SSES now have
                        expanded its setup with new branch offices opened at
                        Quetta and Wadh Khuzdar.
                      </li>
                    </ul>
                  </div>
                  <Link href={aboutSection?.button?.link} className="btn">
                    {aboutSection?.button?.title}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about-area-end */}
        {/* work-area */}
        {/* <section className="work-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="section-title text-center mb-50">
                                    <span className="sub-title">Working Plan</span>
                                    <h2 className="title">Roof Plan Working Process</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="work-item">
                                    <div className="work-thumb">
                                        <img src="/assets/img/images/work_img01.png" alt="" />
                                        <h4 className="number">01</h4>
                                    </div>
                                    <div className="work-content">
                                        <h2 className="title">Plan for Roofing</h2>
                                        <p>Suffered alteration in some a form, by injected humour, or randomised word</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="work-item">
                                    <div className="work-thumb">
                                        <img src="/assets/img/images/work_img02.png" alt="" />
                                        <h4 className="number">02</h4>
                                    </div>
                                    <div className="work-content">
                                        <h2 className="title">Schedule Estimate</h2>
                                        <p>Suffered alteration in some a form, by injected humour, or randomised word</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="work-item">
                                    <div className="work-thumb">
                                        <img src="/assets/img/images/work_img03.png" alt="" />
                                        <h4 className="number">03</h4>
                                    </div>
                                    <div className="work-content">
                                        <h2 className="title">Install New Roof</h2>
                                        <p>Suffered alteration in some a form, by injected humour, or randomised word</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="work-item">
                                    <div className="work-thumb">
                                        <img src="/assets/img/images/work_img04.png" alt="" />
                                        <h4 className="number">04</h4>
                                    </div>
                                    <div className="work-content">
                                        <h2 className="title">Enjoy Roofing</h2>
                                        <p>Suffered alteration in some a form, by injected humour, or randomised word</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
        {/* work-area-end */}
        {/* history-area */}
        <section className="history-area pt-120 pb-120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="history-img-wrap">
                  <ul className="list-wrap">
                    <li>
                      <img src="/assets/img/images/history_img01.jpg" alt="" />
                    </li>
                    <li>
                      <img src="/assets/img/images/history_img02.jpg" alt="" />
                      {/* <VideoPopup /> */}
                    </li>
                    <li>
                      <img src="/assets/img/images/history_img03.jpg" alt="" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="history-content">
                  <div className="section-title mb-20">
                    <span className="sub-title">Our History</span>
                    {/* <h2 className="title">Roofing when an unknown printer took to make type book</h2> */}
                  </div>
                  <p>
                    Sustainable Solar Energy Solutions is a Renewable Energy
                    Company which is owned by a group of Three Energy Engineers.
                    This venture started back in year 2010 when these future
                    entrepreneurs became the first “Energy Engineers” to be
                    enrolled in Pakistan at bachelor’s level. After that
                    pioneering effort they enhanced their knowledge and skills
                    by completing their Master’s degree program in Renewable
                    Energy and at the same time working in top solar companies
                    in Pakistan. Then they decided to join hands and started
                    their own firm in 2017 making SSES the first and only all
                    engineer run firm with the expertise as well as the
                    educational background purely in the Renewable Energy
                    Sector..
                  </p>
                  <div className="history-list">
                    <ul className="list-wrap">
                      <li>
                        <i className="fas fa-check-circle" />
                        Technology management
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Solar Solutions
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Modern Worker Working here
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Quick Response
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* history-area-end */}
        {/* area-bg */}
        <div
          className="area-bg-five"
          data-background="/assets/img/bg/area_bg05.jpg"
        >
          {/* team-area */}
          <section className="inner-team-area pb-90">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="section-title text-center mb-60 tg-heading-subheading animation-style3">
                    <span className="sub-title tg-element-title">
                      Professional Team
                    </span>
                    <h2 className="title tg-element-title">
                      Professional Team Member
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                  <div className="team-item">
                    <div className="team-thumb">
                      <Link href="/team-details">
                        <img src="/assets/img/team/team-member1.jpg" alt="" />
                      </Link>
                      <div className="team-social">
                        <ul className="list-wrap">
                          <li>
                            <Link href="https://www.facebook.com/hassan.jafri.902/">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.linkedin.com/in/hassan-jafri-7a6b171ba/">
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.youtube.com/channel/UCuY7QJnQaI3u10HwatPCRDw">
                              <i className="fab fa-youtube" />
                            </Link>
                          </li>
                          {/* <li><Link href="#"><i className="fab fa-instagram" /></Link></li> */}
                        </ul>
                      </div>
                    </div>
                    <div className="team-content">
                      <h2 className="title">
                        <Link href="/team-details">Hassan Jafri</Link>
                      </h2>
                      <span>CEO/ Managing Director</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                  <div className="team-item">
                    <div className="team-thumb">
                      <Link href="/team-details">
                        <img src="/assets/img/team/team-member2.jpg" alt="" />
                      </Link>
                      <div className="team-social">
                        <ul className="list-wrap">
                          <li>
                            <Link href="https://www.facebook.com/engr.mengal/">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                          {/* <li><Link href="#"><i className="fab fa-twitter" /></Link></li> */}
                          <li>
                            <Link href="https://www.youtube.com/channel/UCuY7QJnQaI3u10HwatPCRDw/">
                              <i className="fab fa-youtube" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-content">
                      <h2 className="title">
                        <Link href="/team-details">Abdul Hameed Mengal</Link>
                      </h2>
                      <span>CEO</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                  <div className="team-item">
                    <div className="team-thumb">
                      <Link href="/team-details">
                        <img src="/assets/img/team/team-member3.jpg" alt="" />
                      </Link>
                      <div className="team-social">
                        <ul className="list-wrap">
                          <li>
                            <Link href="https://www.facebook.com/M.UsamaNasir/">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.linkedin.com/in/mohammad-usama-518555a6/">
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                          {/* <li><Link href="#"><i className="fab fa-twitter" /></Link></li> */}
                          <li>
                            <Link href="https://www.youtube.com/channel/UCuY7QJnQaI3u10HwatPCRDw/">
                              <i className="fab fa-youtube" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-content">
                      <h2 className="title">
                        <Link href="/team-details">Muhammad Usama Nasir</Link>
                      </h2>
                      <span>Managing Director</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* team-area-end */}
          {/* testimonial-area */}
          <Testimonial1 />
          {/* testimonial-area-end */}
        </div>
        {/* area-bg-end */}
        {/* brand-area */}
        <Brand1 />
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
