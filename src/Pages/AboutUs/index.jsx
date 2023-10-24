import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <>
      <div>
        <div
          className='breadcumb-wrapper'
          data-bg-src='assets/img/breadcumb/breadcumb-bg.jpg'
        >
          <div className='container z-index-common'>
            <div className='breadcumb-content'>
              <h1 className='breadcumb-title'>About Us</h1>
              <p className='breadcumb-text'>
                Montessori Is A Nurturing And Holistic Approach To Learning
              </p>
              <div className='breadcumb-menu-wrap'>
                <ul className='breadcumb-menu'>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section className='space-top space-extra-bottom'>
          <div className='container'>
            <div className='row align-items-center justify-content-between flex-row-reverse'>
              <div className='col-lg-6 col-xl-auto text-center text-lg-end'>
                <div className='img-box2'>
                  <div className='transform-banner'>
                    <img src='assets/img/about/ab-2-1.jpg' alt='about' />
                  </div>
                  <div className='vs-circle jump' />
                </div>
              </div>
              <div className='col-lg-6 text-center text-lg-start'>
                <h2 className='sec-title me-xxl-5'>
                  Your child's best start in life
                </h2>
                <p className='sec-text col-xl-10 pe-4 mb-4'>
                  We are constantly expanding the range of services offered,
                  taking children of all ages. Our goal is to carefully educate
                  and develop a fun way. We strive to turn the learning process.
                </p>
                <div className='row justify-content-center justify-content-lg-start text-start'>
                  <div className='col-auto'>
                    <div className='list-style1'>
                      <ul className='list-unstyled'>
                        <li>
                          Comprehensive reporting on individual achievement
                        </li>
                        <li>
                          Educational field trips and school presentations
                        </li>
                        <li>Individual attention in a small-class setting</li>
                        <li>Learning program with after-school care</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='space-extra-bottom'>
          <div className='container'>
            <div className='row gx-70'>
              <div className='col-lg-6 text-center text-lg-end'>
                <div className='img-box2 style2'>
                  <div className='transform-banner'>
                    <img src='assets/img/about/ab-5-1.jpg' alt='about' />
                  </div>
                  <div className='vs-circle jump' />
                </div>
              </div>
              <div className='col-lg-6 align-self-center text-center text-lg-start'>
                <h2 className='sec-title pe-xxl-4'>
                  For every student, every classroom Real results.
                </h2>
                <p className='sec-text mb-4 pb-2 col-xxl-10'>
                  We are constantly expanding the range of services offered,
                  taking children of all ages. Our goal is to carefully educate
                  and develop a fun way. We strive to turn the learning process.
                </p>
                <p className='sec-subtitle2 mb-1'>Sessions: Monday – Friday</p>
                <div className='row gx-50 justify-content-center justify-content-lg-start'>
                  <div className='col-auto'>
                    <div className='info-style1'>
                      <p className='info-title'>Morning:</p>
                      <p className='info-text'>9am – 12noon</p>
                    </div>
                  </div>
                  <div className='col-auto'>
                    <div className='info-style1'>
                      <p className='info-title'>Lunch:</p>
                      <p className='info-text'>12noon – 1pm</p>
                    </div>
                  </div>
                  <div className='col-auto'>
                    <div className='info-style1'>
                      <p className='info-title'>Afternoon:</p>
                      <p className='info-text'>1pm – 3.30pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='space-top space-extra-bottom bg-smoke'>
          <div className='container'>
            <div className='title-area text-center'>
              <div className='sec-bubble'>
                <div className='bubble' />
                <div className='bubble' />
                <div className='bubble' />
              </div>
              <h2 className='sec-title'>Qualified Teachers</h2>
              <p className='sec-text'>
                We are constantly expanding the range of services offered
              </p>
            </div>
            <div className='row align-items-center'>
              <div className='col-lg-6'>
                <div className='team-style1'>
                  <div className='team-img'>
                    <a href='team-details.html'>
                      <img src='assets/img/team/t-1-1.jpg' alt='team' />
                    </a>
                  </div>
                  <div className='team-content'>
                    <h3 className='team-name h2'>
                      <a href='team-details.html' className='text-inherit'>
                        Katie Willmore
                      </a>
                    </h3>
                    <p className='team-degi'>Principal and Manager</p>
                    <a href='tel:+4402076897888' className='team-number'>
                      +44 (0) 207 689 7888
                    </a>
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
              <div className='col-sm-6 col-lg-3'>
                <div className='team-style2'>
                  <div className='team-img'>
                    <a href='team-details.html'>
                      <img src='assets/img/team/t-1-2.jpg' alt='team' />
                    </a>
                  </div>
                  <h3 className='team-name'>
                    <a className='text-inherit' href='team-details.html'>
                      Jessica Levis
                    </a>
                  </h3>
                </div>
              </div>
              <div className='col-sm-6 col-lg-3'>
                <div className='team-style2'>
                  <div className='team-img'>
                    <a href='team-details.html'>
                      <img src='assets/img/team/t-1-3.jpg' alt='team' />
                    </a>
                  </div>
                  <h3 className='team-name'>
                    <a className='text-inherit' href='team-details.html'>
                      Nomina Leione
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className='row text-center text-lg-start mt-lg-5 pt-4 align-items-center justify-content-between'>
              <div className='col-lg-8 col-xl-9'>
                <div className='title-area mb-xl-0'>
                  <span className='sec-subtitle'>
                    learning by connecting practice
                  </span>
                  <h2 className='sec-title'>
                    Promoting high quality learning of Young Children
                  </h2>
                </div>
              </div>
              <div className='col-lg-auto'>
                <div className='sec-btns mb-0'>
                  <a href='contact.html' className='vs-btn'>
                    Start Registration
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='space-top space-extra-bottom'>
          <div className='container'>
            <div className='title-area text-center'>
              <span className='sec-subtitle'>Kindergarten SCHEDULE</span>
              <h2 className='sec-title'>Kindergarten History</h2>
            </div>
            <div className='row'>
              <div className='col-md-6 col-xl-3 feature-style4'>
                <div className='feature-body'>
                  <span className='feature-year'>1994</span>
                  <h3 className='feature-title h5'>opened its doors</h3>
                  <p className='feature-text'>
                    We are constantly expanding the range of services offered,
                    taking children of all ages. Our goal is to carefully
                    educat.
                  </p>
                  <div className='feature-img'>
                    <a href='about.html'>
                      <img src='assets/img/feature/fe-2-1.jpg' alt='feature' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-xl-3 feature-style4'>
                <div className='feature-body'>
                  <span className='feature-year'>2001</span>
                  <h3 className='feature-title h5'>High school physics</h3>
                  <p className='feature-text'>
                    We are constantly expanding the range of services offered,
                    taking children of all ages. Our goal is to carefully
                    educat.
                  </p>
                  <div className='feature-img'>
                    <a href='about.html'>
                      <img src='assets/img/feature/fe-2-2.jpg' alt='feature' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-xl-3 feature-style4'>
                <div className='feature-body'>
                  <span className='feature-year'>2008</span>
                  <h3 className='feature-title h5'>Get ready for 6th grade</h3>
                  <p className='feature-text'>
                    We are constantly expanding the range of services offered,
                    taking children of all ages. Our goal is to carefully
                    educat.
                  </p>
                  <div className='feature-img'>
                    <a href='about.html'>
                      <img src='assets/img/feature/fe-2-3.jpg' alt='feature' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-xl-3 feature-style4'>
                <div className='feature-body'>
                  <span className='feature-year'>2014</span>
                  <h3 className='feature-title h5'>Internet safety</h3>
                  <p className='feature-text'>
                    We are constantly expanding the range of services offered,
                    taking children of all ages. Our goal is to carefully
                    educat.
                  </p>
                  <div className='feature-img'>
                    <a href='about.html'>
                      <img src='assets/img/feature/fe-2-4.jpg' alt='feature' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='space-extra-bottom'>
          <div className='container'>
            <div className='title-area text-center'>
              <div className='sec-bubble'>
                <div className='bubble' />
                <div className='bubble' />
                <div className='bubble' />
              </div>
              <h2 className='sec-title'>Available Clubs</h2>
              <p className='sec-text'>
                We are constantly expanding the range of services offered
              </p>
            </div>
            <div className='row justify-content-between align-items-center'>
              <div className='col-md-6 col-xl-auto order-2 order-xl-1'>
                <div className='feature-style3'>
                  <div className='feature-img'>
                    <div className='img'>
                      <img src='assets/img/feature/fe-1-1.jpg' alt='feature' />
                    </div>
                  </div>
                  <div className='feature-body'>
                    <h3 className='feature-title h4'>Early Club</h3>
                    <div className='list-style2'>
                      <ul className='list-unstyled'>
                        <li>Help parents get to work on time</li>
                        <li>Near the station</li>
                        <li>Children settled and ready to work</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='feature-style3'>
                  <div className='feature-img'>
                    <div className='img'>
                      <img src='assets/img/feature/fe-1-2.jpg' alt='feature' />
                    </div>
                  </div>
                  <div className='feature-body'>
                    <h3 className='feature-title h4'>Lunch Club</h3>
                    <div className='list-style2'>
                      <ul className='list-unstyled'>
                        <li>Help parents get to work on time</li>
                        <li>Near the station</li>
                        <li>Children settled and ready to work</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-auto order-1 order-xl-2'>
                <img
                  src='assets/img/about/fe-1-1.png'
                  alt='feature'
                  className='w-100'
                />
              </div>
              <div className='col-md-6 col-xl-auto order-3 order-xl-3'>
                <div className='feature-style3'>
                  <div className='feature-img'>
                    <div className='img'>
                      <img src='assets/img/feature/fe-1-3.jpg' alt='feature' />
                    </div>
                  </div>
                  <div className='feature-body'>
                    <h3 className='feature-title h4'>Afternoon Club</h3>
                    <div className='list-style2'>
                      <ul className='list-unstyled'>
                        <li>Help parents get to work on time</li>
                        <li>Near the station</li>
                        <li>Children settled and ready to work</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='feature-style3'>
                  <div className='feature-img'>
                    <div className='img'>
                      <img src='assets/img/feature/fe-1-4.jpg' alt='feature' />
                    </div>
                  </div>
                  <div className='feature-body'>
                    <h3 className='feature-title h4'>Music Club</h3>
                    <div className='list-style2'>
                      <ul className='list-unstyled'>
                        <li>Help parents get to work on time</li>
                        <li>Near the station</li>
                        <li>Children settled and ready to work</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='space-extra-bottom'>
          <div className='container'>
            <div className='row justify-content-between'>
              <div className='col-6 col-md-6 col-lg-auto'>
                <div className='vs-media media-style1 layout2'>
                  <div className='media-icon'>
                    <img src='assets/img/icon/coun-1-1.svg' alt='icon' />
                  </div>
                  <div className='media-body'>
                    <p className='media-label'>38</p>
                    <p className='media-title'>Student Classrooms</p>
                  </div>
                </div>
              </div>
              <div className='col-6 col-md-6 col-lg-auto'>
                <div className='vs-media media-style1 layout2'>
                  <div className='media-icon'>
                    <img src='assets/img/icon/coun-1-2.svg' alt='icon' />
                  </div>
                  <div className='media-body'>
                    <p className='media-label'>14</p>
                    <p className='media-title'>Kids Classes</p>
                  </div>
                </div>
              </div>
              <div className='col-6 col-md-6 col-lg-auto'>
                <div className='vs-media media-style1 layout2'>
                  <div className='media-icon'>
                    <img src='assets/img/icon/coun-1-3.svg' alt='icon' />
                  </div>
                  <div className='media-body'>
                    <p className='media-label'>75</p>
                    <p className='media-title'>Outdoor Activities</p>
                  </div>
                </div>
              </div>
              <div className='col-6 col-md-6 col-lg-auto'>
                <div className='vs-media media-style1 layout2'>
                  <div className='media-icon'>
                    <img src='assets/img/icon/coun-1-4.svg' alt='icon' />
                  </div>
                  <div className='media-body'>
                    <p className='media-label'>23</p>
                    <p className='media-title'>Loving Teachers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className='bg-vs-secondary space-top space-extra-bottom'>
          <div className='container'>
            <div className='row text-center text-lg-start'>
              <div className='col-lg-5 col-xl-6 mb-n4 mb-lg-0'>
                <div className='title-area'>
                  <span className='sec-subtitle text-white'>Why Choose Us</span>
                  <h2 className='sec-title text-white'>Our Core Values</h2>
                </div>
              </div>
              <div className='col-lg-7 col-xl-6'>
                <div className='title-area'>
                  <p className='sec-text text-white'>
                    We are constantly expanding the range of services offered,
                    taking care of children of all ages. Our goal is to
                    carefully educate and develop children in a fun way. We
                    strive to turn the learning process into a bright.
                  </p>
                </div>
              </div>
            </div>
            <div className='row gx-0 mt-4 pt-2'>
              <div className='col-md-6 col-xl-3'>
                <div className='feature-style2'>
                  <div className='feature-img'>
                    <div className='vs-circle' />
                    <img src='assets/img/choose/choose-1-1.png' alt='image' />
                  </div>
                  <h3 className='feature-title h5'>
                    <a href='service-details.html' className='text-inherit'>
                      Learn And Play
                    </a>
                  </h3>
                  <p className='feature-text'>
                    Our goal is to carefully educate and develop children in a
                    fun way.
                  </p>
                </div>
              </div>
              <div className='col-md-6 col-xl-3'>
                <div className='feature-style2'>
                  <div className='feature-img'>
                    <div className='vs-circle' />
                    <img src='assets/img/choose/choose-1-2.png' alt='image' />
                  </div>
                  <h3 className='feature-title h5'>
                    <a href='service-details.html' className='text-inherit'>
                      Great Teachers
                    </a>
                  </h3>
                  <p className='feature-text'>
                    Our goal is to carefully educate and develop children in a
                    fun way.
                  </p>
                </div>
              </div>
              <div className='col-md-6 col-xl-3'>
                <div className='feature-style2'>
                  <div className='feature-img'>
                    <div className='vs-circle' />
                    <img src='assets/img/choose/choose-1-3.png' alt='image' />
                  </div>
                  <h3 className='feature-title h5'>
                    <a href='service-details.html' className='text-inherit'>
                      Family Environment
                    </a>
                  </h3>
                  <p className='feature-text'>
                    Our goal is to carefully educate and develop children in a
                    fun way.
                  </p>
                </div>
              </div>
              <div className='col-md-6 col-xl-3'>
                <div className='feature-style2'>
                  <div className='feature-img'>
                    <div className='vs-circle' />
                    <img src='assets/img/choose/choose-1-4.png' alt='image' />
                  </div>
                  <h3 className='feature-title h5'>
                    <a href='service-details.html' className='text-inherit'>
                      Excellent Programmes
                    </a>
                  </h3>
                  <p className='feature-text'>
                    Our goal is to carefully educate and develop children in a
                    fun way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='space-top space-extra-bottom'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-xl-6'>
                <div className='title-area text-center'>
                  <div className='sec-bubble'>
                    <div className='bubble' />
                    <div className='bubble' />
                    <div className='bubble' />
                  </div>
                  <h2 className='sec-title'>
                    See Our Kindergarten Photo Gallery!
                  </h2>
                  <p className='sec-text'>
                    We are constantly expanding the range of services offered
                  </p>
                </div>
              </div>
            </div>
            <div className='row gx-35 gy-gx filter-active'>
              <div className='col-sm-6 col-lg-4 col-xl-3 filter-item'>
                <div className='gallery-style1'>
                  <div className='gallery-img'>
                    <img src='assets/img/gallery/gal-1-1.jpg' alt='gallery' />
                    <a
                      href='assets/img/gallery/gal-1-1.jpg'
                      className='gallery-btn popup-image'
                    >
                      <i className='far fa-plus' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-lg-4 col-xl-3 filter-item'>
                <div className='gallery-style1 radius-2'>
                  <div className='gallery-img'>
                    <img src='assets/img/gallery/gal-1-2.jpg' alt='gallery' />
                    <a
                      href='assets/img/gallery/gal-1-2.jpg'
                      className='gallery-btn popup-image'
                    >
                      <i className='far fa-plus' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-lg-4 col-xl-3 filter-item'>
                <div className='gallery-style1'>
                  <div className='gallery-img'>
                    <img src='assets/img/gallery/gal-1-3.jpg' alt='gallery' />
                    <a
                      href='assets/img/gallery/gal-1-3.jpg'
                      className='gallery-btn popup-image'
                    >
                      <i className='far fa-plus' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-lg-4 col-xl-3 filter-item'>
                <div className='gallery-style1'>
                  <div className='gallery-img'>
                    <img src='assets/img/gallery/gal-1-4.jpg' alt='gallery' />
                    <a
                      href='assets/img/gallery/gal-1-4.jpg'
                      className='gallery-btn popup-image'
                    >
                      <i className='far fa-plus' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-lg-4 col-xl-3 filter-item'>
                <div className='gallery-style1'>
                  <div className='gallery-img'>
                    <img src='assets/img/gallery/gal-1-5.jpg' alt='gallery' />
                    <a
                      href='assets/img/gallery/gal-1-5.jpg'
                      className='gallery-btn popup-image'
                    >
                      <i className='far fa-plus' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-lg-4 col-xl-3 filter-item radius-3'>
                <div className='gallery-style1'>
                  <div className='gallery-img'>
                    <img src='assets/img/gallery/gal-1-6.jpg' alt='gallery' />
                    <a
                      href='assets/img/gallery/gal-1-6.jpg'
                      className='gallery-btn popup-image'
                    >
                      <i className='far fa-plus' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='space-extra-bottom'>
          <div className='container'>
            <div className='row justify-content-between text-center text-md-start'>
              <div className='col-md-auto'>
                <div className='title-area'>
                  <span className='sec-subtitle'>Service Reviews</span>
                  <h2 className='sec-title'>What Parents Say</h2>
                </div>
              </div>
              <div className='col-md-auto align-self-end'>
                <div className='sec-btns'>
                  <button className='icon-btn' data-slick-prev='.testislide3'>
                    <i className='far fa-arrow-left' />
                  </button>
                  <button className='icon-btn' data-slick-next='.testislide3'>
                    <i className='far fa-arrow-right' />
                  </button>
                </div>
              </div>
            </div>
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
                      <h3 className='testi-name h4'>Mari Jain</h3>
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
                      <h3 className='testi-name h4'>Marko Polo</h3>
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
        <section className='space-bottom'>
          <div className='container'>
            <div className='title-area text-center'>
              <h2 className='sec-title'>Follow @instagram</h2>
            </div>
            <div
              className='row vs-carousel'
              data-slide-show={6}
              data-lg-slide-show={5}
              data-md-slide-show={4}
              data-sm-slide-show={3}
              data-xs-slide-show={2}
            >
              <div className='col-auto'>
                <div className='gallery-style1'>
                  <div className='gallery-img'>
                    <img src='assets/img/gallery/gal-2-1.jpg' alt='gallery' />
                    <a
                      href='assets/img/gallery/gal-2-1.jpg'
                      className='gallery-btn popup-image'
                    >
                      <i className='far fa-plus' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-auto'>
                <div className='gallery-style1'>
                  <div className='gallery-img'>
                    <img src='assets/img/gallery/gal-2-2.jpg' alt='gallery' />
                    <a
                      href='assets/img/gallery/gal-2-2.jpg'
                      className='gallery-btn popup-image'
                    >
                      <i className='far fa-plus' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-auto'>
                <div className='gallery-style1'>
                  <div className='gallery-img'>
                    <img src='assets/img/gallery/gal-2-3.jpg' alt='gallery' />
                    <a
                      href='assets/img/gallery/gal-2-3.jpg'
                      className='gallery-btn popup-image'
                    >
                      <i className='far fa-plus' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-auto'>
                <div className='gallery-style1'>
                  <div className='gallery-img'>
                    <img src='assets/img/gallery/gal-2-4.jpg' alt='gallery' />
                    <a
                      href='assets/img/gallery/gal-2-4.jpg'
                      className='gallery-btn popup-image'
                    >
                      <i className='far fa-plus' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-auto'>
                <div className='gallery-style1'>
                  <div className='gallery-img'>
                    <img src='assets/img/gallery/gal-2-5.jpg' alt='gallery' />
                    <a
                      href='assets/img/gallery/gal-2-5.jpg'
                      className='gallery-btn popup-image'
                    >
                      <i className='far fa-plus' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-auto'>
                <div className='gallery-style1'>
                  <div className='gallery-img'>
                    <img src='assets/img/gallery/gal-2-6.jpg' alt='gallery' />
                    <a
                      href='assets/img/gallery/gal-2-6.jpg'
                      className='gallery-btn popup-image'
                    >
                      <i className='far fa-plus' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-auto'>
                <div className='gallery-style1'>
                  <div className='gallery-img'>
                    <img src='assets/img/gallery/gal-2-7.jpg' alt='gallery' />
                    <a
                      href='assets/img/gallery/gal-2-7.jpg'
                      className='gallery-btn popup-image'
                    >
                      <i className='far fa-plus' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
