import { FaBars } from 'react-icons/fa'
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
  height: 85px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 11vh;
  //padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 640px) {
    transition: 0.8s all ease;
    top: 0vh;
    padding: 0px 0px;
  }
  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    top: 0vh;
    padding: 0px 0px;
  }
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1500px;
`

export const NavLogo = styled(Link)`
  cursor: pointer;
  color: #000;
  justify-self: flex-start;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-left: 7.5%;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 640px) {
    margin-left: 0vh;
  }
`

export const MobileIcon = styled(FaBars)`
  display: none;
  color: #000;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -10vh;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 992px) and (max-width: 1199px) {
    margin-right: 0vh;
  }
`

export const NavItem = styled.li`
  height: 80px;
  margin: 0px 0.8vh;
`

export const NavLink = styled(Link)`
  color: #7d8790;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    background-image: url('https://i.ibb.co/xfGLYKM/Ellipse-249.png');
    background-repeat: no-repeat;
    background-position: 50% 100%;
    color: #0000ff;
  }
  &:hover {
    color: #0000ff;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 3.6vh;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(Link)`
  border-radius: 50px;
  background: transparent;
  white-space: nowrap;
  //padding: 16px 50px;
  padding: 1vh 3.6vh;
  color: #000;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin: 0px 5vh;
  margin-left: -5vh;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #215ee9;
    color: white;
  }
`

export const NavBtnIcon = styled(Link)`
  border-radius: 50px;
  background: transparent;
  white-space: nowrap;
  padding: 10px 10px;
  color: #000;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  margin-left: 5%;
  text-decoration: none;
  background-image: url('https://i.ibb.co/qFkk0sD/Union.png');
  background-repeat: no-repeat;
`
