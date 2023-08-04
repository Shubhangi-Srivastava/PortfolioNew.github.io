import Header from "../Header/header";
import Banner from "../Banner/banner";

import About from "../About/about";
import EducationList from "../Service/service";
import WorkExperience from "../Experience/service";
import SkillList from "../Skills/skill";
import Work from "../Work/work";
import Testimonial from "../Testimonial/testimonial";
import Contact from "../Contact/contact";
import Footer from "../Footer/footer";
import Intrested from "../Intrested/intrested";

/*--------------------
* Building Krinky
----------------------*/
export default function Krinky() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <Banner />
        <About />
        <EducationList />
        <WorkExperience />
        <SkillList />
        <Intrested />
        <Work />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
