import { PostDTO } from '../types/dto.ts'
import classes from './Post.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

interface postProps {
  post: PostDTO
}

const Post = ({ post }: postProps) => {
  /*const handleClick = (userId: string) => {
    alert(`ติดต่อ คุณ ${userId} ไม่ได้`)*/
  const [isShow, setIsShow] = useState<boolean>(false)
  const toggleShow = () => {
    setIsShow(!isShow)
  }

  return (
    <div className={classes.post}>
      <Link to={`/post/${post.id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <p>
          <b>ความคิดเห็นที่ {post.id}</b>
        </p>
        <p>คุณ {post.userId} ได้โพสต์ว่า :</p>
        {/* <p>title: {post.title}</p> */}
        <p>
          <i>body: {post.body}</i>
        </p>
      </Link>
      {isShow && (
        <div className={classes.onlyClick}>
          <h1>ชอบมาก !!</h1>
        </div>
      )}
      <button onClick={toggleShow}>{isShow ? 'เอาออก' : 'กดถูกใจ'}</button>
    </div>
  )
}

//  <div onClick={() => handleClick(post.userId)} className={classes.post}>

export default Post
