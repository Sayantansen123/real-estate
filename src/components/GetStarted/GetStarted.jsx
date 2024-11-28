import React from 'react'
import "./GetStarted.css"

const GetStarted = () => {
  return (
    <section className="g-wrapper" id='get'>
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get started with liveEz</span>
                <span className='secondaryText'>Lets find ideal property for you
                    <br />
                    Find your residence soon
                </span>
                <button className="button">
                    <a href="mailto:example123@gmail.com">Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted
