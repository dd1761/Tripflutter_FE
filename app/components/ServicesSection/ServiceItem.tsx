// components/ServiceItem.tsx
import React from 'react';

interface ServiceItemProps {
  iconClass: string;
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ iconClass, title, description }) => (
  <div className="col-md d-flex align-self-stretch ftco-animate">
    <div className="media block-6 services text-center d-block">
      <div className="icon justify-content-center align-items-center d-flex">
        <span className={iconClass} />
      </div>
      <div className="media-body">
        <h3 className="heading mb-3">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

export default ServiceItem;
