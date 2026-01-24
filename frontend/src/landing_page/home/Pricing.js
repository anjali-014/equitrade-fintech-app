import React from 'react';

function Pricing() {
    return ( 
        <div className='container mt-5 p-5'>
            <div className='row'>
                <div className='col-4 mt-3'>
                    <h2 className='mb-5'>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration: 'none'}}>See Pricing  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6 mt-4'>
                    <div className='row p-3'>
                        <div className='col-6 border text-center'>
                            <h2 className='p-3'><i class="fa fa-inr" aria-hidden="true"></i>0</h2>
                            <p className='mt-3'>Free Equity deliver and direct mutual funds</p>

                        </div>
                         <div className='col-6 border text-center'>
                            <h2 className='p-3'><i class="fa fa-inr" aria-hidden="true"></i>20</h2>
                            <p className='mt-3'>Intraday and F&O</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;