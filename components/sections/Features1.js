import Link from "next/link";
import { boards } from "./items";
import Image from "next/image";
import { strapiImageLoader } from "@/helpers/util";

export default function Features1({ data, objKey }) {
  data = data ?? boards;
  let board = data.find((d) => d.slug === objKey);

  return (
    <>
      <section className="features-area pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            {board?.board_items.map((item, index) => {
              return (
                <div className="col-lg-4 col-md-6">
                  <div
                    className="features-item wow fadeInUp"
                    data-wow-delay={`.${(index + 1) * 2}s`}
                  >
                    <div className="features-item-inner">
                      <div className="features-content">
                        <h4 className="title">{item?.title}</h4>
                        <p>{item?.content}</p>
                        <Link href="/services-details" className="link-btn">
                          <i className="fas fa-arrow-right" /> Read More
                        </Link>
                      </div>
                      <div className="features-icon">
                        {/* <img src="/assets/img/icon/features_icon01.svg" alt="" /> */}
                        <Image
                          src={item?.media?.url}
                          width={39}
                          height={41}
                          loader={strapiImageLoader}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="col-lg-4 col-md-6">
              <div className="features-item wow fadeInUp" data-wow-delay=".2s">
                <div className="features-item-inner">
                  <div className="features-content">
                    <h4 className="title">Quality Materials</h4>
                    <p>You can expect superior quality solar modules.</p>
                    <Link href="/services-details" className="link-btn">
                      <i className="fas fa-arrow-right" /> Read More
                    </Link>
                  </div>
                  <div className="features-icon">
                    <img src="/assets/img/icon/features_icon01.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="features-item wow fadeInUp" data-wow-delay=".4s">
                <div className="features-item-inner">
                  <div className="features-content">
                    <h4 className="title">Expert Engineer</h4>
                    <p>
                      Dedicated team of certified installers performing
                      calculations, analysis and designs for your ease.
                    </p>
                    <Link href="/services-details" className="link-btn">
                      <i className="fas fa-arrow-right" /> Read More
                    </Link>
                  </div>
                  <div className="features-icon">
                    <img src="/assets/img/icon/features_icon02.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="features-item wow fadeInUp" data-wow-delay=".6s">
                <div className="features-item-inner">
                  <div className="features-content">
                    <h4 className="title">Quality Maintenance</h4>
                    <p>
                      Moreover, an impeccable after-sale service is our selling
                      proposition.
                    </p>
                    <Link href="/services-details" className="link-btn">
                      <i className="fas fa-arrow-right" /> Read More
                    </Link>
                  </div>
                  <div className="features-icon">
                    <img src="/assets/img/icon/features_icon03.svg" alt="" />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
