import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import ReactMarkdown from 'react-markdown'
const H1 = styled.h1`
  color: black;
  margin-bottom: 30px;
  font-size: 48px;
  position: relative;
  z-index: 999;

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
const Article = styled.div`
  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }
`

class SecondPage extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      content: '',
      firstLetter: '',
    }
  }
  componentDidMount() {
    let { title, content } = this.props.pageContext
    let firstLetter = title.charAt(0)
    this.setState({ title, content, firstLetter })
  }
  render() {
    return (
      <Layout>
        <Helmet title={this.state.title} />
        <H1 data-before-content={this.state.firstLetter}>{this.state.title}</H1>
        <Article>
          <ReactMarkdown source={this.state.content} />
        </Article>
      </Layout>
    )
  }
}

export default SecondPage
