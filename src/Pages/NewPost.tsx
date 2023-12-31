import { FormEvent, useState } from 'react'
import usePosts from '../hooks/usePosts'
import classes from './Home.module.css'
import { useNavigate } from 'react-router-dom'

const NewPost = () => {
  const { isSubmitting, createPost } = usePosts()
  const navigate = useNavigate()
  const [newTitle, setNewTitle] = useState<string>('')
  const [newBody, setNewBody] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await createPost(newTitle, newBody)

      setNewTitle('')
      setNewBody('')

      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div className={classes.container}>
      <form className={classes.postForm} onSubmit={handleSubmit}>
        <label>ชื่อหัวข้อ</label>
        <input size="20" type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} required />
        <label>เนื้อหา</label>
        <input size="50" type="text" value={newBody} onChange={(e) => setNewBody(e.target.value)} required />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'โปรดรอสักครู่...' : 'ยืนยัน'}
        </button>
      </form>
    </div>
  )
}

export default NewPost
