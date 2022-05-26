import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
<h1>Start your Meetneutral Event</h1>
        <p className='footer-subscription-text'>
        </p>
        <div className='input-areas'>
          <form>
          <input
              className='footer-input'
              name='ALIAS'
              type='ALIAS'
              placeholder='ALIAS'
            />
            <input
              className='footer-input'
              name='LOCATION'
              type='LOCATION'
              placeholder='LOCATION'
            />
            <Button onClick="window.location.href='https://us-east-1.quicksight.aws.amazon.com/sn/accounts/029579009127/dashboards/c217ec98-1476-4a6b-9fe4-9fdf316f97af?directory_alias=frankfurtquicksight'; " buttonStyle='btn--outline'>Search</Button> 
            
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2></h2>
            <Link to='/'></Link>
          </div>
          <div class='footer-link-items'>
            <h2></h2>
            <Link to='/'>
            </Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>

        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>

          <small class='website-rights'>MeetNeutral © 2022
          </small>
          </div>

      </section>
    </div>
    
    
  );
}

export default Footer;
