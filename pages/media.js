import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { AiOutlineExpandAlt } from "react-icons/ai";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

export default function Media() {
  return (
    <Layout breadcrumbTitle="Media">
      <div className="my-24 w-full">
        <Gallery />
      </div>
    </Layout>
  );
}

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");

  const galleryTab = [
    // you can add more image if you want
    {
      imageUrl: "/assets/img/product/product-1.jpg",
      type: "",
      title: "CEO - Mr. Hassan Jafri talking to media",
    },
    {
      imageUrl: "/assets/img/product/product-2.jpg",
      type: "",
      title: "Team SSES receiving award from IEEEP",
    },
    {
      imageUrl: "/assets/img/product/product-3.jpg",
      type: "",
      title: "SSES stall at IEEEP Fair - 2018",
    },
    {
      imageUrl: "/assets/img/product/product-4.jpg",
      type: "",
      title: "CEO - Mr. Hassan Jafri meeting with corporate clients",
    },
    {
      imageUrl: "/assets/img/product/product-5.jpg",
      type: "",
      title: "CEO - Mr. Hassan Jafri with chinese delegation",
    },
  ];
  const slides = galleryTab.map((item) => ({
    src: item.imageUrl,
    width: 3840,
    height: 2560,
    srcSet: [
      { src: item.imageUrl, width: 320, height: 213 },
      { src: item.imageUrl, width: 640, height: 426 },
      { src: item.imageUrl, width: 1200, height: 800 },
      { src: item.imageUrl, width: 2048, height: 1365 },
      { src: item.imageUrl, width: 3840, height: 2560 },
    ],
  }));

  return (
    <div className="w-full">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-title text-center mb-60 tg-heading-subheading animation-style3">
            <span className="sub-title tg-element-title">Event Gallery</span>
            <h2 className="title">IEEEP Event</h2>
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="flex flex-col md:grid md:grid-cols-3 h-full gap-0 flex-wrap mx-2 md:mx-0">
          {galleryTab.map((x, index) => {
            return (
              <div key={index} className="md:h-[30vw] h-screen relative m-4">
                <div className="group h-full">
                  <div
                    className="bg-cover bg-center h-full w-full bg-no-repeat"
                    style={{ backgroundImage: `url("${x.imageUrl}")` }}
                  >
                    <div className="text-2xl text-white absolute bottom-0 left-2 z-10">
                      <div>{x.type}</div>
                      <div>{x.title}</div>
                    </div>
                  </div>
                  <div
                    className="bg-black opacity-0 group-hover:opacity-75 absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out"
                    onClick={() => {
                      setOpen(true);
                      setImage(x.imageUrl);
                    }}
                  >
                    <p className="text-white">
                      <AiOutlineExpandAlt className="text-5xl border w-16 h-16 bg-neutral-500 hover:bg-white hover:text-black p-3 cursor-pointer rounded-full" />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        showPrevNext={false}
        slides={slides}
      />
    </div>
  );
};

export async function getStaticProps() {
  try {
    let data = {};
    const layout = await getFilteredStrapiContent(strapiApiPath.LAYOUT);
    const profile = await getFilteredStrapiContent(
      strapiApiPath.COMPANY_PROFILE
    );
    const banners = await getFilteredStrapiContent(strapiApiPath.BANNERS, [
      {
        slug: "main",
      },
    ]);
    const boards = await getFilteredStrapiContent(strapiApiPath.BOARDS);
    const aboutSection = await getFilteredStrapiContent(
      strapiApiPath.ABOUT_SECTION
    );
    const sliderImages = await getFilteredStrapiContent(
      strapiApiPath.SLIDER_IMAGES
    );
    const team = await getFilteredStrapiContent(strapiApiPath.TEAM);
    const testimonials = await getFilteredStrapiContent(
      strapiApiPath.TESTIMONIALS
    );

    if (layout && profile) {
      layout["profile"] = profile;
    }

    if (banners && banners.length) {
      data["banner"] = banners[0];
    }
    data["boards"] = boards;
    data["aboutSection"] = aboutSection;
    data["sliderImages"] = sliderImages;
    data["team"] = team;
    data["testimonials"] = testimonials;

    return {
      props: {
        layout: layout ?? {},
        data: data,
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
