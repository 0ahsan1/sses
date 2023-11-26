import { setBackgroundImageUrl, strapiImageLoader } from "@/helpers/util";
import Image from "next/image";
import Link from "next/link";

export default function Footer1({ data }) {
  return (
    <>
      <footer>
        <div
          className="footer-area footer-bg"
          style={setBackgroundImageUrl(data?.footer_bg_image?.url)}
        >
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-7">
                  <div className="footer-widget">
                    <h2 className="fw-title">{data?.footer_title}</h2>
                    <div
                      className="footer-content"
                      dangerouslySetInnerHTML={{
                        __html: data?.footer_content,
                      }}
                    >
                      {/* <div className="footer-newsletter">
                                                <h4 className="title">Subscribe to Our Newsletter</h4>
                                                <form action="#">
                                                    <input type="text" placeholder="Enter your email" />
                                                    <button type="submit" className="btn btn-two">Subscribe</button>
                                                </form>
                                            </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                  <div className="footer-widget">
                    <h2 className="fw-title">{data?.services_title}</h2>
                    <div className="footer-link">
                      <ul className="list-wrap">
                        {data?.services.map((service, index) => {
                          return (
                            <li key={index}>
                              <Link href={service.link}>
                                <i className="fas fa-angle-double-right" />
                                {service.title}
                              </Link>
                            </li>
                          );
                        })}
                        {/* <li>
                          <Link href="/services-details/solar-water-pumping-system">
                            <i className="fas fa-angle-double-right" />
                            SOLAR WATER PUMPING SYSTEM
                          </Link>
                        </li>
                        <li>
                          <Link href="/services-details/On-Grid-Solar-PV-System">
                            <i className="fas fa-angle-double-right" />
                            ON-GRID SOLAR SYSTEM
                          </Link>
                        </li>
                        <li>
                          <Link href="/services-details/Off-Grid-Solar-PV-System">
                            <i className="fas fa-angle-double-right" />
                            OFF-GRID SOLAR SYSTEM
                          </Link>
                        </li>
                        <li>
                          <Link href="/services-details/Hybrid-Solar-PV-System">
                            <i className="fas fa-angle-double-right" />
                            HYBRID SOLAR PV SYSTEM
                          </Link>
                        </li>
                        <li>
                          <Link href="/services-details/Solar-Water-Heater-System">
                            <i className="fas fa-angle-double-right" />
                            SOLAR WATER HEATER SYSTEM
                          </Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                  <div className="footer-widget">
                    <h2 className="fw-title">{data?.solutions_title}</h2>
                    <div className="footer-link">
                      <ul className="list-wrap">
                        {data?.solutions.map((project, index) => {
                          return (
                            <li key={index}>
                              <Link href={project.link}>
                                <i className="fas fa-angle-double-right" />
                                {project.title}
                              </Link>
                            </li>
                          );
                        })}
                        {/* <li>
                          <Link href="/contact">
                            <i className="fas fa-angle-double-right" />
                            All Projects
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <i className="fas fa-angle-double-right" />
                            Karsaz, Karachi
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <i className="fas fa-angle-double-right" />
                            Gulshan e Maymar
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <i className="fas fa-angle-double-right" />
                            Lasbele University
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <i className="fas fa-angle-double-right" />
                            KDA Scheme, Karachi
                          </Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-6">
                  <div className="footer-widget">
                    <h2 className="fw-title"></h2>
                    <div className="footer-instagram">
                      <ul className="list-wrap">
                        <li>
                          <Link href="/#">
                            <Image
                              src={data?.footer_media?.url}
                              alt=""
                              width={100}
                              height={70}
                              loader={strapiImageLoader}
                            />
                            {/* <img
                              src="/assets/img/services/img-one.jpg"
                              alt=""
                            /> */}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-logo-area">
                <div className="row align-items-center">
                  <div className="col-xl-3 col-lg-3 col-md-12">
                    <div className="logo">
                      <Link href="/index">
                        <Image
                          src={data?.footer_logo?.url}
                          alt=""
                          width={159}
                          height={63}
                          loader={strapiImageLoader}
                        />
                        {/* <img src="/assets/img/logo/footer.png" alt="" /> */}
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="footer-contact">
                      <div className="icon">
                        <i className="fas fa-phone-alt" />
                      </div>
                      <div className="content">
                        <span>Phone No</span>
                        <Link href={`/tel:${data?.profile?.phone}`}>
                          {data?.profile?.phone}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-6">
                    <div className="footer-social">
                      <h2 className="title">Follow Us:</h2>
                      <ul className="list-wrap">
                        {data?.profile?.social_links
                          .sort((a, b) => a.id - b.id)
                          .map((link, index) => {
                            return (
                              <li key={index}>
                                <Link href={link.link}>
                                  <i className={link.icon} />
                                </Link>
                              </li>
                            );
                          })}
                        {/* <li>
                          <Link href="https://www.facebook.com/SustainableSolarEnergySolutions/">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.linkedin.com/company/sustainable-solar-energy-solutions/">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.youtube.com/channel/UCuY7QJnQaI3u10HwatPCRDw">
                            <i className="fab fa-youtube" />
                          </Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="copyright-text">
                    <p>
                      Copyrights © {new Date().getFullYear()}{" "}
                      {data?.profile?.name}. All rights reserved.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="footer-bootom-menu">
                    <ul className="list-wrap">
                      <li>{data?.profile?.address}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
