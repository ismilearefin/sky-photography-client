import  { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../../Usercontext/Usercontext';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(Authcontext)
    const location = useLocation();
    // console.log(location)
       
    if(loading){
        return <div>loading....</div>
    }
        if(user && user.uid){
            return children
       }
       return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;