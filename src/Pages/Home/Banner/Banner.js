import React from 'react';
import img1 from '../../../assets/banner/pic1.jpg'
import img2 from '../../../assets/banner/pic2.jpg'

import img4 from '../../../assets/banner/pic4.jpg'


import './Banner.css'
import BannerItem from './BannerItem';
const bannerData = [
    {
        image: img1,
        prev: 3,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },

    {
        image: img4,
        prev: 2,
        id: 3,
        next: 1
    },


]
const Banner = () => {
    return (
        <div className="carousel w-full py-10">

            {
                bannerData.map(slide => <BannerItem image={img1}
                    key={slide.id}
                    slide={slide}

                ></BannerItem>)
            }


        </div>
    );
};

export default Banner;