import React from 'react';
import { Link } from 'react-router-dom';

const TeamDetails = () => {
  return (
    <>
      <div>
        <div
          className='breadcumb-wrapper'
          data-bg-src='assets/img/breadcumb/breadcumb-bg.jpg'
        >
          <div className='container z-index-common'>
            <div className='breadcumb-content'>
              <h1 className='breadcumb-title'>Teacher Details</h1>
              <p className='breadcumb-text'>
                Montessori Is A Nurturing And Holistic Approach To Learning
              </p>
              <div className='breadcumb-menu-wrap'>
                <ul className='breadcumb-menu'>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>Teacher Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section className='space-top'>
          <div className='container'>
            <div className='row gx-50'>
              <div className='col-lg-6 col-xxl-auto'>
                <div className='img-box7'>
                  <div className='mega-hover'>
                    <img
                      className='w-100'
                      src='assets/img/team/t-d-1-1.jpg'
                      alt='teacher'
                    />
                  </div>
                </div>
              </div>
              <div className='col-lg-6 align-self-center'>
                <div className='team-about'>
                  <h2 className='team-name'>Katie Willmore</h2>
                  <p className='team-degi'>Principal and Manager</p>
                  <h3 className='inner-title'>Qualifications</h3>
                  <div className='title-divider2' />
                  <p className='team-text'>MS/Mphil degree, PhD degree</p>
                  <div className='row gx-80'>
                    <div className='col-md-6 col-lg-auto'>
                      <h3 className='inner-title'>Working Hours</h3>
                      <div className='title-divider2' />
                      <p className='team-time'>
                        Monday to Friday: <strong>8.30am – 02.00pm</strong>
                      </p>
                      <p className='team-time'>Saturday, Sunday: Close</p>
                      <div className='team-info'>
                        <i className='fas fa-envelope' />
                        Email:
                        <a
                          className='text-inherit'
                          href='mailto:user@example.com'
                        >
                          user@example.com
                        </a>
                      </div>
                      <div className='team-info'>
                        <i className='fas fa-mobile-alt' />
                        Phone:
                        <a className='text-inherit' href='tel:+4402076897888'>
                          +44 (0) 207 689 7888
                        </a>
                      </div>
                    </div>
                    <div className='col-auto'>
                      <h3 className='inner-title'>Social Sharing</h3>
                      <div className='title-divider2' />
                      <div className='vs-social'>
                        <a href='#'>
                          <i className='fab fa-facebook-f' />
                        </a>
                        <a href='#'>
                          <i className='fab fa-twitter' />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='team-description'>
              <h2>Teacher Details</h2>
              <div className='title-divider2' />
              <p>
                We are constantly expanding the range of services offered,
                taking care of children of all ages. Our goal is to carefully
                educate and develop children in a fun way. We strive to turn the
                learning process into a bright event so that children study with
                pleasure. We are constantly expanding the range of services
                offered, taking care of children of all ages. Our goal is to
                carefully educate and develop children in a fun way. We strive
                to turn the learning process into a bright event so that
                children study with pleasure. We are constantly expanding the
                range of services offered, taking care of children of all ages.
                Our goal is to carefully educate and develop children in a fun
                way. We strive to turn the learning process into a bright event
                so that children study with pleasure. We are constantly
                expanding the range of services offered, taking care of children
                of all ages. Our goal is to carefully educate and develop
                children in a fun way. We strive to turn the learning process
                into a bright event so that children study with pleasure.
              </p>
              <p>
                Our goal is to carefully educate and develop children in a fun
                way. We strive to turn the learning process into a bright event
                so that children study with pleasure. We are constantly
                expanding the range of services offered, taking care of children
                of all ages. Our goal is to carefully educate and develop
                children in a fun way. We strive to turn the learning process
                into a bright event so that children study with pleasure.
              </p>
            </div>
          </div>
        </section>
        <section className>
          <svg className='svg-hidden'>
            <clipPath id='service-clip1' clipPathUnits='objectBoundingBox'>
              <path d='M0.379,0.037 C0.459,-0.006,0.558,-0.006,0.638,0.037 L0.879,0.167 C0.959,0.21,1,0.289,1,0.375 V0.635 C1,0.721,0.959,0.8,0.879,0.843 L0.638,0.973 C0.558,1,0.459,1,0.379,0.973 L0.138,0.843 C0.058,0.8,0.008,0.721,0.008,0.635 V0.375 C0.008,0.289,0.058,0.21,0.138,0.167 L0.379,0.037' />
            </clipPath>
          </svg>
          <div className='container text-center text-md-start'>
            <h2>What We Provide</h2>
            <div className='title-divider2' />
            <div className='row gx-80 gy-30 pt-lg-2'>
              <div className='col-md-6 col-lg-4'>
                <div className='service-style2'>
                  <div className='service-icon'>
                    <div className='service-shape1' />
                    <div className='service-shape2' />
                    <div className='service-shape3' />
                    <img src='assets/img/icon/sr-2-1.svg' alt='icon' />
                  </div>
                  <div className='service-content'>
                    <h3 className='service-title'>
                      <a className='text-inherit' href='service-details.html'>
                        Learning &amp; Fun
                      </a>
                    </h3>
                    <p className='service-text'>
                      Our goal is to carefully educate and develop children in a
                      fun way. We strive learning process into a bright.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-lg-4'>
                <div className='service-style2'>
                  <div className='service-icon'>
                    <div className='service-shape1' />
                    <div className='service-shape2' />
                    <div className='service-shape3' />
                    <img src='assets/img/icon/sr-2-2.svg' alt='icon' />
                  </div>
                  <div className='service-content'>
                    <h3 className='service-title'>
                      <a className='text-inherit' href='service-details.html'>
                        Healthy Meals
                      </a>
                    </h3>
                    <p className='service-text'>
                      Our goal is to carefully educate and develop children in a
                      fun way. We strive learning process into a bright.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-lg-4'>
                <div className='service-style2'>
                  <div className='service-icon'>
                    <div className='service-shape1' />
                    <div className='service-shape2' />
                    <div className='service-shape3' />
                    <img src='assets/img/icon/sr-2-3.svg' alt='icon' />
                  </div>
                  <div className='service-content'>
                    <h3 className='service-title'>
                      <a className='text-inherit' href='service-details.html'>
                        Children Safety
                      </a>
                    </h3>
                    <p className='service-text'>
                      Our goal is to carefully educate and develop children in a
                      fun way. We strive learning process into a bright.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-lg-4'>
                <div className='service-style2'>
                  <div className='service-icon'>
                    <div className='service-shape1' />
                    <div className='service-shape2' />
                    <div className='service-shape3' />
                    <img src='assets/img/icon/sr-2-4.svg' alt='icon' />
                  </div>
                  <div className='service-content'>
                    <h3 className='service-title'>
                      <a className='text-inherit' href='service-details.html'>
                        Cute Environment
                      </a>
                    </h3>
                    <p className='service-text'>
                      Our goal is to carefully educate and develop children in a
                      fun way. We strive learning process into a bright.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-lg-4'>
                <div className='service-style2'>
                  <div className='service-icon'>
                    <div className='service-shape1' />
                    <div className='service-shape2' />
                    <div className='service-shape3' />
                    <img src='assets/img/icon/sr-2-5.svg' alt='icon' />
                  </div>
                  <div className='service-content'>
                    <h3 className='service-title'>
                      <a className='text-inherit' href='service-details.html'>
                        Varied Classes
                      </a>
                    </h3>
                    <p className='service-text'>
                      Our goal is to carefully educate and develop children in a
                      fun way. We strive learning process into a bright.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-lg-4'>
                <div className='service-style2'>
                  <div className='service-icon'>
                    <div className='service-shape1' />
                    <div className='service-shape2' />
                    <div className='service-shape3' />
                    <img src='assets/img/icon/sr-2-6.svg' alt='icon' />
                  </div>
                  <div className='service-content'>
                    <h3 className='service-title'>
                      <a className='text-inherit' href='service-details.html'>
                        Full Day Sessions
                      </a>
                    </h3>
                    <p className='service-text'>
                      Our goal is to carefully educate and develop children in a
                      fun way. We strive learning process into a bright.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='pt-5 pt-md-3 mt-1 space-extra-bottom'>
          <div className='container text-center text-md-start'>
            <h2>What Parents Say</h2>
            <div className='title-divider2' />
            <div
              className='row vs-carousel testislide3'
              data-slide-show={2}
              data-md-slide-show={2}
            >
              <div className='col-lg-6'>
                <div className='testi-style2'>
                  <p className='testi-text'>
                    From its medieval origins to the digital era, learn
                    everything there is to know about the ubiquitous lorem ipsum
                    passage sometimes known, is dummy.
                  </p>
                  <div className='testi-body'>
                    <div className='testi-icon'>
                      <i className='fas fa-quote-left' />
                    </div>
                    <div className='media-body'>
                      <h3 className='testi-name h4'>Jannie Marko</h3>
                      <div className='testi-rating'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='testi-style2'>
                  <p className='testi-text'>
                    Until recently, the prevailing view assumed lorem ipsum was
                    born as a nonsense text. It's not Latin, though it looks
                    like it, and it actually says nor is
                  </p>
                  <div className='testi-body'>
                    <div className='testi-icon'>
                      <i className='fas fa-quote-left' />
                    </div>
                    <div className='media-body'>
                      <h3 className='testi-name h4'>Jannie Marko</h3>
                      <div className='testi-rating'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='testi-style2'>
                  <p className='testi-text'>
                    Mercedes loves her school. she is leaving Monday. She is
                    going to miss all her teachers. It's very good play school.
                    she loved every minute there thank you.
                  </p>
                  <div className='testi-body'>
                    <div className='testi-icon'>
                      <i className='fas fa-quote-left' />
                    </div>
                    <div className='media-body'>
                      <h3 className='testi-name h4'>Jannie Marko</h3>
                      <div className='testi-rating'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className='space-extra'
          data-bg-src='assets/img/bg/cta-bg-1-1.jpg'
        >
          <div className='container'>
            <div className='cta-box1'>
              <h2 className='cta-title'>
                Join together to make amazing things happen
              </h2>
              <p className='cta-text'>
                Get all the latest information, support and guidance about the
                cost of living with kindergarten.
              </p>
              <a href='contact.html' className='vs-btn'>
                Start Registration
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TeamDetails;
