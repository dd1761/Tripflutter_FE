import React from 'react';
import Link from 'next/link';

interface Destination {
  image: string;
  oldPrice: string;
  newPrice: string;
  duration: string;
  name: string;
  stars: number;
  reviews: number;
}

const destinations: Destination[] = [
  {
    image: 'images/destination-1.jpg',
    oldPrice: '왕복 50만원부터',
    newPrice: '왕복 30만원부터',
    duration: '15일 투어',
    name: '구르트넬렌, 스위스',
    stars: 5,
    reviews: 120,
  },
  {
    image: 'images/destination-2.jpg',
    oldPrice: '',
    newPrice: '왕복 40만원부터',
    duration: '15일 투어',
    name: '구르트넬렌, 스위스',
    stars: 5,
    reviews: 120,
  },
  {
    image: 'images/destination-3.jpg',
    oldPrice: '',
    newPrice: '왕복 50만원부터',
    duration: '15일 투어',
    name: '구르트넬렌, 스위스',
    stars: 5,
    reviews: 120,
  },
  {
    image: 'images/destination-4.jpg',
    oldPrice: '왕복 50만원부터',
    newPrice: '60만원',
    duration: '15일 투어',
    name: '구르트넬렌, 스위스',
    stars: 5,
    reviews: 120,
  },
  {
    image: 'images/destination-5.jpg',
    oldPrice: '',
    newPrice: '왕복 100만원부터',
    duration: '15일 투어',
    name: '구르트넬렌, 스위스',
    stars: 5,
    reviews: 120,
  },
  {
    image: 'images/destination-6.jpg',
    oldPrice: '',
    newPrice: '왕복 150만원부터',
    duration: '15일 투어',
    name: '구르트넬렌, 스위스',
    stars: 5,
    reviews: 120,
  },
];

const TravelDestinationsSection: React.FC = () => {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <span className="subheading">여행지 추천</span>
            <h2 className="mb-4">지금 여행가기 좋은 나라</h2>
            <p>
              트리플러터가 인기있는 여행지를 추천해드릴께요
            </p>
          </div>
        </div>
        <div className="row">
          {destinations.map((destination, index) => (
            <div key={index} className="col-md-6 col-lg-4 ftco-animate">
              <div className="project">
                <div className="img">
                  <div className="vr">
                    {destination.oldPrice && <span>특가</span>}
                  </div>
                  <Link href="destination.html">
                    <img src={destination.image} className="img-fluid" alt="Colorlib Template" />
                  </Link>
                </div>
                <div className="text">
                  <h4 className="price">
                    {destination.oldPrice && (
                      <span className="old-price mr-2">{destination.oldPrice}</span>
                    )}
                    {destination.newPrice}
                  </h4>
                  <span>{destination.duration}</span>
                  <h3>
                    <Link href="destination.html">{destination.name}</Link>
                  </h3>
                  <div className="star d-flex clearfix">
                    <div className="mr-auto float-left">
                      {Array.from({ length: destination.stars }, (_, index) => (
                        <span key={index} className="ion-ios-star" />
                      ))}
                    </div>
                    <div className="float-right">
                      <span className="rate">
                        <Link href="#">({destination.reviews})</Link>
                      </span>
                    </div>
                  </div>
                </div>
                <Link href={destination.image} className="icon image-popup d-flex justify-content-center align-items-center">
                  <span className="icon-expand" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelDestinationsSection;
