import React, { createContext, useState } from 'react'

export const ContextProvider =createContext(null)
function Wrapper({children}) {

    const [state , setState ]  = useState(0)
    
    return (
     <>
          <button onClick={()=>setState(p=> p+1 ) }> click me </button>
         <ContextProvider.Provider value={{state }} >
                  {children}
          </ContextProvider.Provider>
     </>
  )
}

export default Wrapper