import React from 'react'
import './cards.css';
import image1 from '../../assets/card1.jpg'
import image2 from '../../assets/card2.jpg'
import image3 from '../../assets/card3.jpg'


const Cards = () => {
  return (
    <div className='recommend'>
      <h3>Recommended For You</h3>
        <div className="cards-container">
          <div className="card-top">
            <div className="card">
                <img src={image1} alt="" />
                <article>
                  Four Practical Use Cases for AIOps
                </article>
            </div>
            <div className="card">
              <img src={image2} alt="" />
              <article>
                Case Study: Content+Cloud Delivers 34% More Revenue at Net Zero Cost
              </article>
            </div>
          </div>
          <div className="card card3">
          <img src={image3} alt="" />
            <article>
              Reduce Event/Incident Noise to Lower MTTR
            </article>
          </div>
        </div>
    </div>
  )
}

export default Cards