import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServicePage = () => {
    const viewservice = useLoaderData();
    // console.log(viewservice)
    const {dis, img,list} = viewservice
    return (
        <div className='flex justify-center items-center my-5'>
            <div className='w-3/4'>
            <div className='flex'>
                <img className='w-1/4' src={img} alt='bride'/>
                <div className='text-left'>
                    <h1 className='font-bold italic text-3xl my-10 text-center'>SKY photography</h1>
                    <div className='ml-4'>
                    <p className='mb-4'>{dis}</p>
                        <>
                            {
                                list.map(point => <li className=''>{point}</li>)
                            }
                        </>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ServicePage;