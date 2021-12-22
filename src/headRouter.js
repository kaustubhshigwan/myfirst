import React from "react";
import { Route, Link,BrowserRouter,Routes } from 'react-router-dom'
import Main from "./Main";
import Subscribe from "./Details";
 const headRouter =()=>{
   return(
       <div>
           < BrowserRouter >
    <div >
      
       <ul style={{display:'flex',justifyContent:'space-between',listStyleType:'none',textDecorationStyle:'none'}}  >
         
          <li style={{textDecoration:'none'}} >
             <Link to="/Main" >Main</Link>
          </li>
          <li>
             <Link to="/Details">Subscribe</Link>
          </li>
       </ul>
       <Routes>
       <Route exact path="/Main" component={Main} element={<Main/>} />
       <Route exact path="/Details" component={Subscribe} element={<Subscribe/>} />
       </Routes>
       
    </div>
 </ BrowserRouter >

       </div>
   )
 } 
 export default headRouter;