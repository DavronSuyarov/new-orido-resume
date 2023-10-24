import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      {/* <div className='preloader'>
        <button className='vs-btn preloaderCls'>Cancel Preloader</button>
        <div className='preloader-inner'>
          <div className='loader' />
        </div>
      </div> */}
      <div className='vs-menu-wrapper'>
        <div className='vs-menu-area text-center'>
          <button className='vs-menu-toggle'>
            <i className='fal fa-times' />
          </button>
          <div className='mobile-logo'>
            <a href='index.html'>
              <img src='assets/img/logo.svg' alt='Kiddino' />
            </a>
          </div>
          <div className='vs-mobile-menu'>
            <ul>
              <li className='menu-item-has-children'>
                <a href='index.html'>Demo</a>
                <ul className='sub-menu'>
                  <li>
                    <a href='index.html'>Demo Style 1</a>
                  </li>
                  <li>
                    <a href='index-2.html'>Demo Style 2</a>
                  </li>
                  <li>
                    <a href='index-3.html'>Demo Style 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to='/about'>About Us</Link>
              </li>
              <li className='menu-item-has-children'>
                <a href='https://html.vecurosoft.com/kiddino/demo/match.html'>
                  Classes
                </a>
                <ul className='sub-menu'>
                  <li>
                    <Link to='/class'>Class</Link>
                  </li>
                  {/* <li>
                    <a href='class-2.html'>Class Style 2</a>
                  </li> */}
                  <li>
                    <a href='class-details.html'>Class Details</a>
                  </li>
                </ul>
              </li>
              <li className='menu-item-has-children'>
                <a href='blog.html'>Blog</a>
                <ul className='sub-menu'>
                  <li>
                    <a href='blog.html'>Blog</a>
                  </li>
                  <li>
                    <a href='blog-details.html'>Blog Details</a>
                  </li>
                </ul>
              </li>
              <li className='menu-item-has-children'>
                <a href='#'>Pages</a>
                <ul className='sub-menu'>
                  <li>
                    <a href='service.html'>Service</a>
                  </li>
                  <li>
                    <a href='service-details.html'>Service Details</a>
                  </li>
                  <li>
                    <a href='team.html'>Team</a>
                  </li>
                  <li>
                    <a href='team-details.html'>Team Details</a>
                  </li>
                  <li>
                    <a href='event-details.html'>Event Details</a>
                  </li>
                  <li>
                    <a href='gallery.html'>Gallery</a>
                  </li>
                  <li>
                    <a href='price-plan.html'>Price Plan</a>
                  </li>
                  <li>
                    <a href='faq.html'>FAQ</a>
                  </li>
                  <li>
                    <a href='shop.html'>Shop</a>
                  </li>
                  <li>
                    <a href='shop-details.html'>Shop Details</a>
                  </li>
                  <li>
                    <a href='cart.html'>Shopping Cart</a>
                  </li>
                  <li>
                    <a href='checkout.html'>Checkout</a>
                  </li>
                  <li>
                    <a href='registration.html'>Registration</a>
                  </li>
                  <li>
                    <a href='error.html'>Error Page</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href='contact.html'>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='sidemenu-wrapper d-none d-lg-block'>
        <div className='sidemenu-content'>
          <button className='closeButton sideMenuCls'>
            <i className='far fa-times' />
          </button>
          <div className='widget'>
            <div className='widget-about'>
              <div className='footer-logo'>
                <img src='assets/img/logo.svg' alt='Kiddino' />
              </div>
              <p className='mb-0'>
                We are constantly expanding the range of services offered,
                taking care of children of all ages.
              </p>
            </div>
          </div>
          <div className='widget'>
            <h3 className='widget_title'>Get In Touch</h3>
            <div>
              <p className='footer-text'>
                Monday to Friday: <span className='time'>8.30am – 02.00pm</span>
              </p>
              <p className='footer-text'>
                Saturday, Sunday: <span className='time'>Close</span>
              </p>
              <p className='footer-info'>
                <i className='fal fa-envelope' />
                Email:
                <a href='mailto:user@domainname.com'>user@domainname.com</a>
              </p>
              <p className='footer-info'>
                <i className='fas fa-mobile-alt' />
                Phone:
                <a href='tel:+4402076897888'>+44 (0) 207 689 7888</a>
              </p>
            </div>
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
                    <a className='text-inherit' href='blog-details.html'>
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
                    <a className='text-inherit' href='blog-details.html'>
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
                    <a className='text-inherit' href='blog-details.html'>
                      English uses term to refer to the earliest
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='popup-search-box d-none d-lg-block'>
        <button className='searchClose'>
          <i className='fal fa-times' />
        </button>
        <form action='#'>
          <input
            type='text'
            className='border-theme'
            placeholder='What are you looking for'
          />
          <button type='submit'>
            <i className='fal fa-search' />
          </button>
        </form>
      </div>
      <header className='vs-header header-layout1'>
        <div className='header-top'>
          <div className='container'>
            <div className='row justify-content-between align-items-center'>
              <div className='col-auto d-none d-lg-block'>
                <div className='header-links style-white'>
                  <ul>
                    <li>
                      <a href='registration.html'>
                        <i className='far fa-user-circle' />
                        Login &amp; Register
                      </a>
                    </li>
                    <li>
                      <a href='contact.html' className='searchBoxTggler'>
                        <i className='far fa-search' />
                        Search Keyword
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-auto text-center'>
                <div className='header-links style2 style-white'>
                  <ul>
                    <li>
                      <i className='fas fa-envelope' />
                      Email:
                      <a href='mailto:user@example.com'>user@example.com</a>
                    </li>
                    <li>
                      <i className='fas fa-mobile-alt' />
                      Phone:
                      <a href='tel:+4402076897888'>+44 (0) 207 689 7888</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='sticky-wrap'>
          <div className='sticky-active'>
            <div className='container'>
              <div className='row gx-3 align-items-center justify-content-between'>
                <div className='col-8 col-sm-auto'>
                  <div className='header-logo'>
                    <a href='index.html'>
                      <img src='assets/img/logo.svg' alt='logo' />
                    </a>
                  </div>
                </div>
                <div className='col text-end text-lg-center'>
                  <nav className='main-menu menu-style1 d-none d-lg-block'>
                    <ul>
                      <li className='menu-item-has-children'>
                        <Link to='/'>Home</Link>
                        {/* <ul className='sub-menu'>
                          <li>
                            <a href='index.html'>Demo Style 1</a>
                          </li>
                          <li>
                            <a href='index-2.html'>Demo Style 2</a>
                          </li>
                          <li>
                            <a href='index-3.html'>Demo Style 3</a>
                          </li>
                        </ul> */}
                      </li>
                      <li>
                        <Link to='/about'>About Us</Link>
                      </li>
                      <li className='menu-item-has-children'>
                        <a href='https://html.vecurosoft.com/kiddino/demo/match.html'>
                          Classes
                        </a>
                        <ul className='sub-menu'>
                          <li>
                            <Link to='/class'>Class</Link>
                          </li>
                          {/* <li>
                            <a href='class-2.html'>Class Style 2</a>
                          </li> */}
                          <li>
                            <Link to='/class-details'>Class Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li className='menu-item-has-children'>
                        <a href='blog.html'>Blogs</a>
                        <ul className='sub-menu'>
                          <li>
                            <Link to='/blogs'>Blog</Link>
                          </li>
                          <li>
                            <Link to='/blog-detail'>Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li className='menu-item-has-children mega-menu-wrap'>
                        <a href='#'>Pages</a>
                        <ul className='mega-menu'>
                          {/* <li>
                            <a href='shop.html'>Pagelist 1</a>
                            <ul>
                              <li>
                                <a href='index.html'>Demo Style 1</a>
                              </li>
                              <li>
                                <a href='index-2.html'>Demo Style 2</a>
                              </li>
                              <li>
                                <a href='index-3.html'>Demo Style 3</a>
                              </li>
                              <li>
                                <a href='class.html'>Class Style 1</a>
                              </li>
                              <li>
                                <a href='class-2.html'>Class Style 2</a>
                              </li>
                              <li>
                                <a href='class-details.html'>Class Details</a>
                              </li>
                            </ul>
                          </li> */}
                          <li>
                            <a href='#'>Pagelist 2</a>
                            <ul>
                              {/* <li>
                                <a href='about.html'>About Us</a>
                              </li> */}
                              <li>
                                <Link to='/services'>Service</Link>
                              </li>
                              <li>
                                <Link to='/service-details'>
                                  Service Details
                                </Link>
                              </li>
                              <li>
                                <Link to='/team'>Team</Link>
                              </li>
                              <li>
                                <Link to='/team-details'>Team Details</Link>
                              </li>
                              <li>
                                <Link to='/gallery'>Gallery</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>Pagelist 3</a>
                            <ul>
                              <li>
                                <Link to='event'>Events</Link>
                              </li>
                              <li>
                                <Link to='/shop'>Shop</Link>
                              </li>
                              <li>
                                <Link to='/shop-detail'>Shop Details</Link>
                              </li>
                              <li>
                                <Link to='/cart'>Shopping Cart</Link>
                              </li>
                              <li>
                                <Link to='/checkout'>Checkout</Link>
                              </li>
                              <li>
                                <Link to='/price'>Price Plan</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>Pagelist 4</a>
                            <ul>
                              <li>
                                <Link to='/faq'>FAQ</Link>
                              </li>
                              <li>
                                <a href='blog.html'>Blog</a>
                              </li>
                              <li>
                                <a href='blog-details.html'>Blog Details</a>
                              </li>
                              <li>
                                <Link to='/registration'>Registration</Link>
                              </li>
                              <li>
                                <Link to='/contact'>Contact</Link>
                              </li>
                              <li>
                                <Link to='/error'>Error Page</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to='/contact'>Contact</Link>
                      </li>
                    </ul>
                  </nav>
                  <button className='vs-menu-toggle d-inline-block d-lg-none'>
                    <i className='fal fa-bars' />
                  </button>
                </div>
                <div className='col-auto d-none d-lg-block'>
                  <div className='header-icons'>
                    <button className='simple-icon sideMenuToggler'>
                      <i className='far fa-bars' />
                    </button>
                  </div>
                </div>
                <div className='col-auto d-none d-xl-block'>
                  <a href='contact.html' className='vs-btn sideMenuToggler'>
                    Apply Today
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
