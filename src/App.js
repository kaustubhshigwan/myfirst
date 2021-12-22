import React, { Component } from "react";
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom'
import Main from "./Main";
import Subscribe from "./Details";
let splashcreen = '';

let inputValue = '';
let movieNamestore = [];
class App extends Component {
   constructor() {
      super()
      this.state = {
         isVisible: true, 
         main: false,
         inputMovie: '',
      }
   }

   componentDidMount() {
      setTimeout(() => {
         this.splashFun()
      }, 2000);
   }

   splashFun() {
      this.setState({
         isVisible: false,
         main: true,
      })
   }

   inputData = (e) => {
      inputValue = e.target.value
      this.setState({
         inputMovie: e.target.value
      })
      console.log(inputValue, 'inputval')
   }

   ClearInputData() {
      this.setState({
         inputMovie: '',
      })
   }


   render() {

      splashcreen = (
         <img alt='Splash' src='https://miro.medium.com/max/1400/1*XarnoDp8crg1gsDWV6Jrpg.gif' style={{ height: 780, width: 1550 }} ></img>
      )

      return (

         <div>
            <div>
               {
                  this.state.isVisible ? splashcreen : null
               }
            </div>

            < BrowserRouter >

               <div >
                  <div className='headBox'>
                     <ul className='BOx1' >
                        <li className='bx' >
                           <Link to="/Main" className='headText' >
                              <img alt='menubar' src='https://cyblab-ltd.com/wp-content/uploads/2017/03/ui_sandwich_menu-512.png' style={{ height: 40, width: 40, marginTop: 8 }} ></img>
                           </Link>
                        </li>
                        <li className='bx'>
                           <Link to="/Details" className='headText'>
                              <img alt='Logo' src='https://3.bp.blogspot.com/-YCGrTd-xZ6g/XLEISz_krnI/AAAAAAAAQA8/bAMgYTsFTvcF_KqLnvm37ydqjG5KvqVKwCLcBGAs/s1600/disneyplus.png' style={{ height: 50, width: 120 }} ></img>
                           </Link>
                        </li>
                        <li className='bx'>
                           <Link to="/Main" className='headText'>Tv</Link>
                        </li>
                        <li className='bx'>
                           <Link to="/Details" className='headText'>movies</Link>
                        </li>
                        <li className='bx'>
                           <Link to="/Details" className='headText'>sports</Link>
                        </li>
                        <li className='bx'>
                           <Link to="/Details" className='headText'>Disney+</Link>
                        </li>
                        <li className='bx'>
                           <Link to="/Details" className='headText' id='headTextKids' >Kids</Link>
                        </li>
                     </ul>
                     <ul className='BOx2' >
                        <li className='bx' >
                           <input type='text' value={this.state.inputMovie} onChange={(e) => this.inputData(e)} style={{ background: 'transparent', border: 'transparent', borderBottomWidth: 1, borderBottomStyle: 'solid', borderBottomColor: 'gray', fontSize: 20, outline: 'transparent', color: "white" }} placeholder='Search' ></input>
                           <Link to={{ pathname: '/Details' }} state={this.state.inputMovie} className='headText'  >

                              <img alt='Search' onClick={() => this.setState({ inputMovie: '' })} src='https://www.unboxsocial.com/blog/wp-content/themes/cenote/images/search.svg' style={{ height: 20, width: 20 }} ></img>
                           </Link>

                        </li>
                        <li className='bx'>
                           <Link to="/Details" className='headText' id='subscribeBtn' >Subscribe</Link>
                        </li>
                        <li className='bx'>
                           <Link to="/Details" className='headText' >login</Link>
                        </li>
                     </ul>
                  </div>

                  <Routes>
                     <Route exact path='/' component={Main} element={<Main />} />
                     <Route exact path="/Main" component={Main} element={<Main />} />
                     <Route exact path="/Details" component={Subscribe} element={<Subscribe />} />
                  </Routes>

               </div>
            </ BrowserRouter >


         </div>
      );
   }

}

export default App;
