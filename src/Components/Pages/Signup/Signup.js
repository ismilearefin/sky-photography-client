import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../Usercontext/Usercontext';

const Signup = () => {
    const {signin , updateUserProfile} = useContext(Authcontext);
    const [error,seterror] = useState('')

    function handlesubmit(e){
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)
        signin(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            updateUserProfile(name)
            
            console.log(user)
            // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                seterror(errorMessage);
                // ..
            });

    }



    return (
        <div className="hero min-h-screen bg-base-200">
        <div>
        <div className="text-center ">
            <h1 className="text-5xl font-bold mb-8">SIGN IN NOW!</h1>
        </div>
        <form onSubmit={(e)=>handlesubmit(e)} className="card flex-shrink-0 w-full px-10 max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <div className="form-control">
                <label className="label">
                <span className="label-text">User Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" required/>
            </div>
            <div className="form-control">
                <label className="label">
                <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
            </div>
            <div className="form-control">
                <label className="label">
                <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                <label className="label">
                <p className="label-text-alt ">Already have an account? <Link to='/login' className='link'>Login</Link></p>
                </label>
                <label className="label">
                    <p  className="label-text-alt text-red-600">{error}</p>
                </label>
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary">Sign in</button>
            </div>
            </div>
        </form>
        </div>
    </div>
    );
};

export default Signup;