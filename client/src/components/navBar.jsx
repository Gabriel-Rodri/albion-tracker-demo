import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navBar.css"



export default function NavBar() {
    return (
            <nav className="container">
                <div className="logo">
                    <img src="../assets/logo.png" alt="logo" />
                </div>
                
                <div className="tittle">
                    <h1>
                    Albion Tracker v0.1..1
                    </h1>
                </div>

                <div className="NavLink">
                    <span className="player"><NavLink to={'/'} className="a">Player</NavLink></span>
                    <span className="guilds"><NavLink to={'/guilds'} className="a">Guilds</NavLink></span>
                    <span className="battles"><NavLink to={'/'} className="a">Battle</NavLink></span>
                    <span className="market"><NavLink to={'/'} className="a">Market</NavLink></span>
                </div>
            </nav>
    )
}