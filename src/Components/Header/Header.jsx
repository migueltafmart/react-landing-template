import React from "react";
import "./Header.scss";
const Header = ({ heading, menu }) => {
  return (
    <header className="Header">
      <div className="wrapper Header__wrapper">
        <h3 className="Header__heading">{heading}</h3>
        {menu ? <button className='Primary-Button'>Menu</button> : <></>}
      </div>
    </header>
  );
};

export default Header;
