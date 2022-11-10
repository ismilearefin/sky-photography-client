import { useEffect } from "react"

const useTitle =(title)=>{
    
    useEffect(()=>{
        document.title = `${title}-SKY_photography`
    },[title])
};

export default useTitle;