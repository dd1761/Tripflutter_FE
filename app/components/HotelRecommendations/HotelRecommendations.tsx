import React from 'react';
import Link from 'next/link';

interface Hotel {
  image: string;
  oldPrice?: string;
  price: string;
  nights: string;
  name: string;
  stars: number;
  ratings: number;
}

const hotels = [
    {
      image: 'images/hotel-1.jpg',
      oldPrice: '30만원',
      price: '10만원',
      nights: '3박',
      name: '그리스 럭셔리 호텔',
      stars: 5,
      ratings: 120,
    },
    {
      image: 'images/hotel-2.jpg',
      price: '20만원',
      nights: '3박',
      name: '그리스 럭셔리 호텔',
      stars: 5,
      ratings: 120,
    },
    {
      image: 'images/hotel-3.jpg',
      price: '30만원',
      nights: '3박',
      name: '그리스 럭셔리 호텔',
      stars: 5,
      ratings: 120,
    },
];

const HotelRecommendation: React.FC<{ hotel: Hotel }> = ({ hotel }) => (
  <div className="col-md-6 col-lg-4 ftco-animate">
    <div className="project">
      <div className="img">
        {hotel.oldPrice && (
          <div className="vr">
            <span>특가</span>
          </div>
        )}
        <Link href="hotel.html">
          <img src={hotel.image} className="img-fluid" alt="Colorlib Template" />
        </Link>
      </div>
      <div className="text">
        {hotel.oldPrice && (
          <h4 className="price">
            <span className="old-price mr-2">{hotel.oldPrice}</span>
            {hotel.price} / 1박
          </h4>
        )}
        {!hotel.oldPrice && <h4 className="price">{hotel.price} / 1박</h4>}
        <span>{hotel.nights}</span>
        <h3>
          <Link href="hotel.html">{hotel.name}</Link>
        </h3>
        <div className="star d-flex clearfix">
          <div className="mr-auto float-left">
            {[...Array(hotel.stars)].map((_, index) => (
              <span key={index} className="ion-ios-star" />
            ))}
          </div>
          <div className="float-right">
            <span className="rate">
              <Link href="#">({hotel.ratings})</Link>
            </span>
          </div>
        </div>
      </div>
      <Link href={hotel.image} className="icon image-popup d-flex justify-content-center align-items-center">
        <span className="icon-expand" />
      </Link>
    </div>
  </div>
);

const HotelRecommendations: React.FC = () => (
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center pb-5">
        <div className="col-md-12 heading-section text-center ftco-animate">
          <span className="subheading">추천 호텔</span>
          <h2 className="mb-4">가장 가까운 호텔 찾기</h2>
          <p>트리플러터가 여행 동선을 고려하여 호텔을 추천해드릴께요</p>
        </div>
      </div>
      <div className="row">
        {hotels.map((hotel, index) => (
          <HotelRecommendation key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  </section>
);

export default HotelRecommendations;
