import React from 'react';

interface Testimonial {
  image: string;
  content: string;
  name: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    image: "images/person_1.jpg",
    content: "도쿄 자유여행 3박 4일 여행 경비 및 코스 추천",
    name: "김여행",
    position: "30대 남자",
  },
  {
    image: "images/person_2.jpg",
    content: "도쿄 자유여행 3박 4일 여행 경비 및 코스 추천",
    name: "김여행",
    position: "30대 남자",
  },
  {
    image: "images/person_3.jpg",
    content: "도쿄 자유여행 3박 4일 여행 경비 및 코스 추천",
    name: "김여행",
    position: "30대 남자",
  },
];

const TestimonialSection: React.FC = () => (
  <section className="ftco-section testimony-section">
    <img src="images/blob-shape-2.svg" className="svg-blob" alt="Colorlib Free Template" />
    <img src="images/blob-shape-2.svg" className="svg-blob-2" alt="Colorlib Free Template" />
    <div className="container">
      <div className="row justify-content-center pb-3">
        <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
          <span className="subheading">추천 리뷰</span>
          <h2 className="mb-4">당신의 여행을 들려주세요</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            {testimonials.map((testimonial, index) => (
              <div className="col-md-4 item" key={index}>
                <div className="testimony-wrap text-center py-4 pb-5">
                  <div className="user-img" style={{ backgroundImage: `url(${testimonial.image})` }}>
                    <span className="quote d-flex align-items-center justify-content-center">
                      <i className="icon-quote-left" />
                    </span>
                  </div>
                  <div className="text px-4 pb-5">
                    <p className="mb-4">{testimonial.content}</p>
                    <p className="name">{testimonial.name}</p>
                    <span className="position">{testimonial.position}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialSection;
