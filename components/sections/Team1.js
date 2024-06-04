import Link from "next/link";
import { boards } from "./items";
import Image from "next/image";
import { strapiImageLoader } from "@/helpers/util";

export default function Team1({ data, objKey }) {
  data = data ?? boards;
  const board = data.find((d) => d.slug === objKey);

  return (
    <>
      <section className="team-area pt-115 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-60 tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title">
                  {board?.subtitle}
                </span>
                <h2 className="title tg-element-title">{board?.title}</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {board?.team?.map((item) => {
              return (
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                  <div className="team-item">
                    <div className="team-thumb">
                      <Link href="/team-details">
                        <Image
                          src={item?.media?.url}
                          alt=""
                          width={278}
                          height={435}
                          loader={strapiImageLoader}
                        />
                      </Link>
                      <div className="team-social">
                        <ul className="list-wrap">
                          <li>
                            <Link href={item?.social_link_1 ?? ""}>
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href={item?.social_link_2 ?? ""}>
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                          <li>
                            <Link href={item?.social_link_3 ?? ""}>
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
                      <span>{item?.subtitle}</span>
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
