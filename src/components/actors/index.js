import React, {useEffect, useState} from 'react';
import {APIKEY} from "../../Apikey";
import axios from "axios";
import Slider from "react-slick";

const Index = ({id}) => {
    const [actors, setActors] = useState([])
    const getActors = async (id, APIKEY) => {
        const res = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}&language=en-US`)
        const {data} = res
        setActors(data.cast)
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };

    useEffect(() => {
        getActors(id, APIKEY)
    }, [])
    return (
      <div id="actors" style={{
          padding:"5%",
          background:"black"
      }}>
          <div className="actors" style={{background:"black"}}>
              <Slider {...settings}>{
                  actors.map(el => (
                      <div>
                          <img style={{width:"200px"}} src={`https://www.themoviedb.org/t/p/w276_and_h350_face${el.profile_path}`} alt=""/>
                          <h4 style={{color:"white"}}>{el.name}</h4>
                          <p style={{color:"white"}}>{el.character}</p>
                      </div>
                  ))
              }
              </Slider>
          </div>
      </div>
    );
};

export default Index;