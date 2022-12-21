import React, { useEffect, useState } from 'react';
import { FaAngleRight } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Service = () => {
    const [Services , setservices] = useState([]);

    useEffect(()=>{
        fetch('https://sky-photography-server.vercel.app/service')
        .then(res => res.json())
        .then(data => {
            setservices(data)
        })
    },[])


    return (
        <div>
            <h1 className='text-4xl my-6 text-cyan-500 '>My services</h1>
            <div className='lg:flex gap-4 justify-center my-14'>
            { 
                Services.map(serviceCard => <Showevents 
                    serviceCard={serviceCard}
                    key={serviceCard._id}
                    ></Showevents>)
            }
        </div>
        <Link to='/services' className='btn btn-outline mb-4'>SEE All <FaAngleRight className='ml-1 text-cyan-400'/></Link>
        </div>
    );
};


function Showevents({serviceCard}){
    const {img, rating,price,name,dis,_id} = serviceCard
return(
    <div >
        <div className="card w-96 bg-base-100 shadow-xl ">
        {/* image zoom in */}
        <figure>
            <PhotoProvider>
                <PhotoView src={img}>
                <img src={img} alt="Shoes" className='hover:scale-110 transition duration-300 ease-in-out'/>
                </PhotoView>
            </PhotoProvider>
        </figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{dis.length > 100 ? dis.slice(0, 99) + '...' : dis}</p>
            <div className='flex'>
                <p>Price : {price}</p>
                <p>Rating : {rating}</p>
            </div>
            <div className="card-actions justify-end">
            <Link to={`/services/${_id}`} className="btn btn-ghost w-full shadow-md text-cyan-500">VIEW DETAILS</Link>
            </div>
        </div>
        </div>
    </div>
)
}

export default Service;