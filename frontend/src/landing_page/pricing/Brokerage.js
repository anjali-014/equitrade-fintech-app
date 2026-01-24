import React from 'react';

function Brokerage() {
    return (
    <div className="container mt-5">
      <div className="row border-top mt-5 p-5">
        <div className="col-8 p-2 mt-5 text-center">
           <a href='' style={{textDecoration:"none"}}> <h4>Brokerage calculator</h4></a>
           <ul style={{textAlign: "left", lineHeight: "1.8", fontSize: "0.9rem"}} className='text-muted mt-5'>
              <li>Call & Trade and RMS auto-squareoff: Additional charges of 50 + GST per order.</li>
              <li className='mt-1'>Digital contract notes will be sent via e-mail.</li>
              <li className='mt-1'>Physical copies of contract notes, if required, shall be charged 20 pr contract note.</li>
              <li className='mt-1'>For NRI account (non-PIS), 0.5% or 100 per executed order for equity (whichever is lower).</li>
              <li className='mt-1'>For NRI account (PIS), 0.5% or 200 per executed order for equity (whichever is lower)</li>
              <li className='mt-1'>If the account is in debit balance, any order placed will be charged 40 per executed order instead of 20 per executed order.</li>
           </ul>
        </div>
        <div className="col-4 p-2 mt-5 text-center">
            <a href='' style={{textDecoration:"none"}}> <h4>List of Charges</h4></a>
        </div>
      </div>
    </div>
      );
}

export default Brokerage;