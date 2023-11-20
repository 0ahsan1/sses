import { strapiImageLoader } from "@/helpers/util";
import Image from "next/image";
import Slider from "react-slick";
const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};
export default function Brand1({ sliderImages }) {
  return (
    <>
      <div className="brand-area">
        <div className="container">
          <div className="brand-inner">
            <Slider {...settings} className="row brand-active">
              {sliderImages.map((item) => {
                return (
                  <div className="col-12">
                    <div className="brand-item">
                      <Image
                        src={item?.media?.url}
                        alt=""
                        width={74}
                        height={47}
                        loader={strapiImageLoader}
                      />
                      {/* <img src="/assets/img/brand/partner-1.jpg" alt="" /> */}
                    </div>
                  </div>
                );
              })}
              {/* 
              <div className="col-12">
                <div className="brand-item">
                  <img src="/assets/img/brand/partner-1.jpg" alt="" />
                </div>
              </div>
              <div className="col-12">
                <div className="brand-item">
                  <img src="/assets/img/brand/partner-2.jpg" alt="" />
                </div>
              </div>
              <div className="col-12">
                <div className="brand-item">
                  <img src="/assets/img/brand/partner-3.jpg" alt="" />
                </div>
              </div>
              <div className="col-12">
                <div className="brand-item">
                  <img src="/assets/img/brand/partner-4.jpg" alt="" />
                </div>
              </div>
              <div className="col-12">
                <div className="brand-item">
                  <img src="/assets/img/brand/partner-5.jpg" alt="" />
                </div>
              </div>
              <div className="col-12">
                <div className="brand-item">
                  <img src="/assets/img/brand/partner-6.jpg" alt="" />
                </div>
              </div>
              <div className="col-12">
                <div className="brand-item">
                  <img src="/assets/img/brand/partner-7.jpg" alt="" />
                </div>
              </div> */}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
