import React from "react"
import { Container } from "semantic-ui-react"
import MainMenu from "./MainMenu"
import Footer from "./Footer"
import Routes from "./Routes"

const App = () => {
  return (
    <div style={{ paddingTop: "0.3em" }}>
      <MainMenu />
      <div
        style={{
          background: "white",
          padding: "1.5em",
          margin: "0.5em 2em 0.5em 2em",
          borderRadius: "7px"
        }}
      >
        <Container>
          <Routes />
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default App