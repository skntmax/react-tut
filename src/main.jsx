import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
import ContextProvider  from './ContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <ContextProvider  >
      <App />
   </ContextProvider>
  </Provider>
  
)
