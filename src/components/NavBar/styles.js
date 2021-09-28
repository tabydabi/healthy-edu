import { FaBars } from 'react-icons/fa'
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
  background: ;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`
export const NavLogo = styled(Link)`
  cursor: pointer;
  color: #000;
  font-size: 1rem;
  text-decoration: none;
`

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: blue;
  }
  &:hover {
    color: black;
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #000;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: flex-end;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: #000;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 30px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #215ee9;
    color: #808080;
  }
`
