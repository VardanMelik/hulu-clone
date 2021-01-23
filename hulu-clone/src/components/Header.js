import React from 'react';
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

function Header() {
    return (
        // BEM naming class
        <div className="header">
            <div className="header__icons">
                
                <div className="header__icon">
                    <HomeIcon/>
                    <p>Home</p>
                </div>

                <div className="header__icon">
                    <FlashOnIcon/>
                    <p>Trending</p>
                </div>

                <div className="header__icon">
                    <LiveTvIcon/>
                    <p>Verified</p>
                </div>

                <div className="header__icon">
                    <VideoLibraryIcon/>
                    <p>Collections</p>
                </div>

                <div className="header__icon">
                    <SearchIcon/>
                    <p>Search</p>
                </div>

                <div className="header__icon">
                    <PersonOutlineIcon/>
                    <p>Account</p>
                </div>                
               
            </div>
            <img className="logo"
                    src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-green-digital.png?w=960" 
                    alt="logo"/>
            
        </div>
    )
}

export default Header
