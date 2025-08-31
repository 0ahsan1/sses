import Link from "next/link";
import { aboutSectionHome } from "./items";
import Image from "next/image";
import { strapiImageLoader } from "@/helpers/util";
import {LiaBoltSolid} from "react-icons/lia";
import {ChevronDoubleRightIcon} from "@heroicons/react/20/solid";

export default function About1({ data }) {
  return (
    <>
      <section className="about-area inner-about-area pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
              <Image src={data?.image?.url} alt={''} loader={strapiImageLoader} width={2400} height={700} className="w-full h-auto" />
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="about-content">
                <div className="section-title mb-25">
                  <span className="sub-title">{data?.subtitle}</span>
                  <h2 className="title">{data?.title}</h2>
                </div>
                <p dangerouslySetInnerHTML={{ __html: data?.description }}></p>
                <div className="">
                  {data?.items.map((item) => {
                    return (
                        <div className="">
                          <div className="content">
                            <h6 className="title">
                              <ChevronDoubleRightIcon className={'d-inline-block w-7 h-7'} /> {item.title}</h6>
                          </div>
                        </div>
                    );
                  })}
                </div>
                {data?.button && data.button.length > 0 && (
                    <div className="flex flex-wrap gap-4 mt-4">
                      {data.button.map((btn, idx) => (
                          <Link
                              key={idx}
                              href={btn.link}
                              className="btn wow fadeInUp"
                              data-wow-delay={`${0.2 + idx * 0.2}s`}
                          >
                            {btn.label}
                          </Link>
                      ))}
                    </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
