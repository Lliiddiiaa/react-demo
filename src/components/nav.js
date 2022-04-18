import React from "react";
import {Link, Outlet} from "react-router-dom";
import './nav.css';

function Nav() {
    return (
        <React.Fragment>
            <header>
                <div>
                    <span> Logo </span>
                </div>
                <nav>
                    <Link to='/'> Home </Link>
                    <Link to='catalog'> Catalog </Link>
                    <Link to='about'> About </Link>
                    <Link to='cart'> Cart </Link>
                </nav>
            </header>
            <Outlet/>
            </React.Fragment>
    )
}

export default Nav