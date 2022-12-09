import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements"

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <img class="bsfsmall" src="/photos/BSFsmall.png" alt="BSFLogoSmall" />
          <NavLink to="/" activeStyle>
            <div class='links'>Sign Up</div>
          </NavLink>
          <NavLink to="/admin" activeStyle>
          <div class='links'>View Entries</div>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;