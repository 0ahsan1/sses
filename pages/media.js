import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { AiOutlineExpandAlt } from "react-icons/ai";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import { strapiApiPath } from "@/constants/ApiPath";
import { getFilteredStrapiContent } from "@/services/ApiService";
import { strapiImageLoader } from "@/helpers/util";

export default function Media(data) {
   data = data.data
  console.log('data',data)
  return (
    <Layout breadcrumbTitle="Media">
      <div className="my-24 w-full">
        <Gallery data={data}/>
      </div>
    </Layout>
  );
}

const Gallery = (data) => {
  const strapiBasePath = process.env.NEXT_PUBLIC_STRAPI_BASE_URL
  data = data.data
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const galleryTab = data.galleries.map(g=>{
    return {
      title:g.title,
      imageUrl: `${strapiBasePath}${g.image.url}`
    }
  })

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
            <span className="sub-title tg-element-title">{data?.title}</span>
            <h2 className="title">{data?.subtitle}</h2>
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
                      <div>{x.title}</div>
                    </div>
                  </div>
                  {/* <div
                    className="bg-black opacity-0 group-hover:opacity-75 absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out"
                    onClick={() => {
                      setOpen(true);
                      setImage(x.imageUrl);
                    }}
                  >
                    <p className="text-white">
                      <AiOutlineExpandAlt className="text-5xl border w-16 h-16 bg-neutral-500 hover:bg-white hover:text-black p-3 cursor-pointer rounded-full" />
                    </p>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        showPrevNext={false}
        slides={slides}
      /> */}
    </div>
  );
};
export async function getStaticProps() {
  try {
    const data = await getFilteredStrapiContent(strapiApiPath.MEDIA);
 

    return {
      props: {
        data,
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
