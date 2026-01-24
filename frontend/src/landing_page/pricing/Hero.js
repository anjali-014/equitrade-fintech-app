import React from "react";

function Hero() {
  return (
    <div className="container mt-5">
      <div className="row mt-5 text-center border-bottom p-5">
        <h2>Pricing</h2>
        <h5 className="text-muted mt-3">
          Free equity investments and flat{" "}
          <i class="fa fa-inr" aria-hidden="true"></i>20 tradayand F&O trades.
        </h5>
      </div>
      <div className="row border-bottom mt-5 p-5">
        <div className="col-4 p-2 mt-5 text-center">
            <img style={{width:"80%"}} src="Media\Images\pricingEquity.svg"/>
            <h2>Free equity delivery</h2>
            <p className='text-muted mt-4' style={{fontSize:"1.1rem"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4 p-2 mt-5 text-center">
            <img className='mx-3' style={{width:"80%"}} src="Media\Images\intradayTrades.svg "/>
            <h2 className='mx-2'>Intraday and F&O trades</h2>
            <p className='text-muted mt-4 mx-2' style={{fontSize:"1.1rem"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 p-2 mt-5 text-center">
            <img className='mx-5' style={{width:"80%"}} src="Media\Images\pricingEquity.svg"/>
            <h2 className='mx-5'>Free direct MF</h2>
            <p className='text-muted mt-4 mx-5' style={{fontSize:"1.1rem"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
