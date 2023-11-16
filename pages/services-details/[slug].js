// import { Service1 } from "@/components/content/services";
import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Service1,
  Service2,
  Service3,
  Service4,
  Service5,
} from "@/components/content/services";

const services = [
  {
    slug: "solar-water-pumping-system",
    title: "Solar Water Pumping System",
    img: ``,
    content: <Service1 />,
  },
  {
    slug: "On-Grid-Solar-PV-System",
    title: "ON-GRID SOLAR SYSTEM",
    img: ``,
    content: <Service2 />,
  },
  {
    slug: "Off-Grid-Solar-PV-System",
    title: "OFF-GRID SOLAR SYSTEM",
    img: ``,
    content: <Service3 />,
  },
  {
    slug: "Hybrid-Solar-PV-System",
    title: "Hybrid Solar PV System",
    img: ``,
    content: <Service4 />,
  },
  {
    slug: "Solar-Water-Heater-System",
    title: "Metal Engineering",
    img: ``,
    content: <Service5 />,
  },
];
export default function ServiceDetails() {
  const router = useRouter();
  let comp = <></>;
  const { slug } = router.query;
  comp = services.find((s) => s.slug === slug).content;

  return (
    <>
      <Layout breadcrumbTitle="Service Details">
        <div>
          <section className="services-details-area pt-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8">{comp}</div>
                <div className="col-xl-4 col-lg-6">
                  <aside className="services-sidebar">
                    <div className="services-widget">
                      <h4 className="widget-title">Our All Service</h4>
                      <div className="our-services-list">
                        <ul className="list-wrap">
                          <li>
                            <Link href="/services-details/solar-water-pumping-system">
                              Solar Water Pumping System
                              <i className="fas fa-arrow-right" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/services-details/On-Grid-Solar-PV-System">
                              ON-GRID SOLAR SYSTEM
                              <i className="fas fa-arrow-right" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/services-details/Off-Grid-Solar-PV-System">
                              OFF-GRID SOLAR SYSTEM
                              <i className="fas fa-arrow-right" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/services-details/Hybrid-Solar-PV-System">
                              Hybrid Solar PV System
                              <i className="fas fa-arrow-right" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/services-details/Solar-Water-Heater-System">
                              Metal Engineering
                              <i className="fas fa-arrow-right" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="services-widget widget-bg"
                      data-background="/assets/img/services/sw_bg.jpg"
                    >
                      <h4 className="widget-title">Get a free quote</h4>
                      <form action="#" className="sidebar-form">
                        <div className="form-grp">
                          <input
                            id="name"
                            type="text"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="form-grp">
                          <input
                            id="email"
                            type="text"
                            placeholder="Your Email Address"
                          />
                        </div>
                        <div className="form-grp">
                          <input
                            id="phone"
                            type="text"
                            placeholder="Your Phone"
                          />
                        </div>
                        <div className="form-grp">
                          <input
                            id="subject"
                            type="text"
                            placeholder="Enter Subject"
                          />
                        </div>
                        <div className="form-grp">
                          <textarea id="message" placeholder="Your Message" />
                        </div>
                        <button type="submit" className="btn btn-two">
                          Contact Us
                        </button>
                      </form>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </section>
          {/* services-details-area-end */}
          {/* brand-area */}
          {/* <Brand3 /> */}
        </div>
      </Layout>
    </>
  );
}
