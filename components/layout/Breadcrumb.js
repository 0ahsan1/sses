import Link from "next/link";
import { banners } from "../sections/items";
import { setBackgroundImageUrl } from "@/helpers/util";

export default function Breadcrumb({ data, objKey }) {
  data = data ?? banners.find((d) => d.slug === objKey);

  return (
    <>
      <section
        className="breadcrumb-area breadcrumb-bg"
        style={setBackgroundImageUrl(data?.background_image)}
      >
        <div
          className="breadcrumb-shape"
          style={setBackgroundImageUrl(data?.background_image_2)}
        />
        {/* <section className="breadcrumb-area breadcrumb-bg" data-background="/assets/img/bg/breadcrumb_bg.jpg">
                <div className="breadcrumb-shape" data-background="/assets/img/images/breadcrumb_shape.png" /> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content">
                <h2 className="title">{data?.breadcrumb}</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {data?.breadcrumb}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
