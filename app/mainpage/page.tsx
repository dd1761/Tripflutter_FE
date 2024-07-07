"use client";

import React, { useEffect } from 'react';
import WelcomeMessage from '../components/WelcomeMessage/WelcomeMessage';
import SearchSection from "../components/SearchSection/SearchSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import DestinationSection from "../components/DestinationSection/DestinationSection";
import TravelDestinationsSection from "../components/TravelDestinationsSection/TravelDestinationsSection";
import HotelSection from "../components/HotelSection/HotelSection";
import HotelRecommendations from "../components/HotelRecommendations/HotelRecommendations";
import TestimonialSection from "../components/TestimonialSection/TestimonialSection";
import RestaurantSection from "../components/RestaurantSection/RestaurantSection";
import BlogSection from "../components/BlogSection/BlogSection";
import Loader from "../components/Loader/Loader";

const MainPage: React.FC = () => {
  useEffect(() => {
    const loadScripts = () => {
      const scripts = [
        '/js/jquery.min.js',
        '/js/jquery-migrate-3.0.1.min.js',
        '/js/popper.min.js',
        '/js/bootstrap.min.js',
        '/js/jquery.easing.1.3.js',
        '/js/jquery.waypoints.min.js',
        '/js/jquery.stellar.min.js',
        '/js/owl.carousel.min.js',
        '/js/jquery.magnific-popup.min.js',
        '/js/aos.js',
        '/js/jquery.animateNumber.min.js',
        '/js/scrollax.min.js',
        'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&sensor=false',
        '/js/google-map.js',
        '/js/main.js',
      ];

      scripts.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.body.appendChild(script);
      });
    };

    loadScripts();
  }, []);

  return (
    <div>
      <title>Trip-Flutter</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" />
      <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Cormorant+Garamond:300,300i,400,400i,500,500i,600,600i,700,700i" />

      <link rel="stylesheet" href="/css/open-iconic-bootstrap.min.css" />
      <link rel="stylesheet" href="/css/animate.css" />
      <link rel="stylesheet" href="/css/owl.carousel.min.css" />
      <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
      <link rel="stylesheet" href="/css/magnific-popup.css" />
      <link rel="stylesheet" href="/css/aos.css" />
      <link rel="stylesheet" href="/css/ionicons.min.css" />
      <link rel="stylesheet" href="/css/flaticon.css" />
      <link rel="stylesheet" href="/css/icomoon.css" />
      <link rel="stylesheet" href="/css/style.css" />

      <WelcomeMessage />
      <SearchSection />
      <ServicesSection />
      <DestinationSection />
      <TravelDestinationsSection />
      <HotelSection />
      <HotelRecommendations />
      <TestimonialSection />
      <RestaurantSection />
      <BlogSection />
      <Loader />
    </div>
  );
};

export default MainPage;
