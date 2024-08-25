import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <Header />
    <main>
      <Container>
        <h1>Welcome to the MapleMart</h1>
        <Outlet />
      </Container>
    </main>
    <Footer />
    </>
  )
}

export default App
