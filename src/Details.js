import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
let movieName = '';
let mainData = [];
let movieID = '';
const Details = (props) => {
  console.log(props, 'props')
  const [state, setState] = useState([]);
  const location = useLocation(props)
  movieName = location.state

  //  console.log(movieID,'movieID')
  console.log(movieName, 'MovieName')
  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all').then((res) => {
      return res.json()
    }).then((data) => {

      mainData = data.map((item, index) => item.show.name === movieName && item).filter(Boolean)
      setState(mainData)
      console.log(mainData, 'mainData')

    }).catch((err) => {
      console.log(err)
    })

  }, [])






  return (
    <div className='detailBackground'>
      <div >
        {
          state.map((item, index) => {
            return (
              <div>
                <div className='Container' >
                  <div className="linearBox" ></div>
                  <div className='Boxes1' >
                    <div className='movieDetail' >
                      <b style={{ fontSize: 40,color:'white' }} >{item.show.name}</b>
                      <h2 style={{ color: '#767676' }} >{item.show.genres}</h2>
                      <p className='autoPara' >{item.show.summary}</p>
                      <div className='detailsIcon' >
                        <div className='detIcon'>
                          <h1 className='detWatch' >&#43;</h1>
                          <b className='detWatchlist' >Watchlist</b>
                        </div>
                        <div className='detIcon'>
                          <h1 className='detWatch'><i style={{ color: 'white', fontSize: 30 }} className="fa fa-play"></i></h1>
                          <b className='detWatchlist'>Watch</b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='Boxes2' >
                    <img alt='detailMovie' src={item.show.image.original} className='DetailsPic' ></img>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='detailsLang' >
        <ul className="detailsul" >
          <li className="detailsli" >Available in:</li>
          <li className="detailsli" id="Active" >English</li>
          <li className="detailsli" >हिन्दी</li>
          <li className="detailsli" >தமிழ்</li>
          <li className="detailsli" >ಕನ್ನಡ</li>
          <li className="detailsli" >മലയാളം</li>
        </ul>
      </div>
    </div>
  )

}
export default Details;