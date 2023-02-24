import './App.css'
import { Router as Router, Routes, Route, Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Container from './components/container/Container'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Container customClass='min-height'>
        <Outlet/>
      </Container>
      <Footer/>
    </>
  )
}

export default App
