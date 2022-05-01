import React from 'react'
import logo from './logo.png';

function Header() {
    return (
        <header>
            <nav className="nav">
                <img className="react-logo" src={logo} alt="a react logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header