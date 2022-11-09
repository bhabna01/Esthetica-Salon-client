import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../Hookes/useTitle';
import ServiceCard from './ServiceCard';

const AllServices = () => {
    const [services, setService] = useState([]);
    const { loading } = useContext(AuthContext)
    useTitle('All services')
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            {
                loading ? (
                    <button className="btn loading">loading</button>
                )
                    :



                    (<>

                        <div className='text-center mb-5'>

                            <p className='text-2xl font-bold text-orange-600'>Service</p>
                            <h2 className="text-5xl font-semibold">All services</h2>
                            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        </div>
                        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-5'>
                            {
                                services.map(service => <ServiceCard
                                    key={service._id}
                                    service={service}
                                ></ServiceCard>)
                            }

                        </div>

                    </>

                    )}



        </div>
    );
};

export default AllServices;