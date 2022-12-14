import  { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {RotatingLines } from  'react-loader-spinner'
import { Authcontext } from '../../Usercontext/Usercontext';





const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(Authcontext)
    const location = useLocation();
       
    
    if(loading){
        return (<div className='flex justify-center items-center min-h-screen'><RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      /></div>)
    }
        if(user && user.uid){
            return children
       }
       return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;