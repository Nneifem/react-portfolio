import './App.css'
import Navigation from './components/Navigation'
import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import orangeBackground from './assets/oranges.jpg'


function App() {
  return (
    <>
      <Navigation />
      <div style={{ backgroundImage: `url(${orangeBackground})`}}>
        <Outlet />
      </div>
    </>
  )
}

export default App;
