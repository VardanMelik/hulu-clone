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
                <HomeIcon/>
                <FlashOnIcon/>
                <LiveTvIcon/>
                <VideoLibraryIcon/>
                <SearchIcon/>
                <PersonOutlineIcon/>
                
                <img 
                    src="https://hulu-matchmaker.s3.us-west-2.amazonaws.com/2020-08/Hulu_Logo-01_newgreen.png" 
                    alt="logo"/>
            </div>
            
        </div>
    )
}

export default Header
