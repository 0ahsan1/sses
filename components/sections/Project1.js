import Link from "next/link";
import { useState } from "react";
import { boards } from "./items";
import Image from "next/image";
import { setBackgroundImageUrl, strapiImageLoader } from "@/helpers/util";
import RichTextRenderer from "@/components/RichTextRenderer";
import {strapiImagePath} from "@/services/ApiService";

export default function Project1({data}) {
    data.projects.length = 3;
  return (
      <div className="container bg-white py-24 sm:py-20 dark:bg-gray-900">
        <div className=" px-6 lg:px-24">
          <div className=" max-w-full">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
            {data?.title}
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-400 py-4" dangerouslySetInnerHTML={{ __html: data?.description }} />
            <div className="mt-16 space-y-20 lg:mt-20">
              {data?.projects.map((post) => (
                  <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                    <div className="relative lg:w-1/4 lg:shrink-0">
                      <Image
                          alt=""
                          src={post?.image && post?.image[0] ? post?.image[0]?.url : ''}
                          loader={strapiImageLoader}
                          width={500}
                          height={1000}
                          className="aspect-video w-full rounded-2xl bg-gray-100 object-cover  dark:bg-gray-800"
                      />
                      {/*<div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10" />*/}
                    </div>
                    <div>
                      <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime={post.datetime} className="text-gray-500 dark:text-gray-400">
                          {post.info.date}
                        </time>
                        <a
                            href={'/project-details/'+post.slug}
                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:bg-gray-800"
                        >
                          {post.slug}
                        </a>
                      </div>
                      <div className="group relative max-w-xl">
                        <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
                          <a href={'/project-details/'+post.slug}>
                            <span className="absolute inset-0" />
                            {post.title}
                          </a>
                        </h3>
                        <p className=" text-sm/6 text-gray-600 dark:text-gray-400">
                          <RichTextRenderer content={post.description} mediaBaseUrl={strapiImagePath} />
                        </p>
                      </div>
                    </div>
                  </article>
              ))}
            </div>
              <div className={'flex justify-end'}>
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
  )
}
