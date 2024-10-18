import React from 'react'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import C1 from './C1';
import C2 from './C1';
import C3 from './C1';
import C4 from './C1';
import Wrapper from './Wrapper';

export  const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  
  }),
}));


function App() {
  return (
     <>

      <div className='d-flex justify-content-center align-items-center border ' style={{width:"100vw" , height:"100vh" }}>

    <button> reload all the components</button>
    
      <Grid container spacing={2} >
      <Grid item xs={6} >  
         <C1 cmp="cmp1" />
      </Grid>

      <Grid item xs={6}>
      <C2 cmp="cmp2" />
      </Grid>

      <Grid item xs={6}>
      <C3 cmp="cmp3" />
      </Grid>

      
      <Grid item xs={6}>
      <C4 cmp="cmp4" />
      </Grid>
      </Grid>

 
     

      </div>
     </>
  )
}

export default App