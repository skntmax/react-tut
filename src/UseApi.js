import axios from "axios";
import { useState } from "react";

export function useApi (ms ) {

    const [ state , setState]  = useState({isLoading:false, error:null, data:[]})
    
    const handler = (name , value )=>{
        setState(p=>({
             ...p ,[name]:value
        }))
         
    }
     
    const getData =async (url)=>{
    handler('isLoading', true)
     return new Promise((resolve ,reject)=>{
        setTimeout(async()=>{
            return await axios.get(url).then(res=>{
                if(res.data) {
                   handler('data',res.data )
                   handler('isLoading', false)
                  return  resolve(res.data)
                }
           }).catch(err=>{
               handler('error',err )
               handler('isLoading', false)
               return reject(err)
           })
        }, ms )
     })
      

    }
    

    const {isLoading, error, data  } = state 
    return [getData , {isLoading, error, data } ] 
}