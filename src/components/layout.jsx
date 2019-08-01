import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './layout.css'
import styled from 'styled-components'
import Header from './header'
const Jumbotron = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 120px;
  h1 {
    max-width: 800px;
    font-size: 64px;
    font-family: 'Josefin Sans', sans-serif;
    text-transform: uppercase;
    text-align: center;
    color: white;
    transition: 0.2s text-shadow;
    &:hover {
      cursor: pointer;
      text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    }
  }
  button {
    background: inherit;
    color: white;
    width: 150px;
    height: 40px;
    border: 1px solid white;
    text-transform: uppercase;
    margin-bottom: 10px;
    transition: 0.4s all;
    &:hover {
      background: white;
      color: #c62641;
    }
  }
`
const Main = styled.main`
  background: rgb(248, 248, 248);
  margin: 0;
  padding: 0;
`
const Content = styled.div`
  background: white;
  position: relative;
  top: -100px;
  margin-top: 150px;
  padding: 40px 50px;
  min-height: 500px;
  box-shadow: 0px 30px 50px 0px rgba(1, 1, 1, 0.15);
  h1 {
    text-transform: uppercase;
    font-family: 'josefin-sans', sans-serif;
  }
  p {
    font-size: 19px;
    font-family: Domine;
    color: #444444;
    margin: 4px;
  }
`
const Footer = styled.footer`
  background: rgb(248, 248, 248);
  display: flex;
  justify-content: center;
  height: 100px;
  h2 {
    color: #999999;
  }
`
const Layout = ({ children, headerText }) => {
  return (
    <React.Fragment>
      <Header />

      <div className="container">
        <Jumbotron>
          <h1>{headerText}</h1>
          {headerText && <button>read on</button>}
        </Jumbotron>
      </div>
      <Main>
        <div className="container" style={{ position: 'relative' }}>
          <Content>{children}</Content>
        </div>
      </Main>

      <Footer>
        <h2>blog</h2>
      </Footer>
    </React.Fragment>
  )
}

export default Layout
