import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";

/*--------------------
* Testimonial Section
----------------------*/
export default function Testimonial() {
  const testimonail_list = [
    {
      id: 1,
      image: "img/avatar-1.jpg",
      author_name: "Jeff King",
      position: "Director at Doble Engineering Company",
      description:
        "During her time as a Software co-op, I gave Shubhangi an assignment at Doble Engineering Company that was large, but not too difficult . . . or so I thought. Unfortunately, we encountered a great deal of trouble with third-party tooling and other unforeseen technical glitches. The project turned into a bit of a quagmire and I was worried that she would be overwhelmed and frustrated by it all, but not Shubs. She showed up every day a with smile on her face, put her head down, and got to work.",
    },
    {
      id: 2,
      image: "img/avatar-2.jpg",
      author_name: "Sanika Athavale",
      position: "Senior Manager at Morgan Stanley",
      description:
        "At Deloitte, Shubhangi was very proactive and a quick learner. She promptly gained a good understanding of critical functional scenarios. Her java and JSP skills are strong. She took complete ownership of the work assigned to her and was able to convert business requirements into technical development needs. She covered most of the important scenarios in her unit testing and integration testing scripts. Because of her efforts we were able to detect and fix the bugs in our system at an early stage.",
    },
    {
      id: 3,
      image: "img/avatar-3.jpg",
      author_name: "Dennis Mellina",
      position: "Principal SDE at Doble Engineering Company",
      description:
        "Shubhangi adapted to a role that was completely foreign when she just started as a co-op at Doble Engineering Company. With little guidance, she is dedicated and did not hesitate to dive right in to learn and understand the assigned task. She was more than capable in dealing with some expected roadblocks and requesting assistance when needed and found her diagnostic and technical abilities true to the task. I have confidence she will do well in whatever project role she is assigned.",
    },
    {
      id: 4,
      image: "img/avatar-4.jpg",
      author_name: "KumarChaithanya Gutha",
      position: "Analyst at Deloitte Consulting",
      description:
        "Shubhangi is One of a Kind, She can analyse things better. Her Java and Web Technologies skills are strong, She helped me understand project better and also the functionality, flow of the project. She analyses defects faster & fixes them quick. She is not only good technically but also understands the situation of the people around her & tries to help them. I have joined the team as a fresher, but Shubhangi was always been my constant support guiding me through my journey here at Deloitte.",
    },
  ];

  return (
    <>
      <section className="section testimonial-section">
        <div className="container">
          <div className="grid section-heading">
            <div className="lg:col-span-6 text-center mx-auto">
              <h3>
                <span>Testimonial</span>
              </h3>
            </div>
          </div>
          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              992: {
                slidesPerView: 2,
              },
            }}
          >
            {testimonail_list.map((val, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="feature-box-03">
                    <div className="feature-img">
                      <img src={val.image} title={val.image} alt={val.image} />
                    </div>
                    <div className="feature-content">
                      <div className="icons">
                        <i className="fas fa-quote-left"></i>
                      </div>
                      <p>{val.description}</p>
                      <h6>{val.author_name}</h6>
                      <span>{val.position}</span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
}
