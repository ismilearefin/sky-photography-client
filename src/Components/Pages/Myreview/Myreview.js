import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../../Usercontext/Usercontext';

const Myreview = () => {
    const {user} = useContext(Authcontext);
    const [userComment, setuserComment] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/allcomments/user?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setuserComment(data))
    },[user?.email])
    return (
        <div>
            my All Reviews {userComment.length}
        </div>
    );
};

export default Myreview;