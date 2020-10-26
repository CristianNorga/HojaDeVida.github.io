import React from "react";

const CarouselItem = ({image,name,site}) =>
(
    <div className="carousel__item">
        <img className="carousel__img" src={image} alt={name}/>
        <div className="carousel__details">
            <div>
                {/* <i class="fas fa-play"></i>
                <i class="fas fa-plus"></i> */}
                <p className="carousel__details--title">{name}</p>
                <p className="carousel__details--subtitle">{site}</p>
            </div>
        </div>
    </div>
);

export default CarouselItem;