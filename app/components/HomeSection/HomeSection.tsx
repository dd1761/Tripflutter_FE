// components/HomeSection.tsx
import React from 'react';
import Link from 'next/link';

// Define the type for the slide object
interface SlideProps {
  slide: {
    backgroundImage: string;
    overlayImage: string;
    title: string;
    subtitle: string;
    location: string;
  };
}

const slides = [
  {
    backgroundImage: '/images/bg_1.jpg',
    overlayImage: '/images/bg_1-1.jpg',
    title: '트리플러터에서 쉽고 빠르게 여행 계획을 세워보세요.',
    subtitle: '당신을 위한 여행 계획 사이트',
    location: 'Greece',
  },
  {
    backgroundImage: '/images/bg_2.jpg',
    overlayImage: '/images/bg_2-2.jpg',
    title: '트리플러터에서 쉽고 빠르게 여행 계획을 세워보세요.',
    subtitle: '당신을 위한 여행 계획 사이트',
    location: 'Africa',
  },
];

const Slide: React.FC<SlideProps> = ({ slide }) => (
  <div className="slider-item">
    <div className="overlay" />
    <div className="container-fluid p-0">
      <div className="row d-md-flex no-gutters slider-text align-items-center justify-content-end">
        <div className="one-third order-md-last">
          <div className="img" style={{ backgroundImage: `url(${slide.backgroundImage})` }}>
            <div className="overlay" />
          </div>
          <div className="bg-primary">
            <div className="vr">
              <span className="pl-3 py-4" style={{ backgroundImage: `url(${slide.overlayImage})` }}>
                {slide.location}
              </span>
            </div>
          </div>
        </div>
        <div
          className="one-forth d-flex align-items-center ftco-animate"
          data-scrollax="properties: { translateY: '70%' }"
        >
          <div className="text">
            <span className="subheading pl-5">{slide.subtitle}</span>
            <h1 className="mb-4 mt-3">{slide.title}</h1>
            <p>지금 바로 당신의 여행을 시작하세요.</p>
            <p>
              <Link href="#" className="btn btn-primary px-5 py-3 mt-3">
                여행 생성하기 <span className="ion-ios-arrow-forward" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const HomeSection: React.FC = () => (
  <section id="home-section" className="hero">
    <img src="/images/blob-shape-3.svg" className="svg-blob" alt="Colorlib Free Template" />
    <div className="home-slider owl-carousel">
      {slides.map((slide, index) => (
        <Slide key={index} slide={slide} />
      ))}
    </div>
  </section>
);

export default HomeSection;
