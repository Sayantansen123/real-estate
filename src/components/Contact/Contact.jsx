import React from 'react'
import "./Contact.css"
import { MdCall } from 'react-icons/md'

const Contact = () => {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/*left side*/}

                <div className="flexColStart c-left">
                    <span className='orangeText'>Our Contacts</span>
                    <span className='primaryText'>Easy to Contact Us</span>
                    <span className='secondaryText'>We always happy to provide best service
                        <br />
                        We believe a good place to live can make your life better
                    </span>
            
                    <div className="flexColStart contactModes">
                        {/* first row */}
                        <div className="flexColStart row">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span>Call</span>
                                    <span>021 123 145 13</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>
                    </div>


                </div>

                {/*right side*/}

                <div className="c-right">
                    <div className="image-container">
                        <img src="./r1.jpg" alt="contact" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
