import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../../Usercontext/Usercontext';

const Signup = () => {
    const {signin , updateUserProfile,googlesignup} = useContext(Authcontext);
    const [error,seterror] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    function handlesubmit(e){
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.url.value;
        

        console.log(name,email,password)
        signin(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            updateUserProfile(name,image)
            form.reset();
            seterror('')
            navigate(from, {replace:true});
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

    function googlepopup(){
        googlesignup()
        .then((result) => {
            
            const user = result.user;
            console.log(user)
            navigate(from, {replace:true});
            // ...
            }).catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
            seterror(errorMessage)
            
            });
    }


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className='flex items-center gap-8'>
        <div className="text-center ">
            <h1 className="text-5xl font-bold mb-8">SIGN IN NOW!</h1>
            
            <Link to='/' className='btn btn-outline mt-4'>Go Back</Link>
        </div>
        <form onSubmit={(e)=>handlesubmit(e)} className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <div className="form-control">
                <label className="label">
                <span className="label-text">User Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" required/>
            </div>
            <div className="form-control">
                <label className="label">
                <span className="label-text">User Image</span>
                </label>
                <input type="text" name="url" placeholder="Image url" className="input input-bordered" required/>
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
                    <p  className="label-text-alt text-red-600">{error}</p>
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary">Sign in</button>
            </div>
            </div>
            <div className="form-control ">
                <button onClick={googlepopup} className="btn btn-primary">Google</button>
            </div>
        </form>
        
        </div>
    </div>
    );
};

export default Signup;