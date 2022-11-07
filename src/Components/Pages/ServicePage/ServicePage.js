import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewSec from './ReviewSec/ReviewSec';

const ServicePage = () => {
    const viewservice = useLoaderData();
    // console.log(viewservice)
    const {dis, img,list,name} = viewservice

    function handleSubmiteCmt(e,){
        e.preventDefault()
        const form = e.target;
        const username = form.name.value;
        const comment = form.message.value;
        const comments = {
            name : username,
            comment : comment,
            service : name
        }
        console.log(comments);
    }



    return (
        <div>
            <div className='flex justify-center items-center my-5'>
            <div className='w-3/4'>
            <div className='flex'>
                <img className='w-1/4' src={img} alt='bride'/>
                <div className='text-left'>
                    <h1 className='font-bold italic text-3xl my-10 text-center'>SKY photography</h1>
                    <div className='ml-4'>
                    <p className='font-bold'># {name}</p>
                    <p className='mb-4'>{dis}</p>
                        <>
                            {
                                list.map(point => <li key={point}>{point}</li>)
                            }
                        </>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className='p-4 shadow-inner'>
        <ReviewSec></ReviewSec>
        </div>
        <div>
            <div className='flex justify-center'>
                <div className='border p-4 shadow-lg my-4'>
                <form onSubmit={(e)=>handleSubmiteCmt(e)}>
                    <input type='text' name='name' placeholder='user name' className='block my-2 p-2 border w-full h-10'/>
                    <input type='text' name='service' defaultValue={name} className='block my-2 p-2 border w-full h-10' />
                    <input type='text' name='email' defaultValue='put email' className='block my-2 p-2 border w-full h-10' />
                    
                    <textarea name="message" rows="4" placeholder='comment...' cols="55" className='block border p-2'>
                    </textarea>
                    <button className='btn btn-success w-44 my-2'>Submit</button>
                </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ServicePage;