import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div className={classes.container}>
      <p>
        <big>
          <b>หน้านี้ คือ หน้าเฉพาะของคุณ</b>
        </big>
      </p>
      <img src="https://th.bing.com/th/id/OIP.XtAUsrvYUqSD1DRZIYBnEAAAAA" />
    </div>
  )
}

export default Profile
