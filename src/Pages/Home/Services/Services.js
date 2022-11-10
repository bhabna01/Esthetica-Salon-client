import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('https://esthetica-salon-server.vercel.app/service')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-5'>

                <p className='text-2xl font-bold text-orange-600'>Service</p>
                <h2 className="text-5xl font-semibold">My Sevice Area</h2>
                <p></p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-5'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }

            </div>
            <div className='flex justify-center'>

                <Link to='/services'> <button className="btn btn-active">See All</button></Link>
            </div>


        </div>
    );
};

export default Services;