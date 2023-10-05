import { useParams } from 'react-router-dom'
import usePost from '../hooks/usePost'

const PostDetail = () => {
  const { id } = useParams()
  const { post, isLoading, error } = usePost(id || '1')
  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>{error}</h1>

  return (
    <div>
      {post && (
        <>
          <h2>หัวข้อ: {post.title}</h2>
          <h3>
            <b>คุณ {post.userId} ได้โพสต์ว่า:</b>
          </h3>
          <h4>
            <i>{post.body}</i>
          </h4>
        </>
      )}
    </div>
  )
}

export default PostDetail
