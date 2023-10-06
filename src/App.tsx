import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import NewPost from './Pages/NewPost'
import PostDetail from './Pages/PostDetail'
import Login from './Pages/Login'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}
export default App
