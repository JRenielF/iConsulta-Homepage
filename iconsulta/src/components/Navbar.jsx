import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import LogoImage from "/src/assets/Logo.png";
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [navbarBg, setNavbarBg] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    useEffect(() => {
        const changeNavbarBg = () => {
            if (window.scrollY >= 80) {
                setNavbarBg(true);
            } else {
                setNavbarBg(false);
            }
        };

        window.addEventListener('scroll', changeNavbarBg);

        
        return () => {
            window.removeEventListener('scroll', changeNavbarBg);
        };
    }, []);

    return (
        <div className={`header ${navbarBg ? 'bg-yellow-500' : 'bg-white'} w-full px-4 transition-colors duration-500 ease-in-out`}>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={LogoImage} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials' onClick={closeMenu}>Testimonials</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo' onClick={closeMenu}>Demo</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
