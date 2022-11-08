import React from 'react';
import { FaAddressBook, FaBusinessTime, FaPhoneAlt, IconName } from "react-icons/fa";

const Information = () => {
    return (
        <div className='flex h-64 bg-black text-white justify-around items-center mb-10'>
            <div className='flex'>
                <FaBusinessTime></FaBusinessTime>
                <div>
                    <h1>We are open from Monday-Friday</h1>
                    <h1>7.00am-9pm</h1>

                </div>
            </div>
            <div className='flex'>
                <FaPhoneAlt></FaPhoneAlt>
                <div>
                    <h1>Have a Question?</h1>
                    <h1>+00012234455666</h1>
                </div>
            </div>
            <div className='flex'>
                <FaAddressBook></FaAddressBook>
                <div>
                    <h1>Need a session?Our Address</h1>
                    <h1>Brooklyn,New York</h1>
                </div>

            </div>
        </div>
    );
};

export default Information;