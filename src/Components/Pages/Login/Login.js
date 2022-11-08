import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../Usercontext/Usercontext';


const Login = () => {
    const {login, googlesignup} = useContext(Authcontext)
    const [error,seterror] = useState('')



    function handlesubmiteLogin(e){
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            seterror('')
            form.reset()
            // ...
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            seterror(errorMessage)
            });
    }

    function googlepoup(){
        googlesignup()
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div>
            <div className="text-center ">
                <h1 className="text-5xl font-bold mb-8">Login now!</h1>
            </div>
            <form onSubmit={(e)=>handlesubmiteLogin(e)} className="card flex-shrink-0 w-full px-10 max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
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
                    <p  className="label-text-alt ">Don't have any account? <Link to='/signup' className='link'>Signup</Link></p>
                    </label>
                    <p  className="label-text-alt text-red-600">{error}</p>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Log in</button>
                </div>
                </div>
            </form>
                <div className="form-control mt-6">
                    <button onClick={googlepoup} className="btn btn-primary">Google</button>
                </div>
            <div className='mt-5'>
                <Link to='/' className='btn btn-outline'>Go Back</Link>
            </div>
            </div>
        </div>
    );
};

export default Login;