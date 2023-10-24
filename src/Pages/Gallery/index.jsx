import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <>
      <div>
        <div
          className='breadcumb-wrapper'
          data-bg-src='assets/img/breadcumb/breadcumb-bg.jpg'
        >
          <div className='container z-index-common'>
            <div className='breadcumb-content'>
              <h1 className='breadcumb-title'>Photo Gallery</h1>
              <p className='breadcumb-text'>
                Montessori Is A Nurturing And Holistic Approach To Learning
              </p>
              <div className='breadcumb-menu-wrap'>
                <ul className='breadcumb-menu'>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>Photo Gallery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='space'>
          <div className='container'>
            <div className='row gy-gx filter-active'>
              <div className='col-sm-6 col-lg-4 filter-item'>
                <div className='gallery-style1 layout2'>
                  <div className='gallery-img'>
                    <img src='assets/img/gallery/gal-3-1.jpg' alt='gallery' />
                    <a
                      href='assets/img/gallery/gal-3-1.jpg'
                      className='gallery-btn popup-image'
                    >
                      <i className='fal fa-plus' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-lg-4 filter-item'>
                <div className='gallery-style1 layout2'>
                  <div className='gallery-img'>
                    <img src='assets/img/gallery/gal-3-2.jpg' alt='gallery' />
                    <a
                      href='assets/img/gallery/gal-3-2.jpg'
                      className='gallery-btn popup-image'
                    >
                      <i className='fal fa-plus' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-lg-4 filter-item'>
                <div className='gallery-style1 layout2'>
                  <div className='gallery-img'>
                    <img src='assets/img/gallery/gal-3-3.jpg' alt='gallery' />
                    <a
                      href='assets/img/gallery/gal-3-3.jpg'
                      className='gallery-btn popup-image'
                    >
                      <i className='fal fa-plus' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-lg-4 filter-item'>
                <div className='gallery-style1 layout2'>
                  <div className='gallery-img'>
                    <img src='assets/img/gallery/gal-3-5.jpg' alt='gallery' />
                    <a
                      href='assets/img/gallery/gal-3-5.jpg'
                      className='gallery-btn popup-image'
                    >
                      <i className='fal fa-plus' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-lg-4 filter-item'>
                <div className='gallery-style1 layout2'>
                  <div className='gallery-img'>
                    <img src='assets/img/gallery/gal-3-4.jpg' alt='gallery' />
                    <a
                      href='assets/img/gallery/gal-3-4.jpg'
                      className='gallery-btn popup-image'
                    >
                      <i className='fal fa-plus' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 col-lg-4 filter-item'>
                <div className='gallery-style1 layout2'>
                  <div className='gallery-img'>
                    <img src='assets/img/gallery/gal-3-6.jpg' alt='gallery' />
                    <a
                      href='assets/img/gallery/gal-3-6.jpg'
                      className='gallery-btn popup-image'
                    >
                      <i className='fal fa-plus' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className='space-bottom'>
          <div className='container-lg'>
            <div className='title-area text-center'>
              <div className='sec-bubble'>
                <div className='bubble' />
                <div className='bubble' />
                <div className='bubble' />
              </div>
              <h2 className='sec-title'>Playroom Gallery</h2>
              <p className='sec-text'>
                We are constantly expanding the range of services offered
              </p>
            </div>
            <div className='row gx-40 gy-gx align-items-center'>
              <div className='col-6 col-sm order-1'>
                <div className='gallery-style1 layout2'>
                  <div className='gallery-img'>
                    <img src='assets/img/gallery/gal-4-1.jpg' alt='gallery' />
                    <a
                      href='assets/img/gallery/gal-4-1.jpg'
                      className='gallery-btn popup-image'
                    >
                      <i className='fal fa-plus' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-sm-7 col-md-8 col-xxl-auto order-3 order-sm-2'>
                <div className='gallery-style1 layout2'>
                  <div className='gallery-img'>
                    <img src='assets/img/gallery/gal-4-2.jpg' alt='gallery' />
                    <a
                      href='assets/img/gallery/gal-4-2.jpg'
                      className='gallery-btn popup-image'
                    >
                      <i className='fal fa-plus' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-6 col-sm order-2 order-sm-3'>
                <div className='gallery-style1 layout2'>
                  <div className='gallery-img'>
                    <img src='assets/img/gallery/gal-4-3.jpg' alt='gallery' />
                    <a
                      href='assets/img/gallery/gal-4-3.jpg'
                      className='gallery-btn popup-image'
                    >
                      <i className='fal fa-plus' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='space-bottom'>
          <div className='container'>
            <div className='title-area text-center'>
              <div className='sec-bubble'>
                <div className='bubble' />
                <div className='bubble' />
                <div className='bubble' />
              </div>
              <h2 className='sec-title'>Video Gallery</h2>
              <p className='sec-text'>
                We are constantly expanding the range of services offered
              </p>
            </div>
            <div
              className='vs-carousel gal-slider5'
              data-asnavfor='.gal-slider5-thumb'
              data-fade='true'
            >
              <div>
                <div className='img-box7'>
                  <div className='img-1 mega-hover'>
                    <img src='assets/img/gallery/gal-5-1.jpg' alt='about' />
                    <a
                      href='https://www.youtube.com/watch?v=_sI_Ps7JSEk'
                      className='play-btn popup-video position-center'
                    >
                      <i className='fas fa-play' />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className='img-box7'>
                  <div className='img-1 mega-hover'>
                    <img src='assets/img/gallery/gal-5-2.jpg' alt='about' />
                    <a
                      href='https://www.youtube.com/watch?v=_sI_Ps7JSEk'
                      className='play-btn popup-video position-center'
                    >
                      <i className='fas fa-play' />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className='img-box7'>
                  <div className='img-1 mega-hover'>
                    <img src='assets/img/gallery/gal-5-3.jpg' alt='about' />
                    <a
                      href='https://www.youtube.com/watch?v=_sI_Ps7JSEk'
                      className='play-btn popup-video position-center'
                    >
                      <i className='fas fa-play' />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className='img-box7'>
                  <div className='img-1 mega-hover'>
                    <img src='assets/img/gallery/gal-5-4.jpg' alt='about' />
                    <a
                      href='https://www.youtube.com/watch?v=_sI_Ps7JSEk'
                      className='play-btn popup-video position-center'
                    >
                      <i className='fas fa-play' />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className='img-box7'>
                  <div className='img-1 mega-hover'>
                    <img src='assets/img/gallery/gal-5-5.jpg' alt='about' />
                    <a
                      href='https://www.youtube.com/watch?v=_sI_Ps7JSEk'
                      className='play-btn popup-video position-center'
                    >
                      <i className='fas fa-play' />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className='img-box7'>
                  <div className='img-1 mega-hover'>
                    <img src='assets/img/gallery/gal-5-6.jpg' alt='about' />
                    <a
                      href='https://www.youtube.com/watch?v=_sI_Ps7JSEk'
                      className='play-btn popup-video position-center'
                    >
                      <i className='fas fa-play' />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className='img-box7'>
                  <div className='img-1 mega-hover'>
                    <img src='assets/img/gallery/gal-5-7.jpg' alt='about' />
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
            <div
              className='row vs-carousel gal-slider5-thumb gx-20'
              data-asnavfor='.gal-slider5'
              data-center-mode='true'
              data-xl-center-mode='true'
              data-ml-center-mode='true'
              data-lg-center-mode='true'
              data-slide-show={6}
              data-ml-slide-show={5}
              data-lg-slide-show={5}
              data-md-slide-show={4}
              data-sm-slide-show={2}
            >
              <div className='col-auto'>
                <div className='thumb-style1'>
                  <img src='assets/img/gallery/gal-5-1-1.jpg' alt='gallery' />
                </div>
              </div>
              <div className='col-auto'>
                <div className='thumb-style1'>
                  <img src='assets/img/gallery/gal-5-1-2.jpg' alt='gallery' />
                </div>
              </div>
              <div className='col-auto'>
                <div className='thumb-style1'>
                  <img src='assets/img/gallery/gal-5-1-3.jpg' alt='gallery' />
                </div>
              </div>
              <div className='col-auto'>
                <div className='thumb-style1'>
                  <img src='assets/img/gallery/gal-5-1-4.jpg' alt='gallery' />
                </div>
              </div>
              <div className='col-auto'>
                <div className='thumb-style1'>
                  <img src='assets/img/gallery/gal-5-1-5.jpg' alt='gallery' />
                </div>
              </div>
              <div className='col-auto'>
                <div className='thumb-style1'>
                  <img src='assets/img/gallery/gal-5-1-6.jpg' alt='gallery' />
                </div>
              </div>
              <div className='col-auto'>
                <div className='thumb-style1'>
                  <img src='assets/img/gallery/gal-5-1-7.jpg' alt='gallery' />
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

export default Gallery;
