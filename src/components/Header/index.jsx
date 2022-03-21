import React, { useState } from 'react';
import './header.css';
import { HeaderStyles } from "../../styles/HeaderStyles";
import Navbar from "../Navbar/index";
import MenuButton from "../MenuButton/index";

function Header({lockMenu, unlockMenu}) {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  }

    return(
        <React.Fragment>
          <header className='header skew_header" id="header'>

            <div className="header__img">
              <img src="https://cdn.pixabay.com/photo/2017/09/05/10/19/business-2717063_640.jpg" alt="banner.jpg" className="img__banner" />
            </div>
            <div className="header__overlay"></div>
            <HeaderStyles>
              <a href="index.html" className='logo__a'><img src="https://i.imgur.com/7EVEnhT.png" alt="logo_CS black.png" className="logo" /></a>
              <Navbar closeMenu={closeMenu} unlockMenu={unlockMenu} open={open} handleClick={handleClick} />
              <MenuButton lockMenu={lockMenu} unlockMenu={unlockMenu} open={open} handleClick={handleClick} />
            </HeaderStyles>

            <div className="container container--flex">
              <div className="textos">
                <h1>Hi, I'm Cesar, web developer</h1>
                <div className="slogan">
                  <h2>&lt;/Front End Developer&gt;</h2>
                </div>
              </div>
            </div>
          </header>
        </React.Fragment>        
    )
}

export { Header };

