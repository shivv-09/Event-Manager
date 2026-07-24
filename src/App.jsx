import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Event from './pages/Event.jsx'
import Add_Event from './pages/Add_Event.jsx'

import { Routes, Route } from 'react-router-dom'

const App = () => {
  const [info, setInfo] = useState([])
 
  const [loading, setLoading] = useState(false);
  
  const [error, setError] = useState("");

  const getInfo = async () => {
    setLoading(true)

    try {
      const API="https://6a60576ab1933e9d25fd1438.mockapi.io/API/event"
      const response = await axios.get(API)
      setInfo(response.data)
      setError('')
    } catch (err) {
      setError('Something went wrong!')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getInfo()
  }, [])
  return (
    <div className="min-h-screen bg-olive-100">
      <Navbar />

      {error && <div className="text-red-600 text-center py-2">{error}</div>}

      {loading ? (
        <div className="text-center py-4">Loading...</div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home events={info} />} />
            <Route path="/event" element={<Event events={info} />} />
            <Route path="/add-event" element={<Add_Event refreshEvents={getInfo} />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App