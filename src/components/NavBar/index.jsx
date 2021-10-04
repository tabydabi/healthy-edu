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
  NavBtnIcon,
} from './styles'

const Navbar = () => {
  return (
    <React.Fragment>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src="https://i.ibb.co/6rXxhfy/wind-1.png" />
            Modsen Health
          </NavLogo>
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
            <NavBtnLink to="signin">Sign in</NavBtnLink>
            <NavBtnLink to="register">Register</NavBtnLink>
            <NavBtnIcon to="follow"></NavBtnIcon>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </React.Fragment>
  )
}
export default Navbar
