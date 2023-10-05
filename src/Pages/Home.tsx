import usePosts from '../hooks/usePosts'
import classes from './Home.module.css'
import Post from '../components/Post'

const Home = () => {
  const { posts, isLoading } = usePosts()

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className={classes.feedContainer}>
      <h2>อ่านโพสต์ตรงนี้</h2>

      {posts &&
        posts.map((post) => {
          return <Post key={post.id} post={post} />
        })}
    </div>
  )
}

export default Home
