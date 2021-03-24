import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <nav id="navigation" className="navigation navigation-landscape">
            <div className="nav-header">
                <a className="nav-brand static-logo" href="#"><img src="assets/img/webacademy.png" className="logo" alt /></a>
                <a className="nav-brand fixed-logo" href="#"><img src="assets/img/webacademy.png" className="logo" alt /></a>
                <div className="nav-toggle" />
            </div>
            <div className="nav-menus-wrapper" style={{transitionProperty: 'none'}}>
                <ul className="nav-menu">
                <li className="active"><Link href="/"><a>Home<span className="submenu-indicator" /></a></Link>
                </li>
                <li><Link href="/courses"><a>All Courses<span className="submenu-indicator" /></a></Link>
                </li>
                <li><Link href="/"><a>Special Deal<span className="submenu-indicator" /></a></Link>
                </li>
                <li><Link href="/blog"><a>Blog</a></Link></li>
                <li><Link href="/resourse"><a>Free Resources</a></Link></li>
                </ul>
                <ul className="nav-menu nav-menu-social align-to-right">
                <li className="login_click light">
                    <a href="#" data-toggle="modal" data-target="#login">Login</a>
                </li>
                <li className="login_click bg-green">
                    <a href="#" data-toggle="modal" data-target="#signup">Sign up</a>
                </li>
                </ul>
            </div>
            </nav> 
        </>
    )
}

export default Navbar
