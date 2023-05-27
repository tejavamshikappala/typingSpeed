import {Component} from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import More from './components/More'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/more" element={<More />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
