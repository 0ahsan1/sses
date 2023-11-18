import Link from "next/link";
import { useState } from "react";
import { boards } from "./items";
import { strapiApiPath } from "@/constants/ApiPath";
import Image from "next/image";
import { strapiImageLoader } from "@/helpers/util";
import { strapiBasePath } from "@/services/ApiService";

export default function Services1({ data, objKey }) {
  data = data ?? boards;
  const board = data.find((d) => d.slug === objKey);
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
      <section className="services-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title">
                  {board.subtitle}
                </span>
                <h2 className="title tg-element-title">{board.title}</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {board.items.map((item) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div
                    className="services-item wow fadeInUp"
                    data-wow-delay=".2s"
                    data-background={`${strapiBasePath}${item?.background_image?.url}`}
                    onMouseEnter={() => handleToggle(1)}
                    onMouseLeave={() => handleToggle(1)}
                  >
                    <div
                      className="services-icon"
                      style={{
                        display: `${isActive.key == 1 ? "none" : "flex"}`,
                      }}
                    >
                      <Image
                        src={item?.media?.url}
                        width={39}
                        height={39}
                        loader={strapiImageLoader}
                      />
                    </div>
                    <div className="services-content">
                      <h2
                        className="title"
                        style={{
                          display: `${isActive.key == 1 ? "none" : "block"}`,
                        }}
                      >
                        <Link href={item?.link}>{item?.title}</Link>
                      </h2>
                      {/* <h2 className="number">01</h2> */}
                    </div>
                    <div
                      className="services-overlay-content"
                      style={{
                        display: `${isActive.key == 1 ? "block" : "none"}`,
                      }}
                    >
                      <h2 className="title">
                        <Link href={item?.link}>{item?.title}</Link>
                      </h2>
                      <p>{item?.content}</p>
                      <Link href={item?.link} className="read-more">
                        Read More <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item wow fadeInUp" data-wow-delay=".9s" data-background="/assets/img/services/services_item06.jpg" onMouseEnter={() => handleToggle(6)} onMouseLeave={() => handleToggle(6)}>
                                <div className="services-icon" style={{ display: `${isActive.key == 6 ? "none" : "flex"}` }}>
                                    <img src="/assets/img/icon/services_icon06.svg" alt="" />
                                </div>
                                <div className="services-content">
                                    <h2 className="title" style={{ display: `${isActive.key == 6 ? "none" : "block"}` }}><Link href="/services-details">Roofing Animation</Link></h2>
                                    <h2 className="number">06</h2>
                                </div>
                                <div className="services-overlay-content" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                    <h2 className="title"><Link href="/services-details">Roofing Animation</Link></h2>
                                    <p>There are many variations of passages of Lorem a Ipsum available, but the majority have suffered ali teration in some form</p>
                                    <Link href="/services-details" className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
