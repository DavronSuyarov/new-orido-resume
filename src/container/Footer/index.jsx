import React from 'react';

const Footer = () => {
  return (
    <>
      <footer
        className='footer-wrapper footer-layout1'
        data-bg-src='assets/img/bg/footer-bg-1-1.png'
      >
        <div className='footer-top'>
          <div className='container'>
            <div className='row gx-60 gy-4 text-center text-lg-start justify-content-between align-items-center'>
              <div className='col-lg'>
                <a href='index.html'>
                  <img src='assets/img/logo-2.svg' alt='logo' />
                </a>
              </div>
              <div className='col-lg-auto'>
                <h3 className='h4 mb-0 text-white'>
                  <img
                    src='assets/img/icon/check-list.svg'
                    alt='icon'
                    className='me-2'
                  />
                  Enrol your child in a Session now!
                </h3>
              </div>
              <div className='col-lg-auto'>
                <a href='contact.html' className='vs-btn'>
                  Start Registration
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='widget-area'>
          <div className='container'>
            <div className='row justify-content-center gx-60'>
              <div className='col-lg-4'>
                <div className='widget footer-widget'>
                  <div className='widget-about'>
                    <h3 className='mt-n2'>
                      Giving your child the best start in life
                    </h3>
                    <p className='map-link'>
                      <img src='assets/img/icon/map.svg' alt='svg' />
                      First Floor, 10A Chandos Street London New Town W1G 9LE
                    </p>
                    <div className='sidebar-gallery'>
                      <div className='gallery-thumb'>
                        <img
                          src='assets/img/widget/gal-2-1.jpg'
                          alt='Gallery Image'
                          className='w-100'
                        />
                        <a
                          href='assets/img/widget/gal-2-1.jpg'
                          className='popup-image gal-btn'
                        >
                          <i className='fal fa-plus' />
                        </a>
                      </div>
                      <div className='gallery-thumb'>
                        <img
                          src='assets/img/widget/gal-2-2.jpg'
                          alt='Gallery Image'
                          className='w-100'
                        />
                        <a
                          href='assets/img/widget/gal-2-2.jpg'
                          className='popup-image gal-btn'
                        >
                          <i className='fal fa-plus' />
                        </a>
                      </div>
                      <div className='gallery-thumb'>
                        <img
                          src='assets/img/widget/gal-2-3.jpg'
                          alt='Gallery Image'
                          className='w-100'
                        />
                        <a
                          href='assets/img/widget/gal-2-3.jpg'
                          className='popup-image gal-btn'
                        >
                          <i className='fal fa-plus' />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-lg-4'>
                <div className='widget footer-widget'>
                  <h3 className='widget_title'>Get In Touch</h3>
                  <div>
                    <p className='footer-text'>
                      Monday to Friday:{' '}
                      <span className='time'>8.30am – 02.00pm</span>
                    </p>
                    <p className='footer-text'>
                      Saturday, Sunday: <span className='time'>Close</span>
                    </p>
                    <p className='footer-info'>
                      <i className='fal fa-envelope' />
                      Email:
                      <a href='mailto:user@domainname.com'>
                        user@domainname.com
                      </a>
                    </p>
                    <p className='footer-info'>
                      <i className='fas fa-mobile-alt' />
                      Phone:
                      <a href='tel:+4402076897888'>+44 (0) 207 689 7888</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-lg-4'>
                <div className='widget widget_nav_menu footer-widget'>
                  <h3 className='widget_title'>Useful Services</h3>
                  <div className='menu-all-pages-container footer-menu'>
                    <ul className='menu'>
                      <li>
                        <a href='#'>Volunteer</a>
                      </li>
                      <li>
                        <a href='#'>Join or Renew</a>
                      </li>
                      <li>
                        <a href='#'>Advocate</a>
                      </li>
                      <li>
                        <a href='#'>Membership Options</a>
                      </li>
                      <li>
                        <a href='#'>Partner</a>
                      </li>
                      <li>
                        <a href='#'>Families Membership</a>
                      </li>
                      <li>
                        <a href='#'>Sponsor</a>
                      </li>
                      <li>
                        <a href='#'>Contact Us</a>
                      </li>
                      <li>
                        <a href='#'>Advertise</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='copyright-wrap'>
          <div className='container'>
            <div className='row flex-row-reverse gy-3 justify-content-between align-items-center'>
              <div className='col-lg-auto'>
                <div className='footer-social'>
                  <a href='#'>
                    <i className='fab fa-facebook-f' />
                  </a>
                  <a href='#'>
                    <i className='fab fa-twitter' />
                  </a>
                  <a href='#'>
                    <i className='fab fa-linkedin-in' />
                  </a>
                  <a href='#'>
                    <i className='fab fa-youtube' />
                  </a>
                </div>
              </div>
              <div className='col-lg-auto'>
                <p className='copyright-text'>
                  Copyright © 2023 <a href='index.html'>Kiddino</a>. All Rights
                  Reserved By
                  <a href='https://themeforest.net/user/vecuro_themes'>
                    Vecuro
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
