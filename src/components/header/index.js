import React, {useState} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom"
import "./style.scss"


const Header = () => {
    const [value, setValue] = useState('')
    const navigate = useNavigate()
    return (
        <div id="header">
            <nav className="navbar navbar-expand-lg navbar-light  py-3">
                <div className="container">
                    <a  style={{
                        fontSize:"27px",
                        color:"blue",
                        fontWeight:"bold",
                        fontFamily:"inherit"

                    }} className="navbar-brand " href="#"><span style={{
                        color:"red",
                        fontWeight:"500",
                        fontFamily:"monospace"

                    }}>Cine</span>HUB</a>

                    <div className="collapse navbar-collapse d-flex justify-content-between"
                         id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink to={'/'} className="nav-link" href="#">NowPlaying</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to={'/popular'} className="nav-link" href="#">Popular</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to={'/rated'} className="nav-link" href="#">Rated</NavLink>
                            </li>
                        </ul>
                        <form className="form-inline  my-2 my-lg-0 d-flex gap-5">
                            <input onChange={(event) => setValue(event.target.value)} className="form-control mr-sm-2"
                                   type="search" placeholder="Search" aria-label="Search"/>
                            <button
                                onClick={() => navigate(`/search-result/${value}`)}
                                className="btn btn-danger my-2 my-sm-0">Search
                            </button>

                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;