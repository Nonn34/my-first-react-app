import './App.css'
import Navbar from './components/Navbar'
import Greeting from './components/Greeting'
import Post from './components/Post'
import { PostDTO } from './types/dto.ts'

const posts: PostDTO[] = [
  {
    id: 1,
    userId: 'นาย กอไก่',
    title: 'Check In',
    body: 'ฉันมาถึงแล้ว',
  },
  {
    id: 2,
    userId: 'Mister A',
    title: 'Cheer Up',
    body: 'Good Job ! Please keep it up',
  },
  {
    id: 3,
    userId: 'เกรียนท่านหนึ่ง',
    title: 'Comment',
    body: 'ที่นี่คือที่ไหน',
  },
]

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting hello="สวัสดี นี่ไม่ใช่ Default" />
      <div className="feed-container">
        {posts.map((post) => {
          return <Post key={post.id} post={post} />
        })}
      </div>
    </div>
  )
}

export default App
