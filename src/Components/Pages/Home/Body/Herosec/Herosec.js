import React, { useEffect, useState } from 'react';
import { FaSketch,FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Herosec = () => {
    const [services, setservices] = useState([]);


    useEffect(()=>{
        fetch('https://sky-photography-server.vercel.app/allservices')
        .then(res=>res.json())
        .then(data => setservices(data))
    },[])

    console.log(services)
    return (
        <div className='relative italic min-h-screen bg-fixed bg-[url("https://i0.wp.com/grandcanyonweddingpackages.com/wp-content/uploads/2018/12/cropped-Grand-Canyon-Wedding-Packages-Favorites-201810.jpg?w=1932&ssl=1")] bg-cover bg-no-repeat bg-center'>
            <h1 className='absolute bottom-36 left-10 text-8xl text-white'>
                SKY
            </h1>
            <p className= 'absolute bottom-28 left-32 text-4xl text-slate-100'><FaSketch className='text-cyan-400'/>photography</p>
            {/* drawer  */}
            <div>
                <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex justify-center items-end">
                        <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost text-white mb-5">Our Services <FaAngleRight className='text-cyan-400'/></label>
                    </div> 
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                            <li className='text-xl font-bold text-cyan-500'>list of services</li>
                        {
                            services.map(service => <li key={service._id}><Link to={`/services/${service._id}`}>{service.name}</Link></li>)
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Herosec;