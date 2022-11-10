import React from 'react';
import { FaAddressBook, FaBusinessTime, FaPhoneAlt, IconName } from "react-icons/fa";

const Information = () => {
    return (
        <div className='flex h-64 bg-black text-white justify-around items-center mb-10 grid md:grid-cols-2 lg:grid-cols-3'>
            <div className='flex ml-auto  mr-auto'>
                <FaBusinessTime className='text-5xl'></FaBusinessTime>
                <div>
                    <h1>We are open from Monday-Friday</h1>
                    <h1>7.00am-9pm</h1>

                </div>
            </div>
            <div className='flex ml-auto  mr-auto'>
                <FaPhoneAlt className='text-5xl'></FaPhoneAlt>
                <div>
                    <h1>Have a Question?</h1>
                    <h1>+00012234455666</h1>
                </div>
            </div>
            <div className='flex ml-auto mr-auto'>
                <FaAddressBook className='text-5xl'></FaAddressBook>
                <div>
                    <h1>Need a session?Our Address</h1>
                    <h1>Brooklyn,New York</h1>
                </div>

            </div>
        </div>
    );
};

export default Information;