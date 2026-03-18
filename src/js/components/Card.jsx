import React from "react";

const Card = (props) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100 text-center">
        <img src={props.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
        <div className="card-footer px-0">
          <a href="#" className="btn btn-dark">
            ¡Descubre más!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
