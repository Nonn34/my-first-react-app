import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import NewPost from './Pages/NewPost'
import PostDetail from './Pages/PostDetail'
import Login from './Pages/Login'
import GuardedRoute from './guard/GuardedRoute'
import { useAuth } from './providers/AuthProvider'

function App() {
  const { isLoggedIn } = useAuth()

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/login" />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/newpost" element={<NewPost />} />
        </Route>
        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}
export default App
