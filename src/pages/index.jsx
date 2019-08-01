import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
const H1 = styled.h1`
  color: black;
  margin-bottom: 30px;
  transition: color 0.2s;
  font-size: 48px;
  position: relative;
  margin: 30px 0;
  z-index: 999;
  &:hover {
    color: #c62641;
  }
  &::before {
    content: attr(data-before-content);
    display: block;
    position: absolute;
    font-size: 180px;
    top: -80px;
    left: -20px;
    color: #ededed;
    z-index: -99;
  }
`
const Button = styled.button`
  width: 150px;
  height: 40px;
  background: #c62641;
  color: white;
  border: 0;
  margin: 10px 0 50px;
  text-transform: uppercase;
  transition: 0.2s box-shadow;
  &:hover {
    box-shadow: rgba(1, 1, 1, 0.15) 0px 10px 20px 0px;
  }
`
const IndexPage = data => (
  <Layout headerText="a beautiful blog with no images required">
    <Helmet title="Blog Site" />
    {data.data.gcms.blogs.map((item, i) => (
      <div key={i}>
        <Link
          to={`/${item.id}`}
          style={{
            textDecoration: 'none',
          }}
        >
          <H1 data-before-content={item.title.charAt(0)}>{item.title}</H1>
        </Link>
        <p>{item.short}</p>
        <Link to={item.id}>
          <Button>Read on</Button>
        </Link>
      </div>
    ))}
  </Layout>
)
export const query = graphql`
  query {
    gcms {
      blogs {
        id
        title
        short
        some
      }
    }
  }
`
export default IndexPage
