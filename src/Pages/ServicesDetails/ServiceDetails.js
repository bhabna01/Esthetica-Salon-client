import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../../Review/Review';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { _id, price, rating, title, description, img } = service;


    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p>Price:{price}</p>
                    <p>Rating:{rating}</p>

                </div>
            </div>

            <div className='mt-20'>
                <Review service={service} key={_id}></Review>
            </div>
        </div>

    );
};

export default ServiceDetails;