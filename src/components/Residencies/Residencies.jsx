import React, { useState } from 'react'
import "./Residencies.css"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'
import {motion } from "framer-motion"


const SliderButton = () => {
  const swiper = useSwiper()
  return (
    <div className="flexCenter r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  )
}

const Residencies = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [ind,setInd] = useState(null);
  return (
    <section className="r-wrapper " id='resedencies'>
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className='orangeText'>Best Choices</span>
          <span className='primaryText'>Popular Residencies</span>
        </div>

        {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal-content">
            {/* Close button */}
            <button
              onClick={() => setModalOpen(false)}
              className="close-modal-button"
            >
              ✖
            </button>

            {/* Product Images */}
            <div className='modal-div' style={{gap: "2rem"}}>
            <div className='image-container-modal'>
              <img src={data[ind].image} alt="" />
            </div>
            
            <div className='right-section'>
            <span className='primaryText'>{data[ind].name}</span>
            <span className='secondaryText'>{data[ind].detail}</span>
            <span className='orangeText'>Price</span>
            <span className='secondaryText'>$ {data[ind].price}</span>
            <span>Description</span>
            <span className='secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at sunt iste animi<br/>autem fugiat soluta minima, consequuntur sit aliquam magni quo iusto numquam voluptate repellat, optio ab dolorum obcaecati.</span>
            </div>
            
            </div>
            
          </div>
        </div>
      )}

        <Swiper {...sliderSettings}>
          <SliderButton/>
          {
            data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="r-card flexColStart" onClick={() => {setModalOpen(true);setInd(i)}}>
                  <img src={card.image} alt="home" />
                  <span className="r-price secondaryText">
                    <span style={{ color: "orange" }}>$</span>
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


