import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

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
    <ToastContainer />
    </>
  )
}

export default App
