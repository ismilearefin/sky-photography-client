import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Editreview = () => {
    const navigate = useNavigate();
    const editComment = useLoaderData()
    const {comment, name, img,service,_id } = editComment

    function updateComment(e){
        e.preventDefault();
        const form = e.target;
        const comment = form.comment.value;
        const newComment ={
            comment : comment
        }
        fetch(`https://sky-photography-server.vercel.app/allcomments/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newComment)
        })
        .then(res => res.json())
        .then(data=> {
            if(data.modifiedCount > 0){
                alert('Updated Your review')
                navigate('/myreviews')

            }
            
        })

    }

    return (
        <div className='min-h-screen flex justify-center items-center bg-cyan-50'>
            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="avatar p-4">
            <div className="w-24 rounded-full ring ring-cyen ring-offset-base-100 ring-offset-2">
                <img src={img} alt='sdk'/>
            </div>
                
                <h1 className='font-bold ml-10 mt-8'>{name}</h1>
                
            </div>
            <form onSubmit={(e)=>updateComment(e)} className="card-body items-center text-center">
                <h2 className="card-title">{service}</h2>
                <textarea name='comment' className='border w-full h-40 p-2' defaultValue={comment}/>
                <div className="card-actions">
                <button className="btn btn-outline w-32 my-2">Edit</button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default Editreview;