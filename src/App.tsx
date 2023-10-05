import './App.css'
import Navbar from './components/Navbar'
import Greeting from './components/Greeting'
import Post from './components/Post'
import { PostDTO, CreatePostDTO } from './types/dto.ts'
import { FormEvent, useEffect, useState } from 'react'
import axios from 'axios'

/*const postss: PostDTO[] = [
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
]*/

function App() {
  const [posts, setPosts] = useState<PostDTO[] | null>(null)
  const [newTitle, setNewTitle] = useState<string>('')
  const [newBody, setNewBody] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        // ! 01.A.กรณีใช้ fetch
        /*const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()

        if (!res.ok) {
          throw new Error('error')
        }

        return data*/

        // ! 02.B.กรณีใช้ axios.....
        const res = await axios.get<PostDTO[]>('https://jsonplaceholder.typicode.com/posts')
        setPosts(res.data)
        // ! ....จะเพิ่มแค่สองบรรทัดบนนี้
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  // ? mini exercise :
  // ? ใช้ axios.post ดึงข้อมูล โดยส่ง request header, create a new interface called "CreatePostDTO"
  // ? และ ทำให้ปุ่ม submit ใช้งานไม่ได้ขณะโพสต์
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const newPost: CreatePostDTO = {
      userId: Math.floor(Math.random() * 1000),
      title: newTitle,
      body: newBody,
    }

    setIsSubmitting(true)

    try {
      const res = await axios.post<PostDTO[]>('https://jsonplaceholder.typicode.com/posts', {
        newPost,
        headers: { 'Content-Type': 'application/json' },
      })
      console.log(res.data)
    } catch (err) {
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
    setNewTitle('')
    setNewBody('')
  }

  // ! 02.เพิ่มบรรทัดล่างนี้ก่อน Return HTML เพื่อเช็ค state
  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className="App">
      <Navbar />
      <Greeting hello="สวัสดี นี่ไม่ใช่ Default" />
      <form onSubmit={handleSubmit}>
        <label>เพิ่มข้อมูล:</label>
        <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} required />
        <input type="body" value={newBody} onChange={(e) => setNewBody(e.target.value)} required />
        <button type="submit" disabled>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      <div className="feed-container">
        {posts &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
      </div>
    </div>
  )
}
export default App
