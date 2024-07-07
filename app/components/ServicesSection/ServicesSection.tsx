// components/ServicesSection.tsx
import React from 'react';
import ServiceItem from './ServiceItem';

const ServicesSection: React.FC = () => (
  <section className="ftco-section ftco-services-2" id="services-section">
    <div className="container">
      <div className="row justify-content-center pb-5">
        <div className="col-md-12 heading-section text-center ftco-animate">
          <span className="subheading">여행의 즐거움</span>
          <h2 className="mb-4">서비스 소개</h2>
          <p>
            TripFlutter는 ChatAPT API를 활용하여 사용자에게 최적의 여행 계획 서비스를 제공합니다
          </p>
        </div>
      </div>
      <div className="row">
        <ServiceItem iconClass="flaticon-gliding" title="액티비티" description="스노쿨링부터 페러글라이딩까지!! 활동적인 건 필수!!" />
        <ServiceItem iconClass="flaticon-world" title="여행 준비" description="트리플러터와 여행 준비 A-Z까지" />
        <ServiceItem iconClass="flaticon-tour-guide" title="여행 가이드" description="당신을 위한 최적의 여행" />
        <ServiceItem iconClass="flaticon-map-of-roads" title="지도 시각화" description="이동 동선을 한눈에" />
      </div>
    </div>
  </section>
);

export default ServicesSection;
