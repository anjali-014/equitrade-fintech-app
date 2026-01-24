import React from 'react';

function RightSection({ 
    imageURL,
    productName,
    productDescription,
    learnMore}) {
    return ( 
       <div className="container p-5">
      <div className="row">
        <div className="col-5 p-5 mt-5">
          <h2 className='mt-5'>{productName}</h2>
          <p className='mt-3'>{productDescription}</p>
          <div>
            <a className='mt-5' style={{textDecoration: 'none'}} href={learnMore}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
        
        <div className="col-1"></div>
        <div className="col-6 mb-5">
          <img style={{width: '110%'}} src={imageURL}></img>
        </div>
        
      </div>
    </div>
        
     );
}

export default RightSection;