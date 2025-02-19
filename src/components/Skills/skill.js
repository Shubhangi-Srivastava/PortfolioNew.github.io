// /*--------------------
// * Skill Section
// ----------------------*/
/*--------------------
* Skill Section
----------------------*/

function Skill(props) {
  const isFontAwesome =
    props.id.icon.startsWith("fab fa-") || props.id.icon.startsWith("fas fa-");

  return (
    <>
      <div className="col-span-6">
        <div className={props.id.main + " feature-box-02"}>
          <div className="icon">
            {isFontAwesome ? (
              <i className={props.id.icon}></i>
            ) : (
              <img src={props.id.icon} alt={props.title} />
            )}
            {/* <i className={props.id?.icon}></i> */}
          </div>
          <h6>{props.title}</h6>
        </div>
      </div>
    </>
  );
}

/*--------------------
* Skill List Section
----------------------*/
export default function SkillList() {
  const skill_list = [
    { id: { main: "bg-1", icon: "fab fa-java" }, title: "Java" },
    { id: { main: "bg-2", icon: "fab fa-js" }, title: "Javascript" },
    { id: { main: "bg-3", icon: "fab fa-html5" }, title: "HTML5" },
    { id: { main: "bg-4", icon: "fab fa-css3" }, title: "CSS" },
    { id: { main: "bg-5", icon: "fab fa-react" }, title: "React JS" },
    { id: { main: "bg-6", icon: "/img/mysql.png" }, title: "MySQL" },
    { id: { main: "bg-1", icon: "/img/restapi.png" }, title: "RestAPI" },
    {
      id: { main: "bg-2", icon: "img/tailwindcss.webp" },
      title: "Tailwind CSS",
    },
    { id: { main: "bg-3", icon: "img/char.png" }, title: "C#" },
    { id: { main: "bg-4", icon: "img/dotnet.png" }, title: ".NET" },
    { id: { main: "bg-5", icon: "img/agile.png" }, title: "Agile" },
    { id: { main: "bg-6", icon: "img/mongodb.png" }, title: "MongoDB" },
  ];

  return (
    <>
      <section
        data-scroll-data="3"
        id="skill"
        className="section skill-section !pb-0"
      >
        <div className="container">
          <div className="">
            {/*}grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 */}
            <div className="lg:col-span-6 lg:pl-9">
              <div className="section-heading text-center">
                <h3 className="m-0">
                  <span>Skills</span>
                </h3>
              </div>
              <div className="skill-box">
                <div className="grid gap-4 grid-cols-12">
                  {skill_list.map((val, i) => {
                    return <Skill key={i} id={val.id} title={val.title} />;
                  })}
                </div>
              </div>
            </div>
            {/* <div className="lg:col-span-6 text-center pt-[40px] md:pt-0">
              <img className="mx-[auto]" src="" title="" alt="" />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
