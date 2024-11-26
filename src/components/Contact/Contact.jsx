import React from 'react'
import "./Contact.css"
import { MdCall } from 'react-icons/md'
import { BsChatDotsFill, BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'

const Contact = () => {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/*left side*/}

                <div className="flexColStart c-left">
                    <span className='orangeText'>Our Contacts</span>
                    <span className='primaryText'>Easy to Contact Us</span>
                    <span className='secondaryText'>We always happy to provide best service
                       
                        We believe a good place to live can make your life better
                    </span>

                    <div className="flexColStart contactModes">
                        {/* first row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className='flexStart'>
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Call</span>
                                        <span>021 123 145 13</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call Now</div>
                            </div>

                            {/*second mode*/}
                            <div className="flexColCenter mode">
                                <div className='flexStart'>
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Chat</span>
                                        <span>021 123 145 13</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat Now</div>
                            </div>

                            
                        </div>

                        {/*second row*/}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className='flexStart'>
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Video Call</span>
                                        <span>021 123 145 13</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Video Call Now</div>
                            </div>

                            {/*second mode*/}
                            <div className="flexColCenter mode">
                                <div className='flexStart'>
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Message</span>
                                        <span>021 123 145 13</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Message Now</div>
                            </div>

                            
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