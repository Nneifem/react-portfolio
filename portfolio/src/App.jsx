import { useState } from 'react'
import githubLogo from './assets/github.svg.png'
import linkedinLogo from './assets/linkedin-logo.webp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <header className='name'>
        Nneif Akpunonu
      </header>

      <footer className='links'>
        <a href="https://github.com/Nneifem"> <img src={githubLogo} className="logo" alt="Github Logo"></img></a>
        <a href="https://www.linkedin.com/in/nneif-akpunonu-2799a4266/"> <img src={linkedinLogo} className="logo" alt="Linkedin Logo"></img></a>
      </footer> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
