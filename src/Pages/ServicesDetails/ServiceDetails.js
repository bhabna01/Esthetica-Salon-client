import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { _id, title, img, description, price, rating } = useLoaderData();
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p>Price:{price}</p>
                <p>Rating:{rating}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;