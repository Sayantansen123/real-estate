import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup'
import "./Hero.css"
import {motion, spring} from "framer-motion"

const Hero = () => {
  return (
    <section className="hero-wrapper" >
        <div className="paddings innerWidth hero-container flexCenter">
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <motion.h1
                    initial={{y:"2rem",opacity: 0}}
                    animate={{y: 0 ,opacity:1}}
                    transition={{duration:2,
                        type:"spring"
                    }}>
                    Find <br/>
                    Your Perfect Place <br/>
                    To Call Home
                    </motion.h1>
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

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1950} end={2000} duration={5}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy Customers</span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp end={28} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Awards Winnings</span>
                    </div>
                </div>

            </div>

            <div className="flexCenter hero-right">
                <motion.div 
                initial={{x:"7rem",opacity:0}}
                animate={{x:0,opacity: 1}}
                transition={{duration:2,
                    type:spring,
                }}
                className="image-container">
                <img src="./hero-image.jpg" alt="" />
                </motion.div>
                
            </div>
        </div>
    </section>
  )
}

export default Hero
