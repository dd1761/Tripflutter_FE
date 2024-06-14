import React from 'react';
import GalleryItem from './GalleryItem';

const GallerySection: React.FC = () => {
  const galleryItems: string[] = [
    'images/gallery-1.jpg',
    'images/gallery-2.jpg',
    'images/gallery-3.jpg',
    'images/gallery-4.jpg',
    'images/gallery-5.jpg',
    'images/gallery-6.jpg'
  ];

  return (
    <section className="ftco-gallery">
      <div className="container-fluid px-0">
        <div className="row no-gutters">
          {galleryItems.map((imageUrl, index) => (
            <GalleryItem key={index} imageUrl={imageUrl} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
