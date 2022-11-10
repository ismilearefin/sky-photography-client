import React, { useContext, useEffect, useState} from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import { Authcontext } from '../../../Usercontext/Usercontext';
import ReviewSec from './ReviewSec/ReviewSec';

const ServicePage = () => {
    useTitle('service_page')
    const {user} = useContext(Authcontext)
    const viewservice = useLoaderData();
    const [allcomments, setallcomments] = useState([]);
    
    
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

        fetch('/allcomments',{
            method : 'POST',
            headers :{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(comments)
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            alert('Submited')
            console.log(data)
        })

        form.reset()
    }


////Comment load by service name////////////

useEffect(()=>{

    fetch(`https://sky-photography-server.vercel.app/allcomments?service=${name}`)
    .then(res => res.json())
    .then(data => {
    setallcomments(data)
})

},[name])




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
                            {list ?
                                list?.map(point => <li key={point}>{point}</li>)
                            :
                            ''
                            }
                        </>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className='p-4 shadow-inner'>
        <ReviewSec allcomments={allcomments}></ReviewSec>
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