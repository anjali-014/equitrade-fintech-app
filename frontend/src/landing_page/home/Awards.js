import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-6 p-5'>
              <img src='Media/Images/largestBroker.svg' alt="Awards Image" className='p-4' style={{ width: '90%' }} />
            </div>
            <div className='col-6 p-5'>
              <h2 className='mb-3 mt-4'>
                 Largest Stock Broker in India 
              </h2>
              <p className='fs-6'>
                 2+ million zerodha clients contribute to over 15% of all retail volumes in India daily by trading and investing in:
              </p>
              <div className='row mt-4'>
                <div className='col-6 p-1'>
                  <ul>
                    <li className='m-2'>Futures and Options</li>
                    <li className='m-2'>Commodity derivatives</li>
                    <li className='m-2'>Currency Derivatives</li>
                  </ul>

                </div>
                <div className='col-6 p-1'>
                   <ul>
                    <li className='m-2'>Stocks & IPOs</li>
                    <li className='m-2'>Direct mutual funds</li>
                    <li className='m-2'>Bonds and Govt. Securities</li>
                   </ul>

                </div>
              </div>
              <img src='Media/Images/pressLogos.png' alt="Awards Logos" className='mt-2' style={{ width: '90%' }} />
            </div>
            {/* <div className='col-1'></div> */}
          </div>
        </div>
      );
}

export default Awards;