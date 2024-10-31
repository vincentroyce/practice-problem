import { useRef, useState } from 'react'
import ProductData from './data/Data'
import Button from './component/Button'
import { TimeContent, HeartbeatContent} from './component/Content'
import './App.css'

function App() {
  const {title, description, colorOptions, featureList} = ProductData
  const [image, changeImage] = useState(colorOptions[0].imageUrl)
  const [currentIndex, changeIndex] = useState(0)
  const [feature, changeFeature] = useState(true)

  return (
    <>
      <nav className="navbar navbar-light bg-light mb-5">
        <a className="navbar-brand text-center w-100" href="#">Amazon</a>
      </nav>
      <div className='container'>
        <div className="row align-items-start">
          <div className='col-6 position-relative'>
              <img className='w-100' src={image} alt="" />
              {feature ? <TimeContent /> : <HeartbeatContent />}
          </div>
          <div className='col-6 d-flex flex-column gap-3'>
            <h1>{title}</h1>
            <p>{description}</p>
            <h3>Select Color</h3>
            <div className='row'>
              {colorOptions.map((color, index) => <img style={{ cursor: 'pointer' }}  onClick={() => {changeImage(colorOptions[index].imageUrl); changeIndex(index)}} className={`col-3 ${currentIndex === index && 'rounded border border-2 border-dark'}`} key={index} src={color.imageUrl} alt=""  /> )}
            </div>
            <h3>Features</h3>
            <div className='container mb-3'>
                <div className="row gap-3">
                {featureList.map((feature, index) =>  <Button onClick={()=> feature === "Heart Rate" ? changeFeature(false) : changeFeature(true)} purpose={feature === "Heart Rate" ? 'light' : 'secondary'} key={index} value={feature}  /> )}
                </div>
            </div>
            <div className="d-flex">
              <Button  value="Buy Now" purpose="success" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
