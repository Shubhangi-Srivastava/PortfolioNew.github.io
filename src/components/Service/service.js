/*--------------------
* Education Section
----------------------*/

function Service(props) {
  return (
    <>
      <div className="lg:col-span-6">
        <div className={props.id.main + " feature-box-01"}>
          <div className="icon">
            <img src={props.id.icon}></img>
            {/* <img className={props.id.icon}></img> */}
          </div>
          <div className="feature-content">
            <h5>{props.title}</h5>
            <h6>{props.subtitle}</h6>
            <h6>{props.graduation}</h6>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

/*--------------------
* Education List Section
----------------------*/
export default function ServiceList() {
  const service_list = [
    {
      id: { main: "bg-1", icon: "/img/neuLogo.jpeg" },
      title: "Northeastern University, College of Engineering",
      subtitle: <i>Masters in Computer Software Engineering</i>,
      graduation: "Expected Graduation: December 2023",
      description:
        "Related Courses: Application Engineering and Development, Database Management and database Design, Object Oriented Design and Principles, Web Design / User Experience Engineering, UIUX Design and Testing, Agile Development and Methodologies, Managerial Communications",
    },
    {
      id: { main: "bg-2", icon: "img/mit_puneLogo.png" },
      title: "Pune University, Maharashtra Institute of Technology",
      subtitle: <i>Bachelors in Computer Sciences</i>,
      graduation: "Graduation: July 2019",
      description:
        "Related Courses: Concepts of OOPs, Database Management, Web Design, Data Structures and Algorithms",
    },
  ];
  return (
    <>
      <section
        data-scroll-data="1"
        id="education"
        className="section education-section bg-gray"
        style={{
          backgroundImage: "url(img/effect/bg-effect-1.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="grid section-heading">
            <div className="lg:col-span-6 text-center mx-auto">
              <h3>
                <span>Education</span>
              </h3>
            </div>
          </div>
          <div className="grid lg:grid-cols-1 md:grid-cols-1 gap-5 grid-cols-1 items-center">
            {service_list.map((val, i) => {
              return (
                <Service
                  key={i}
                  id={val.id}
                  title={val.title}
                  subtitle={val.subtitle}
                  graduation={val.graduation}
                  description={val.description}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
