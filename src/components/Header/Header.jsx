import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import enuzhatLogo from '../../image/my-logo.png';
import mobileMenuImage from '../../image/mobile-menu-image.png'

import {XMarkIcon} from '@heroicons/react/24/solid'

const Header = () => {

const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        // header parent container
       <header className=''>
            <nav className=''>
                {/* logo section */}
                   <Link to ='/'>
                    <img src={enuzhatLogo} alt="enuzhat-logo" />
                   </Link>
                {/* menu main section */}
                    <ul className='hidden lg:flex'>
                        <li>
                            <Link to='/' title='link'
                            className= {({ isActive }) =>
                            isActive ? "active" : ""
                          }>Home</Link>
                        </li>
                        <li>
                            <Link to='/about' title='link'
                            className= {({ isActive }) =>
                            isActive ? "active" : ""
                          }>About</Link>
                        </li>
                        <li>
                            <Link to='/services' title='link'
                            className= {({ isActive }) =>
                            isActive ? "active" : ""
                          }>Services</Link>
                        </li>
                        <li>
                            <Link to='/portfolio' title='link'
                            className= {({ isActive }) =>
                            isActive ? "active" : ""
                          }>Portfolio</Link>
                        </li>
                        <li>
                            <Link to='/contact' title='link'
                            className= {({ isActive }) =>
                            isActive ? "active" : ""
                          }>Contact</Link>
                        </li>
                    </ul>

                
                {/* mobile menu section */}         
                <section className=' lg:hidden'>
                    <button aria-label='Open Menu'
                    title='Open Menu'
                    onClick={() => setIsMenuOpen(true)}>
                        <img src={mobileMenuImage} alt="" />
                    </button>
                    {isMenuOpen && (
                        <div className=''>
                            {/* dropdown close button mobile menu */}
                            <div>
                                <button
                                aria-label='Close Menu'
                                title='Close Menu'
                                onClick={() => setIsMenuOpen(false)}>
                                     <XMarkIcon className='w-5 text-gray-600'></XMarkIcon>
                                </button>
                            </div>
                            <nav className=''>
                                <ul>
                                    <li>
                                        <Link to='/' title='link'
                                        className= "">Home</Link>
                            </li>
                            <li>
                                <Link to='/about' title='link'
                                className= "">About</Link>
                            </li>
                            <li>
                                <Link to='/services' title='link'
                                className= "">Services</Link>
                            </li>
                            <li>
                                <Link to='/portfolio' title='link'
                                className= "">Portfolio</Link>
                            </li>
                            <li>
                                <Link to='/contact' title='link'
                                className= "">Contact</Link>
                            </li> 
                                </ul>
                            </nav>
                        </div>        
                    )
                        
                    }

                    
                </section>
            </nav>

                          
       </header>
    );
};

export default Header;