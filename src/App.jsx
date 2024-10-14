import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useApi } from './UseApi'

function App() {
   
  const [count, setCount] = useState(0)
  const [product , {  isLoading, error, data }]  = new  useApi(5000)
  const [allProduct , {  isLoading:allProductIsLoading, error:isLoadingErro, data:isLoadingData }]  = new  useApi(8000)

  
  useEffect(()=>{
    
    product('https://fakestoreapi.com/products/1')
    allProduct('https://fakestoreapi.com/products')

  }, [])
   

  return (
    <>
       
       {
        isLoading?"product..": JSON.stringify(data)
       }
       <br />


       {
        allProductIsLoading?"allProductIsLoading...": JSON.stringify(isLoadingData)
       }



    </>
  )
}

export default App
