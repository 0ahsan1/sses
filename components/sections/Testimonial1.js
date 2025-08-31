import Slider from "react-slick";
import { boards } from "./items";
import Image from "next/image";
import { strapiImageLoader } from "@/helpers/util";
import RichTextRenderer from "@/components/RichTextRenderer";
import {strapiImagePath} from "@/services/ApiService";
import TestimonialCarousel from "@/components/testimonial";
const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: false,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Testimonial1({ data, objKey }) {

  return (
    <>
      <section className="testimonial-area bg-white">
        <div className="container">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-base/7 font-semibold text-primary-color dark:text-indigo-400">Testimonials</h2>
                <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                    We have worked with thousands of amazing people
                </p>
            </div>
            <TestimonialCarousel data={data?.items} />
        </div>
      </section>
    </>
  );
}
