import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../../Usercontext/Usercontext';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../../Hooks/useTitle';
import { RotatingLines } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

const Myreview = () => {
    useTitle('myreview')
    const {user,logout} = useContext(Authcontext);
    const [userComment, setuserComment] = useState([]);
    
    useEffect(()=>{
        if(!user?.email){
            return (<div className='flex justify-center items-center min-h-screen'>
                <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
            />
            </div>)
        }
        else{
            fetch(`https://sky-photography-server.vercel.app/allcomments/user?email=${user?.email}`,{
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    logout()
                }
                return  res.json()
            })
            .then(data => {
                console.log(data)
                setuserComment(data)
            })
            }
        },[user?.email ,logout])
        
    
    
    function CommentDelete(_id){
        const agree = window.confirm('Do you want to delete this comment?')

        if(agree){
            fetch(`https://sky-photography-server.vercel.app/allcomments/${_id}`,{
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    const short = userComment.filter(cmnt => cmnt._id !== _id);
                    setuserComment(short);
                    toast.success('review deleted successfully.')
                    console.log(short)
                }
            })
        }
    }


//edit comment


    return (
        <div className='min-h-screen mt-5'>
            {userComment.length !== 0 ?
            <div>
            <div className="overflow-x-auto  mx-2">
                <div className="table w-full">                   
                    <div>
                    <div className='px-4 flex justify-between text-lg py-2 font-bold bg-slate-50'>
                        <p>Name</p>
                        <p>Review</p>
                        <p>Service</p>
                        <p></p>
                    </div>
                    </div>
                    <div>
                    {
                        userComment.map(cart =>  {
                    return ( <div key={cart._id}>
                    <div className='flex justify-between items-center mt-4 p-4 border'>
                        <div>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={cart.img} alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">{cart.name}</div>
                            <div className="text-sm opacity-50">{cart.email}</div>
                            </div>
                        </div>
                        </div>
                        <div>
                        {cart.comment}
                        <br/>
                        </div>
                        <div>{cart.service}</div>
                        <div className='flex gap-2'>
                        <button onClick={()=>CommentDelete(cart._id)} className="btn btn-xs">X</button>
                        <Link to={`/editreview/${cart._id}`} className="btn btn-xs">edit</Link>
                        </div>
                    </div>
                    </div>)
                        })
                    }
                    </div>
                </div>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                    />
                </div>
            </div>
            :
            <div className='min-h-screen flex items-center justify-center'>
                <p className='text-3xl font-bold'>NO reviews were added</p>
            </div>
            }
        </div>
    );
};
export default Myreview;