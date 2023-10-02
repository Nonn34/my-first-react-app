import './App.css'
import Navbar from './components/Navbar'
import Greeting from './components/Greeting'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting hello="สวัสดี นี่ไม่ใช่ Default" />
    </div>
  )
}

export default App
