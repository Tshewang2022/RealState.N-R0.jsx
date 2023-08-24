import React from 'react'
import './GetStarted.css'

const GetStarted = ()=>{
    return(
        <section className="g-wrapper">
            <div className="paddings innerWidth g-container">
                <div className="flexColCenter inner-container">
                    <span className='primaryText'>Get Started with Your best clients</span>
                    <span className='secondaryText'>Please subscribe to my channel</span>
                    <span className='secondaryText'>Find your resident sooner</span>
                    <button className="button">
                        <a href="mailto:leeward192@gmail.com">GetStarted</a>
                    </button>
                </div>
            </div>
        </section>
    )
}
export default GetStarted