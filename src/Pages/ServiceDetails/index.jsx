import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
  return (
    <>
      <div>
        <div
          className='breadcumb-wrapper'
          data-bg-src='assets/img/breadcumb/breadcumb-bg.jpg'
        >
          <div className='container z-index-common'>
            <div className='breadcumb-content'>
              <h1 className='breadcumb-title'>Service Details</h1>
              <p className='breadcumb-text'>
                Montessori Is A Nurturing And Holistic Approach To Learning
              </p>
              <div className='breadcumb-menu-wrap'>
                <ul className='breadcumb-menu'>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>Service Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section className='space-top'>
          <div className='container'>
            <div className='row justify-content-between flex-row-reverse gx-50'>
              <div className='col-lg-6'>
                <div className='img-box7'>
                  <div className='mega-hover'>
                    <img
                      className='w-100'
                      src='assets/img/service/sr-d-1-1.jpg'
                      alt='teacher'
                    />
                  </div>
                </div>
              </div>
              <div className='col-lg-6 align-self-center'>
                <div className='service-about'>
                  <h2 className='service-title h1 mt-n2'>Healthy Meals</h2>
                  <div className='title-divider2' />
                  <p className='service-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim
                  </p>
                  <div className='list-style1'>
                    <ul className='list-unstyled'>
                      <li>Comprehensive reporting on individual achievement</li>
                      <li>Educational field trips and school presentations</li>
                      <li>Individual attention in a small-class setting</li>
                      <li>Learning program with after-school care</li>
                    </ul>
                  </div>
                  <h3 className='h6 pt-1 text-uppercase'>
                    Sessions: Monday – Friday
                  </h3>
                  <div className='row gx-50'>
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
              <div className='service-description'>
                <h2>Service Details</h2>
                <div className='title-divider2' />
                <p>
                  We are constantly expanding the range of services offered,
                  taking care of children of all ages. Our goal is to carefully
                  educate and develop children in a fun way. We strive to turn
                  the learning process into a bright event so that children
                  study with pleasure. We are constantly expanding the range of
                  services offered, taking care of children of all ages. Our
                  goal is to carefully educate and develop children in a fun
                  way. We strive to turn the learning process into a bright
                  event so that children study with pleasure. We are constantly
                  expanding the range of services offered, taking care of
                  children of all ages. Our goal is to carefully educate and
                  develop children in a fun way. We strive to turn the learning
                  process into a bright event so that children study with
                  pleasure.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='space-extra-bottom'>
          <div className='container'>
            <h2>What We Provide</h2>
            <div className='title-divider2' />
            <div className='accordion accordion-style1' id='faqVersion3'>
              <div className='accordion-item active'>
                <div className='accordion-header' id='headingOne3'>
                  <button
                    className='accordion-button'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseOne3'
                    aria-expanded='true'
                    aria-controls='collapseOne3'
                  >
                    First Little Readers (Levels A-C)
                  </button>
                </div>
                <div
                  id='collapseOne3'
                  className='accordion-collapse collapse show'
                  aria-labelledby='headingOne3'
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
                <div className='accordion-header' id='headingTwo3'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseTwo3'
                    aria-expanded='false'
                    aria-controls='collapseTwo3'
                  >
                    What Age Do Kids Start Preschool?
                  </button>
                </div>
                <div
                  id='collapseTwo3'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingTwo3'
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
                <div className='accordion-header' id='headingThree3'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseThree3'
                    aria-expanded='false'
                    aria-controls='collapseThree3'
                  >
                    Is My Child Ready for Preschool?
                  </button>
                </div>
                <div
                  id='collapseThree3'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingThree3'
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
                <div className='accordion-header' id='headingFour3'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseFour4'
                    aria-expanded='false'
                    aria-controls='collapseFour3'
                  >
                    Can your child separate from you?
                  </button>
                </div>
                <div
                  id='collapseFour3'
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
                <div className='accordion-header' id='headingFive3'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseFive5'
                    aria-expanded='false'
                    aria-controls='collapseFive3'
                  >
                    Can your child play with others?
                  </button>
                </div>
                <div
                  id='collapseFive3'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingFive5'
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
          </div>
        </section>
        <div className='space-bottom'>
          <div className='container'>
            <div className='img-box4'>
              <div className='img-1 mega-hover'>
                <img src='assets/img/about/ab-3-1.jpg' alt='about' />
                <a
                  href='https://www.youtube.com/watch?v=_sI_Ps7JSEk'
                  className='play-btn popup-video position-center'
                >
                  <i className='fas fa-play' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
