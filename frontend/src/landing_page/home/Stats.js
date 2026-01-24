import React from 'react';

function Stats() {
    return ( 
        <div className='container mt-5 p-5'>
          <div className='row p-3'>
            <div className='col-6 p-5'>
              <h3 className='mb-5'>Trust with confidence</h3>

              <h5>Customer-first always</h5>
              <p className='mb-4 text-muted small'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

              <h5>No spam or gimmicks</h5>
              <p className='mb-4 text-muted small'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

              <h5>The Zerodha universe</h5>
              <p className='mb-4 text-muted small'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

              <h5>Do better with money</h5>
              <p className='mb-4 text-muted small'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            <div className='col-6 p-4 mt-5'>
                 <img src='Media/Images/ecosystem.png' alt="Ecosystem" className='' style={{ width: '100%' }} />
                 <div className='text-center mt-3'>
                    <a href=" " className='mx-5' style={{textDecoration: 'none'}}>Explore our Products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href=" " style={{textDecoration: 'none'}}>Try Kite Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                 </div>
            </div>
          </div>
        </div>
     );
}

export default Stats;