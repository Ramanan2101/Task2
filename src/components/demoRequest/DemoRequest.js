import React from 'react'
import './demo.css'
import img1 from '../../assets/image1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const DemoRequest = () => {
  return (
    <div className='demoContainer'>
      <div className="demo-wrap">
        <div className="text-left">
          <h2>Let us show you how today's technology leaders are using SL1 to transform IT operations.</h2>
          <div className="btns">
          <a href="/demo" className='demoBtn'>Request A Demo</a>
          <a href="/product-tours" className='tourBtn'>Take a Tour <span className='icon'><FontAwesomeIcon icon={faAngleRight} /></span></a>
          </div>
        </div>
        <div className="img-right">
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  )
}

export default DemoRequest