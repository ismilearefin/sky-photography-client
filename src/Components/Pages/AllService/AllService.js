import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';


const AllService = () => {
    useTitle('allservice')
    const allservices = useLoaderData();
    console.log(allservices)
    return (
        <div>
            <div>
            <h1 className='text-3xl italic my-2'>My services</h1>
            <div className='flex gap-4 justify-center flex-wrap my-14'>
            {allservices ?

                allservices.map(serviceCard => <ShowAllCard 
                    serviceCard={serviceCard}
                    key={serviceCard._id}
                ></ShowAllCard>)
                :
                <p>loading.........</p>
            }
        </div>
        </div>
        </div>
    );
};


function ShowAllCard({serviceCard}){
    const {img, rating,price,name,dis,_id} = serviceCard
    return(
        <div >
            <div className="card w-96 bg-base-100 shadow-xl ">
            <figure>
                <PhotoProvider>
                    <PhotoView src={img}>
                    <img src={img} alt="Shoes" />
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








export default AllService;