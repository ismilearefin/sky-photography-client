import React, { useContext } from 'react';
import { FaSketch } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { Authcontext } from '../../../../Usercontext/Usercontext';

const Header = () => {
    const {user,logout} = useContext(Authcontext)
    function handleLogout(){
        logout()
    }
    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-between">
            <div className="flex">
                <Link to='/' className="btn btn-ghost italic normal-case text-xl font-bold">SKY <small className='text-sm'><FaSketch className='text-2xl text-cyan-400'/>photography</small></Link>
            </div>
            <div className='flex gap-5 font-bold '>
                <NavLink to='/blog' className='btn btn-ghost '>Blog</NavLink>
                {
                    user?.uid ?
                    <NavLink to='/myreviews' className='btn btn-ghost '>My reviews</NavLink>
                    :
                    ''
                }
                {
                    user?.uid ?
                    <NavLink to='/addservice' className='btn btn-ghost'>Add service</NavLink>
                    :
                    ''
                }
                {!user?.uid ? 
                    <NavLink to='/login' className='btn btn-ghost'>Login</NavLink>
                :
                    <button onClick={handleLogout} className='btn btn-ghost'>Log Out</button>
                }
            </div>
            <div className="flex">
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    {user?.uid ?
                        <img alt='h' src={user.photoURL} />
                    :
                        <img alt='default' src='https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                    }
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                    <p  className="justify-between">
                        {user?.displayName ? user.displayName : 'No user'}
                        <span className="badge">New</span>
                    </p>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;