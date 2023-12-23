import React from "react";
import { NavLink } from "react-router-dom";



export default function NavBar() {
    return (
            <nav className="a">
                <div className="a">
                    LOGO
                </div>
                
                <div className="a">
                    <h1>
                    Albion Tracker v0.1..1
                    </h1>
                </div>

                <div className="a">
                    <span className="a"><NavLink to={'/'} className="a">player</NavLink></span><br/>
                    <span className="a"><NavLink to={'/'} className="a">guilds</NavLink></span><br/>
                    <span className="a"><NavLink to={'/'} className="a">battle</NavLink></span><br/>
                    <span className="a"><NavLink to={'/'} className="a">market</NavLink></span>
                </div>
            </nav>
    )
}