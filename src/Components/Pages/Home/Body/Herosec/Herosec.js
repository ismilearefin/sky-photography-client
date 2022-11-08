import React from 'react';
import { FaSketch } from "react-icons/fa";

const Herosec = () => {
    return (
        <div className='relative italic min-h-screen bg-fixed bg-[url("https://i0.wp.com/grandcanyonweddingpackages.com/wp-content/uploads/2018/12/cropped-Grand-Canyon-Wedding-Packages-Favorites-201810.jpg?w=1932&ssl=1")] bg-cover bg-no-repeat bg-center'>
            <h1 className='absolute bottom-36 left-10 text-8xl text-white'>
                SKY
            </h1>
            <p className= 'absolute bottom-28 left-32 text-4xl text-slate-100'><FaSketch/>photography</p>
        </div>
    );
};

export default Herosec;