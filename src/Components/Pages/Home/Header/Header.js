import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-between">
            <div className="flex">
                <Link to='/' className="btn btn-ghost italic normal-case text-xl font-bold">SKY<small className='text-sm'>photography</small></Link>
            </div>
            <div className='flex gap-5 font-bold '>
                <NavLink to='/review'>My reviews</NavLink>
                <NavLink to='/addservice'>Add service</NavLink>
                <NavLink to='/blog'>Blogs</NavLink>
                <NavLink to='/login'>Login</NavLink>
            </div>
            <div className="flex">
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img alt='h' src="https://placeimg.com/80/80/people" />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                    <a href='#d' className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a href='das'>Settings</a></li>
                    <li><a href='asd'>Logout</a></li>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;