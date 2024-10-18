import axios from "axios";
import { useState } from "react";


export function useApi (ms) {

    const [ state , setState]  = useState({data:[] ,isError:null, isLoading:false })

    const setHandler = (name, value )=>{
         setState(p=>({
             ...p, [name]:value 
         }))
    }

    const getApiMutation =async  (url, payload ,header)=>{
     setHandler('isLoading', true )
      return new Promise((resolve, reject)=>{

         setTimeout(async ()=> {
            await axios.get(url).then((res)=>{
                setHandler('data', res.data )
                setHandler('isLoading', false )
                return resolve(res.data)
            }).catch(err=>{
               setHandler('isError', err )
               setHandler('isLoading', false )
               return reject(err)
            })
         } , ms )
         
      })


   
    }

     
    const { data ,isError, isLoading  } = state 
    return [ getApiMutation ,{ data ,isError, isLoading  } ]

}