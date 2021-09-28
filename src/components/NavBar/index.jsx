import React from 'react'
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './styles'

const Navbar = () => {
  return (
    <React.Fragment>
      <Nav>
        <NavLogo to="/">Modsen Health</NavLogo>
        <Bars />

        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            Services
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Clinic
          </NavLink>
          <NavLink to="/signin" activeStyle>
            Doctor
          </NavLink>
          <NavLink to="/signin" activeStyle>
            Contact
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/sign-up">Register</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </React.Fragment>
  )
}
export default Navbar
