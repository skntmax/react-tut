import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slice'
import { setupListeners } from '@reduxjs/toolkit/query'

const store =  configureStore({
  reducer:{
     counter: counterSlice.reducer
  }
})

export default store


