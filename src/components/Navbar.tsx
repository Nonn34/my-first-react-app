import { NavLink, Link } from 'react-router-dom'
import classes from './Navbar.module.css'
import { useAuth } from '../providers/AuthProvider'

const Navbar = () => {
  const { isLoggedIn } = useAuth()

  console.log('from navbar:', isLoggedIn)

  return (
    <div className={classes.test2}>
      <header>
        Welcome to{' '}
        <i>
          <b>my website</b>
        </i>
      </header>
      <div className={classes.theNavLink}>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/">
          <h1>หน้าหลัก</h1>
        </NavLink>
      </div>
      <div className={classes.theNavLink}>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/NewPost">
          <h1>โพสต์เลย</h1>
        </NavLink>
      </div>
      <div className={classes.theNavLink}>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/Profile">
          <h1>โปรไฟล์ของคุณ</h1>
        </NavLink>
      </div>
      <button>
        <Link to="/login" className={classes.navbarbutton}>
          Login
        </Link>
      </button>
    </div>
  )
}

export default Navbar
