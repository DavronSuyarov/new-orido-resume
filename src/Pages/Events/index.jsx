import React from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
  return (
    <>
      <div>
        <div
          className='breadcumb-wrapper'
          data-bg-src='assets/img/breadcumb/breadcumb-bg.jpg'
        >
          <div className='container z-index-common'>
            <div className='breadcumb-content'>
              <h1 className='breadcumb-title'>Event Details</h1>
              <p className='breadcumb-text'>
                Montessori Is A Nurturing And Holistic Approach To Learning
              </p>
              <div className='breadcumb-menu-wrap'>
                <ul className='breadcumb-menu'>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>Event Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section className='space'>
          <div className='container'>
            <span className='sec-subtitle'>24 December, 2023</span>
            <h2 className='h1 mt-n2 mb-4'>
              Father`s Day Sundaes &amp; Shaving!
            </h2>
            <div className='row mb-2 mb-lg-4'>
              <div className='col-md-7 col-lg-6 mb-30 mb-sm-0'>
                <h3 className='h4'>Event Countdown</h3>
                <div className='title-divider1' />
                <div className='countdown-style1'>
                  <ul className='countdown-active' data-end-date='01/12/2024'>
                    <li>
                      <span className='day'>127</span>Days
                    </li>
                    <li>
                      <span className='hour'>20</span>Hours
                    </li>
                    <li>
                      <span className='minute'>30</span>Minutes
                    </li>
                    <li>
                      <span className='seconds'>13</span>Seconds
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md-5 col-lg-6'>
                <h3 className='h4'>Coordinator</h3>
                <div className='title-divider1' />
                <h4 className='text-theme mt-n2'>Prof. Jessica Thomas</h4>
                <p className='fs-md'>
                  Phone :
                  <a href='tel:+0987654321' className='text-inherit'>
                    +098 765 4321
                  </a>
                  <br />
                  Email:
                  <a href='mailto:contact@zoutula.com' className='text-inherit'>
                    contact@zoutula.com
                  </a>
                </p>
              </div>
            </div>
            <div className='img-box7'>
              <div className='mega-hover'>
                <img src='assets/img/about/ev-d-1-1.jpg' alt='event details' />
              </div>
            </div>
            <h2>Event Details</h2>
            <div className='title-divider1' />
            <p>
              We are constantly expanding the range of services offered, taking
              care of children of all ages. Our goal is to carefully educate and
              develop children in a fun way. We strive to turn the learning
              process into a bright event so that children study with pleasure.
              We are constantly expanding the range of services offered, taking
              care of children of all ages. Our goal is to carefully educate and
              develop children in a fun way. We strive to turn the learning
              process into a bright event so that children study with pleasure.
              We are constantly expanding the range of services offered, taking
              care of children of all ages. Our goal is to carefully educate and
              develop children in a fun way. We strive to turn the learning
              process into a bright event so that children study with pleasure.
              We are constantly expanding the range of services offered, taking
              care of children of all ages. Our goal is to carefully educate and
              develop children in a fun way. We strive to turn the learning
              process into a bright event so that children study with pleasure.
            </p>
            <p>
              Our goal is to carefully educate and develop children in a fun
              way. We strive to turn the learning process into a bright event so
              that children study with pleasure. We are constantly expanding the
              range of services offered, taking care of children of all ages.
              Our goal is to carefully educate and develop children in a fun
              way. We strive to turn the learning process into a bright event so
              that children study with pleasure.
            </p>
            <div className='row'>
              <div className='col-lg-6 col-xl-5'>
                <div className='list-style1'>
                  <ul className='list-unstyled mb-1'>
                    <li>Lorem ipsum is placeholder text commonly used</li>
                    <li>Dolor sit amet, consectetur adipiscing</li>
                    <li>From its medieval origins to the digital</li>
                    <li>The purpose of lorem ipsum is to create</li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-6 col-xl-6'>
                <div className='list-style1'>
                  <ul className='list-unstyled'>
                    <li>Comprehensive reporting on individual achievement</li>
                    <li>Educational field trips and school presentations</li>
                    <li>Individual attention in a small-class setting</li>
                    <li>Learning program with after-school care</li>
                  </ul>
                </div>
              </div>
            </div>
            <h2>Event Guide</h2>
            <div className='title-divider1' />
            <div className='accordion accordion-style1' id='faqVersion3'>
              <div className='accordion-item active'>
                <div className='accordion-header' id='headingOne4'>
                  <button
                    className='accordion-button'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseOne4'
                    aria-expanded='true'
                    aria-controls='collapseOne4'
                  >
                    First Little Readers (Levels A-C)
                  </button>
                </div>
                <div
                  id='collapseOne4'
                  className='accordion-collapse collapse show'
                  aria-labelledby='headingOne4'
                  data-bs-parent='#faqVersion3'
                >
                  <div className='accordion-body'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat proident, sunt in culpa qui officia
                    </p>
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <div className='accordion-header' id='headingTwo4'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseTwo4'
                    aria-expanded='false'
                    aria-controls='collapseTwo4'
                  >
                    What Age Do Kids Start Preschool?
                  </button>
                </div>
                <div
                  id='collapseTwo4'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingTwo4'
                  data-bs-parent='#faqVersion3'
                >
                  <div className='accordion-body'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat proident, sunt in culpa qui officia
                    </p>
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <div className='accordion-header' id='headingThree4'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseThree4'
                    aria-expanded='false'
                    aria-controls='collapseThree4'
                  >
                    Is My Child Ready for Preschool?
                  </button>
                </div>
                <div
                  id='collapseThree4'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingThree4'
                  data-bs-parent='#faqVersion3'
                >
                  <div className='accordion-body'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat proident, sunt in culpa qui officia
                    </p>
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <div className='accordion-header' id='headingFour4'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseFour4'
                    aria-expanded='false'
                    aria-controls='collapseFour4'
                  >
                    Can your child separate from you?
                  </button>
                </div>
                <div
                  id='collapseFour4'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingFour4'
                  data-bs-parent='#faqVersion3'
                >
                  <div className='accordion-body'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat proident, sunt in culpa qui officia
                    </p>
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <div className='accordion-header' id='headingFive4'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseFive'
                    aria-expanded='false'
                    aria-controls='collapseFive4'
                  >
                    Can your child play with others?
                  </button>
                </div>
                <div
                  id='collapseFive4'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingFive4'
                  data-bs-parent='#faqVersion3'
                >
                  <div className='accordion-body'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat proident, sunt in culpa qui officia
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className='mt-5'>Event Location</h2>
            <div className='title-divider1' />
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

export default Events;
