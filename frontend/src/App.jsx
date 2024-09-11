{/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HomePage />
    </div>
  )
}

export default App
*/}
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExplorePage from '../components/Explore';
import './App.css'
import { useEffect,useState } from 'react';

function App() {
  const [data, setData] = useState(null)
  useEffect(() => { 
    fetch("http://localhost:3001/api")
    .then(res => res.json()) // Call json() as a function
    .then(data => {
      console.log(data); // Now you should see the actual JSON data
      setData(data); // Store the data in your component state if needed
    })
    .catch(err => console.log(err))
  },[])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
      </Routes>
    </Router>
  );
}

export default App;