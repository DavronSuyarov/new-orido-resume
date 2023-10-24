import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
  return (
    <>
      <div>
        <div
          className='breadcumb-wrapper'
          data-bg-src='assets/img/breadcumb/breadcumb-bg.jpg'
        >
          <div className='container z-index-common'>
            <div className='breadcumb-content'>
              <h1 className='breadcumb-title'>Our Blogs</h1>
              <p className='breadcumb-text'>
                Montessori Is A Nurturing And Holistic Approach To Learning
              </p>
              <div className='breadcumb-menu-wrap'>
                <ul className='breadcumb-menu'>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>Our Blogs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section className='vs-blog-wrapper space-top space-extra-bottom'>
          <div className='container'>
            <div className='row gx-40'>
              <div className='col-lg-8'>
                <div className='vs-blog blog-single has-post-thumbnail'>
                  <div className='blog-img'>
                    <a href='blog-details.html'>
                      <img
                        src='assets/img/blog/blog-single-1-1.jpg'
                        alt='Blog Image'
                      />
                    </a>
                  </div>
                  <div className='blog-content'>
                    <div className='blog-meta'>
                      <a href='blog.html'>
                        <i className='far fa-calendar-alt' />
                        December 3, 2022
                      </a>
                      <span>
                        <i className='far fa-comment-alt-dots' />
                        15
                      </span>
                    </div>
                    <h2 className='blog-title'>
                      <a href='blog-details.html'>
                        A very warm welcome to our new Treasurer
                      </a>
                    </h2>
                    <p className='blog-text'>
                      Lorem ipsum dolor sit amet, consectetur adipisc ing elit,
                      sed do eiusmod tempor incididunt ut la bore et dolore
                      magna aliqua Lorem ipsum dolor sit amet, consectetur
                      adipisc ing elit, sed do eiusmod tempor incididunt ut la
                      bore et dolore magna aliqua.
                    </p>
                    <a href='blog-details.html' className='vs-btn style2'>
                      Read More
                    </a>
                  </div>
                </div>
                <div className='vs-blog blog-single has-post-thumbnail'>
                  <div
                    className='blog-img vs-carousel'
                    data-arrows='true'
                    data-slide-show={1}
                    data-fade='true'
                  >
                    <a href='blog-details.html'>
                      <img
                        src='assets/img/blog/blog-single-1-2.jpg'
                        alt='Blog Image'
                      />
                    </a>
                    <a href='blog-details.html'>
                      <img
                        src='assets/img/blog/blog-single-1-3.jpg'
                        alt='Blog Image'
                      />
                    </a>
                  </div>
                  <div className='blog-content'>
                    <div className='blog-meta'>
                      <a href='blog.html'>
                        <i className='far fa-calendar-alt' />
                        December 3, 2022
                      </a>
                      <span>
                        <i className='far fa-comment-alt-dots' />
                        15
                      </span>
                    </div>
                    <h2 className='blog-title'>
                      <a href='blog-details.html'>
                        A very warm welcome to our new Treasurer
                      </a>
                    </h2>
                    <p className='blog-text'>
                      Lorem ipsum dolor sit amet, consectetur adipisc ing elit,
                      sed do eiusmod tempor incididunt ut la bore et dolore
                      magna aliqua Lorem ipsum dolor sit amet, consectetur
                      adipisc ing elit, sed do eiusmod tempor incididunt ut la
                      bore et dolore magna aliqua.
                    </p>
                    <a href='blog-details.html' className='vs-btn style2'>
                      Read More
                    </a>
                  </div>
                </div>
                <div className='vs-blog blog-single'>
                  <div className='blog-content'>
                    <div className='blog-meta'>
                      <a href='blog.html'>
                        <i className='far fa-calendar-alt' />
                        December 3, 2022
                      </a>
                      <span>
                        <i className='far fa-comment-alt-dots' />
                        15
                      </span>
                    </div>
                    <h2 className='blog-title'>
                      <a href='blog-details.html'>
                        A very warm welcome to our new Treasurer
                      </a>
                    </h2>
                    <p className='blog-text'>
                      Lorem ipsum dolor sit amet, consectetur adipisc ing elit,
                      sed do eiusmod tempor incididunt ut la bore et dolore
                      magna aliqua Lorem ipsum dolor sit amet, consectetur
                      adipisc ing elit, sed do eiusmod tempor incididunt ut la
                      bore et dolore magna aliqua.
                    </p>
                    <a href='blog-details.html' className='vs-btn style2'>
                      Read More
                    </a>
                  </div>
                </div>
                <div className='vs-blog blog-single has-post-thumbnail'>
                  <div className='blog-img'>
                    <a
                      href='https://www.youtube.com/watch?v=_sI_Ps7JSEk'
                      className='play-btn popup-video'
                    >
                      <i className='fas fa-play' />
                    </a>
                    <a href='blog-details.html'>
                      <img
                        src='assets/img/blog/blog-single-1-4.jpg'
                        alt='Blog Image'
                      />
                    </a>
                  </div>
                  <div className='blog-content'>
                    <div className='blog-meta'>
                      <a href='blog.html'>
                        <i className='far fa-calendar-alt' />
                        December 3, 2022
                      </a>
                      <span>
                        <i className='far fa-comment-alt-dots' />
                        15
                      </span>
                    </div>
                    <h2 className='blog-title'>
                      <a href='blog-details.html'>
                        A very warm welcome to our new Treasurer
                      </a>
                    </h2>
                    <p className='blog-text'>
                      Lorem ipsum dolor sit amet, consectetur adipisc ing elit,
                      sed do eiusmod tempor incididunt ut la bore et dolore
                      magna aliqua Lorem ipsum dolor sit amet, consectetur
                      adipisc ing elit, sed do eiusmod tempor incididunt ut la
                      bore et dolore magna aliqua.
                    </p>
                    <a href='blog-details.html' className='vs-btn style2'>
                      Read More
                    </a>
                  </div>
                </div>
                <div className='vs-blog blog-single has-post-thumbnail'>
                  <div className='blog-audio'>
                    <iframe
                      title='Tell Me U Luv Me (with Trippie Redd) by Juice WRLD'
                      width={751}
                      height={200}
                      src='https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F830279092&show_artwork=true&maxwidth=751&maxheight=1000&dnt=1'
                    />
                  </div>
                  <div className='blog-content'>
                    <div className='blog-meta'>
                      <a href='blog.html'>
                        <i className='far fa-calendar-alt' />
                        December 3, 2022
                      </a>
                      <span>
                        <i className='far fa-comment-alt-dots' />
                        15
                      </span>
                    </div>
                    <h2 className='blog-title'>
                      <a href='blog-details.html'>
                        A very warm welcome to our new Treasurer
                      </a>
                    </h2>
                    <p className='blog-text'>
                      Lorem ipsum dolor sit amet, consectetur adipisc ing elit,
                      sed do eiusmod tempor incididunt ut la bore et dolore
                      magna aliqua Lorem ipsum dolor sit amet, consectetur
                      adipisc ing elit, sed do eiusmod tempor incididunt ut la
                      bore et dolore magna aliqua.
                    </p>
                    <a href='blog-details.html' className='vs-btn style2'>
                      Read More
                    </a>
                  </div>
                </div>
                <div className='vs-pagination'>
                  <a href='#' className='pagi-btn'>
                    Prev
                  </a>
                  <ul>
                    <li>
                      <a href='#'>1</a>
                    </li>
                    <li>
                      <a href='#'>2</a>
                    </li>
                    <li>
                      <a href='#'>3</a>
                    </li>
                    <li>
                      <a href='#'>...</a>
                    </li>
                    <li>
                      <a href='#'>12</a>
                    </li>
                  </ul>
                  <a href='#' className='pagi-btn'>
                    next
                  </a>
                </div>
              </div>
              <div className='col-lg-4'>
                <aside className='sidebar-area'>
                  <div className='widget widget_search'>
                    <h3 className='widget_title'>Search</h3>
                    <form className='search-form'>
                      <input type='text' placeholder='Search Here' />
                      <button type='submit'>
                        <i className='far fa-search' />
                      </button>
                    </form>
                  </div>
                  <div className='widget'>
                    <h3 className='widget_title'>Latest News</h3>
                    <div className='recent-post-wrap'>
                      <div className='recent-post'>
                        <div className='media-img'>
                          <a href='blog-details.html'>
                            <img
                              src='assets/img/blog/recent-post-1-1.jpg'
                              alt='Blog Image'
                            />
                          </a>
                        </div>
                        <div className='media-body'>
                          <div className='recent-post-meta'>
                            <a href='blog.html'>
                              <i className='far fa-calendar-alt' />
                              December 3, 2022
                            </a>
                          </div>
                          <h4 className='post-title'>
                            <a
                              className='text-inherit'
                              href='blog-details.html'
                            >
                              A very warm welcome to our new Treasurer
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className='recent-post'>
                        <div className='media-img'>
                          <a href='blog-details.html'>
                            <img
                              src='assets/img/blog/recent-post-1-2.jpg'
                              alt='Blog Image'
                            />
                          </a>
                        </div>
                        <div className='media-body'>
                          <div className='recent-post-meta'>
                            <a href='blog.html'>
                              <i className='far fa-calendar-alt' />
                              February 15, 2022
                            </a>
                          </div>
                          <h4 className='post-title'>
                            <a
                              className='text-inherit'
                              href='blog-details.html'
                            >
                              German kinder and garten mean child
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className='recent-post'>
                        <div className='media-img'>
                          <a href='blog-details.html'>
                            <img
                              src='assets/img/blog/recent-post-1-3.jpg'
                              alt='Blog Image'
                            />
                          </a>
                        </div>
                        <div className='media-body'>
                          <div className='recent-post-meta'>
                            <a href='blog.html'>
                              <i className='far fa-calendar-alt' />
                              Augest 20, 2022
                            </a>
                          </div>
                          <h4 className='post-title'>
                            <a
                              className='text-inherit'
                              href='blog-details.html'
                            >
                              English uses term to refer to the earliest
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='widget widget_categories'>
                    <h3 className='widget_title'>Categories</h3>
                    <ul>
                      <li>
                        <a href='blog.html'>TODDLER</a>
                      </li>
                      <li>
                        <a href='blog.html'>PRESCHOOL</a>
                      </li>
                      <li>
                        <a href='blog.html'>KINDERGARTEN</a>
                      </li>
                      <li>
                        <a href='blog.html'>PRE-K PROGRAM</a>
                      </li>
                      <li>
                        <a href='blog.html'>AFTER SCHOOL</a>
                      </li>
                    </ul>
                  </div>
                  <div className='widget'>
                    <h4 className='widget_title'>Photos Gallery</h4>
                    <div className='sidebar-gallery'>
                      <div className='gallery-thumb'>
                        <img
                          src='assets/img/widget/gal-1-1.jpg'
                          alt='Gallery Image'
                          className='w-100'
                        />
                        <a
                          href='assets/img/widget/gal-1-1.jpg'
                          className='popup-image gal-btn'
                        >
                          <i className='fal fa-plus' />
                        </a>
                      </div>
                      <div className='gallery-thumb'>
                        <img
                          src='assets/img/widget/gal-1-2.jpg'
                          alt='Gallery Image'
                          className='w-100'
                        />
                        <a
                          href='assets/img/widget/gal-1-2.jpg'
                          className='popup-image gal-btn'
                        >
                          <i className='fal fa-plus' />
                        </a>
                      </div>
                      <div className='gallery-thumb'>
                        <img
                          src='assets/img/widget/gal-1-3.jpg'
                          alt='Gallery Image'
                          className='w-100'
                        />
                        <a
                          href='assets/img/widget/gal-1-3.jpg'
                          className='popup-image gal-btn'
                        >
                          <i className='fal fa-plus' />
                        </a>
                      </div>
                      <div className='gallery-thumb'>
                        <img
                          src='assets/img/widget/gal-1-4.jpg'
                          alt='Gallery Image'
                          className='w-100'
                        />
                        <a
                          href='assets/img/widget/gal-1-4.jpg'
                          className='popup-image gal-btn'
                        >
                          <i className='fal fa-plus' />
                        </a>
                      </div>
                      <div className='gallery-thumb'>
                        <img
                          src='assets/img/widget/gal-1-5.jpg'
                          alt='Gallery Image'
                          className='w-100'
                        />
                        <a
                          href='assets/img/widget/gal-1-5.jpg'
                          className='popup-image gal-btn'
                        >
                          <i className='fal fa-plus' />
                        </a>
                      </div>
                      <div className='gallery-thumb'>
                        <img
                          src='assets/img/widget/gal-1-6.jpg'
                          alt='Gallery Image'
                          className='w-100'
                        />
                        <a
                          href='assets/img/widget/gal-1-6.jpg'
                          className='popup-image gal-btn'
                        >
                          <i className='fal fa-plus' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='widget'>
                    <h3 className='widget_title'>Video</h3>
                    <div className='vs-video-widget'>
                      <div className='video-thumb mega-hover'>
                        <img
                          src='assets/img/blog/intro-video-thumb.jpg'
                          alt='Video Thumb'
                          className='w-100'
                        />
                        <a
                          href='https://www.youtube.com/watch?v=_sI_Ps7JSEk'
                          className='play-btn popup-video position-center'
                        >
                          <i className='fas fa-play' />
                        </a>
                      </div>
                      <h4 className='video-title h5'>
                        <a
                          href='https://www.youtube.com/watch?v=_sI_Ps7JSEk'
                          className='text-inherit popup-video'
                        >
                          A very warm welcome to our new Treasurer
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div className='widget widget_tag_cloud'>
                    <h3 className='widget_title'>Upcoming Events</h3>
                    <div className='vs-event-widget'>
                      <div className='recent-event'>
                        <a href='event-details.html' className='event-date'>
                          <span className='month'>Dec</span>24
                        </a>
                        <div className='media-body'>
                          <h4 className='event-title'>
                            <a
                              href='event-details.html'
                              className='text-inherit'
                            >
                              Father`s Day Sundaes &amp; Shaving!
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className='recent-event'>
                        <a href='event-details.html' className='event-date'>
                          <span className='month'>Dec</span>24
                        </a>
                        <div className='media-body'>
                          <h4 className='event-title'>
                            <a
                              href='event-details.html'
                              className='text-inherit'
                            >
                              Father`s Day Sundaes &amp; Shaving!
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className='recent-event'>
                        <a href='event-details.html' className='event-date'>
                          <span className='month'>Dec</span>24
                        </a>
                        <div className='media-body'>
                          <h4 className='event-title'>
                            <a
                              href='event-details.html'
                              className='text-inherit'
                            >
                              Father`s Day Sundaes &amp; Shaving!
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='widget bg-vs-secondary'
                    data-bg-src='assets/img/bg/widget-bg-1-1.png'
                  >
                    <h4 className='mt-n2 text-white'>
                      Join together to make amazing things happen
                    </h4>
                    <p className='mb-4 pb-1 text-white'>
                      Get all the latest information, support and guidance about
                      the cost of living with kindergarten.
                    </p>
                    <a href='registration.html' className='vs-btn'>
                      Start Registration
                    </a>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blogs;
