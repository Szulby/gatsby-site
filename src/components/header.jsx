import { Link } from 'gatsby'
import styled from 'styled-components'
import React, { Component } from 'react'

const HeaderContainer = styled.header`
  height: 110px;
`

const Logo = styled.span`
  font-size: 38px;
  line-height: 110px;
  color: #ffffff;
  float: left;
  position: relative;
  z-index: 20;
  &:hover {
    text-decoration: none;
    color: white;
  }
  &.active {
    color: black;
  }
`
const Nav = styled.nav`
  a {
    font-size: 11px;
    text-transform: uppercase;
    font-family: 'Josefin Sans', sans-serif;
    line-height: 40px;
    padding: 0 16px;
    color: white;
    height: 40px;
  }
  a:hover {
    background: #cc3c54;
    text-decoration: none;
    box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.15);
  }
  @media (min-width: 992px) {
    float: right;
    margin-top: 35px;
    a {
      display: inline-block;
      height: 40px;
    }
  }

  @media (max-width: 991.98px) {
    width: 100vw;
    left: 0;
    right: 0;
    margin: auto;
    position: absolute;
    z-index: 5;
    text-align: center;
    padding: 0;
    background: white;
    padding-top: 100px;
    box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.75);
    visibility: hidden;
    opacity: 0;
    transition: visibility 1s, opacity 1s;
    a {
      color: black;
      display: block;
    }
    a:hover {
      background: #f5f5f5;
    }
    &.active {
      visibility: visible;
      opacity: 1;
    }
  }
`
const Button = styled.div`
  width: 30px;
  height: 5px;
  margin-top: 50px;
  position: relative;
  z-index: 5;
  background: white;
  float: right;
  color: white;
  &::before {
    content: '';
    width: 30px;
    height: 5px;
    top: -7px;
    position: absolute;
    background: inherit;
  }
  &::after {
    content: '';
    width: 30px;
    height: 5px;
    top: 7px;
    position: absolute;
    background: inherit;
  }
  &.active {
    background: black;
  }
  @media (min-width: 992px) {
    display: none;
  }
`
class Header extends Component {
  openNav = () => {
    let nav = document.getElementById('navigation')
    nav.classList.toggle('active')
    let button = document.getElementById('button')
    button.classList.toggle('active')
    let logo = document.getElementById('logo')
    logo.classList.toggle('active')
  }
  render() {
    return (
      <HeaderContainer>
        <div className="container">
          <Logo as={Link} to="/" id="logo">
            blog
          </Logo>
          <Nav id="navigation">
            <Link to="/">home</Link>
            <Link to="/">post</Link>
            <Link to="/">page</Link>
            <Link to="/">archives</Link>
            <Link to="/">features</Link>
          </Nav>
          <Button id="button" onClick={this.openNav}></Button>
        </div>
      </HeaderContainer>
    )
  }
}

export default Header
