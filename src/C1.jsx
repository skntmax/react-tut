import React, { useContext, useEffect } from 'react'
import { Item } from './App'
import { useSelector } from 'react-redux'
import { AppContentProvider } from './ContextProvider'

function C1({cmp}) {
     
    const { counter  } = useContext(AppContentProvider)
    
    console.log(counter)



    return (
     <>
  <Item sx={{height:"200px"}}>{cmp}   </Item>
     </>
  )
}

export default C1