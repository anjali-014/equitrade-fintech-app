import React from 'react';

function Hero() {
    return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id='supportWrapper'>
        <h4>Support Portal</h4>
        <a href=" " >Track Tickets</a>
      </div>
      <div className="row p-5 mx-5">
        <div className="col-1 p-2"></div>
        <div className="col-5 p-2">
             <h3 className='fs-5 mb-3'>Search for an answer or browse help topics to <br/>create a ticket</h3>
             <input className='mb-3' placeholder='Eg. How do I activate F&O, Why is my oredr getting rejected.'/>
             <br/>
             <a href='' style={{ fontSize:"0.8rem"}}>Track Account Opening</a>
             <a className='mx-3' href='' style={{fontSize:"0.8rem"}}>Track Segment Activation</a>
             <a href='' style={{fontSize:"0.8rem"}}>Intraday Margins</a><br/>
             <a  href='' style={{fontSize:"0.8rem"}}>Kite User manual</a>


        </div>
        <div className="col-1 p-2"></div>
         <div className="col-5 p-2">
            <h3 className='fs-5'>Featured</h3>
            <ol>
                <li style={{fontSize:"0.8rem"}} > <a href='' >Current Takeovers and Delisting - January 2025</a></li>
                <li style={{fontSize:"0.8rem"}} className='mt-1'><a href=''>Latest Intraday Leverages - MIS & CO</a></li>
            </ol>
            
        </div>
      </div>
    </section>
      );
}

export default Hero;