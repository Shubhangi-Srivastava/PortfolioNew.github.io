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
            <h6>{props.tenure}</h6>
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
      id: { main: "bg-2", icon: "img/neuLogo.jpeg" },
      title: "Northeasetrn University, Boston, MA",
      subtitle: <i>President, Husky Systers Code</i>,
      tenure: "April 2023 - Present",
      description:
        "Curerntly leading Husky Systers Code which is a Stduent Technical Club where in we help students build their technical profile by arranging Tech workshops, Speaker Sessions, Study Groups, Hackathons and more.",
    },
    {
      id: { main: "bg-4", icon: "img/Doble.png" },
      title: "Doble Engineering Company, Marlborough, MA",
      subtitle: <i>Software Engineer co-op</i>,
      tenure: "June 2022 - December 2022",
      description:
        "Worked as a Software co-op with key skills focussed on C#, .NET",
    },
    {
      id: { main: "bg-3", icon: "img/neuLogo.jpeg" },
      title: "Northeasetrn University, Boston, MA",
      subtitle: (
        <i>
          Graduate Teaching Assistant : Application Engineering Development,
          Professor Khaled Bugrara
        </i>
      ),
      tenure: "February 2022 - May 2022",
      description:
        "Worked as a TA under the Director and reviewed Java code for students and helped them with queries in code blocks.",
    },
    {
      id: { main: "bg-6", icon: "img/Deloitte.webp" },
      title: "Deloitte, Mumbai, India",
      subtitle: <i>Full Stack Developer</i>,
      tenure: "January 2020 - June 2021",
      description:
        "Worked as a Full Stack Developer in the healthcare domain (Healthcare Benefits for the State of North Dakota) where my key skills involved Java, Javascript, jQuery, MySQL, HTML and CSS",
    },
  ];
  return (
    <>
      <section
        data-scroll-data="2"
        id="workex"
        className="section workex-section bg-gray"
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
                <span>Work Experience</span>
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
                  tenure={val.tenure}
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
