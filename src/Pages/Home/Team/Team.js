import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import img1 from '../../../assets/team/member1.jpg'
import img2 from '../../../assets/team/member2.png'
import img3 from '../../../assets/team/member3.jpg'

const Team = () => {
    return (
        <div>
            <div className='text-center mb-5'>

                <p className='text-2xl font-bold text-secondary'>Team</p>
                <h2 className="text-5xl font-semibold">My Team</h2>
                <p> </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-5 pt-5 justify-items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Ema Johns
                            <div className="badge badge-secondary">Esthetician</div>
                        </h2>
                        <p>Best At Facials</p>
                        <div className="card-actions justify-end">
                            <FaFacebook></FaFacebook>
                            <FaInstagram></FaInstagram>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Amelia Charlotte
                            <div className="badge badge-secondary">Esthetician</div>
                        </h2>
                        <p>Best At waxing</p>
                        <div className="card-actions justify-end">
                            <FaFacebook></FaFacebook>
                            <FaInstagram></FaInstagram>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Ava Stones
                            <div className="badge badge-secondary">Esthetician</div>
                        </h2>
                        <p>Best at cryotherapy</p>
                        <div className="card-actions justify-end">
                            <FaFacebook></FaFacebook>
                            <FaInstagram></FaInstagram>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;