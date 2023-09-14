import { Link } from "react-scroll";

/*--------------------
* About Section
----------------------*/
export default function About() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-12 grid-cols-1 items-center">
            <div className="lg:col-span-6 text-center mb-[50px] lg:mb-0">
              <img
                className="mx-auto"
                src="img/aboutme-banner.png"
                title="Banner"
                alt="Banner"
              />
            </div>
            <div className="lg:col-span-6 lg:pl-12">
              <h3 className="font-[600] text-[26px] md:text-[40px] leading-[1.2] text-black mb-[25px]">
                About me
              </h3>
              <p className="text-[16px] md:text-[18px]">
                I'm a Software Developer with 2 years of experience, now
                pursuing my Master's in Computer Software Engineering at
                Northeastern University. I'm also the proud President of Husky
                Systers Code, our student tech club. I love tackling real-world
                problems using code, and I'm always on the hunt for the next big
                challenge. Whether it's in the classroom or leading a club
                project, I'm all about innovation and making things happen!
              </p>
              <div className="pt-6">
                {/* <Link className="px-btn px-btn-theme mr-4" to="contactus">
                  Contact Me
                </Link> */}
                <a
                  href="Shubhangi_Srivastava_Resume.pdf"
                  className="px-btn px-btn-theme mr-4"
                  download="Shubhangi_Srivastava_Resume.pdf"
                >
                  <i className="fa fa-download" aria-hidden="true"></i> Download
                  Resume
                </a>
                {/* <Link className="px-btn px-btn-dark" to="portfolio">
                  Portfolio
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
