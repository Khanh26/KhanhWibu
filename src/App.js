import { Routes, Route } from 'react-router-dom'

import './assets/scss/style.scss'
import Home from './pages/Home'
import About from './pages/About'
import Detail from './pages/Detail'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import { useGlobalContext } from './context'

function App() {
  const { scrollbutton } = useGlobalContext()
  return (
    <div className='App'>
      <Navbar />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/anime/:slug' element={<Detail />} />
          <Route path='/about' element={<About />} />
        </Routes>
        {scrollbutton && <ScrollToTop />}
      </main>
    </div>
  )
}

export default App
