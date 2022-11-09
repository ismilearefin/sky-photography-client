import { useEffect } from "react"

const useTitle =(title)=>{
    
    useEffect(()=>{
        document.title = `${title}-SKYphotography`
    },[title])
};

export default useTitle;