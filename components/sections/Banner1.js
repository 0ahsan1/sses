import Link from "next/link";
import { useState } from "react";
import Brand1 from "./Brand1";
import { brands } from "./items";
import { setBackgroundImageUrl } from "@/helpers/util";
import { banners } from "../layout/items";

export default function Banner1({ data, sliderImages, objKey }) {
  
  console.log('Banner1',data)
  return
  sliderImages = sliderImages ?? brands;
 
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
      <section className="banner-area">
        <div
          className="banner-shape"
          style={setBackgroundImageUrl('/assets/img/banner/banner_shape.jpg')}
          // data-background="/assets/img/banner/banner_shape.jpg"
        />
        <div
          className="banner-bg"
          style={setBackgroundImageUrl(data?.image)}
        >
          <div className="banner-content">
            <h2 className="title wow fadeInDown" data-wow-delay=".2s">
              {data?.title}
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".2s" dangerouslySetInnerHTML={{ __html: data?.description }}>
            
            </p>
            {data?.button && data?.button.length > 0 && (
                <div className="flex flex-wrap gap-4 mt-4">
                  {data?.button.map((btn, idx) => (
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
          {/* <div className="banner-tooltip-wrap">
                        <div className={isActive.key == 1 ? "tooltip-item top active" : "tooltip-item top"} onClick={() => handleToggle(1)}>
                            <div className="tooltip-btn pulse">
                                <i className="fas fa-plus" />
                            </div>
                            <div className="tooltip-content">
                                <h2 className="title">Combustion Roof Vent</h2>
                                <p>Suffered alteration in some a goody form, by injected humor, or into the randomized word.</p>
                            </div>
                        </div>
                        <div className={isActive.key == 2 ? "tooltip-item active" : "tooltip-item"} onClick={() => handleToggle(2)}>
                            <div className="tooltip-btn pulse">
                                <i className="fas fa-plus" />
                            </div>
                            <div className="tooltip-content">
                                <h2 className="title">Combustion Roof Vent</h2>
                                <p>Suffered alteration in some a goody form, by injected humor, or into the randomized word.</p>
                            </div>
                        </div>
                        <div className={isActive.key == 3 ? "tooltip-item active" : "tooltip-item"} onClick={() => handleToggle(3)}>
                            <div className="tooltip-btn pulse">
                                <i className="fas fa-plus" />
                            </div>
                            <div className="tooltip-content">
                                <h2 className="title">Combustion Roof Vent</h2>
                                <p>Suffered alteration in some a goody form, by injected humor, or into the randomized word.</p>
                            </div>
                        </div>
                    </div> */}
        </div>
        {/* brand-area */}
        <Brand1 sliderImages={sliderImages} />
        {/* brand-area-end */}
      </section>
    </>
  );
}
