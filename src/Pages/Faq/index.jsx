import React from 'react';
import { Link } from 'react-router-dom';

const Faq = () => {
  return (
    <>
      <div>
        <div
          className='breadcumb-wrapper'
          data-bg-src='assets/img/breadcumb/breadcumb-bg.jpg'
        >
          <div className='container z-index-common'>
            <div className='breadcumb-content'>
              <h1 className='breadcumb-title'>Faq’s</h1>
              <p className='breadcumb-text'>
                Montessori Is A Nurturing And Holistic Approach To Learning
              </p>
              <div className='breadcumb-menu-wrap'>
                <ul className='breadcumb-menu'>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>Faq’s</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section className='space-top space-extra-bottom'>
          <div className='container'>
            <h2>Pre School Faq’s</h2>
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
          </div>
        </section>
        <section className='space-bottom'>
          <div className='container'>
            <div className='row gx-80'>
              <div className='col-lg-6 col-xxl-auto pb-3 pb-xl-0'>
                <div className='img-box3'>
                  <div className='img-1 mega-hover'>
                    <img src='assets/img/about/faq-1-1.jpg' alt='FAQ' />
                    <a
                      href='https://www.youtube.com/watch?v=_sI_Ps7JSEk'
                      className='play-btn popup-video position-center'
                    >
                      <i className='fas fa-play' />
                    </a>
                  </div>
                  <div className='vs-circle jump' />
                </div>
              </div>
              <div className='col-lg-6 align-self-center'>
                <div className='title-area text-center text-lg-start'>
                  <span className='sec-subtitle'>
                    choose your own grade level
                  </span>
                  <h2 className='sec-title'>Guide to Preschool</h2>
                </div>
                <div className='accordion accordion-style1' id='faqVersion1'>
                  <div className='accordion-item active'>
                    <div className='accordion-header' id='headingOne1'>
                      <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseOne1'
                        aria-expanded='true'
                        aria-controls='collapseOne1'
                      >
                        First Little Readers (Levels A-C)
                      </button>
                    </div>
                    <div
                      id='collapseOne1'
                      className='accordion-collapse collapse show'
                      aria-labelledby='headingOne1'
                      data-bs-parent='#faqVersion1'
                    >
                      <div className='accordion-body'>
                        <p>
                          Enrolment Events are like open days or open weeks at
                          Busy Bees. It's a chance for you to visit your local
                          nursery, take a look around, and see some of exciting
                          activities in action.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <div className='accordion-header' id='headingTwo1'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseTwo1'
                        aria-expanded='false'
                        aria-controls='collapseTwo1'
                      >
                        What Age Do Kids Start Preschool?
                      </button>
                    </div>
                    <div
                      id='collapseTwo1'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingTwo1'
                      data-bs-parent='#faqVersion1'
                    >
                      <div className='accordion-body'>
                        <p>
                          Enrolment Events are like open days or open weeks at
                          Busy Bees. It's a chance for you to visit your local
                          nursery, take a look around, and see some of exciting
                          activities in action.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <div className='accordion-header' id='headingThree1'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseThree1'
                        aria-expanded='false'
                        aria-controls='collapseThree1'
                      >
                        Is My Child Ready for Preschool?
                      </button>
                    </div>
                    <div
                      id='collapseThree1'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingThree1'
                      data-bs-parent='#faqVersion1'
                    >
                      <div className='accordion-body'>
                        <p>
                          Enrolment Events are like open days or open weeks at
                          Busy Bees. It's a chance for you to visit your local
                          nursery, take a look around, and see some of exciting
                          activities in action.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <div className='accordion-header' id='headingFour1'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseFour1'
                        aria-expanded='false'
                        aria-controls='collapseFour1'
                      >
                        Can your child separate from you?
                      </button>
                    </div>
                    <div
                      id='collapseFour1'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingFour1'
                      data-bs-parent='#faqVersion1'
                    >
                      <div className='accordion-body'>
                        <p>
                          Enrolment Events are like open days or open weeks at
                          Busy Bees. It's a chance for you to visit your local
                          nursery, take a look around, and see some of exciting
                          activities in action.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <div className='accordion-header' id='headingFive1'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseFive1'
                        aria-expanded='false'
                        aria-controls='collapseFive1'
                      >
                        Can your child play with others?
                      </button>
                    </div>
                    <div
                      id='collapseFive1'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingFive1'
                      data-bs-parent='#faqVersion1'
                    >
                      <div className='accordion-body'>
                        <p>
                          Enrolment Events are like open days or open weeks at
                          Busy Bees. It's a chance for you to visit your local
                          nursery, take a look around, and see some of exciting
                          activities in action.
                        </p>
                      </div>
                    </div>
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

export default Faq;
