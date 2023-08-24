import React from 'react'
import './Footer.css'

const Footer = ()=>{
    return(
       <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">

							{/* left side */}
							<div className="flexColStart f-left">
								<img src="./logo2.png" alt="" width={120}/>
								<span className="secondaryText">
									Be the future of Bhutan
								</span>
							</div>

							{/* right side */}
							<div className="flexColStart f-right">
								<span className='primaryText'>Information</span>
								<span className='secondaryText'>Thimphu, Bhutan</span>
								<div className="flexCenter f-menu">
									<span>Property</span>
									<span>Service</span>
									<span>Products</span>
									<span>About Us</span>
								</div>
							</div>
            </div>
       </section>
    )
}
export default Footer