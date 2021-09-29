import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
  Nav,
  NavLogo,
  NavLink,
  MobileIcon,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavbarContainer,
  NavItem,
} from './styles'

const Navbar = () => {
  return (
    <React.Fragment>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/"> Modsen </NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="Home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="Services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="Clinic">Clinic</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="Doctors">Doctors</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="Contact">Contact</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="signin">Sign</NavBtnLink>
            <NavBtnLink to="register">Register</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </React.Fragment>
  )
}
export default Navbar
