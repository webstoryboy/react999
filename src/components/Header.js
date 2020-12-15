import React from 'react';
import { Link } from 'react-router-dom';

function Header({color}){
    return (
        <header id="header" className={color} >
            <div className="site"><Link to="/site">Site</Link></div>
            <div className="logo"><Link to="/">webstoryboy</Link></div>
            <nav className="nav">
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/reference">Reference</Link></li>
                    <li><Link to="/script">Script</Link></li>
                    <li><Link to="/ani">Animation</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;