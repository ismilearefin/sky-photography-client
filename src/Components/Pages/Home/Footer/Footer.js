import React from 'react';
import { FaSketch } from "react-icons/fa";


const Footer = () => {
    return (
       <div>
         <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
            <FaSketch className='text-7xl text-cyan-400'/>
            <p>SKY photography.<br/>Providing reliable tech since 1992</p>
        </div> 
        <div>
            <span className="footer-title">Services</span> 
            <p className="link link-hover">Weadding</p> 
            <p className="link link-hover">Birthday</p> 
            <p className="link link-hover">Hindu Weadding</p> 
            <p className="link link-hover">Advertisement</p>
        </div> 
        <div>
            <span className="footer-title">Company</span> 
            <p className="link link-hover">About us</p> 
            <p className="link link-hover">Contact</p> 
            <p className="link link-hover">Jobs</p> 
            <p className="link link-hover">Press kit</p>
        </div> 
        <div>
            <span className="footer-title">Legal</span> 
            <p className="link link-hover">Terms of use</p> 
            <p className="link link-hover">Privacy policy</p> 
            <p className="link link-hover">Cookie policy</p>
        </div>
        </footer>
        <div className='py-4 bg-base-200'>
        <p>Copyright © 2022 - All right reserved | Ismile Arefin Fahad</p>
        </div>
       </div>
    );
};

export default Footer;