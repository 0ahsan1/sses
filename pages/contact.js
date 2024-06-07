import Layout from "@/components/layout/Layout";
import { NextSeoCom } from "@/components/meta/NextSeoCom";
import { strapiApiPath } from "@/constants/ApiPath";
import {
  fomatEditorContent,
  setBackgroundImageUrl,
  sortData,
} from "@/helpers/util";
import { getFilteredStrapiContent } from "@/services/ApiService";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact({ data, layout }) {
  const form = data?.form;
  const companyProfile = layout?.profile;

  if (form && form.input_fields) {
    form.input_fields = sortData(form.input_fields);
  }

  const [inputFields, setInputFields] = useState(["", "", "", "", ""]);

  const handleFormChange = (index, value) => {
    let data = [...inputFields];
    data[index] = value;
    setInputFields(data);
  };

  function submitEmail() {
    const payloadFields = ["name", "email", "phone", "subject", "message"];
    let payload = {};
    payloadFields.forEach((key, index) => {
      payload[key] = inputFields[index];
    });
    if (!payload.name || !payload.email || !payload.phone) {
      toast.error("Invalid Form Data", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    try {
      let res = axios.post("/api/sendemail", { ...payload });
      toast.success("Thank you! We've received your message and will follow up shortly", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      payload = {}
      setInputFields(["", "", "", "", ""]);
    } catch (error) {
      toast.error("Submission failed please try again later", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  return (
    <>
   {form && form.meta ? <NextSeoCom data={{...form.meta}} />: <></>} 
      <Layout data={layout} objKey={"contact"}>
        <section className="contact-area pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-10">
                <div
                  className="contact-form-wrap"
                  style={setBackgroundImageUrl(form?.background_image?.url)}
                >
                  <h2 className="title">{form?.title}</h2>
                  <p>{form?.subtitle}</p>
                  <form className="contact-form">
                    <div className="row">
                      {form.input_fields &&
                        form?.input_fields.map((item, index) => {
                          return (
                            <div className="form-grp">
                              {item?.type !== "textarea" ? (
                                <input
                                  id={index}
                                  value={inputFields[index]}
                                  onChange={(e) =>
                                    handleFormChange(index, e.target.value)
                                  }
                                  type={item?.type}
                                  placeholder={`${item?.placeholder}${
                                    item?.required ? "*" : ""
                                  }`}
                                  required={item?.required}
                                />
                              ) : (
                                <textarea
                                  id={index}
                                  value={inputFields[index]}
                                  onChange={(e) =>
                                    handleFormChange(index, e.target.value)
                                  }
                                  placeholder={`${item?.placeholder}${
                                    item?.required ? "*" : ""
                                  }`}
                                  required={item?.required}
                                />
                              )}
                            </div>
                          );
                        })}
                    </div>
                    
                    <button
                      onClick={() => submitEmail()}
                      className="btn"
                      type="submit"
                    >
                      {form?.button_text}
                    </button>
                    <ToastContainer
                      position="top-right"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="light"
                    />
                    {/* Same as */}
                    <ToastContainer />
                  </form>
                </div>
              </div>
              <div className="col-xl-6 col-lg-10">
                <div className="contact-info-wrap text-xs">
                  <h2 className="title">{form?.help_title}</h2>
                  <p>{form?.help_subtitle}</p>
                  <ul className="list-wrap justify-content-center">
                    <li>
                      <div className="contact-info-item ">
                        <div className="icon">
                          <i className="fas fa-phone-alt" />
                        </div>
                        <div className="content">
                          <Link href={`tel:${companyProfile?.secondary_phone}`}>
                            {companyProfile?.secondary_phone}
                          </Link>
                          {/* <Link href={`tel:${companyProfile?.other_phone}`}>
                            {companyProfile?.other_phone}
                          </Link> */}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact-info-item">
                        <div className="icon">
                          <i className="fas fa-envelope" />
                        </div>
                        <div className="content">
                          <Link href={companyProfile?.email}>
                            {companyProfile?.email}
                          </Link>
                          {/* <Link href={companyProfile?.secondary_email}> */}
                            {/* {companyProfile?.secondary_email} */}
                          {/* </Link> */}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact-info-item">
                        <div className="icon">
                          <i className="fas fa-map-marker-alt" />
                        </div>
                        <div className="content">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: fomatEditorContent(
                                companyProfile?.secondary_address
                              ),
                            }}
                          ></span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* contact-map */}
                <div id="contact-map">
                  <iframe
                    src={companyProfile?.map}
                    height={570}
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                {/* contact-map-end */}
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
    const profile = await getFilteredStrapiContent(
      strapiApiPath.COMPANY_PROFILE
    );
    const banners = await getFilteredStrapiContent(strapiApiPath.BANNERS, [
      {
        slug: "contact",
      },
    ]);
    const boards = await getFilteredStrapiContent(strapiApiPath.BOARDS);
    const form = await getFilteredStrapiContent(strapiApiPath.CONTACT_FORM);

    if (profile) {
      layout["profile"] = profile;
    }

    if (banners && banners.length) {
      layout["banner"] = banners[0];
    }
    data["boards"] = boards;
    data["form"] = form;

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
