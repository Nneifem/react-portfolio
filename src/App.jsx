import './App.css'
import Footer from './pages/Footer'
import Navigation from './components/Navigation'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import orangeBackground from './assets/oranges.jpg'


function App() {
  return (
    <>
      <Navigation />
      <div style={{ backgroundImage: `url(${orangeBackground})`, backgroundOpacity: "50%"}}>
        <Outlet />
        
      </div>
      
    </>
  )
}

export default App
