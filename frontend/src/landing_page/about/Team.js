import React from 'react';

function Team() {
    return (
       <div className="container mt-5">
      <div className="row p-5 border-top">
        <h2 className=" text-center ">
          People
        </h2>

      </div>
      <div className="row p-5">
        <div className='col-6 p-3 text-center'>
            <img className='mx-5'src='Media/Images/nithinkamath.jpg' alt='Team' style={{width:"70%", borderRadius:"50%"}}/>
            <div className='text-center mt-3'>
                <h5>Nithin Kamath</h5>
                <p>Founder, CEO</p>
            </div>
        </div>
        <div className='col-6 p-3'>
           <p style={{lineHeight: "1.6", fontSize: "1.1rem"}}> Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry..</p>

           <p style={{lineHeight: "1.6", fontSize: "1.1rem"}}>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

           <p style={{lineHeight: "1.6", fontSize: "1.1rem"}}>Playing basketball is his zen.</p>
           <p style={{lineHeight: "1.6", fontSize: "1.1rem"}}>Connect on <a style={{textDecoration: "none"}}href="#">Homepage</a> / <a style={{textDecoration: "none"}}href="#">TradingQnA</a> / <a style={{textDecoration: "none"}}href="#">Twitter</a>.</p>
        </div>

      </div>
    </div>
      );
}

export default Team;