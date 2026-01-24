import React from "react";

function Hero() {
  return (
    <div className="container mt-5">
      <div className="row p-5 mb-5">
        <h2 className="fs-4 text-center">
          We pioneered the discount broking model in India.
          <br/>
          Now, we are breaking
          ground with our technology.
        </h2>

      </div>
      <div className="row mt-5 border-top p-5">
        <div className='col-6 p-5 mt-3'>
             <p style={{lineHeight: "1.6"}}>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>

            <p style={{lineHeight: "1.6"}}>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>

            <p style={{lineHeight: "1.6"}}>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>

        </div>
        <div className='col-6 p-5 mt-3'>
           <p style={{lineHeight: "1.6"}}> In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>

           <p style={{lineHeight: "1.6"}}><a style={{textDecoration: 'none'}} href=" ">Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>

           <p style={{lineHeight: "1.6"}}>And yet, we are always up to something new every day. Catch up on the latest updates on our <a style={{textDecoration: 'none'}} href=" ">blog</a> or see what the media is saying about us or learn more about our business and product <a href=" " style={{textDecoration: 'none'}}>philosophies</a>.</p>
        </div>

      </div>
    </div>
  );
}

export default Hero;
