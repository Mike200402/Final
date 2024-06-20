import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderPage from './componentes/HeaderPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <HeaderPage/>
    </div>
    </>
  )
}

export default App
