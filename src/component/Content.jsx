import classes from './Content.module.css'

let useTime = () => {
  let time = new Date()
  return (`${time.getHours()}:${time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}`)
}

const TimeContent = () => {
  return (
    <h1  style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} className='text-light position-absolute m-0'>{useTime()}</h1>
  )
}


const HeartbeatContent = () => {
  
  return (
    <div style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} className={`position-absolute`} >
      <img className={`${classes.Beat}`} src="/src/assets/img/image-removebg-preview.png"  width='30%' alt="" />
      <h1 className='text-light'>78</h1>
    </div>
  )
}


export { TimeContent, HeartbeatContent}