// components/DestinationSection.tsx
import React from 'react';
import Link from 'next/link';

const DestinationSection: React.FC = () => {
  return (
    <section className="ftco-intro img" id="destination-section" style={{ backgroundImage: "url(images/bg_3.jpg)" }}>
      <div className="overlay" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 text-center">
            <h2>떠나고 싶은 여행지를 선택하세요</h2>
            <p>
              떠나고 싶은 여행지를 선택하세요. 여행 준비부터 계획까지 트리플러터가 도와드릴께요!
            </p>
            <p className="mb-0">
              <Link href="#" passHref>
                <a className="btn btn-white px-4 py-3">
                  여행지 검색
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;
