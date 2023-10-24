import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <div>
        <div
          className='breadcumb-wrapper'
          data-bg-src='assets/img/breadcumb/breadcumb-bg.jpg'
        >
          <div className='container z-index-common'>
            <div className='breadcumb-content'>
              <h1 className='breadcumb-title'>Contact Us</h1>
              <p className='breadcumb-text'>
                Montessori Is A Nurturing And Holistic Approach To Learning
              </p>
              <div className='breadcumb-menu-wrap'>
                <ul className='breadcumb-menu'>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section className='space-top space-extra-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='info-style2'>
                  <div className='info-icon'>
                    <img src='assets/img/icon/c-b-1-1.svg' alt='icon' />
                  </div>
                  <h3 className='info-title'>Phone No</h3>
                  <p className='info-text'>
                    <a href='tel:+4402076897888' className='text-inherit'>
                      +44 (0) 207 689 7888
                    </a>
                  </p>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='info-style2'>
                  <div className='info-icon'>
                    <img src='assets/img/icon/c-b-1-2.svg' alt='icon' />
                  </div>
                  <h3 className='info-title'>Monday to Friday</h3>
                  <p className='info-text'>8.30am – 02.00pm</p>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='info-style2'>
                  <div className='info-icon'>
                    <img src='assets/img/icon/c-b-1-3.svg' alt='icon' />
                  </div>
                  <h3 className='info-title'>Email Address</h3>
                  <p className='info-text'>
                    <a
                      href='mailto:user@domainname.com'
                      className='text-inherit'
                    >
                      user@domainname.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='space-extra-bottom'>
          <div className='container'>
            <div className='row flex-row-reverse gx-60 justify-content-between'>
              <div className='col-xl-auto'>
                <img
                  src='assets/img/about/con-2-1.png'
                  alt='girl'
                  className='w-100'
                />
              </div>
              <div className='col-xl col-xxl-6 align-self-center'>
                <div className='title-area'>
                  <span className='sec-subtitle'>
                    Have Any questions? so plese
                  </span>
                  <h2 className='sec-title'>Feel Free to Contact!</h2>
                </div>
                <form action='#' className='form-style3 layout2 ajax-contact'>
                  <div className='row justify-content-between'>
                    <div className='col-md-6 form-group'>
                      <label>
                        First Name <span className='required'>(Required)</span>
                      </label>
                      <input name='firstname' id='firstname' type='text' />
                    </div>
                    <div className='col-md-6 form-group'>
                      <label>
                        Last Name <span className='required'>(Required)</span>
                      </label>
                      <input name='lastname' id='lastname' type='text' />
                    </div>
                    <div className='col-md-6 form-group'>
                      <label>
                        Email Address
                        <span className='required'>(Required)</span>
                      </label>
                      <input name='email' id='email' type='email' />
                    </div>
                    <div className='col-md-6 form-group'>
                      <label>
                        Phone Number
                        <span className='required'>(Required)</span>
                      </label>
                      <input name='number' id='number' type='number' />
                    </div>
                    <div className='col-12 form-group'>
                      <label>
                        Message <span className='required'>(Required)</span>
                      </label>
                      <textarea
                        name='message'
                        id='message'
                        cols={30}
                        rows={10}
                        placeholder='Type your message'
                        defaultValue={''}
                      />
                    </div>
                    <div className='col-auto form-group'>
                      <button className='vs-btn' type='submit'>
                        Send Message
                      </button>
                    </div>
                    <p className='form-messages' />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className='space-bottom'>
          <div className='container'>
            <div className='title-area'>
              <h2 className='mt-n2'>How To Find Us</h2>
            </div>
            <div className='map-style1'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d461913.0572571096!2d8.516164543417332!3d50.24088825844987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd121b354b47fd%3A0x422435029b0c610!2sOffenbach%2C%20Germany!5e0!3m2!1sen!2sbd!4v1693456840610!5m2!1sen!2sbd'
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
