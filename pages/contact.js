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
export const sendEmail = async (data) => {
    let resp = '';
    let isSuccess = false;
    const { email, name, phone, subject, message } = data;
    const transporter = nodemailer.createTransport({
        host: "mail.sses.pk",
        port: 587,
        secure: false,
        auth: {
            user: 'info@sses.pk',
            pass: 'sses_0321',
        },
    });
    const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>MTFX Connect With</title>
      <style>
        table {
          border-collapse: collapse;
          width: 100%;
        }
        th,
        td {
          padding: 8px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }
        th {
          background-color: #f2f2f2;
        }
        tfoot td {
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <table border="1" width="621" style="border:1px solid #222;" cellpadding="0" cellspacing="0">
      <tbody>
      <tr>
      <td style="width: 260px;border:1px solid #222;padding:8px;">Name</td>
      <td style="width: 345px;border:1px solid #222;padding:8px;">${name}</td>
      </tr>
      <tr>
      <td style="width: 260px;border:1px solid #222;padding:8px;">Email</td>
      <td style="width: 345px;border:1px solid #222;padding:8px;">${email}</td>
      </tr>
      <tr>
      <td style="width: 260px;border:1px solid #222;padding:8px;">Phone</td>
      <td style="width: 345px;border:1px solid #222;padding:8px;">${phone}</td>
      </tr>
      <td style="width: 260px;border:1px solid #222;padding:8px;">Subject</td>
      <td style="width: 345px;border:1px solid #222;padding:8px;">${subject}</td>
      </tr>
      <tr>
      <td style="width: 260px;border:1px solid #222;padding:8px;">Message</td>
      <td style="width: 345px;border:1px solid #222;padding:8px;">${message}</td>
      </tr>
      </tbody>
      </table><br />
    </body>
  </html>
  `;
    const mailData = {
        from: 'info@sses.pk',
        to: 'info.sustainablesolar@gmail.com',
        subject: 'Message Received (Contact Page)',
        html: html,
    };
    transporter.sendMail(mailData, function (error, info) {

        if (error) {
            isSuccess = false
            resp = 'Sorry there was an error sending your message. Please try again later'
            console.error(error);
        } else {
            isSuccess = true

            resp = 'Message Sent! Thank you for contacting us.'
        }
    });
    return { resp, isSuccess }
};