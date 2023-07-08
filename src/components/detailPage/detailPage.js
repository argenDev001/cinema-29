import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../Apikey";
import {useParams} from "react-router-dom";
import './style.scss'
import Actors from "../actors";
import Videos from "../videos";
const DetailPage = () => {

    const [detail, setDetail] = useState({})
    const {id} = useParams()


    const getDetail = async () => {
        const page = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`)
        const {data} = await page
        setDetail(data)
    }


    useEffect(() => {
        getDetail(id,APIKEY)
    }, [])


    let {poster_path, backdrop_path, title, release_date, runtime,overview,tagline,popularity} = detail
    return (
      <>
          <div id="detail" style={{
              padding: "100px 0",
              background: `url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}') no-repeat center/cover`,
          }}>
              <div className="container">
                  <div className="detail">
                      <div className="detail-one">
                          <img style={{width: "300px"}}
                               src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`} alt=""/>
                      </div>
                      <div className="detail-two">
                          <h1 style={{color:"white"}}>{title}(2023)</h1>
                          <div className="detail-two-group " style={{color: "white", display: "flex"}}>
                              <h4>{release_date}</h4>
                              <ul>
                                  <li>
                                      <p>криминал, триллер, драма
                                      </p>
                                  </li>
                              </ul>
                              <ul>
                                  <li>
                                      <p>{Math.floor(runtime / 60)} <small>h</small> {runtime % 60} <small>min</small></p>
                                  </li>
                              </ul>
                          </div>
                          <div className="detail-rated">
                              <h3 style={{color:"white"}}>{popularity}</h3>
                          </div>
                          <div className="detail-text">

                              <h4 style={{color:"white"}}>{tagline}</h4>
                              <p style={{width:"500px", color:"white"}}>{overview}</p>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
          <Actors id={id}/>
          <Videos id={id}/>
      </>

    );
};

export default DetailPage;