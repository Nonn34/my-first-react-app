import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
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
      <button type="button" className={classes.navbarbutton}>
        Login
      </button>
    </div>
  )
}

export default Navbar
