import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const ServiceCard = ({ service }) => {
    const { _id, img, price, title, description } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img src={img} alt="" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <p>
                    {
                        description.length > 100 ?
                            <>{description.slice(0, 100) + '...'} <Link to=''>Read More</Link> </>
                            :
                            description
                    }
                </p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-active"> View details </button>

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;