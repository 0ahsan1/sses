import Link from "next/link";
import { boards } from "./items";
import Image from "next/image";
import { strapiImageLoader } from "@/helpers/util";

export default function Team1({ data, objKey }) {
  
  return (
    <>
      <section className="py-20">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-10 tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title">
                  {data?.subtitle}
                </span>
                <h2 className="title tg-element-title">{data?.title}</h2>
                <p className="mt-6 text-lg/8 text-gray-800 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: data?.description }} />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {data?.items?.map((item) => {
              return (
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                  <div className="team-item">
                    <div className="team-thumb">
                      <Link href="/team-details">
                        <Image
                          src={item?.image?.url}
                          alt=""
                          width={278}
                          height={435}
                          loader={strapiImageLoader}
                        />
                      </Link>
                      <div className="team-social">
                        <ul className="list-wrap">
                          <li>
                            <Link href={item?.button[0].link ?? ""}>
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href={item?.button[1].link ?? ""}>
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                          <li>
                            <Link href={item?.button[2].link ?? ""}>
                              <i className="fab fa-youtube" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-content">
                      <h2 className="title">
                        <Link href="#" onClick={(e) => { e.preventDefault() }}>{item?.title}</Link>
                      </h2>
                      <span>{item?.description}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
