import React from 'react';
import Banner from '../Banner/Banner';
import Information from '../Information/Information';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Team></Team>
            <Information></Information>
        </div>
    );
};

export default Home;