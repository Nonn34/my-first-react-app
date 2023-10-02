import { PostDTO } from '../types/dto.ts'
import classes from './Post.module.css'

interface postProps {
  post: PostDTO
}

const Post = ({ post }: postProps) => {
  const handleClick = (userId: string) => {
    alert(`ติดต่อ ${userId} ไม่ได้`)
  }
  return (
    <div onClick={() => handleClick(post.userId)} className={classes.post}>
      <p>
        <b>ความคิดเห็นที่ {post.id}</b>:
      </p>
      <p>คุณ {post.userId} ได้โพสต์ว่า :</p>
      {/* <p>{post.title}</p>  */}
      <p>
        <i>{post.body}</i>
      </p>
    </div>
  )
}
export default Post
