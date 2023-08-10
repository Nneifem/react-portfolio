// import './App.css
import Footer from './pages/Footer'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Nav />

      <Outlet />
      <Footer />
    </>
  )
}

export default App
