import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
