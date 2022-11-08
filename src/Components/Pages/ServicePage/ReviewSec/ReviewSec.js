import React, { useEffect, useState } from 'react';

const ReviewSec = ({service,post}) => {
    const [allcomments, setallcomments] = useState([]);
    const [submite, setsubmite] = useState(true);

    useEffect(()=>{
        fetch(`http://localhost:5000/allcomments?service=${service}`)
        .then(res => res.json())
        .then(data => {
            setsubmite(false)
            setallcomments(data)
        })
    },[service,submite,post])

    console.log(allcomments,service,submite)
    return (
        <div className="overflow-x-auto w-full">
        <table className="table w-full">
            <thead>
            <tr>
                <th>Name</th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
                allcomments.map(data => <Commnets data={data} key={data._id}></Commnets>)
            }
            </tbody>
        </table>
            
        </div>
    );
};



function Commnets({data}){
    const {img,name,comment,email} = data
    return (
        <>
            <tr className='flex justify-between'>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                        </div>
                        <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{email}</div>
                        </div>
                    </div>
                </td>
                <td className='w-1/2'>
                    {comment}
                </td>
            </tr>
        </>
    )
}

export default ReviewSec;