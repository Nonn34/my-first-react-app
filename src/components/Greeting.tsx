import classes from './Greeting.module.css'

interface greetingTo {
  hello?: string
}

const Greeting = ({ hello = 'ส วั ส ดี ส วี ดั ส' }: greetingTo) => {
  return (
    <div className={classes.test}>
      <body>
        <p className={classes.star}>&#11088;&#11088;&#11088;&#11088;</p>
        <p className={classes.star}>&#11088;&#11088;&#11088;</p>
        <p className={classes.star}>&#11088;&#11088;</p>
        <p className={classes.star}>&#11088;</p>
        <h1>
          <i>{hello}</i>
        </h1>
        <p className={classes.star}>&#11088;</p>
        <p className={classes.star}>&#11088;&#11088;</p>
        <p className={classes.star}>&#11088;&#11088;&#11088;</p>
        <p className={classes.star}>&#11088;&#11088;&#11088;&#11088;</p>
      </body>
    </div>
  )
}

export default Greeting
