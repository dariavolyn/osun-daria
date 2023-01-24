import React, { useState } from 'react';

function Header(props) {
    const [showMenu, setShowMenu] = useState(false);

    let bigMenu =
        <nav className="nav nav-fullscreen">
            <button className="nav-link">Education</button>
            <button className="nav-link">Research</button>
            <button className="nav-link">Access</button>
            <button className="nav-link">News + Opportunities</button>
            <button className="nav-link">Resources</button>
            <button className="nav-link">About</button>
        </nav>

    let mobileMenu

    if (showMenu) {
        mobileMenu =
            <nav className="nav nav-mobile">
                <button className="nav-link nav-link-mobile">Education</button>
                <button className="nav-link nav-link-mobile">Research</button>
                <button className="nav-link nav-link-mobile">Access</button>
                <button className="nav-link nav-link-mobile">News + Opportunities</button>
                <button className="nav-link nav-link-mobile">Resources</button>
                <button className="nav-link nav-link-mobile">About</button>
            </nav>
    }


    return (
        <header className="header">
            <button className='header-logo' />
            <button className='header-mobile-menu-button' onClick={() => { setShowMenu(!showMenu) }} />
            {bigMenu}
            {mobileMenu}
        </header>
    )
}

export default Header;