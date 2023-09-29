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
      <button className={classes.navbarbutton}>Login</button>
    </div>
  )
}

export default Navbar
