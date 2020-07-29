import React from 'react'
import ReactDOM from 'react-dom'
import { Global, keyframes, css } from '@emotion/react'
import styled from '@emotion/styled'

import logo from './logo.svg'

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`

const App = styled.div`
  text-align: center;
`

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Image = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${appLogoSpin} infinite 20s linear;
`

const Link = styled.a`
  color: #61dafb;
`

const Paragraph = styled.p``

const Code = styled.code``

ReactDOM.render(
  <App>
    <Global styles={globalStyles} />
    <Header>
      <Image src={logo} alt="logo" />
      <Paragraph>
        Edit <Code>src/App.js</Code> and save to reload.
      </Paragraph>
      <Link
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </Link>
    </Header>
  </App>,
  document.getElementById('root')
)