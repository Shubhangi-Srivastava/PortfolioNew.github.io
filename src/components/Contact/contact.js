/*--------------------
* Contact Section
----------------------*/
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i4h00r8",
        "template_2li6k88",
        form.current,
        "3ktv8L9NzzPqcdYRK" //github pages pe host karo.
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent!");
          Swal.fire({
            title: "Email sent!",
            text: "Your email has been sent successfully.",
            icon: "success",
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: "Ooopsy daisy!",
            text: "Failed. Kindly email me on the mentioned mail ID",
            icon: "error",
          });
          e.target.reset();
        }
      );
  };

  // import axios from "axios";
  // import { useState } from "react";

  // export default function Contact() {
  //   // const [name, setName] = useState("");
  //   const [recipient_email, setEmail] = useState("");
  //   const [subject, setSubject] = useState("");
  //   const [message, setMessages] = useState("");

  //   async function sendMail() {
  //     if (recipient_email && subject && message) {
  //       await axios
  //         .post("http://localhost:5000/send", {
  //           recipient_email,
  //           subject,
  //           message,
  //         })
  //         .then(() => console.log("Message sent successfully")) //alert("Message sent successfully")
  //         .catch(() => console.log("Message failed")); //alert("Ooopsy daisy...")
  //       return;
  //     }
  //     return alert("Fill in all the fields to continue");
  //   }

  return (
    <>
      <section
        data-scroll-data="5"
        id="contactus"
        className="section contactus-section bg-slate-900"
        style={{
          backgroundImage: "url(img/effect/bg-effect-3.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6 ">
              <div className="p-[25px] md:p-[35px] bg-white">
                <h6 className="text-[32px] font-[600] text-black mb-[5px]">
                  Let's Connect
                </h6>
                <p className="text-[18px] mb-[30px]">
                  Kindly drop in a message below regarding any job
                  opportunities.
                </p>
                <form id="contact-form" ref={form} onSubmit={sendEmail}>
                  <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 md:col-span-6">
                      <div className="form-group">
                        <label htmlFor="name" className="form-label">
                          name
                        </label>
                        <input
                          name="user_name"
                          id="name"
                          // onChange={(e) => setName(e.target.value)}
                          placeholder="Name *"
                          className="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          Your Email
                        </label>
                        <input
                          name="user_email"
                          id="recipient_email"
                          // onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email *"
                          className="form-control"
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div className="form-group">
                        <label htmlFor="subject" className="form-label">
                          Subject
                        </label>
                        <input
                          name="subject"
                          id="subject"
                          // onChange={(e) => setSubject(e.target.value)}
                          placeholder="Subject *"
                          className="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div className="form-group">
                        <label htmlFor="message" className="form-label">
                          Your message
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          // onChange={(e) => setMessages(e.target.value)}
                          placeholder="Your message *"
                          rows="4"
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div className="send">
                        <button
                          className="px-btn px-btn-theme2"
                          type="submit"
                          // onClick={() => sendMail()}
                          value="send"
                        >
                          {" "}
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 flex">
              <div className="lg:max-w-[410px] w-full lg:ml-auto pt-[50px] lg:pt-0">
                {/* <div className="pb-10">
                  <img
                    className="w-full"
                    src="img/contact-bg.png"
                    title=""
                    alt=""
                  />
                </div> */}
                <ul className="contact-infos">
                  <li>
                    <div className="icon bg-1">
                      <i className="fas fa-envelope"></i>
                    </div>
                    {/* <div className="col">
                      <h5>Phone</h5>
                      <p>+01 123 654 8096</p>
                    </div> */}
                    <div className="col">
                      <h5>Mail</h5>
                      <p>
                        <a href="mailto:srivastava.sh@northeastern.edu">
                          srivastava.sh@northeastern.edu
                        </a>
                      </p>
                    </div>
                  </li>
                  {/* <li>
                    <div className="icon bg-2">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="col">
                      <h5>Mail</h5>
                      <p>info@domainname.com</p>
                    </div>
                  </li> */}
                  <li>
                    <div className="icon bg-[#0A66C2]">
                      <i className="fab fa-linkedin"></i>
                    </div>
                    <div className="col">
                      <h5>LinkedIn</h5>
                      <p>
                        <a href="https://www.linkedin.com/in/srivastava-shubhangi/">
                          click here
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon bg-gradient-to-br from-yellow-400 via-pink-600 to-indigo-600">
                      <i className="fab fa-instagram"></i>
                    </div>
                    <div className="col">
                      <h5>Instagram</h5>
                      <p>
                        <a href="https://www.instagram.com/shubhangi_srivastava/?next=%2F">
                          click here
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
