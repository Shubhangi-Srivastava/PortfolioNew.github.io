/*--------------------
* Contact Section
----------------------*/

export default function Contact() {
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
                <form id="contact-form" method="POST">
                  <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 md:col-span-6">
                      <div className="form-group">
                        <label className="form-label">First name</label>
                        <input
                          name="Name"
                          id="name"
                          placeholder="Name *"
                          className="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <div className="form-group">
                        <label className="form-label">Your Email</label>
                        <input
                          name="Email"
                          id="email"
                          placeholder="Email *"
                          className="form-control"
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div className="form-group">
                        <label className="form-label">Subject</label>
                        <input
                          name="Subject"
                          id="subject"
                          placeholder="Subject *"
                          className="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div className="form-group">
                        <label className="form-label">Your message</label>
                        <textarea
                          name="message"
                          id="message"
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
                          type="button"
                          value="Send"
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
                <div className="pb-10">
                  <img
                    className="w-full"
                    src="img/contact-bg.png"
                    title=""
                    alt=""
                  />
                </div>
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
                      <p>srivastava.sh@northeastern.edu</p>
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
