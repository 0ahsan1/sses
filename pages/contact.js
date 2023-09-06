import Layout from "@/components/layout/Layout"
import Link from "next/link"
import nodemailer from "nodemailer";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    function submitEmail() {
        let payload = {
            email, phone, message, subject, name
        }
        let res = sendEmail(payload)
        if (res.isSuccess) {
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
        } else {
            toast.error(res.resp, {
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
            <Layout breadcrumbTitle="Contact Us">
                <section className="contact-area pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-10">
                                <div className="contact-form-wrap" data-background="/assets/img/images/contact_form_bg.jpg">
                                    <h2 className="title">Contact With Us</h2>
                                    <p>Send us a message and we' ll respond as soon as possible</p>
                                    <form action="#" className="contact-form">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input id="firstName" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="First Name*" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email Address*" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Phone Number*" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-grp">
                                            <input id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} type="text" placeholder="Subject" />
                                        </div>
                                        <div className="form-grp">
                                            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message here" />
                                        </div>
                                        <button onClick={submitEmail()} className="btn" type="submit">Send Message</button>
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
                                    <h2 className="title">Need Any Help?</h2>
                                    <p>Call us or message and we' ll respond as soon as possible</p>
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="contact-info-item">
                                                <div className="icon">
                                                    <i className="fas fa-phone-alt" />
                                                </div>
                                                <div className="content">
                                                    <Link href="tel:0123456789">+(323) 9847 3847 383</Link>
                                                    <Link href="tel:0123456789">+(434) 5466 5467 443</Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact-info-item">
                                                <div className="icon">
                                                    <i className="fas fa-envelope" />
                                                </div>
                                                <div className="content">
                                                    <Link href="mailto:infoyour@gmail.com">infoyour@gmail.com</Link>
                                                    <Link href="mailto:infoyour@gmail.com">domaininfo@gmail.com</Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact-info-item">
                                                <div className="icon">
                                                    <i className="fas fa-map-marker-alt" />
                                                </div>
                                                <div className="content">
                                                    <p>4517 Washington Ave. 32 <br /> Manchester, Road USA</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/* contact-map */}
                                <div id="contact-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                </div>
                                {/* contact-map-end */}
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}
