import Layout from "@/components/layout/Layout";
import { NextSeoCom } from "@/components/meta/NextSeoCom";
import { faqPageContent } from "@/components/sections/items";
import { strapiApiPath } from "@/constants/ApiPath";
import { setBackgroundImageUrl, strapiImageLoader } from "@/helpers/util";
import { getFilteredStrapiContent } from "@/services/ApiService";
import Image from "next/image";
import { useState } from "react";

export default function Faq1({ data, layout }) {
  data = data?.title ? data : faqPageContent;

  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
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
   {data && data.meta ? <NextSeoCom data={{...data.meta}} />: <></>} 

      <Layout breadcrumbTitle="FAQ" data={layout}>
        <section
          className="faq-area faq-bg"
          style={setBackgroundImageUrl(data?.background_image?.url)}
          // data-background="/assets/img/bg/faq_bg.jpg"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section-title text-center mb-60">
                  <span className="sub-title">{data?.subtitle}</span>
                  <h2 className="title">{data?.title}</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-10 order-0 order-xl-2">
                <div className="faq-img-wrap">
                  <Image
                    src={data?.media_1?.url}
                    alt=""
                    width={332}
                    height={628}
                    className="wow fadeInRight"
                    data-wow-delay=".4s"
                    loader={strapiImageLoader}
                  />
                  <Image
                    src={data?.media_2?.url}
                    alt=""
                    width={332}
                    height={628}
                    className="wow fadeInRight"
                    data-wow-delay=".2s"
                    loader={strapiImageLoader}
                  />
                  {/* <img
                    src="/assets/img/images/faq_img01.jpg"
                    alt=""
                    className="wow fadeInRight"
                    data-wow-delay=".4s"
                  />
                  <img
                    src="/assets/img/images/faq_img02.jpg"
                    alt=""
                    className="wow fadeInRight"
                    data-wow-delay=".2s"
                  /> */}
                  <div
                    className="overlay-text wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <h2 className="title">FAQ</h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="faq-wrap">
                  <div className="accordion">
                    {data?.items.map((item, index) => {
                      return (
                        <div className="accordion-item">
                          <h2
                            className="accordion-header"
                            onClick={() => handleToggle(index + 1)}
                          >
                            <button
                              className={
                                isActive.key == index + 1
                                  ? "accordion-button"
                                  : "accordion-button collapsed "
                              }
                              dangerouslySetInnerHTML={{
                                __html: item?.title,
                              }}
                            ></button>
                          </h2>
                          <div
                            className={
                              isActive.key == index + 1
                                ? "accordion-collapse collapse show"
                                : "accordion-collapse collapse"
                            }
                          >
                            <div className="accordion-body">
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: item?.content,
                                }}
                              ></p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* <div className="accordion">
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        onClick={() => handleToggle(1)}
                      >
                        <button
                          className={
                            isActive.key == 1
                              ? "accordion-button"
                              : "accordion-button collapsed "
                          }
                        >
                          What components does a solar powered system have?
                        </button>
                      </h2>
                      <div
                        className={
                          isActive.key == 1
                            ? "accordion-collapse collapse  show"
                            : "accordion-collapse collapse "
                        }
                      >
                        <div className="accordion-body">
                          <p>
                            A solar powered energy system consists of solar
                            panels, inverter, mounting structure for solar
                            panels, electrical wiring, breakers and sometime
                            batteries.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        onClick={() => handleToggle(2)}
                      >
                        <button
                          className={
                            isActive.key == 2
                              ? "accordion-button"
                              : "accordion-button collapsed "
                          }
                        >
                          How does a solar powered system work?
                        </button>
                      </h2>
                      <div
                        className={
                          isActive.key == 2
                            ? "accordion-collapse collapse  show"
                            : "accordion-collapse collapse "
                        }
                      >
                        <div className="accordion-body">
                          <p>
                            Photovoltaic (PV) cells in solar panels convert
                            sunlight into direct current (DC). Inverters then
                            convert the DC electricity into the alternating
                            current (AC) which is then transferred to the main
                            electrical distribution panel (DB) for use. In
                            off-grid and hybrid systems, batteries can be used
                            for storing the initial DC electricity coming from
                            the solar panels through a charge controller.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        onClick={() => handleToggle(3)}
                      >
                        <button
                          className={
                            isActive.key == 3
                              ? "accordion-button"
                              : "accordion-button collapsed "
                          }
                        >
                          How many type solar powered electrical systems are
                          there?{" "}
                        </button>
                      </h2>
                      <div
                        className={
                          isActive.key == 3
                            ? "accordion-collapse collapse  show"
                            : "accordion-collapse collapse "
                        }
                      >
                        <div className="accordion-body">
                          <p>There are Four main types.</p>
                          <p>
                            <h4 style="color: #1d8644;">
                              <b>A. On-Grid Solar PV Systems </b>
                            </h4>{" "}
                          </p>
                          <p>
                            • On-grid or grid-tie solar systems are by far the
                            most common and widely used by homes and businesses.
                            These systems do not need batteries and use common
                            solar inverters and are connected to the public
                            electricity grid. Any excess solar power that you
                            generate is exported to the electricity grid and you
                            usually get paid a feed-in-tariff (FiT) or credits
                            for the energy you export.
                          </p>
                          <p>• ON-Grid Applications:</p>
                          <p>
                            Electricity Bill reduction for Residential and
                            Industrial users.
                          </p>
                          <p>Feed in Tariff (FIT/Reverse Metering). </p>
                          <p>
                            <h4 style="color: #1d8644;">
                              <b>B. Off-Grid Solar PV Systems</b>
                            </h4>
                          </p>
                          <p>
                            • Off-grid can be stand-alone powered system or
                            mini-grids typically to provide a smaller community
                            with electricity.
                          </p>
                          <p>
                            • Off-grid solar power also stores DC electricity in
                            batteries.
                          </p>
                          <p>• Off-Grid Applications:</p>
                          <p>Solar Home system.</p>
                          <p>Solar battery charging system.</p>
                          <p>Solar power traffic lighting system.</p>
                          <p>
                            <h4 style="color: #1d8644;">
                              <b>C. Hybrid Solar PV Systems</b>
                            </h4>
                          </p>
                          <p>
                            • Hybrid System is combination of off-grid and
                            on-grid system. Modern hybrid systems combine solar
                            and battery storage in one and are now available in
                            many different forms and configurations. Due to the
                            decreasing cost of battery storage, systems that are
                            already connected to the electricity grid can start
                            taking advantage of battery storage as well.{" "}
                          </p>
                          <p>
                            <h4 style="color: #1d8644;">
                              <b>D. Solar Water Pumping</b>
                            </h4>
                          </p>
                          <p>
                            • The system operates on power generated using solar
                            PV (photovoltaic) system. The photovoltaic array
                            converts the solar energy into electricity, which is
                            used for running the motor pump set. The pumping
                            system draws water from the open well, bore well,
                            stream, pond, canal etc.{" "}
                          </p>
                          <p>
                            •Solar water pumping systems can be a practical and
                            affordable solution used to provide reliable and
                            cost effective water supplies where there is no grid
                            power or where power supply is unreliable.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        onClick={() => handleToggle(4)}
                      >
                        <button
                          className={
                            isActive.key == 4
                              ? "accordion-button"
                              : "accordion-button collapsed "
                          }
                        >
                          Which type of solar powered system is suitable for me?{" "}
                        </button>
                      </h2>
                      <div
                        className={
                          isActive.key == 4
                            ? "accordion-collapse collapse  show"
                            : "accordion-collapse collapse "
                        }
                      >
                        <div className="accordion-body">
                          <p>
                            <h4 style="color: #1d8644;">
                              <b>A. On-Grid Solar PV Systems </b>
                            </h4>
                          </p>
                          <p>
                            • If you are looking for a long term investment gain
                            from it.
                          </p>
                          <p>• Noticeable reduction in electricity bill.</p>
                          <p>
                            <h4 style="color: #1d8644;">
                              <b>B. Off-Grid Solar PV Systems</b>
                            </h4>
                          </p>
                          <p>
                            • When the load is in remote areas where there is no
                            grid close by.
                          </p>
                          <p>
                            • Load is located around the area which is subjected
                            to frequent load shedding.
                          </p>
                        </div>
                      </div>
                    </div> */}

                  {/* <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        onClick={() => handleToggle(5)}
                      >
                        <button
                          className={
                            isActive.key == 5
                              ? "accordion-button"
                              : "accordion-button collapsed "
                          }
                        >
                          How does net-metering work?
                        </button>
                      </h2>
                      <div
                        className={
                          isActive.key == 5
                            ? "accordion-collapse collapse  show"
                            : "accordion-collapse collapse "
                        }
                      >
                        <div className="accordion-body">
                          <p>
                            Net-Metering concept is a process that allows
                            customers to produce their own solar power and share
                            their surplus electricity with the national grid.
                            The monthly bill is then netted off in proportional
                            to the amount of energy sold to the distribution
                            company. The net metering procedure is used globally
                            to promote the use of distributed generation.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        onClick={() => handleToggle(6)}
                      >
                        <button
                          className={
                            isActive.key == 6
                              ? "accordion-button"
                              : "accordion-button collapsed "
                          }
                        >
                          What of its maintenance?
                        </button>
                      </h2>
                      <div
                        className={
                          isActive.key == 6
                            ? "accordion-collapse collapse  show"
                            : "accordion-collapse collapse "
                        }
                      >
                        <div className="accordion-body">
                          <p>
                            The only kind of maintenance a solar powered energy
                            system requires is the cleaning of solar panel
                            itself and nothing else. The frequency of cleaning
                            can be weekly or bi-monthly according to the site
                            situation.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        onClick={() => handleToggle(7)}
                      >
                        <button
                          className={
                            isActive.key == 7
                              ? "accordion-button"
                              : "accordion-button collapsed "
                          }
                        >
                          How much space would I need to install my solar
                          powered system?{" "}
                        </button>
                      </h2>
                      <div
                        className={
                          isActive.key == 7
                            ? "accordion-collapse collapse  show"
                            : "accordion-collapse collapse "
                        }
                      >
                        <div className="accordion-body">
                          <p>
                            Space requirements range from 100 to 130 square feet
                            per kW of solar PV installed, depending the tilt
                            angle of the solar PV modules and facing towards the
                            path that sun follows in that region.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        onClick={() => handleToggle(8)}
                      >
                        <button
                          className={
                            isActive.key == 8
                              ? "accordion-button"
                              : "accordion-button collapsed "
                          }
                        >
                          What if my system produces more energy than I require?{" "}
                        </button>
                      </h2>
                      <div
                        className={
                          isActive.key == 8
                            ? "accordion-collapse collapse  show"
                            : "accordion-collapse collapse "
                        }
                      >
                        <div className="accordion-body">
                          <p>
                            The excess electricity would either be sold back to
                            the grid using the net metering or will be stored in
                            the form of batteries and used later by the same
                            load center.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        onClick={() => handleToggle(9)}
                      >
                        <button
                          className={
                            isActive.key == 9
                              ? "accordion-button"
                              : "accordion-button collapsed "
                          }
                        >
                          Will the weight of the solar PV system be of any
                          concern for my roof?{" "}
                        </button>
                      </h2>
                      <div
                        className={
                          isActive.key == 9
                            ? "accordion-collapse collapse  show"
                            : "accordion-collapse collapse "
                        }
                      >
                        <div className="accordion-body">
                          <p>
                            Concrete roofs have no problems at all in handling
                            the distributed load nature of solar PV panels and
                            its frames, however T-slabs & truss based roofs have
                            to be analyzed first before they are used for
                            installation.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        onClick={() => handleToggle(10)}
                      >
                        <button
                          className={
                            isActive.key == 10
                              ? "accordion-button"
                              : "accordion-button collapsed "
                          }
                        >
                          How long does a solar powered energy system last?{" "}
                        </button>
                      </h2>
                      <div
                        className={
                          isActive.key == 10
                            ? "accordion-collapse collapse  show"
                            : "accordion-collapse collapse "
                        }
                      >
                        <div className="accordion-body">
                          <p>
                            Our systems are designed to have a useful life of 25
                            years or much more, according to the climate and
                            atmosphere it has been used it.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        onClick={() => handleToggle(11)}
                      >
                        <button
                          className={
                            isActive.key == 11
                              ? "accordion-button"
                              : "accordion-button collapsed "
                          }
                        >
                          Does SSES provide O&M services?{" "}
                        </button>
                      </h2>
                      <div
                        className={
                          isActive.key == 11
                            ? "accordion-collapse collapse  show"
                            : "accordion-collapse collapse "
                        }
                      >
                        <div className="accordion-body">
                          <p>Yes, we do.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        onClick={() => handleToggle(12)}
                      >
                        <button
                          className={
                            isActive.key == 12
                              ? "accordion-button"
                              : "accordion-button collapsed "
                          }
                        >
                          <b>Sustainable Solar Energy Solutions - SSES</b>
                        </button>
                      </h2>
                      <div
                        className={
                          isActive.key == 12
                            ? "accordion-collapse collapse  show"
                            : "accordion-collapse collapse "
                        }
                      >
                        <div className="accordion-body"></div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        onClick={() => handleToggle(13)}
                      >
                        <button
                          className={
                            isActive.key == 13
                              ? "accordion-button"
                              : "accordion-button collapsed "
                          }
                        >
                          Why should we go with SSES?
                        </button>
                      </h2>
                      <div
                        className={
                          isActive.key == 13
                            ? "accordion-collapse collapse  show"
                            : "accordion-collapse collapse "
                        }
                      >
                        <div className="accordion-body">
                          <p>
                            SSES was started by the first ever Energy Engineers
                            of Pakistan. We are here to elevate the standards of
                            services in the solar field. SSES has successfully
                            installed hundreds of solar projects with unbeatable
                            price and services within Pakistan. We strive to
                            live by the following codes of ethic.
                          </p>
                          <p>• Use of correct design principles.</p>
                          <p>• Always use original and quality products. </p>
                          <p>• Eliminate incorrect installation practices. </p>
                          <p>
                            • Safety of client and labor always comes first.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        onClick={() => handleToggle(14)}
                      >
                        <button
                          className={
                            isActive.key == 14
                              ? "accordion-button"
                              : "accordion-button collapsed "
                          }
                        >
                          What is the point of origin of SSES’s products?{" "}
                        </button>
                      </h2>
                      <div
                        className={
                          isActive.key == 14
                            ? "accordion-collapse collapse  show"
                            : "accordion-collapse collapse "
                        }
                      >
                        <div className="accordion-body">
                          <p>
                            SSES sources its components from various countries.
                            Some of these countries include Germany, Austria,
                            Italy, United States, China and Pakistan. SSES
                            focuses its efforts on designing the most optimum
                            technical and commercial solution on a case to case
                            basis.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        onClick={() => handleToggle(15)}
                      >
                        <button
                          className={
                            isActive.key == 15
                              ? "accordion-button"
                              : "accordion-button collapsed "
                          }
                        >
                          How to check if the components offered are off the
                          best quality or not?{" "}
                        </button>
                      </h2>
                      <div
                        className={
                          isActive.key == 15
                            ? "accordion-collapse collapse  show"
                            : "accordion-collapse collapse "
                        }
                      >
                        <div className="accordion-body">
                          <p>
                            There is nothing hidden during these times of
                            information available at hand. Nowadays market is
                            full of deceit. We give our costumer the virtual
                            choices they can select from according to their
                            requirement and need after they choose and the goods
                            are delivered, they can scan the QR codes of those
                            equipment to cross check what they had chosen
                            earlier.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        onClick={() => handleToggle(16)}
                      >
                        <button
                          className={
                            isActive.key == 16
                              ? "accordion-button"
                              : "accordion-button collapsed "
                          }
                        >
                          What safety protocols are important to consider while
                          putting up a solar PV system?{" "}
                        </button>
                      </h2>
                      <div
                        className={
                          isActive.key == 16
                            ? "accordion-collapse collapse  show"
                            : "accordion-collapse collapse "
                        }
                      >
                        <div className="accordion-body">
                          <p>
                            The National Electric Code (NEC) is an electrical
                            safety code and has a section dedicated to solar PV
                            system electrical installations safety. The NEC
                            drives several design and installation decisions.
                            The National Fire Protection Association (NFPA) has
                            dedicated sections on hazard identification and
                            installation best practices for solar PV systems.
                            California Fire Code (CalFire) is a set of rooftop
                            solar installation safety best practices made by the
                            state of California and used globally for installing
                            solar PV modules to facilitate fire emergency
                            services. International building Code (IBC) used for
                            standard safety practices to evaluate
                            roofs/structures before installing solar PV modules.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        onClick={() => handleToggle(17)}
                      >
                        <button
                          className={
                            isActive.key == 17
                              ? "accordion-button"
                              : "accordion-button collapsed "
                          }
                        >
                          How much would a solar powered system installed by
                          SSES cost?{" "}
                        </button>
                      </h2>
                      <div
                        className={
                          isActive.key == 17
                            ? "accordion-collapse collapse  show"
                            : "accordion-collapse collapse "
                        }
                      >
                        <div className="accordion-body">
                          <p>
                            SSES can provide the best information on what it
                            will cost to go solar for your load. However, once
                            customers begin to explore solar options, they can
                            find vastly varying rates in the market for the same
                            system, what differ are the genuine parts and
                            equipment used by us and some local street vendors.
                            Moreover it is important for costumers to know that
                            the total up-front cost of solar is less relevant
                            than the financing terms, return-on-investment, and
                            cash flow calculation. Financial options such as
                            solar leases and other innovative financing models
                            can help you convert to solar for little or no money
                            along with an efficient design that can also help
                            bring the costs down.
                          </p>
                        </div>
                      </div>
                    </div>
                    </div>
                      */}
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
    const layout = (await getFilteredStrapiContent(strapiApiPath.LAYOUT)) ?? {};
    const banners = await getFilteredStrapiContent(strapiApiPath.BANNERS, [
      {
        slug: "faq",
      },
    ]);
    const profile = await getFilteredStrapiContent(
      strapiApiPath.COMPANY_PROFILE
    );
    data = await getFilteredStrapiContent(strapiApiPath.FAQ_PAGE);

    if (profile) {
      layout["profile"] = profile;
    }

    if (banners && banners.length) {
      layout["banner"] = banners[0];
    }

    return {
      props: {
        layout: layout ?? {},
        data: data ?? {},
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
