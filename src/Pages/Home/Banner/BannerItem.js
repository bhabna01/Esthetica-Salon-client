import React from 'react';

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (


        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousal-img'>
                <img src={image} alt="" className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 right-24  top-1/2">
                <h1 className='lg:text-5xl font-bold text-white '>
                    Get Service<br />
                    at  Affordable <br />
                    price
                </h1>
            </div>

            <div className="absolute flex justify-center transform -translate-y-1/2 w-2/5   top-3/4">

                <button className="btn btn-active sm:btn-sm md:btn-md lg:btn-lg">Book an appointment</button>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;