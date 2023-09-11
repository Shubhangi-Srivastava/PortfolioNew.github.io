import { useState } from "react";
import { Link } from "react-scroll";

/*--------------------
* Proejct Section
----------------------*/

function Proejct(props) {
  return (
    <>
      <div className="px-modal mfp-hide">
        <div className="single-project-box">
          <div className="grid grid-cols-12 gx-3">
            <div className="col-span-12 md:col-span-7 mb-10 md:mb-0">
              <div className="grid grid-cols-2 gap-2">
                {props.projectDetails.images.map((img, i) => {
                  return (
                    <div key={`image_${i}`} className="col-span-1">
                      <img className="border" src={img} title="" alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 md:pl-10 lg:pl-14">
              <h4 className="font-[600] text-[25px] text-black mb-4 pb-4 border-b">
                {props.projectDetails.title}
              </h4>
              <p className="mb-3">{props.projectDetails.description}</p>
              <p>{props.projectDetails.subDescription}</p>
              <ul className="m-0 p-0 pt-7 list-none">
                {props.projectDetails.details.map((detail, i) => {
                  return (
                    <li key={`detail_${i}`} className="flex py-2">
                      <span className="w-[100px] font-[600] text-black">
                        {detail.title}:
                      </span>
                      <span>{detail.description}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <button className="px-close" onClick={props.closePopup}>
              <i className="fa fa-times"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/*--------------------
* Work Section
----------------------*/

export default function Work() {
  const [showModal, setShowModal] = useState(0);
  const closePopup = () => {
    setShowModal(0);
  };

  const projectDetails = [
    {
      title: "Healthcare Benefits for the State of Massachusetts",
      description:
        "The Mass Health application majorly focuses on granting health benefits like ACA, ABD Blind, ABD, ACAP, CWD, WWD, Medicare to the citizens of Massachusetts.Funding is shared by federal and state governments, with eligibility determined based on eligibility criteria of the citizen.",
      subDescription:
        "The citizen will apply for Healthcare Benefits by approaching the Application Registrar who would start his application registration followed by Data Collection, Eligibility Determination and finally, the notice of Authorization confirming the client about the benefit that has been granted to him based on his Eligibility Criteria.",
      images: [
        "img/project-1.jpg",
        "img/project-3.jpg",
        "img/project-4.jpg",
        "img/project-2.jpg",
      ],
      details: [
        {
          title: "Type",
          description: "Backend Project",
        },
        {
          title: "Langages",
          description: "Java, JSwing, MySQL",
        },
        {
          title: "Platform",
          description: "NetBeans",
        },
        {
          title: "Country",
          description: "USA",
        },
        {
          title: "GitHub Link",
          description: "www.example.com",
        },
      ],
    },
    {
      title: "Online Restaurant Delivery Management System",
      description:
        "The technology stack leveraged the capabilities of Java AWT and Swing for crafting intuitive and user-friendly interfaces, combined with DB4OUtil for efficient data management.",
      subDescription:
        "Customers can easily browse menus and track orders. Restaurant managers get tools for menu and order management, while delivery staff have a system for pickups and location updates. Using DB4OUtil for database management and ArrayLists for data storage, our application ensures real-time updates for all users. Integrated feedback and payment systems, along with an analytics dashboard for managers, elevate the user experience and operational efficiency.",
      images: [
        "img/project-2.jpg",
        "img/project-3.jpg",
        "img/project-4.jpg",
        "img/project-1.jpg",
      ],
      details: [
        {
          title: "Type",
          description: "Website",
        },
        {
          title: "Langages",
          description: "",
        },
        {
          title: "Platform",
          description: "WordPress",
        },
        {
          title: "Country",
          description: "USA",
        },
        {
          title: "Live URL",
          description: "www.example.com",
        },
      ],
    },
    {
      title: "Website Design for Marketing Agency Startup 03",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      subDescription:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      images: [
        "img/project-3.jpg",
        "img/project-2.jpg",
        "img/project-4.jpg",
        "img/project-1.jpg",
      ],
      details: [
        {
          title: "Type",
          description: "Website",
        },
        {
          title: "Langages",
          description: "",
        },
        {
          title: "Platform",
          description: "WordPress",
        },
        {
          title: "Country",
          description: "USA",
        },
        {
          title: "Live URL",
          description: "www.example.com",
        },
      ],
    },
    {
      title: "Website Design for Marketing Agency Startup 04",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      subDescription:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      images: [
        "img/project-4.jpg",
        "img/project-2.jpg",
        "img/project-3.jpg",
        "img/project-1.jpg",
      ],
      details: [
        {
          title: "Type",
          description: "Website",
        },
        {
          title: "Langages",
          description: "",
        },
        {
          title: "Platform",
          description: "WordPress",
        },
        {
          title: "Country",
          description: "USA",
        },
        {
          title: "Live URL",
          description: "www.example.com",
        },
      ],
    },
  ];
  return (
    <>
      <section
        data-scroll-data="4"
        id="portfolio"
        className="section bg-orange-50"
      >
        <div className="container">
          <div className="grid section-heading">
            <div className="lg:col-span-6 text-center mx-auto">
              <h3>
                <span>Latest Projects</span>
              </h3>
            </div>
          </div>
          <div className="lightbox-gallery portfolio-box">
            `
            <div className="grid grid-cols-12 gx-3 mb-5 pb-lg-3 mb-lg-3 pb-12 portfolio-box justify-around items-center">
              <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10 mb-10 md:mb-0">
                <div className="portfolio-img">
                  <img src="img/project-1.jpg" title="" alt="" />
                  <Link to="#" className="gallery-link gallery-link-icon">
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10">
                <div className="portfolio-text">
                  {/* <h6>
                    <Link to="#" className="gallery-link gallery-link-icon">
                      <i className="fab fa-github"></i>
                    </Link>
                  </h6> */}
                  <h4>Healthcare Benefits for the State Of Massachusetts</h4>
                  <p>
                    This application provides comprehensive and uniform medical
                    services that enable persons previously limited by their
                    circumstances to receive medical care in the form of Health
                    Care Coverage.
                  </p>
                  <div className="btn-bar">
                    <div
                      className="px-btn px-btn-theme px_modal"
                      onClick={() => setShowModal(1)}
                    >
                      View Project{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gx-3 mb-5 pb-lg-3 mb-lg-3 pb-12 portfolio-box justify-around items-center">
              <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10 md:order-last mb-10 md:mb-0">
                <div className="portfolio-img">
                  <img src="img/project-2.jpg" title="" alt="" />
                  <Link to="#" className="gallery-link gallery-link-icon">
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10">
                <div className="portfolio-text">
                  {/* <h6>
                    <span>Web Design</span>
                  </h6> */}
                  <h4>Online Restaurant Delivery Management System</h4>
                  <p>
                    Developed an online food delivery application catering to
                    three primary user types: customers, restaurant managers,
                    and delivery staff.
                  </p>
                  <div className="btn-bar">
                    <div
                      className="px-btn px-btn-theme px_modal"
                      onClick={() => setShowModal(2)}
                    >
                      View Project{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gx-3 mb-5 pb-lg-3 mb-lg-3 pb-12 portfolio-box justify-around items-center">
              <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10 mb-10 md:mb-0">
                <div className="portfolio-img">
                  <img src="img/project-3.jpg" title="" alt="" />
                  <Link to="#" className="gallery-link gallery-link-icon">
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10">
                <div className="portfolio-text">
                  <h6>
                    <span>Upcoming Project:</span>
                  </h6>
                  <h4>Husky Systers Code</h4>
                  <p>
                    Being the President of the Technical Student club of
                    Northeastern, I wanted to take another step in the
                    recognition of the club.
                  </p>
                  <div className="btn-bar">
                    <div
                      className="px-btn px-btn-theme px_modal"
                      onClick={() => setShowModal(3)}
                    >
                      View Project{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="grid grid-cols-12 gx-3 mb-5 pb-lg-3 mb-lg-3 pb-12 portfolio-box justify-around items-center">
              <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10 md:order-last mb-10 md:mb-0">
                <div className="portfolio-img">
                  <img src="img/project-4.jpg" title="" alt="" />
                  <Link to="#" className="gallery-link gallery-link-icon">
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10">
                <div className="portfolio-text">
                  <h6>
                    <span>Web Design</span>
                  </h6>
                  <h4>Website Design for Marketing Agency Startup</h4>
                  <p>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites, web
                    services and online stores
                  </p>
                  <div className="btn-bar">
                    <div
                      className="px-btn px-btn-theme px_modal"
                      onClick={() => setShowModal(4)}
                    >
                      View Project{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {showModal ? (
        <>
          <Proejct
            closePopup={closePopup}
            projectDetails={projectDetails[showModal - 1]}
          ></Proejct>
        </>
      ) : null}
    </>
  );
}
