import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../../Usercontext/Usercontext';

const Myreview = () => {
    const {user} = useContext(Authcontext);
    const [userComment, setuserComment] = useState([])
    const [remainingComment, setremainingComment] = useState(userComment)
    
    
    
    useEffect(()=>{
        if(!user?.email){
            return <div>loading...</div>
        }
        else{
            fetch(`http://localhost:5000/allcomments/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setuserComment(data)
                setremainingComment(data)
            })
            }
        },[user?.email])
        // console.log(userComment)
    
    
    function CommentDelete(_id){
        const agree = window.confirm('Do you want to delete this comment?')

        if(agree){
            fetch(`http://localhost:5000/allcomments/${_id}`,{
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    const showCmt = userComment.filter(cmt => cmt._id !== _id);
                    setremainingComment(showCmt);
                    alert('Comment deleted successfully.')
                    console.log(_id)
                }
            })
        }
    }

console.log(remainingComment)



    return (
        <div className='min-h-screen mt-5'>
            my All Reviews {remainingComment.length}
            <div>
            <div className="overflow-x-auto  mx-2">
                <div className="table w-full">                   
                    <div>
                    <div className='px-4 flex justify-between text-lg py-2 font-bold bg-slate-50'>
                        <p>Name</p>
                        <p>comment</p>
                        <p>service</p>
                        <p></p>
                    </div>
                    </div>
                    <div>
                    {
                        remainingComment.map(cart =>  {
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
                        <button className="btn btn-xs">edit</button>
                        </div>
                    </div>
                    </div>)
                        })
                    }
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};
export default Myreview;