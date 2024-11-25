import React from 'react'
import "./Hero.css"
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth hero-container flexCenter">
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>

                    
                    <h1>
                    Find <br/>
                    Your Perfect Place <br/>
                    To Call Home
                    </h1>
                </div>

                <div className="flexColStart hero-des">
                    <span className='secondaryText'>Find various properties that suits you very easily</span>
                    <span className='secondaryText'>Forget all difficulties in finding residence for you</span>
                </div>


                <div className="flexCenter search-bar">
                    <HiLocationMarker color='blue' size={25}/>
                    <input type="text" />
                    <button className='button'>Search</button>
                </div>

                <div className="flexCenter stats">
                    <div className="flexColStart stat">
                        <span>
                            <CountUp start={88000} end={90000} duration={5}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Premium Products</span>
                    </div>

                    <div className="flexColStart stat">
                        <span>
                            <CountUp start={1950} end={2000} duration={5}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy Customers</span>
                    </div>

                    <div className="flexColStart stat">
                        <span>
                            <CountUp end={28} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Awards </span>
                    </div>
                </div>

            </div>

            <div className="flexCenter hero-right">
                <div className="image-container">
                <img src="./hero-image.jpg" alt="" />
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Hero
