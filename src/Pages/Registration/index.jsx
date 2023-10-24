import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <>
      <div>
        <div
          className='breadcumb-wrapper'
          data-bg-src='assets/img/breadcumb/breadcumb-bg.jpg'
        >
          <div className='container z-index-common'>
            <div className='breadcumb-content'>
              <h1 className='breadcumb-title'>Registration</h1>
              <p className='breadcumb-text'>
                Montessori Is A Nurturing And Holistic Approach To Learning
              </p>
              <div className='breadcumb-menu-wrap'>
                <ul className='breadcumb-menu'>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>Registration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section
          className='space-top'
          data-bg-src='assets/img/bg/bg-con-1-1.png'
        >
          <div className='container'>
            <div className='row'>
              <div className='col-xl-auto col-xxl-6'>
                <div className='img-box6'>
                  <div className='img-1 mega-hover'>
                    <img src='assets/img/about/con-1-1.jpg' alt='image' />
                  </div>
                  <div className='img-2 mega-hover'>
                    <img src='assets/img/about/con-1-2.jpg' alt='image' />
                  </div>
                </div>
              </div>
              <div className='col-xl col-xxl-6 align-self-center'>
                <h2 className='sec-title mb-3'>Apply for Admission</h2>
                <div className='row'>
                  <div className='col-sm-6'>
                    <div className='list-style1'>
                      <ul className='list-unstyled mb-0'>
                        <li>Assign practice exercises</li>
                        <li>Track student progress</li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='list-style1'>
                      <ul className='list-unstyled'>
                        <li>Videos and articles</li>
                        <li>Join millions of students</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <form action='#' className='form-style3'>
                  <div className='row justify-content-between'>
                    <div className='col-md-6 form-group'>
                      <label>
                        Child's Name
                        <span className='required'>(Required)</span>
                      </label>
                      <input type='text' />
                    </div>
                    <div className='col-md-6 form-group'>
                      <label>
                        Child's DOB <span className='required'>(Required)</span>
                      </label>
                      <input type='date' />
                    </div>
                    <div className='col-md-6 form-group'>
                      <label>
                        Parent's Name
                        <span className='required'>(Required)</span>
                      </label>
                      <input type='text' />
                    </div>
                    <div className='col-md-6 form-group'>
                      <label>
                        Parent's Designation
                        <span className='required'>(Required)</span>
                      </label>
                      <input type='text' />
                    </div>
                    <div className='col-md-6 form-group'>
                      <label>
                        Email <span className='required'>(Required)</span>
                      </label>
                      <input type='email' />
                    </div>
                    <div className='col-md-6 form-group'>
                      <label>Phone No</label> <input type='number' />
                    </div>
                    <div className='col-auto align-self-center form-group'>
                      <input type='checkbox' id='notice' name='notice' />
                      <label htmlFor='notice'>
                        Notify Your child weekly progress
                      </label>
                    </div>
                    <div className='col-auto form-group'>
                      <button className='vs-btn' type='submit'>
                        Apply Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className='space-top space-extra-bottom'>
          <div className='container'>
            <div className='title-area text-center text-lg-start'>
              <span className='sec-subtitle'>
                learning by connecting practice
              </span>
              <h2 className='sec-title'>Kindergarten Admission Policies</h2>
            </div>
            <div className='accordion accordion-style1' id='faqVersion2'>
              <div className='accordion-item active'>
                <div className='accordion-header' id='headingOne2'>
                  <button
                    className='accordion-button'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseOne2'
                    aria-expanded='true'
                    aria-controls='collapseOne2'
                  >
                    Inquire Kindergarten School
                  </button>
                </div>
                <div
                  id='collapseOne2'
                  className='accordion-collapse collapse show'
                  aria-labelledby='headingOne2'
                  data-bs-parent='#faqVersion2'
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
                <div className='accordion-header' id='headingTwo2'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseTwo2'
                    aria-expanded='false'
                    aria-controls='collapseTwo2'
                  >
                    Schedule a Visit and Submit Application
                  </button>
                </div>
                <div
                  id='collapseTwo2'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingTwo2'
                  data-bs-parent='#faqVersion2'
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
                <div className='accordion-header' id='headingThree2'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseThree2'
                    aria-expanded='false'
                    aria-controls='collapseThree2'
                  >
                    Teacher Evaluation Form
                  </button>
                </div>
                <div
                  id='collapseThree2'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingThree2'
                  data-bs-parent='#faqVersion2'
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
                <div className='accordion-header' id='headingFour2'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseFour2'
                    aria-expanded='false'
                    aria-controls='collapseFour2'
                  >
                    School Assessments
                  </button>
                </div>
                <div
                  id='collapseFour2'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingFour2'
                  data-bs-parent='#faqVersion2'
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
                <div className='accordion-header' id='headingFive2'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseFive2'
                    aria-expanded='false'
                    aria-controls='collapseFive2'
                  >
                    decision to leave streaming
                  </button>
                </div>
                <div
                  id='collapseFive2'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingFive2'
                  data-bs-parent='#faqVersion2'
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
        <section className='space-bottom'>
          <div className='container'>
            <div className='title-area'>
              <h2 className='text-center mt-n2'>Key supporters</h2>
            </div>
            <div
              className='row vs-carousel gx-10'
              data-slide-show={5}
              data-ml-slide-show={4}
              data-lg-slide-show={3}
              data-md-slide-show={2}
              data-sm-slide-show={2}
            >
              <div className='col-auto'>
                <div className='brand-style1'>
                  <img src='assets/img/brand/b-1-1.png' alt='brand' />
                </div>
              </div>
              <div className='col-auto'>
                <div className='brand-style1'>
                  <img src='assets/img/brand/b-1-2.png' alt='brand' />
                </div>
              </div>
              <div className='col-auto'>
                <div className='brand-style1'>
                  <img src='assets/img/brand/b-1-3.png' alt='brand' />
                </div>
              </div>
              <div className='col-auto'>
                <div className='brand-style1'>
                  <img src='assets/img/brand/b-1-4.png' alt='brand' />
                </div>
              </div>
              <div className='col-auto'>
                <div className='brand-style1'>
                  <img src='assets/img/brand/b-1-5.png' alt='brand' />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Registration;
