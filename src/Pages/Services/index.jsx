import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <div>
        <div
          className='breadcumb-wrapper'
          data-bg-src='assets/img/breadcumb/breadcumb-bg.jpg'
        >
          <div className='container z-index-common'>
            <div className='breadcumb-content'>
              <h1 className='breadcumb-title'>Services</h1>
              <p className='breadcumb-text'>
                Montessori Is A Nurturing And Holistic Approach To Learning
              </p>
              <div className='breadcumb-menu-wrap'>
                <ul className='breadcumb-menu'>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section className='space-top space-extra-bottom'>
          <div className='container'>
            <div className='title-area text-center'>
              <div className='sec-bubble'>
                <div className='bubble' />
                <div className='bubble' />
                <div className='bubble' />
              </div>
              <h2 className='sec-title'>Enrol Your Child In A Session Now!</h2>
              <p className='sec-text'>
                Pre-school has an ‘open door policy’ and also offer a free trial
                session to all children.
              </p>
            </div>
            <div
              className='row vs-carousel'
              data-slide-show={4}
              data-ml-slide-show={3}
              data-lg-slide-show={3}
              data-md-slide-show={2}
            >
              <div className='service-style1 col-xl-3'>
                <div className='service-body'>
                  <div className='service-img'>
                    <a href='service-details.html'>
                      <img src='assets/img/service/sr-1-1.jpg' alt='service' />
                    </a>
                  </div>
                  <div className='service-content'>
                    <div className='service-icon'>
                      <img src='assets/img/icon/sr-1-1.svg' alt='icon' />
                    </div>
                    <h3 className='service-title'>
                      <a href='service-details.html'>Active Learning</a>
                    </h3>
                    <p className='service-text'>
                      We have a very large indoor space allowing us to have
                      designated areas for different types
                    </p>
                    <div className='service-bottom'>
                      <a href='service-details.html' className='service-btn'>
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='service-style1 col-xl-3'>
                <div className='service-body'>
                  <div className='service-img'>
                    <a href='service-details.html'>
                      <img src='assets/img/service/sr-1-2.jpg' alt='service' />
                    </a>
                  </div>
                  <div className='service-content'>
                    <div className='service-icon'>
                      <img src='assets/img/icon/sr-1-2.svg' alt='icon' />
                    </div>
                    <h3 className='service-title'>
                      <a href='service-details.html'>Child Care</a>
                    </h3>
                    <p className='service-text'>
                      We have a very large indoor space allowing us to have
                      designated areas for different types
                    </p>
                    <div className='service-bottom'>
                      <a href='service-details.html' className='service-btn'>
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='service-style1 col-xl-3'>
                <div className='service-body'>
                  <div className='service-img'>
                    <a href='service-details.html'>
                      <img src='assets/img/service/sr-1-3.jpg' alt='service' />
                    </a>
                  </div>
                  <div className='service-content'>
                    <div className='service-icon'>
                      <img src='assets/img/icon/sr-1-3.svg' alt='icon' />
                    </div>
                    <h3 className='service-title'>
                      <a href='service-details.html'>Healthy Meals</a>
                    </h3>
                    <p className='service-text'>
                      We have a very large indoor space allowing us to have
                      designated areas for different types
                    </p>
                    <div className='service-bottom'>
                      <a href='service-details.html' className='service-btn'>
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='service-style1 col-xl-3'>
                <div className='service-body'>
                  <div className='service-img'>
                    <a href='service-details.html'>
                      <img src='assets/img/service/sr-1-4.jpg' alt='service' />
                    </a>
                  </div>
                  <div className='service-content'>
                    <div className='service-icon'>
                      <img src='assets/img/icon/sr-1-4.svg' alt='icon' />
                    </div>
                    <h3 className='service-title'>
                      <a href='service-details.html'>Secure Environment</a>
                    </h3>
                    <p className='service-text'>
                      We have a very large indoor space allowing us to have
                      designated areas for different types
                    </p>
                    <div className='service-bottom'>
                      <a href='service-details.html' className='service-btn'>
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='space-extra-bottom'>
          <svg className='svg-hidden'>
            <clipPath id='service-clip1' clipPathUnits='objectBoundingBox'>
              <path d='M0.379,0.037 C0.459,-0.006,0.558,-0.006,0.638,0.037 L0.879,0.167 C0.959,0.21,1,0.289,1,0.375 V0.635 C1,0.721,0.959,0.8,0.879,0.843 L0.638,0.973 C0.558,1,0.459,1,0.379,0.973 L0.138,0.843 C0.058,0.8,0.008,0.721,0.008,0.635 V0.375 C0.008,0.289,0.058,0.21,0.138,0.167 L0.379,0.037' />
            </clipPath>
          </svg>
          <div className='container'>
            <div className='row justify-content-center justify-content-xl-start'>
              <div className='col-lg-10 col-xl-10 text-center text-xl-start'>
                <div className='title-area'>
                  <span className='sec-subtitle'>
                    What We Provide Our Services
                  </span>
                  <h2 className='sec-title'>
                    We are here to guide and direct your child in activities
                  </h2>
                </div>
              </div>
            </div>
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

export default Services;
