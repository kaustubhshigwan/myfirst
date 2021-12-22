import React, { Component } from "react";
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import './Style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom'

import Subscribe from "./Details";
// let mainData = [];
let INDEX = '';
let uniqueValue=[];
let autoImage=[];
class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: true,
            show: false,
            indxNum: '',
            mainData: [],
            borColor:'',
             sty:{},
        }
    }

    componentDidMount() {
      fetch('https://api.tvmaze.com/search/shows?q=all').then((res)=>{
            return res.json()
        }).then((data) => {
             uniqueValue=[...new Set(data)]
             autoImage=uniqueValue.map((item,index)=>item.show.image!==null && item).filter(Boolean)
               console.log(autoImage,'auto')
            this.setState({

                mainData:autoImage
            })
            console.log(this.state.mainData, 'mainData')

        }).catch((err) => {
            console.log(err)
        })

        console.log(this.props, 'props')
    }



    cardInfo(e) {
        console.log(e, 'e')
        INDEX = e
        this.setState({ show: true, indxNum: INDEX,
          sty:{
            width:216,position:'relative',left:-16,bottom:85,zIndex:4,height:100
          }
        })

    }
  cardinfoleave(){
      console.log('info')
      this.setState({
          sty:{display:'none'}
      })
  }


    render() {
        // const { params } = this.props.match
        // console.log(params,'params')
        const autosettings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 5000,
            autoplaySpeed: 5000,


        };
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 7.6,
            slidesToScroll: 7.6,

        };



        return (
            <div >


                <div>
                    <div style={{ height: 800 }}>

                        <div className='Slider' >

                            <Slider {...autosettings}>
                                {
                                    this.state.mainData.map((item, index, array) => {
                                        return (
                                            <div>
                                                <div className='auto'>
                                                   <div className="atoling" ></div>
                                                    <div className='autoSam'>

                                                        <div className='autoSame1' >
                                                            <b style={{ fontSize: 40 }} >{item.show.name}</b>
                                                            <h2 style={{ color: '#767676' }} >{item.show.genres}</h2>

                                                            <p className='autoPara' >{item.show.summary}</p>

                                                        </div>

                                                    </div>
                                                    <div className='autoSame'>
                                                        <img alt='auotPic' src={item.show.image.medium} className='autoSamePic'  ></img>
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                    })
                                }

                            </Slider>
                        </div>
                        <div>
                            <div className='Slider1' >
                            <h1 style={{color:'white',marginLeft:25,fontSize:20}} >Latest & Trending </h1>
                                <div className='slidbox' >
                                   
                                    <Slider  className="slidboxcc" {...settings}>
                                        {
                                            this.state.mainData.map((item, index) => {

                                                return (
                                                    <Link  to={{ pathname: '/Details' }} state={item.show.name}    >


                                                        <div  >
                                                            <div  className='box'   key={index}  >
                                                                <img alt='moviePic' src={item.show.image.medium} onMouseEnter={() => this.cardInfo(index)} onMouseLeave={()=>this.cardinfoleave()} className='pic' ></img>

                                                            </div>

                                                            {
                                                                this.state.show === true && this.state.indxNum === index && (
                                                                    <div  className="boxInfo" style={this.state.sty} >
                                                                        <b style={{ color: 'white' }} >{item.show.name}</b>
                                                                        <h2 style={{ color: '#767676', fontSize: 15 }} >{item.show.genres}</h2>
                                                                        <h2 style={{ color: '#767676', fontSize: 15 }} >language:<span style={{ color: 'white' }} >{item.show.language}</span></h2>

                                                                    </div>
                                                                )
                                                            }

                                                        </div>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </Slider>

                                </div>


                            </div>
                        </div>
                    </div>

                </div>




            </div>




        )
    }
}
export default Main;