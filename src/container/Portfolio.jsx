import React from 'react';

const Portfolio = () => {
  return (
    <div
      className='orido_tm_section w-full h-auto clear-both float-left'
      id='portfolio'
    >
      <div className='orido_tm_portfolio w-full h-auto clear-both float-left bg-[#FFC448] px-0 pt-[120px] pb-[110px]'>
        <div className='container'>
          <div className='orido_tm_main_title w-full float-left'>
            <h3 className='tracking-[-2px] text-[56px] font-bold'>
              <span className='relative'>
                Look at my
                <br />
                recent projects
              </span>
            </h3>
          </div>
          <div className='portfolio_list w-full h-auto clear-both float-left mt-[65px] relative'>
            <ul className='owl-carousel gallery_zoom relative'>
              <li>
                <div className='list_inner'>
                  <div className='image relative overflow-hidden'>
                    <img
                      className='opacity-0 relative min-w-full'
                      src='assets/img/thumbs/37-40.jpg'
                      alt=''
                    />
                    <div
                      className='main absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300'
                      data-img-url='assets/img/portfolio/1.jpg'
                    />
                  </div>
                  <div className='details w-full float-left mt-[30px]'>
                    <span className='category text-[20px] inline-block mb-[13px]'>
                      Youtube
                    </span>
                    <h3 className='title text-[32px] tracking-[-1px] font-medium'>
                      <span className='inline-block relative'>Car Export</span>
                    </h3>
                  </div>
                  <a
                    className='orido_tm_full_link absolute inset-0 z-[5] popup-youtube'
                    href='https://www.youtube.com/watch?v=7e90gBu4pas'
                  />
                </div>
              </li>
              <li>
                <div className='list_inner'>
                  <div className='image relative overflow-hidden'>
                    <img
                      className='opacity-0 relative min-w-full'
                      src='assets/img/thumbs/37-40.jpg'
                      alt=''
                    />
                    <div
                      className='main absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300'
                      data-img-url='assets/img/portfolio/2.jpg'
                    />
                  </div>
                  <div className='details w-full float-left mt-[30px]'>
                    <span className='category text-[20px] inline-block mb-[13px]'>
                      Vimeo
                    </span>
                    <h3 className='title text-[32px] tracking-[-1px] font-medium'>
                      <span className='inline-block relative'>
                        Food delivery
                      </span>
                    </h3>
                  </div>
                  <a
                    className='orido_tm_full_link absolute inset-0 z-[5] popup-vimeo'
                    href='https://vimeo.com/337293658'
                  />
                </div>
              </li>
              <li>
                <div className='list_inner'>
                  <div className='image relative overflow-hidden'>
                    <img
                      className='opacity-0 relative min-w-full'
                      src='assets/img/thumbs/37-40.jpg'
                      alt=''
                    />
                    <div
                      className='main absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300'
                      data-img-url='assets/img/portfolio/3.jpg'
                    />
                  </div>
                  <div className='details w-full float-left mt-[30px]'>
                    <span className='category text-[20px] inline-block mb-[13px]'>
                      Soundcloud
                    </span>
                    <h3 className='title text-[32px] tracking-[-1px] font-medium'>
                      <span className='inline-block relative'>
                        Ecommerce Website
                      </span>
                    </h3>
                  </div>
                  <a
                    className='orido_tm_full_link absolute inset-0 z-[5] soundcloude_link mfp-iframe audio'
                    href='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
                  />
                </div>
              </li>
              <li>
                <div className='list_inner'>
                  <div className='image relative overflow-hidden'>
                    <img
                      className='opacity-0 relative min-w-full'
                      src='assets/img/thumbs/37-40.jpg'
                      alt=''
                    />
                    <div
                      className='main absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300'
                      data-img-url='assets/img/portfolio/4.jpg'
                    />
                  </div>
                  <div className='details w-full float-left mt-[30px]'>
                    <span className='category text-[20px] inline-block mb-[13px]'>
                      Details
                    </span>
                    <h3 className='title text-[32px] tracking-[-1px] font-medium'>
                      <span className='inline-block relative'>
                        Mockup Phone
                      </span>
                    </h3>
                  </div>
                  <a
                    className='orido_tm_full_link absolute inset-0 z-[5] details_link'
                    href='#'
                  />
                  <div className='hidden_content'>
                    <div className='popup_details'>
                      <div className='main_details'>
                        <div className='textbox'>
                          <p>
                            We live in a world where we need to move quickly and
                            iterate on our ideas as flexibly as possible.
                          </p>
                          <p>
                            Mockups are useful both for the creative phase of
                            the project - for instance when you're trying to
                            figure out your user flows or the proper visual
                            hierarchy - and the production phase when they phase
                            when they will represent the target product.
                            Building mockups strikes the ideal balance ease of
                            modification.
                          </p>
                        </div>
                        <div className='detailbox'>
                          <ul>
                            <li>
                              <span className='first'>Client</span>
                              <span>Alvaro Morata</span>
                            </li>
                            <li>
                              <span className='first'>Category</span>
                              <span>
                                <a href='#'>Detail</a>
                              </span>
                            </li>
                            <li>
                              <span className='first'>Date</span>
                              <span>April 22, 2022</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='additional_images'>
                        <ul>
                          <li>
                            <div className='list_inner'>
                              <div className='my_image'>
                                <img src='assets/img/thumbs/4-2.jpg' alt='' />
                                <div
                                  className='main'
                                  data-img-url='assets/img/service/1.jpg'
                                />
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className='list_inner'>
                              <div className='my_image'>
                                <img src='assets/img/thumbs/4-2.jpg' alt='' />
                                <div
                                  className='main'
                                  data-img-url='assets/img/service/2.jpg'
                                />
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className='list_inner'>
                              <div className='my_image'>
                                <img src='assets/img/thumbs/4-2.jpg' alt='' />
                                <div
                                  className='main'
                                  data-img-url='assets/img/service/3.jpg'
                                />
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className='list_inner'>
                  <div className='image relative overflow-hidden'>
                    <img
                      className='opacity-0 relative min-w-full'
                      src='assets/img/thumbs/37-40.jpg'
                      alt=''
                    />
                    <div
                      className='main absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300'
                      data-img-url='assets/img/portfolio/5.jpg'
                    />
                  </div>
                  <div className='details w-full float-left mt-[30px]'>
                    <span className='category text-[20px] inline-block mb-[13px]'>
                      Popup
                    </span>
                    <h3 className='title text-[32px] tracking-[-1px] font-medium'>
                      <span className='inline-block relative'>Felix Photo</span>
                    </h3>
                  </div>
                  <a
                    className='orido_tm_full_link absolute inset-0 z-[5] zoom'
                    href='assets/img/portfolio/5.jpg'
                  />
                </div>
              </li>
            </ul>
            <a className='prev_button' href='#'>
              <img
                className='svg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[30px] h-[30px] transition-all duration-300 ml-[-1px]'
                src='assets/img/svg/prev.svg'
                alt=''
              />
            </a>
            <a className='next_button' href='#'>
              <img
                className='svg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[30px] h-[30px] transition-all duration-300 ml-[1px]'
                src='assets/img/svg/next.svg'
                alt=''
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
