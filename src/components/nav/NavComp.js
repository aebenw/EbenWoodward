import React,{Fragment} from 'react';

// import NavButton from './Navbutton'

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

const NavComp = () => {
  return(
    <Fragment>
      <Navbar>
        <NavbarBrand>EW</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink>Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Contact</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </Fragment>
  )

}

export default NavComp
