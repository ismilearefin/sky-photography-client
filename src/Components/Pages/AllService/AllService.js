import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllService = () => {
    const allservices = useLoaderData();
    console.log(allservices)
    return (
        <div>
            
        </div>
    );
};

export default AllService;