import React from "react";
import "./Hero.css"; 
import CountUp from "react-countup";

const Hero = ()=> {
    return(
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container ">
                {/*left side */}
                <div className="felxColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle"/>

                        <h1>Discory <br/>most suitable<br/> property</h1><br/>
                    </div>
                    <div className="flexColStart hero-dis">
                        <p className="secondaryText">Find the varities of property thats suits you<br/>
                        Forget all the difficulties of finding recidencies for you<br/></p>
                    </div>

                    <div className="flexCenter search-bar">
                        <input type="text" />
                        <button className="button">Search</button>
                    </div>
										<div className="flexCenter stats">
											<div className="flexColCenter stats">
												<span className="count">
													<CountUp start={8800} end={9000} duration={4}/>	
													<span className="plus">+</span>
												</span>
												<span className="secondaryText">Premium products</span>
											</div>

											<div className="flexColCenter stats">
												<span className="count">
													< CountUp start={7800} end={9900} duration={4}/>	
													<span className="plus">+</span>
												</span>
												<span className="secondaryText">Happy Customers</span>
											</div>

											<div className="flexColCenter stats">
												<span className="count">
													<CountUp end={28} />	
													<span className="plus">+</span>
												</span>
												<span className="secondaryText">Award Winnings</span>
											</div>
										</div>
                </div>


                {/* right side */}
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;