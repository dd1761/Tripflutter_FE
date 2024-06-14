import React from 'react';
import Link from 'next/link';

interface GalleryItemProps {
  imageUrl: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ imageUrl }) => (
  <div className="col-md-4 col-lg-2 ftco-animate">
    <Link href={imageUrl} className="gallery image-popup img d-flex align-items-center"
      style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="icon mb-4 d-flex align-items-center justify-content-center">
        <span className="icon-instagram" />
      </div>
    </Link>
  </div>
);

export default GalleryItem;
