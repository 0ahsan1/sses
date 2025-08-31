import Link from "next/link";
import { useState } from "react";
import { boards } from "./items";
import { strapiApiPath } from "@/constants/ApiPath";
import Image from "next/image";
import { strapiImageLoader } from "@/helpers/util";
import {strapiBasePath, strapiImagePath} from "@/services/ApiService";
import RichTextRenderer from "@/components/RichTextRenderer";
import {CarouselComp} from "@/components/Crousel";

export default function Services1({ data, objKey }) {
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
      <section className="services-area">
        <div className="container  px-6 lg:px-8">
          <div className="mx-auto  max-w-full">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              {data?.title}
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: data?.description }} />
          </div>
          <div className="mx-auto mt-16 ">
          <CarouselComp data={data.services} />
            </div>
        </div>
      </section>
    </>
  );
}
