import React from 'react';
import useTitle from '../../../../Hooks/useTitle';
import Herosec from './Herosec/Herosec';
import Imagesec from './Imagesec/Imagesec';
import Service from './Service/Service';
import Textsec from './Textsec/Textsec';

const Body = () => {
    useTitle('Home')
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