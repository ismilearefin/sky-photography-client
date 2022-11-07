import React, { useEffect, useState } from 'react';

const Service = () => {
    const [Services , setservices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setservices(data))
    },[])


    return (
        <div className='flex gap-4 justify-center my-20'>
          
            {
                Services.map(serviceCard => <Showevents 
                    serviceCard={serviceCard}
                    key={serviceCard._id}
                ></Showevents>)
            }
        </div>
    );
};


function Showevents({serviceCard}){
    const {img, rating,price,name,dis} = serviceCard
return(
    <div >
        <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{dis.length > 100 ? dis.slice(0, 99) + '...' : dis}</p>
            <div className='flex'>
                <p>Price : {price}</p>
                <p>Rating : {rating}</p>
            </div>
            <div className="card-actions justify-end">
            <button className="btn btn-ghost w-full">VIEW DETAILS</button>
            </div>
        </div>
        </div>
    </div>
)
}

export default Service;