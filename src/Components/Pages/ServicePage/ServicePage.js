import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Authcontext } from '../../../Usercontext/Usercontext';
import ReviewSec from './ReviewSec/ReviewSec';

const ServicePage = () => {
    const {user} = useContext(Authcontext)
    const viewservice = useLoaderData();
    const {dis, img,list,name} = viewservice

    function handleSubmiteCmt(e){
        e.preventDefault()
        const form = e.target;
        const comment = form.message.value;
        const comments = {
            img : user?.photoURL,
            name : user?.displayName,
            email : user?.email,
            comment : comment,
            service : name
        }
        console.log(comments);

        fetch('http://localhost:5000/allcomments',{
            method : 'POST',
            headers :{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(comments)
        })
        .then(res => res.json())
        .then(data => console.log(data))

        form.reset()
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
        <ReviewSec service={name}></ReviewSec>
        </div>
        {user?.uid ?
            <div>
            <div className='flex justify-center'>
                <div className='border p-4 shadow-lg my-4'>
                <form onSubmit={(e)=>handleSubmiteCmt(e)}>
                    <textarea name="message" rows="4" placeholder='comment...' cols="55" className='block border p-2'>
                    </textarea>
                    <button className='btn btn-success w-44 my-2'>Submit</button>
                </form>
                </div>
            </div>
        </div>
        :
        <div>
            <Link to='/login' className='text-md my-4 btn btn-outline'>Please login to add a review</Link>
        </div>
    }
        </div>
    );
};

export default ServicePage;