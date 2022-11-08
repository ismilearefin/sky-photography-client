import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebaseAuth/firebase';

export const Authcontext = createContext()


const auth = getAuth(app);
const Usercontext = ({children}) => {
    const [user,setuser] = useState([]);
    const [loading, setloading] = useState(true);

    function signin(email,password){
        return createUserWithEmailAndPassword(auth, email, password)
    };
    function login(email,password){
        return signInWithEmailAndPassword(auth, email, password)
    };
    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, (currentuser) => {
            if (currentuser) {
              setuser(currentuser);
              setloading(false);
            } else {

            }
            return () => unsubscribe();
          });
    },[user])

    function updateUserProfile (name){
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }
    
    function logout(){
        signOut(auth).then(() => {
            // Sign-out successful.
            alert('logout sucessfully')
           
          }).catch((error) => {
            // An error happened.
          });
    }

    const userInfo = {
        user,
        loading,
        signin,
        login,
        updateUserProfile,
        logout
    }
    return (
        <Authcontext.Provider value={userInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Usercontext;