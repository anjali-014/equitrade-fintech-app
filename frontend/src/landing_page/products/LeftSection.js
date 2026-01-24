import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePLay,
  appStore,
}) {
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-6 p-5 mb-5">
          <img style={{width: '110%'}} src={imageURL}></img>
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-5 mt-5">
          <h2>{productName}</h2>
          <p>{productDescription}</p>
          <div>
            <a style={{textDecoration: 'none'}} href={tryDemo}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a className='mx-4' style={{textDecoration: 'none'}} href={learnMore}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div className='mt-4'>
            <a href={googlePLay}>
              <img src="Media/Images/googlePlaybadge.svg " />
            </a>
            <a className='mx-4' href={appStore}>
              <img src="Media/Images/appStoreBadge.svg " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
