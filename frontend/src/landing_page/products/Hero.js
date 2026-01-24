import React from 'react';

function Hero() {
    return (
       <div className="container mt-5 text-center p-5 border-bottom mb-5">
         <h2>Zerodha Products</h2>
        <p className='mt-3 text-muted' style={{fontSize: "1.2rem"}}>Sleek, modern, and intuitive trading platforms</p>
        <p className='mb-5'>Check out our <a style={{textDecoration: "none"}} href="#">investment offerings</a> →</p>
       </div>
      );
}

export default Hero;