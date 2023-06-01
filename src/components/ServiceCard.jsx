import React from 'react';

const ServiceCard = (props) => {
  return (
    <div>
      <div className="card-img-top-wrapper">
        <img className="card-img-top" src={props.cardImg} alt="Card cap" />
      </div>
      <div className="card-body d-flex flex-column">
        <h3 className='text-start'>
          {props.title}
        </h3>
        <p className="card-text text-start">
          {props.description}
        </p>
        
      </div>
    </div>
  );
}

export default ServiceCard;
