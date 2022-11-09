import React from 'react';

const Blog = () => {
    return (
        <div className='min-h-screen mx-10 my-10 text-left'>
        <div className='my-6'>
            <h1 className='italic font-bold text-2xl text-left'>Difference between SQL and NoSQL..</h1>
            <div ><hr className='w-1/2'/></div>
            <p>SQL is old and sometimes constraining, but also time-tested and increasingly considered a universal interface for data analysis. NoSQL databases are new and flexible, but lack maturity and require user specialization. Pragmatically both models are useful and even growing together.
                Ultimately, a technology is only valuable when it serves your business, usually with increased ROI. Even companies like Google, with resources to innovate ad-hoc NoSQL systems from scratch (and foundational ones at that, see MapReduce and BigTable), have found that SQL provided additional value and restored it within critical systems. </p>
        </div>
        <div className='my-6'>
            <h1 className='italic font-bold text-2xl text-left'>What is JWT, and how does it work?</h1>
            <div ><hr className='w-1/2'/></div>
            <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.<br/>
            JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.<br/>
            A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
            </p>
        </div>
        <div className='my-6'>
            <h1 className='italic font-bold text-2xl text-left'>What is the difference between javascript and NodeJS?</h1>
            <div ><hr className='w-1/2'/></div>
            <span className='font-bold'>NodeJS</span>
            <p>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.</p>
            <span className='font-bold'>Javascript</span>
            <p>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
        </div>
        <div className='my-6'>
            <h1 className='italic font-bold text-2xl text-left'>How does NodeJS handle multiple requests at the same time?</h1>
            <div ><hr className='w-1/2'/></div>
            <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
        </div>
    </div>
    );
};

export default Blog;