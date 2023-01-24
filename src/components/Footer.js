import React from 'react';
import logo from '../img/osun-logo-footer.png';

function Footer() {
    return (
        <footer className='footer'>
            <img src={logo} alt='Logo' className='footer-logo' />
            <p className='footer-info'>For more information contact:
                <button className='footer-link'>info@opensocietyuniversitynetwork.org</button>
            </p>
        </footer>
    )
}

export default Footer;