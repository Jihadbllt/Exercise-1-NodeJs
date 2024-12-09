import React from 'react';

import './Header.css';

const Header = () => {
    return (
        <header className='app-header'>
            <div className='logo'>
                <h1>Task Manager</h1>
            </div>
            <nav>
                <ul className='nav-links'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/tasks'>Tasks</a></li>
                    <li> <a href='/about'>About</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;