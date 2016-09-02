import React from 'react';

 function Header(){

   let headerStyle = {
   }

      return(
        <div className="header-component">
          <ul style={headerStyle}>
          <li>Mens</li>
          <li>Womens</li>
          <li>About</li>
          <li>Contact</li>
          </ul>
        </div>
      )
}

export default Header;
