import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import PackageTypeDetailsPage from './pages/packageTypeDetailsPage'
import { Route, Routes } from 'react-router-dom'
import { MZcontext } from './context'
import Header from './components/Header'

function App() {
  const [typeID, setTypeID] = useState(1)

  return (
    <MZcontext.Provider value={{typeID, setTypeID}}>
    <Header/>
    <div className='appContainer'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/packagetype' element={<PackageTypeDetailsPage />} />
    </Routes>
    </div>
    </MZcontext.Provider>
  )
}

export default App
