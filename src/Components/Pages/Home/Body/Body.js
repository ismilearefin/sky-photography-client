import React from 'react';
import Herosec from './Herosec/Herosec';
import Imagesec from './Imagesec/Imagesec';
import Service from './Service/Service';
import Textsec from './Textsec/Textsec';

const Body = () => {
    return (
        <div>
            <Herosec></Herosec>
            <Textsec></Textsec>
            <Imagesec></Imagesec>
            <Service></Service>
        </div>
    );
};

export default Body;