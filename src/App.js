import { Routes, Route } from 'react-router-dom'

import './assets/scss/style.scss'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
