import React from 'react';
import { Link } from 'react-router-dom';

const ShopDetails = () => {
  return (
    <>
      <div>
        <div
          className='breadcumb-wrapper'
          data-bg-src='assets/img/breadcumb/breadcumb-bg.jpg'
        >
          <div className='container z-index-common'>
            <div className='breadcumb-content'>
              <h1 className='breadcumb-title'>Shop Details</h1>
              <p className='breadcumb-text'>
                Montessori Is A Nurturing And Holistic Approach To Learning
              </p>
              <div className='breadcumb-menu-wrap'>
                <ul className='breadcumb-menu'>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>Shop Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section className='vs-product-wrapper product-details space-top space-extra-bottom'>
          <div className='container'>
            <div className='row gx-60'>
              <div className='col-lg-6'>
                <div
                  className='product-big-img vs-carousel'
                  data-slide-show={1}
                  data-fade='true'
                  data-asnavfor='.product-thumb-slide'
                >
                  <div className='img'>
                    <img
                      src='assets/img/product/product1-1.png'
                      alt='Product Image'
                    />
                  </div>
                  <div className='img'>
                    <img
                      src='assets/img/product/product1-2.png'
                      alt='Product Image'
                    />
                  </div>
                  <div className='img'>
                    <img
                      src='assets/img/product/product1-3.png'
                      alt='Product Image'
                    />
                  </div>
                  <div className='img'>
                    <img
                      src='assets/img/product/product1-4.png'
                      alt='Product Image'
                    />
                  </div>
                  <div className='img'>
                    <img
                      src='assets/img/product/product1-5.png'
                      alt='Product Image'
                    />
                  </div>
                </div>
                <div
                  className='product-thumb-slide row vs-carousel'
                  data-slide-show={4}
                  data-md-slide-show={4}
                  data-sm-slide-show={3}
                  data-xs-slide-show={3}
                  data-asnavfor='.product-big-img'
                >
                  <div className='col-3'>
                    <div className='thumb'>
                      <img
                        src='assets/img/product/product1-1.png'
                        alt='Product Image'
                      />
                    </div>
                  </div>
                  <div className='col-3'>
                    <div className='thumb'>
                      <img
                        src='assets/img/product/product1-2.png'
                        alt='Product Image'
                      />
                    </div>
                  </div>
                  <div className='col-3'>
                    <div className='thumb'>
                      <img
                        src='assets/img/product/product1-3.png'
                        alt='Product Image'
                      />
                    </div>
                  </div>
                  <div className='col-3'>
                    <div className='thumb'>
                      <img
                        src='assets/img/product/product1-4.png'
                        alt='Product Image'
                      />
                    </div>
                  </div>
                  <div className='col-3'>
                    <div className='thumb'>
                      <img
                        src='assets/img/product/product1-5.png'
                        alt='Product Image'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 align-self-center'>
                <div className='product-about'>
                  <p className='product-price'>
                    $24.00 <del>$30.00</del>
                  </p>
                  <h2 className='product-title'>The Bubblegum Toy</h2>
                  <div className='product-rating'>
                    <div
                      className='star-rating'
                      role='img'
                      aria-label='Rated 5.00 out of 5'
                    >
                      <span style={{ width: '100%' }}>
                        Rated <strong className='rating'>5.00</strong> out of 5
                        based on <span className='rating'>5</span> customer
                        rating
                      </span>
                    </div>
                    (13)
                  </div>
                  <p className='product-text'>
                    We think your skin should look and refshed matter Nourish
                    your outer inner beauty with our essential oil infused
                    beauty products Lorem ipsum dolor sit amet, consectetur.
                  </p>
                  <div className='actions'>
                    <div className='quantity'>
                      <label htmlFor='quantity' className='screen-reader-text'>
                        Quantity:
                      </label>
                      <button className='quantity-minus qty-btn'>
                        <i className='fal fa-minus' />
                      </button>
                      <input
                        type='number'
                        id='quantity'
                        className='qty-input'
                        step={1}
                        min={1}
                        max={100}
                        name='quantity'
                        defaultValue={15}
                        title='Qty'
                      />
                      <button className='quantity-plus qty-btn'>
                        <i className='fal fa-plus' />
                      </button>
                    </div>
                    <a href='cart.html' className='vs-btn'>
                      Add to Cart
                    </a>
                    <a href='#' className='icon-btn'>
                      <i className='far fa-heart' />
                    </a>
                    <a href='#' className='icon-btn'>
                      <i className='far fa-search' />
                    </a>
                  </div>
                  <div className='product-getway'>
                    <span className='getway-title'>
                      GUARANTEED SAFE CHECKOUT:
                    </span>
                    <img src='assets/img/widget/cards-2.png' alt='cards' />
                  </div>
                  <div className='product_meta'>
                    <span className='sku_wrapper'>
                      SKU: <span className='sku'>#WE443</span>
                    </span>
                    <span className='posted_in'>
                      Category:
                      <a href='#' rel='tag'>
                        Toys
                      </a>
                      <a href='#' rel='tag'>
                        Kindergarten
                      </a>
                    </span>
                    <span>
                      Tags:{' '}
                      <a href='#' rel='tag'>
                        Kids
                      </a>
                      <a href='#' rel='tag'>
                        Popular
                      </a>
                      <a href='#' rel='tag'>
                        Baby
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='product-description'>
              <h2>Overview</h2>
              <div className='title-divider1' />
              <div className='description'>
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
                  children of all ages.
                </p>
                <p>
                  We are constantly expanding the range of services offered,
                  taking care of children of all ages. Our goal is to carefully
                  educate and develop children in a fun way. We strive to turn
                  the learning process into a bright event so that children
                  study with pleasure. We are constantly expanding the range of
                  services offered, taking care of children of all ages.
                </p>
                <div className='list-style1'>
                  <ul className='list-unstyled'>
                    <li>Comprehensive reporting on individual achievement</li>
                    <li>Educational field trips and school presentations</li>
                    <li>Individual attention in a small-class setting</li>
                    <li>Learning program with after-school care</li>
                    <li>Comprehensive reporting on individual achievement</li>
                    <li>Educational field trips and school presentations</li>
                  </ul>
                </div>
              </div>
              <h2>Reviews</h2>
              <div className='title-divider1' />
              <div className='woocommerce-Reviews'>
                <div className='vs-comments-wrap'>
                  <ul className='comment-list'>
                    <li className='review vs-comment-item'>
                      <div className='vs-post-comment'>
                        <div className='comment-avater'>
                          <img
                            src='assets/img/blog/comment-author-3.jpg'
                            alt='Comment Author'
                          />
                        </div>
                        <div className='comment-content'>
                          <h4 className='name h4'>Mark Jack</h4>
                          <span className='commented-on'>
                            <i className='fal fa-calendar-alt' />
                            22 April, 2023
                          </span>
                          <div className='review-rating'>
                            <div
                              className='star-rating'
                              role='img'
                              aria-label='Rated 5.00 out of 5'
                            >
                              <span style={{ width: '100%' }}>
                                Rated <strong className='rating'>5.00</strong>{' '}
                                out of 5 based on{' '}
                                <span className='rating'>1</span> customer
                                rating
                              </span>
                            </div>
                          </div>
                          <p className='text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className='review vs-comment-item'>
                      <div className='vs-post-comment'>
                        <div className='comment-avater'>
                          <img
                            src='assets/img/blog/comment-author-2.jpg'
                            alt='Comment Author'
                          />
                        </div>
                        <div className='comment-content'>
                          <h4 className='name h4'>John Deo</h4>
                          <span className='commented-on'>
                            <i className='fal fa-calendar-alt' />
                            26 April, 2023
                          </span>
                          <div className='review-rating'>
                            <div
                              className='star-rating'
                              role='img'
                              aria-label='Rated 5.00 out of 5'
                            >
                              <span style={{ width: '80%' }}>
                                Rated <strong className='rating'>5.00</strong>{' '}
                                out of 5 based on{' '}
                                <span className='rating'>1</span> customer
                                rating
                              </span>
                            </div>
                          </div>
                          <p className='text'>
                            The purpose of lorem ipsum is to create a natural
                            looking block of text (sentence, paragraph, page,
                            etc.) that doesn't distract from the layout. A
                            practice not without controversy, laying out pages
                            with meaningless filler text can be very useful when
                            the focus is meant to be on design, not content.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className='review vs-comment-item'>
                      <div className='vs-post-comment'>
                        <div className='comment-avater'>
                          <img
                            src='assets/img/blog/comment-author-1.jpg'
                            alt='Comment Author'
                          />
                        </div>
                        <div className='comment-content'>
                          <h4 className='name h4'>Tara sing</h4>
                          <span className='commented-on'>
                            <i className='fal fa-calendar-alt' />
                            26 April, 2023
                          </span>
                          <div className='review-rating'>
                            <div
                              className='star-rating'
                              role='img'
                              aria-label='Rated 5.00 out of 5'
                            >
                              <span style={{ width: '100%' }}>
                                Rated <strong className='rating'>4.00</strong>{' '}
                                out of 5 based on{' '}
                                <span className='rating'>1</span> customer
                                rating
                              </span>
                            </div>
                          </div>
                          <p className='text'>
                            The passage experienced a surge in popularity during
                            the 1960s when Letraset used it on their
                            dry-transfer sheets, and again during the 90s as
                            desktop publishers bundled the text with their
                            software. Today it's seen all around the web; on
                            templates, websites, and stock designs. Use our
                            generator
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='vs-comment-form review-form'>
                <div id='respond' className='comment-respond'>
                  <div className='form-title'>
                    <h3 className='blog-inner-title'>Post Review</h3>
                  </div>
                  <div className='row'>
                    <div className='form-group rating-select'>
                      <label>Your Rating</label>
                      <p className='stars'>
                        <span>
                          <a className='star-1' href='#'>
                            1
                          </a>
                          <a className='star-2' href='#'>
                            2
                          </a>
                          <a className='star-3' href='#'>
                            3
                          </a>
                          <a className='star-4' href='#'>
                            4
                          </a>
                          <a className='star-5' href='#'>
                            5
                          </a>
                        </span>
                      </p>
                    </div>
                    <div className='col-md-6 form-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Complete Name'
                      />
                    </div>
                    <div className='col-md-6 form-group'>
                      <input
                        type='email'
                        className='form-control'
                        placeholder='Email Address'
                      />
                    </div>
                    <div className='col-12 form-group'>
                      <textarea
                        className='form-control'
                        placeholder='Review'
                        defaultValue={''}
                      />
                    </div>
                    <div className='col-12 form-group mb-0'>
                      <button className='vs-btn'>Post Review</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2>Related Products</h2>
            <div className='title-divider1' />
            <div
              className='row vs-carousel'
              data-slide-show={4}
              data-lg-slide-show={3}
              data-md-slide-show={2}
            >
              <div className='col-md-6 col-lg-3 col-xl-3'>
                <div className='vs-product product-style1'>
                  <div className='product-img'>
                    <a href='shop-details.html'>
                      <img
                        src='assets/img/product/product1-1.png'
                        alt='Image'
                        className='w-100'
                      />
                    </a>
                  </div>
                  <div className='product-content'>
                    <span className='product-price'>
                      $56.00 <del>$20.00</del>
                    </span>
                    <h3 className='product-title'>
                      <a className='text-inherit' href='shop-details.html'>
                        The Bubblegum Toy
                      </a>
                    </h3>
                    <div
                      className='star-rating'
                      role='img'
                      aria-label='Rated 5.00 out of 5'
                    >
                      <span style={{ width: '100%' }}>
                        Rated <strong className='rating'>5.00</strong> out of 5
                      </span>
                    </div>
                    <div className='actions'>
                      <a href='cart.html' className='vs-btn'>
                        <i className='far fa-shopping-cart' />
                        Add to Cart
                      </a>
                      <a href='#' className='icon-btn'>
                        <i className='far fa-heart' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-lg-3 col-xl-3'>
                <div className='vs-product product-style1'>
                  <div className='product-img'>
                    <a href='shop-details.html'>
                      <img
                        src='assets/img/product/product1-2.png'
                        alt='Image'
                        className='w-100'
                      />
                    </a>
                  </div>
                  <div className='product-content'>
                    <span className='product-price'>$18.00</span>
                    <h3 className='product-title'>
                      <a className='text-inherit' href='shop-details.html'>
                        Table harmoni play
                      </a>
                    </h3>
                    <div
                      className='star-rating'
                      role='img'
                      aria-label='Rated 5.00 out of 5'
                    >
                      <span style={{ width: '100%' }}>
                        Rated <strong className='rating'>5.00</strong> out of 5
                      </span>
                    </div>
                    <div className='actions'>
                      <a href='cart.html' className='vs-btn'>
                        <i className='far fa-shopping-cart' />
                        Add to Cart
                      </a>
                      <a href='#' className='icon-btn'>
                        <i className='far fa-heart' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-lg-3 col-xl-3'>
                <div className='vs-product product-style1'>
                  <div className='product-img'>
                    <a href='shop-details.html'>
                      <img
                        src='assets/img/product/product1-3.png'
                        alt='Image'
                        className='w-100'
                      />
                    </a>
                  </div>
                  <div className='product-content'>
                    <span className='product-price'>
                      $89.00 <del>$99.00</del>
                    </span>
                    <h3 className='product-title'>
                      <a className='text-inherit' href='shop-details.html'>
                        Tommy Speak Head
                      </a>
                    </h3>
                    <div
                      className='star-rating'
                      role='img'
                      aria-label='Rated 5.00 out of 5'
                    >
                      <span style={{ width: '100%' }}>
                        Rated <strong className='rating'>5.00</strong> out of 5
                      </span>
                    </div>
                    <div className='actions'>
                      <a href='cart.html' className='vs-btn'>
                        <i className='far fa-shopping-cart' />
                        Add to Cart
                      </a>
                      <a href='#' className='icon-btn'>
                        <i className='far fa-heart' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-lg-3 col-xl-3'>
                <div className='vs-product product-style1'>
                  <div className='product-img'>
                    <a href='shop-details.html'>
                      <img
                        src='assets/img/product/product1-4.png'
                        alt='Image'
                        className='w-100'
                      />
                    </a>
                  </div>
                  <div className='product-content'>
                    <span className='product-price'>$30.00</span>
                    <h3 className='product-title'>
                      <a className='text-inherit' href='shop-details.html'>
                        Queen Radio Home
                      </a>
                    </h3>
                    <div
                      className='star-rating'
                      role='img'
                      aria-label='Rated 5.00 out of 5'
                    >
                      <span style={{ width: '100%' }}>
                        Rated <strong className='rating'>5.00</strong> out of 5
                      </span>
                    </div>
                    <div className='actions'>
                      <a href='cart.html' className='vs-btn'>
                        <i className='far fa-shopping-cart' />
                        Add to Cart
                      </a>
                      <a href='#' className='icon-btn'>
                        <i className='far fa-heart' />
                      </a>
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

export default ShopDetails;
