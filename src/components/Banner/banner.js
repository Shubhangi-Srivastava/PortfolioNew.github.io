import { Link } from "react-scroll";
import ReactTypingEffect from "react-typing-effect";

/*--------------------
* Banner Section
----------------------*/
export default function Banner() {
  return (
    <>
      <section
        data-scroll-data="0"
        id="home"
        className="home-section pt-[120px] pb-[80px] lg:pt-[180px] lg:pb-[100px] bg-orange-50 relative overflow-hidden"
      >
        <div className="container relative z-[1]">
          <div className="grid lg:grid-cols-12 grid-cols-1 items-center">
            <div className="lg:col-span-6">
              <div className="text-center lg:text-start mb-[50px] lg:mb-0">
                <h6 className="text-black uppercase text-[14px] md:text-[16px] tracking-[2px] font-[600] mb-[20px] md:mb-[30px]">
                  👋, My name is Shubhangi Srivastava
                </h6>
                <h1 className="text-black font-[600] text-[40px] lg:text-[60px] xl:text-[70px] leading-[1] mb-[25px] md:mb-[35px]">
                  I'm a{" "}
                  <span id="type-it">
                    <ReactTypingEffect
                      text={["Developer", "President"]}
                      speed="100"
                      typingDelay="500"
                      eraseDelay="200"
                    />
                  </span>
                </h1>
                <p className="text-[16px] md:text-[20px] mb-[8px] md:mb-[16px]">
                  Based in Boston, Massachusetts.
                </p>
                <div className="pt-[10px]">
                  <Link className="px-btn px-btn-theme" to="contactus">
                    Let's connect
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="home-image text-center">
                <img
                  src="img/home-banner.png"
                  title="Banner"
                  alt="Banner"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "500px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
