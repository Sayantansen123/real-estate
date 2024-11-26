import React from 'react'
import "./Residencies.css"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className='orangeText'>Best Choices</span>
          <span className='primaryText'>Popular Residencies</span>
        </div>

        <Swiper {...sliderSettings}>
          {
            data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="r-card flexColStart">
                  <img src={card.image} alt="home" />
                  <span className="r-price secondaryText">
                    <span style={{color:"orange"}}>$</span>
                    <span>{card.price}</span>
                  </span>

                  <span className='primaryText'>{card.name}</span>
                  <span className='secondaryText'>{card.detail}</span>

                </div>
              </SwiperSlide>
            ))

          }

        </Swiper>
      </div>
    </section>
  )
}

export default Residencies


const sliderButtons = ()=>{
  const swiper = useSwiper()
return(
  <div className="r-button">
    <button>&lt;</button>
    <button>&gt;</button>
  </div>
)
}