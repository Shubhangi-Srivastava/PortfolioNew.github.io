
/*--------------------
* Skill Section
----------------------*/
function Skill(props) {
    return (
        <>
            <div className="col-span-6">
                <div className={props.id.main + " feature-box-02 "}>
                    <div className="icon">
                        <i className={props.id?.icon}></i>
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
        {id:{main:'bg-1', icon:'fab fa-html5'}, title:'HTML' },
        {id:{main:'bg-2', icon:'fab fa-css3'}, title:'CSS' },
        {id:{main:'bg-3', icon:'fab fa-react'}, title:'React JS' },
        {id:{main:'bg-4', icon:'fab fa-angular'}, title:'Angular' },
        {id:{main:'bg-5', icon:'fab fa-apple'}, title:'IOS App' },
        {id:{main:'bg-6', icon:'fab fa-android'}, title:'App Dev' },
    ]

    return (
        <>
            <section data-scroll-data="2" id="skill" className="section experience-section !pb-0">
                <div className="container">
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1">
                        <div className="lg:col-span-6 lg:pl-9">
                            <div className="section-heading">
                                <h3 className="m-0"><span>My Skills</span></h3>
                            </div>
                            <div className="skill-box">
                                <div className="grid gap-4 grid-cols-12">
                                    {
                                        skill_list.map((val, i)=>{
                                            return <Skill key={i} id={val.id} title={val.title}/>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-6 text-center pt-[40px] md:pt-0">
                            <img className="mx-[auto]" src="img/skills.png" title="" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
