import React from "react";

function Universe() {
  return (
    <div className="container p-5">
      <div className="row text-center ">
        <h2 className='text-muted'>The Zerodha Universe</h2>
        <p className='mt-2' style={{fontSize: "1rem"}}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 mt-2 p-5">
          <img
            style={{ width: "110%", width: "60%" }}
            src="Media\Images\zerodhaFundhouse.png"
          ></img>
          <p className=' mt-3 mb-5 fw-semibold' style={{fontSize: "0.8rem", color: "#b0b0b0"}}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
          <img
            style={{ width: "110%", width: "60%"}}
            src="Media\Images\streakLogo.png"
          ></img>
          <p className='mt-3 fw-semibold' style={{fontSize: "0.8rem", color: "#b0b0b0"}}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 mt-2 p-5">
          <img
            style={{ width: "110%", width: "60%" }}
            src="Media\Images\smallcaseLogo.png"
          ></img>
          <p className='mt-3 mb-5 fw-semibold' style={{fontSize: "0.8rem", color: "#b0b0b0"}}>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs
          </p>

          <img
            className='mt-5'
            style={{ width: "110%", width: "60%" }}
            src="Media\Images\goldenpiLogo.png"
          ></img>
          <p className='mt-3 fw-semibold' style={{fontSize: "0.8rem", color: "#b0b0b0"}}>Bonds Trading Platform</p>
        </div>
        <div className="col-4 mt-2 p-5">
          <img
            style={{ width: "110%" , width: "60%"}}
            src="Media\Images\sensibullLogo.svg"
          ></img>
          <p className='mt-3 mb-5 fw-semibold' style={{fontSize: "0.8rem", color: "#b0b0b0"}}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>

          <img style={{ width: "110%" , width: "60%"}}
           src="Media\Images\dittoLogo.png"></img>
          <p className='mt-3  fw-semibold' style={{fontSize: "0.8rem", color: "#b0b0b0"}}>
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button className='mt-4 mb-5 p-2 btn btn-primary fs-5' style={{width:"20%", margin:"0 auto"}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
