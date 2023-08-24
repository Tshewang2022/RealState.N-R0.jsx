import React from 'react'
import './Contact.css'
//import { MdCall } from './react-icons/md'

const Contact =()=>{
    return(
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/* left side */}
                <div className="flexColStart c-left">
                    <span className='orangeText'>Our Contact</span>
                    <span className='primaryText'>Easy to contact Us</span>
                    <span className='secondaryText'>We believe in customer priority</span>

                        <div className="flexColStart contactModes">
                            {/* first row */}
                            <div className="flexStart row">
                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            {/* MdCall size={25}/> */}
                                        </div>
                                        <div className="flexColStart details">
                                            <span className='primaryText'>Call</span>
                                            <span className='secondaryText'>9751776000</span>
                                        </div>
            
                                    </div>
                                    <div className="flexCenter button">Call Now</div>
                                </div>

                                {/* second mode */}
                               
                            </div>

                            {/* second row */}
                            <div className="flexStart row">
                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            {/* MdCall size={25}/> */}
                                        </div>
                                        <div className="flexColStart details">
                                            <span className='primaryText'>Call</span>
                                            <span className='secondaryText'>9751776000</span>
                                        </div>
            
                                    </div>
                                    <div className="flexCenter button">Call Now</div>
                                </div>
                            </div>
                        </div>                    
                </div>

                {/* right side */}
                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact