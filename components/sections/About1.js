import Link from "next/link";
import { aboutSectionHome } from "./items";
import Image from "next/image";
import { strapiImageLoader } from "@/helpers/util";

export default function About1({ data }) {
  const aboutSection = data ?? aboutSectionHome;
  return (
    <>
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
                    {aboutSection?.list_content.split("\n").map((item) => {
                      return (
                        <li>
                          <i className="fas fa-check" />
                          {item}
                        </li>
                      );
                    })}
                    {/* <li>
                      <i className="fas fa-check" />
                      With our head office located in Karachi, SSES now have
                      expanded its setup with new branch offices opened at
                      Quetta and Wadh Khuzdar.
                    </li> */}
                  </ul>
                </div>
                <Link href={aboutSection?.button_link} className="btn">
                  {aboutSection?.button_title}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
