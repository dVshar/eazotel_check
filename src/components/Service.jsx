import React from 'react';
import ServiceCard from './ServiceCard';
import ServiceCardData from './ServiceCardData';

const Service = () => {
  return (
    <div className="container container-fluid mt-5 mb-5">
      <h1 className="m-2 pt-4 pb-4 text-xxl">Our Services</h1>
      <div className="row flex-nowrap overflow-auto p-3" style={{ overflowX: 'auto' }}>
        {ServiceCardData.map((val, ind) => {
          return (
            <div key={ind} className="col-sm-3">
              <div className="card h-100">
                <ServiceCard
                  title={val.title}
                  description={val.description}
                  cardImg={val.cardImg}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Service;
