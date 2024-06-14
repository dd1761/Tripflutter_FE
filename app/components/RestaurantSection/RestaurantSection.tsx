import React from 'react';
import Link from 'next/link';

interface Restaurant {
  id: number;
  imageUrl: string;
  altText: string;
  price: string;
  location: string;
  name: string;
  rating: number;
  numberOfReviews: number;
  link: string;
}

export const restaurantsData: Restaurant[] = [
  {
    id: 1,
    imageUrl: '/images/resto-1.jpg',
    altText: 'Colorlib Template',
    price: '1만원',
    location: '베른, 스위스',
    name: '레스토 바',
    rating: 5,
    numberOfReviews: 120,
    link: 'project.html',
  },
  {
    id: 2,
    imageUrl: '/images/resto-2.jpg',
    altText: 'Colorlib Template',
    price: '2만원',
    location: '베른, 스위스',
    name: '레스토 바',
    rating: 5,
    numberOfReviews: 120,
    link: 'project.html',
  },
  {
    id: 3,
    imageUrl: '/images/resto-3.jpg',
    altText: 'Colorlib Template',
    price: '3만원',
    location: '베른, 스위스',
    name: '레스토 바',
    rating: 5,
    numberOfReviews: 120,
    link: 'project.html',
  },
];

const RestaurantSection: React.FC = () => (
  <section className="ftco-section" id="restaurant-section">
    <div className="container">
      <div className="row justify-content-center pb-5">
        <div className="col-md-12 heading-section text-center ftco-animate">
          <span className="subheading">추천 식당</span>
          <h2 className="mb-4">전세계 인기 맛집 추천</h2>
          <p>트리플러터가 구글 평점 4.0 이상 현지인 찐 맛집 추천해드릴께요</p>
        </div>
      </div>
      <div className="row">
        {restaurantsData.map((restaurant) => (
          <div key={restaurant.id} className="col-md-6 col-lg-4 ftco-animate">
            <div className="project">
              <div className="img">
                <img src={restaurant.imageUrl} className="img-fluid" alt={restaurant.altText} />
              </div>
              <div className="text">
                <h4 className="price">
                  <span className="mr-2">메뉴는</span>
                  {restaurant.price}부터
                </h4>
                <span>{restaurant.location}</span>
                <h3>
                  <Link href={restaurant.link}>{restaurant.name}</Link>
                </h3>
                <div className="star d-flex clearfix">
                  <div className="mr-auto float-left">
                    {[...Array(restaurant.rating)].map((_, index) => (
                      <span key={index} className="ion-ios-star" />
                    ))}
                  </div>
                  <div className="float-right">
                    <span className="rate">
                      <Link href={restaurant.link}>({restaurant.numberOfReviews})</Link>
                    </span>
                  </div>
                </div>
              </div>
              <Link href={restaurant.link} className="icon image-popup d-flex justify-content-center align-items-center">
                <span className="icon-expand" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RestaurantSection;
