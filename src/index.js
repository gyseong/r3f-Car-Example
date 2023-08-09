import React from 'react';
import {createRoot,ReactDOM} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useRoute,useLocation } from 'wouter';

function Root(){
  const [,params] = useRoute('item/:id')
const [,setLocation] = useLocation()
return (
  <>
  <App />
    <a style={{position:'absolute', top:40, left:40, fontSize:'13px'}} href="#" onClick={()=>setLocation('/')}>
      {params ? '< back' : 'double click to enter engine'}
    </a>
  </>
)
}
createRoot(document.getElementById('root')).render(<Root/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
