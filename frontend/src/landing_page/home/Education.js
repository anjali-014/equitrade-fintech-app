import React from 'react';

function Education() {
    return ( 
       <div className='container mt-5 p-5'>
            <div className='row'>
                <div className='col-6 mt-5 p-3'>
                   <img src='Media/Images/education.svg' alt='Varsity' style={{width:"90%"}}/>
                </div>
               
                <div className='col-6 mt-4 p-4'>
                    <h3 className='mb-5 mt-4'>Free and open market education</h3>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                   <a href="" style={{textDecoration: 'none'}} >Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                   <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" style={{textDecoration: 'none'}}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                </div>
            </div>
        </div>
     );
}

export default Education;