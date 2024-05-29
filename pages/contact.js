import Layout from "@/components/layout/Layout";
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
  const pageData = data?.pageData;
  const form = data?.form;
  const companyProfile = layout?.profile;

  if (form && form.input_fields) {
    form.input_fields = sortData(form.input_fields);
  }
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");

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
      return;
    }
    console.log("email payload", payload, email);
    try {
      let res = axios.post("/api/sendemail", { ...payload });
      console.log("email res", res);
      toast.success(res.resp, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log("email error", error);
      toast.success(res.resp, {
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
                  <form action="#" className="contact-form">
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
                      {/* <div className="form-grp">
                        <input
                          id="firstName"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          placeholder="First Name*"
                        />
                      </div>
                      <div className="form-grp">
                        <input
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          placeholder="Email Address*"
                        />
                      </div>
                      <div className="form-grp">
                        <input
                          id="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          type="text"
                          placeholder="Phone Number*"
                        />
                      </div> */}
                    </div>
                    {/* <div className="form-grp">
                      <input
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        type="text"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="form-grp">
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your Message here"
                      />
                    </div> */}
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
                <div className="contact-info-wrap">
                  <h2 className="title">{pageData?.help_title}</h2>
                  <p>{pageData?.help_subtitle}</p>
                  <ul className="list-wrap">
                    <li>
                      <div className="contact-info-item">
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
                          <p
                            dangerouslySetInnerHTML={{
                              __html: fomatEditorContent(
                                companyProfile?.secondary_address
                              ),
                            }}
                          ></p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* contact-map */}
                <div id="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68861.52188624057!2d67.0672045939393!3d24.894982106625328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f87ee80b22b%3A0xb1d92b9696d7c5dd!2sSustainable%20Solar%20Energy%20Solutions%20-%20SSES!5e0!3m2!1sen!2s!4v1600544364851!5m2!1sen!2s"
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
    const pageData = await getFilteredStrapiContent(strapiApiPath.CONTACT_US);
    const form = await getFilteredStrapiContent(strapiApiPath.CONTACT_FORM);

    if (profile) {
      layout["profile"] = profile;
    }

    if (banners && banners.length) {
      layout["banner"] = banners[0];
    }
    data["boards"] = boards;
    data["pageData"] = pageData;
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
