import { useState } from 'react';
import './App.css';
import About from './container/About';
import BackToTop from './container/BackToTop';
import Blog from './container/Blog';
import Contact from './container/Contact';
import Feedback from './container/Feedback';
import Footer from './container/Footer';
import Hero from './container/Hero';
import Info from './container/Info';
import Navbar from './container/Navbar';
import Partners from './container/Partners';
import Portfolio from './container/Portfolio';
import Service from './container/Service';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const currentTheme =
      localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    setTheme(currentTheme);
  };

  return (
    <div
      className={`orido_tm_all_wrap w-full float-left clear-both h-auto relative ${theme}`}
      data-magic-cursor='show'
    >
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Info />
      <Service />
      <Portfolio />
      <Feedback />
      <Blog />
      <Partners />

      <Contact />
      <Footer />
      <BackToTop />

      {/* <div className='progressbar'>
        <a href='#'>
          <span className='text'>To Top</span>
        </a>
        <div id='preloader'>
          <div className='loader_line' />
        </div>
        <div
          className='orido_tm_all_wrap w-full float-left clear-both h-auto relative'
          data-magic-cursor='show'
        >
          <div className='orido_tm_mobile_menu w-full h-auto fixed top-0 left-0 hidden z-[10] middle:block'>
            <div className='mobile_menu_inner w-full h-auto float-left clear-both bg-white py-[10px] px-[20px]'>
              <div className='mobile_in w-full h-auto clear-both float-left flex items-center justify-between'>
                <div className='logo'>
                  <a href='#'>
                    <img
                      className='max-w-[90px] max-h-[70px]'
                      src='assets/img/logo/logo.png'
                      alt=''
                    />
                  </a>
                </div>
                <div className='trigger leading-[0]'>
                  <div className='hamburger hamburger--slider'>
                    <div className='hamburger-box'>
                      <div className='hamburger-inner' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='dropdown w-full h-auto clear-both float-left bg-white hidden'>
              <div className='dropdown_inner w-full h-auto clear-both float-left py-[25px] px-[20px]'>
                <ul className='anchor_nav'>
                  <li className='current float-left w-full'>
                    <a
                      className='text-black inline-block p-0 font-medium'
                      href='#home'
                    >
                      Home
                    </a>
                  </li>
                  <li className='float-left w-full'>
                    <a
                      className='text-black inline-block p-0 font-medium'
                      href='#about'
                    >
                      About
                    </a>
                  </li>
                  <li className='float-left w-full'>
                    <a
                      className='text-black inline-block p-0 font-medium'
                      href='#service'
                    >
                      Service
                    </a>
                  </li>
                  <li className='float-left w-full'>
                    <a
                      className='text-black inline-block p-0 font-medium'
                      href='#portfolio'
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className='float-left w-full'>
                    <a
                      className='text-black inline-block p-0 font-medium'
                      href='#blog'
                    >
                      Blog
                    </a>
                  </li>
                  <li className='float-left w-full'>
                    <a
                      className='text-black inline-block p-0 font-medium'
                      href='#contact'
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='orido_tm_header fixed top-0 left-0 right-0 z-[10] py-[25px] px-[150px] transition-all duration-300 middle:hidden'>
            <div className='header_in w-full flex items-center justify-between'>
              <div className='logo'>
                <a href='#'>
                  <img
                    className='max-w-[170px] max-h-[90px]'
                    src='assets/img/logo/logo.png'
                    alt=''
                  />
                </a>
              </div>
              <div className='menu relative'>
                <ul className='anchor_nav flex items-center'>
                  <li className='current mr-[50px]'>
                    <a className='text-[#5A5A5A]' href='#home'>
                      Home
                    </a>
                  </li>
                  <li className='mr-[50px]'>
                    <a className='text-[#5A5A5A]' href='#about'>
                      About
                    </a>
                  </li>
                  <li className='mr-[50px]'>
                    <a className='text-[#5A5A5A]' href='#service'>
                      Service
                    </a>
                  </li>
                  <li className='mr-[50px]'>
                    <a className='text-[#5A5A5A]' href='#portfolio'>
                      Portfolio
                    </a>
                  </li>
                  <li className='mr-[50px]'>
                    <a className='text-[#5A5A5A]' href='#blog'>
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href='#contact'>Contact</a>
                  </li>
                </ul>
                <span className='ccc' />
              </div>
              <div className='button'>
                <a
                  className='text-main-color font-bold font-dm inline-block rounded-[18px] px-[40px] pt-[17px] pb-[18px] transition-all duration-300'
                  href='https://themeforest.net/user/marketify/portfolio'
                  target='_blank'
                >
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
          <div
            className='orido_tm_hero w-full min-h-[100vh] relative float-left'
            id='home'
          >
            <div className='container min-h-[100vh]'>
              <div className='content min-h-[100vh] relative flex items-center justify-between'>
                <div className='details w-1/2 pr-[50px]'>
                  <div className='short mb-[32px]'>
                    <h3 className='text-[80px] font-medium tracking-[-4px] mb-[11px]'>
                      John Smith{' '}
                      <img
                        className='svg w-[45px] h-[45px] relative left-[-7px]'
                        src='assets/img/svg/hi.svg'
                        alt=''
                      />
                    </h3>
                    <span className='job inline-block relative text-[24px] pl-[97px]'>
                      Visual Designer
                    </span>
                  </div>
                  <div className='text mb-[70px]'>
                    <p className='text-[16px] text-[#5A5A5A] leading-[26px] max-w-[400px]'>
                      I'm creative designer based in New York, and I'm very
                      passionate and dedicated to my work.
                    </p>
                  </div>
                  <div className='buttons flex items-center'>
                    <div className='orido_tm_boxed_button'>
                      <a className='anchor' href='#contact'>
                        Say Hello{' '}
                        <img
                          className='svg'
                          src='assets/img/svg/send.svg'
                          alt=''
                        />
                      </a>
                    </div>
                    <div className='orido_tm_simple_button'>
                      <a className='line_effect anchor' href='#portfolio'>
                        My Works{' '}
                        <img
                          className='svg'
                          src='assets/img/svg/top-arrow.svg'
                          alt=''
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='orido_tm_follow absolute bottom-[120px] flex items-center'>
                <span className='text-[16px] font-medium'>Follow me:</span>
                <ul className='flex items-center relative top-[5px] ml-[20px]'>
                  <li className='mr-[20px]'>
                    <a
                      className='inline-block relative w-[56px] h-[56px] bg-[#F6F6F6] rounded-full transition-all duration-300'
                      href='#'
                    >
                      <img
                        className='svg absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] transition-all duration-300'
                        src='assets/img/svg/social/be.svg'
                        alt=''
                      />
                    </a>
                  </li>
                  <li className='mr-[20px]'>
                    <a
                      className='inline-block relative w-[56px] h-[56px] bg-[#F6F6F6] rounded-full transition-all duration-300'
                      href='#'
                    >
                      <img
                        className='svg absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] transition-all duration-300'
                        src='assets/img/svg/social/dribbble.svg'
                        alt=''
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className='inline-block relative w-[56px] h-[56px] bg-[#F6F6F6] rounded-full transition-all duration-300'
                      href='#'
                    >
                      <img
                        className='svg absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] transition-all duration-300'
                        src='assets/img/svg/social/instagarm.svg'
                        alt=''
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='orido_tm_down absolute left-[150px] bottom-[45px]'>
              <a className='anchor' href='#about'>
                <img
                  className='svg'
                  src='assets/img/svg/down_button.svg'
                  alt=''
                />
              </a>
            </div>
            <div className='avatar absolute w-1/2 right-0 bottom-[-8px]'>
              <div className='img relative inline-block'>
                <img
                  className='max-w-[700px] max-h-[760px]'
                  src='assets/img/hero/1.jpg'
                  alt=''
                />
                <div className='video_button'>
                  <a
                    className='popup-youtube'
                    href='https://www.youtube.com/watch?v=7e90gBu4pas'
                  >
                    <img
                      className='anim_circle'
                      src='assets/img/hero/welcome.png'
                      alt=''
                    />
                    <img className='svg' src='assets/img/svg/play.svg' alt='' />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className='orido_tm_section w-full h-auto clear-both float-left'
            id='about'
          >
            <div className='orido_tm_about w-full h-auto clear-both float-left bg-[#6244C5] px-0 pt-[180px] pb-[120px] mb-[120px]'>
              <div className='about_in w-full h-auto max-w-[1070px] mx-auto my-0 flex items-center'>
                <div className='left w-1/2 pr-[50px]'>
                  <div className='box bg-[#FFC448] inline-block overflow-hidden pb-[85px] relative'>
                    <h3 className='year font-oswald tracking-[-4px] font-extrabold text-[395px] relative mr-[-30px] mt-[-95px] text-[#6244C5] leading-[1]'>
                      10
                    </h3>
                    <span className='experience text-[24px] pl-[50px] mt-[6px] inline-block'>
                      Years of Experience
                    </span>
                    <h3 className='name text-[80px] text-[#6244C5] font-bold tracking-[-4px] leading-[1] uppercase absolute bottom-[-30px] left-[-20px] w-[300%]'>
                      John Smith
                    </h3>
                  </div>
                </div>
                <div className='right w-1/2 relative'>
                  <span className='element absolute top-0 right-full mr-[15px] mt-[-20px]'>
                    <img
                      className='svg w-[80px] h-[80px] text-transparent'
                      src='assets/img/svg/element.svg'
                      alt=''
                    />
                  </span>
                  <div className='orido_tm_main_title w-full float-left mb-[30px]'>
                    <h3 className='text-white tracking-[-2px] text-[56px] font-bold'>
                      <span className='relative'>About Me</span>
                    </h3>
                  </div>
                  <div className='text w-full float-left mb-[50px]'>
                    <p className='text-[rgba(255,255,255,.7)] font-light leading-[32px]'>
                      With 10 years experience as a professional Web developer,
                      I have acquired the skills and knowledge necessary to make
                      your project a success. I enjoy every step of the design
                      process, from discussion and collaboration.
                    </p>
                  </div>
                  <div className='short w-full float-left flex items-center'>
                    <div className='orido_tm_boxed_button'>
                      <a href='assets/img/cv/1.jpg' download>
                        Download CV{' '}
                        <img
                          className='svg'
                          src='assets/img/svg/paper.svg'
                          alt=''
                        />
                      </a>
                    </div>
                    <img
                      className='max-w-[200px] max-h-[200px] ml-[50px]'
                      src='assets/img/signature.png'
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='orido_tm_section w-full h-auto clear-both float-left'>
            <div className='orido_tm_informations w-full h-auto clear-both float-left mb-[125px]'>
              <div className='container'>
                <div className='informations_inner w-full h-auto flex'>
                  <div className='left w-1/2 pr-[100px]'>
                    <div className='orido_tm_main_title w-full float-left'>
                      <h3 className='tracking-[-2px] text-[56px] font-bold'>
                        <span className='relative'>
                          My expert
                          <br />
                          areas
                        </span>
                      </h3>
                    </div>
                    <div className='text w-full float-left mt-[30px] mb-[40px]'>
                      <p className='mb-[35px]'>
                        You can express yourself however you want and whenever
                        you want, for free. You can customize a template or make
                        your own from scratch, with an immersive library at your
                        disposal. You can express yourself however you want and
                        whenever you free.
                      </p>
                      <p>
                        You can customize a template or make your own from
                        scratch, with an immersive library at your disposal.
                      </p>
                    </div>
                    <div className='orido_tm_boxed_button'>
                      <a href='#'>
                        My Resume{' '}
                        <img
                          className='svg'
                          src='assets/img/svg/paper.svg'
                          alt=''
                        />
                      </a>
                    </div>
                  </div>
                  <div className='right w-1/2 top-[33px] relative'>
                    <div className='filter w-full float-left relative'>
                      <ul>
                        <li className='mr-[70px] inline-block'>
                          <a
                            className='current text-main-color font-dm font-bold inline-block relative'
                            href='#'
                            data-tab='tab_1'
                          >
                            <span className='relative inline-block'>
                              Skills
                            </span>{' '}
                            <img
                              className='svg w-[24px] h-[24px] relative ml-[6px]'
                              src='assets/img/svg/top-arrow.svg'
                              alt=''
                            />
                          </a>
                        </li>
                        <li className='mr-[70px] inline-block'>
                          <a
                            className='text-main-color font-dm font-bold inline-block relative'
                            href='#'
                            data-tab='tab_2'
                          >
                            <span className='relative inline-block'>
                              Experience
                            </span>{' '}
                            <img
                              className='svg w-[24px] h-[24px] relative ml-[6px]'
                              src='assets/img/svg/top-arrow.svg'
                              alt=''
                            />
                          </a>
                        </li>
                        <li className='inline-block'>
                          <a
                            className='text-main-color font-dm font-bold inline-block relative'
                            href='#'
                            data-tab='tab_3'
                          >
                            <span>Education</span>{' '}
                            <img
                              className='svg w-[24px] h-[24px] relative ml-[6px]'
                              src='assets/img/svg/top-arrow.svg'
                              alt=''
                            />
                          </a>
                        </li>
                      </ul>
                      <span className='ccc' />
                    </div>
                    <div className='content w-full float-left'>
                      <div
                        id='tab_1'
                        className='wrapper current w-full h-auto clear-both float-left'
                      >
                        <div className='skillbox w-full float-left mt-[110px]'>
                          <ul className='ml-[-20px]'>
                            <li className='mb-[45px] w-1/3 float-left pl-[20px]'>
                              <div className='list_inner w-full h-auto clear-both float-left relative'>
                                <span className='icon w-[40px] h-[40px] rounded-full bg-main-color inline-block relative mb-[3px]'>
                                  <span className='in w-[25px] h-[25px] inline-block absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] bg-white rounded-[6px]'>
                                    <img
                                      className='svg absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] z-[1] w-[16px] h-[16px]'
                                      src='assets/img/svg/figma.svg'
                                      alt=''
                                    />
                                  </span>
                                </span>
                                <p className='name font-dm text-black'>
                                  Figma <span className='font-bold'>(90%)</span>
                                </p>
                              </div>
                            </li>
                            <li className='mb-[45px] w-1/3 float-left pl-[20px]'>
                              <div className='list_inner w-full h-auto clear-both float-left relative'>
                                <span className='icon w-[40px] h-[40px] rounded-full bg-main-color inline-block relative mb-[3px]'>
                                  <span className='in w-[25px] h-[25px] inline-block absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] bg-white rounded-[6px]'>
                                    <img
                                      className='svg absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] z-[1] w-[16px] h-[16px]'
                                      src='assets/img/svg/Ae.svg'
                                      alt=''
                                    />
                                  </span>
                                </span>
                                <p className='name font-dm text-black'>
                                  After Effect{' '}
                                  <span className='font-bold'>(80%)</span>
                                </p>
                              </div>
                            </li>
                            <li className='mb-[45px] w-1/3 float-left pl-[20px]'>
                              <div className='list_inner w-full h-auto clear-both float-left relative'>
                                <span className='icon w-[40px] h-[40px] rounded-full bg-main-color inline-block relative mb-[3px]'>
                                  <span className='in w-[25px] h-[25px] inline-block absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] bg-white rounded-[6px]'>
                                    <img
                                      className='svg absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] z-[1] w-[16px] h-[16px]'
                                      src='assets/img/svg/photoshop.svg'
                                      alt=''
                                    />
                                  </span>
                                </span>
                                <p className='name font-dm text-black'>
                                  Photoshop{' '}
                                  <span className='font-bold'>(85%)</span>
                                </p>
                              </div>
                            </li>
                            <li className='mb-[45px] w-1/3 float-left pl-[20px]'>
                              <div className='list_inner w-full h-auto clear-both float-left relative'>
                                <span className='icon w-[40px] h-[40px] rounded-full bg-main-color inline-block relative mb-[3px]'>
                                  <span className='in w-[25px] h-[25px] inline-block absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] bg-white rounded-[6px]'>
                                    <img
                                      className='svg absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] z-[1] w-[16px] h-[16px]'
                                      src='assets/img/svg/Xd.svg'
                                      alt=''
                                    />
                                  </span>
                                </span>
                                <p className='name font-dm text-black'>
                                  XD <span className='font-bold'>(95%)</span>
                                </p>
                              </div>
                            </li>
                            <li className='mb-[45px] w-1/3 float-left pl-[20px]'>
                              <div className='list_inner w-full h-auto clear-both float-left relative'>
                                <span className='icon w-[40px] h-[40px] rounded-full bg-main-color inline-block relative mb-[3px]'>
                                  <span className='in w-[25px] h-[25px] inline-block absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] bg-white rounded-[6px]'>
                                    <img
                                      className='svg absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] z-[1] w-[16px] h-[16px]'
                                      src='assets/img/svg/illustrator.svg'
                                      alt=''
                                    />
                                  </span>
                                </span>
                                <p className='name font-dm text-black'>
                                  Illustrator{' '}
                                  <span className='font-bold'>(90%)</span>
                                </p>
                              </div>
                            </li>
                            <li className='mb-[45px] w-1/3 float-left pl-[20px]'>
                              <div className='list_inner w-full h-auto clear-both float-left relative'>
                                <span className='icon w-[40px] h-[40px] rounded-full bg-main-color inline-block relative mb-[3px]'>
                                  <span className='in w-[25px] h-[25px] inline-block absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] bg-white rounded-[6px]'>
                                    <img
                                      className='svg absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] z-[1] w-[16px] h-[16px]'
                                      src='assets/img/svg/Id.svg'
                                      alt=''
                                    />
                                  </span>
                                </span>
                                <p className='name font-dm text-black'>
                                  Indesign{' '}
                                  <span className='font-bold'>(75%)</span>
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        id='tab_2'
                        className='wrapper w-full h-auto clear-both float-left'
                      >
                        <div className='timelinebox w-full float-left mt-[100px]'>
                          <ul className='ml-[-20px]'>
                            <li className='mb-[37px] w-1/2 float-left pl-[20px]'>
                              <div className='list_inner w-full h-auto clear-both float-left relative'>
                                <div className='time w-full float-left mb-[25px]'>
                                  <span className='year text-[#6244C5] block mb-[2px]'>
                                    2021 - Present
                                  </span>
                                  <span className='company'>
                                    Bauen Software Inc.
                                  </span>
                                </div>
                                <div className='job w-full float-left'>
                                  <h3 className='text-[21px]'>
                                    <span className='inline-block relative'>
                                      Product Designer
                                    </span>
                                  </h3>
                                </div>
                              </div>
                            </li>
                            <li className='mb-[37px] w-1/2 float-left pl-[20px]'>
                              <div className='list_inner w-full h-auto clear-both float-left relative'>
                                <div className='time w-full float-left mb-[25px]'>
                                  <span className='year text-[#6244C5] block mb-[2px]'>
                                    2020 - 2021
                                  </span>
                                  <span className='company'>
                                    Bauen Software Inc.
                                  </span>
                                </div>
                                <div className='job w-full float-left'>
                                  <h3 className='text-[21px]'>
                                    <span className='inline-block relative'>
                                      UX Designer
                                    </span>
                                  </h3>
                                </div>
                              </div>
                            </li>
                            <li className='mb-[37px] w-1/2 float-left pl-[20px]'>
                              <div className='list_inner w-full h-auto clear-both float-left relative'>
                                <div className='time w-full float-left mb-[25px]'>
                                  <span className='year text-[#6244C5] block mb-[2px]'>
                                    2018 - 2020
                                  </span>
                                  <span className='company'>
                                    Bauen Software Inc.
                                  </span>
                                </div>
                                <div className='job w-full float-left'>
                                  <h3 className='text-[21px]'>
                                    <span className='inline-block relative'>
                                      UX Designer
                                    </span>
                                  </h3>
                                </div>
                              </div>
                            </li>
                            <li className='mb-[37px] w-1/2 float-left pl-[20px]'>
                              <div className='list_inner w-full h-auto clear-both float-left relative'>
                                <div className='time w-full float-left mb-[25px]'>
                                  <span className='year text-[#6244C5] block mb-[2px]'>
                                    2016 - 2018
                                  </span>
                                  <span className='company'>
                                    Bauen Software Inc.
                                  </span>
                                </div>
                                <div className='job w-full float-left'>
                                  <h3 className='text-[21px]'>
                                    <span className='inline-block relative'>
                                      Web Designer
                                    </span>
                                  </h3>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        id='tab_3'
                        className='wrapper w-full h-auto clear-both float-left'
                      >
                        <div className='timelinebox w-full float-left mt-[100px]'>
                          <ul className='ml-[-20px]'>
                            <li className='mb-[37px] w-1/2 float-left pl-[20px]'>
                              <div className='list_inner w-full h-auto clear-both float-left relative'>
                                <div className='time w-full float-left mb-[25px]'>
                                  <span className='year text-[#6244C5] block mb-[2px]'>
                                    2021 - Present
                                  </span>
                                  <span className='company'>
                                    Stanford Univercity
                                  </span>
                                </div>
                                <div className='job w-full float-left'>
                                  <h3 className='text-[21px]'>
                                    <span className='inline-block relative'>
                                      Web Design Course
                                    </span>
                                  </h3>
                                </div>
                              </div>
                            </li>
                            <li className='mb-[37px] w-1/2 float-left pl-[20px]'>
                              <div className='list_inner w-full h-auto clear-both float-left relative'>
                                <div className='time w-full float-left mb-[25px]'>
                                  <span className='year text-[#6244C5] block mb-[2px]'>
                                    2020 - 2021
                                  </span>
                                  <span className='company'>
                                    Art Univercity of New York
                                  </span>
                                </div>
                                <div className='job w-full float-left'>
                                  <h3 className='text-[21px]'>
                                    <span className='inline-block relative'>
                                      Art Director Course
                                    </span>
                                  </h3>
                                </div>
                              </div>
                            </li>
                            <li className='mb-[37px] w-1/2 float-left pl-[20px]'>
                              <div className='list_inner w-full h-auto clear-both float-left relative'>
                                <div className='time w-full float-left mb-[25px]'>
                                  <span className='year text-[#6244C5] block mb-[2px]'>
                                    2018 - 2020
                                  </span>
                                  <span className='company'>
                                    Amazon College
                                  </span>
                                </div>
                                <div className='job w-full float-left'>
                                  <h3 className='text-[21px]'>
                                    <span className='inline-block relative'>
                                      IOS Development
                                    </span>
                                  </h3>
                                </div>
                              </div>
                            </li>
                            <li className='mb-[37px] w-1/2 float-left pl-[20px]'>
                              <div className='list_inner w-full h-auto clear-both float-left relative'>
                                <div className='time w-full float-left mb-[25px]'>
                                  <span className='year text-[#6244C5] block mb-[2px]'>
                                    2017 - 2018
                                  </span>
                                  <span className='company'>
                                    Univercity of Texas
                                  </span>
                                </div>
                                <div className='job w-full float-left'>
                                  <h3 className='text-[21px]'>
                                    <span className='inline-block relative'>
                                      UX Expert
                                    </span>
                                  </h3>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='orido_tm_section w-full h-auto clear-both float-left'>
            <div className='orido_tm_counter w-full h-auto clear-both float-left mb-[92px]'>
              <div className='container'>
                <div className='counter_list w-full h-auto clear-both float-left'>
                  <ul className='ml-[-30px]'>
                    <li className='mb-[30px] float-left pl-[30px] w-1/4 text-center'>
                      <div className='list_inner w-full h-auto clear-both float-left relative'>
                        <h3 className='font-normal text-[64px] font-kaushan mb-[10px] relative z-[2]'>
                          <span
                            className='counter_item'
                            data-from={0}
                            data-to={219}
                            data-speed={2000}
                          >
                            0
                          </span>
                        </h3>
                        <span className='title relative z-[2]'>Trainings</span>
                      </div>
                    </li>
                    <li className='mb-[30px] float-left pl-[30px] w-1/4 text-center'>
                      <div className='list_inner w-full h-auto clear-both float-left relative'>
                        <h3 className='font-normal text-[64px] font-kaushan mb-[10px] relative z-[2]'>
                          <span
                            className='counter_item'
                            data-from={0}
                            data-to={48}
                            data-speed={2000}
                          >
                            0
                          </span>
                        </h3>
                        <span className='title relative z-[2]'>
                          Written Book
                        </span>
                      </div>
                    </li>
                    <li className='mb-[30px] float-left pl-[30px] w-1/4 text-center'>
                      <div className='list_inner w-full h-auto clear-both float-left relative'>
                        <h3 className='font-normal text-[64px] font-kaushan mb-[10px] relative z-[2]'>
                          <span
                            className='counter_item'
                            data-from={0}
                            data-to={527}
                            data-speed={2000}
                          >
                            0
                          </span>
                        </h3>
                        <span className='title relative z-[2]'>Listeners</span>
                      </div>
                    </li>
                    <li className='mb-[30px] float-left pl-[30px] w-1/4 text-center'>
                      <div className='list_inner w-full h-auto clear-both float-left relative'>
                        <h3 className='font-normal text-[64px] font-kaushan mb-[10px] relative z-[2]'>
                          <span
                            className='counter_item'
                            data-from={0}
                            data-to={12}
                            data-speed={2000}
                          >
                            0
                          </span>
                        </h3>
                        <span className='title relative z-[2]'>
                          Own Projects
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className='orido_tm_section w-full h-auto clear-both float-left'
            id='service'
          >
            <div className='orido_tm_service w-full h-auto clear-both float-left px-0 py-[120px] bg-[#fafafb]'>
              <div className='container'>
                <div className='orido_tm_main_title w-full float-left'>
                  <h3 className='tracking-[-2px] text-[56px] font-bold'>
                    <span className='relative'>
                      Services
                      <br />I Provide
                    </span>
                  </h3>
                </div>
                <div className='service_list w-full h-auto clear-both float-left mt-[100px] relative'>
                  <ul className='relative z-[2]'>
                    <li className='current relative'>
                      <div className='list_inner w-full flex items-center justify-between relative pt-[27px] pb-[26px] pl-[25px] pr-[35px]'>
                        <div className='left w-[40%] flex'>
                          <span className='number inline-block text-[#6244C5] text-[24px] font-dm transition-all duration-300'>
                            01
                          </span>
                          <h3 className='title text-[30px] font-medium pl-[30px] transition-all duration-300'>
                            UI/UX Design
                          </h3>
                        </div>
                        <div className='right w-[60%] flex items-center justify-between'>
                          <div className='text pr-[150px]'>
                            <p className='transition-all duration-300'>
                              You can customize a template or make your own from
                              scratch, with an immersive library at your
                              disposal...
                            </p>
                          </div>
                          <div className='arrow leading-[1]'>
                            <img
                              className='svg w-[25px] h-[25px] transition-all duration-300'
                              src='assets/img/svg/top-arrow.svg'
                              alt=''
                            />
                          </div>
                        </div>
                        <a
                          className='orido_tm_full_link absolute inset-0 z-[5]'
                          href='#'
                        />
                        <img
                          className='popup_service_image'
                          src='assets/img/service/1.jpg'
                          alt=''
                        />
                        <div className='service_hidden_details'>
                          <div className='service_popup_informations'>
                            <div className='descriptions'>
                              <p>
                                Orido is a leading web design agency with an
                                award-winning design team that creates
                                innovative, effective websites that capture your
                                brand, improve your conversion rates, and
                                maximize your revenue to help grow your business
                                and achieve your goals.
                              </p>
                              <p>
                                In today’s digital world, your website is the
                                first interaction consumers have with your
                                business. That's why almost 95 percent of a
                                user’s first impression relates to web design.
                                It’s also why web design services can have an
                                immense impact on your company’s bottom line.
                              </p>
                              <p>
                                That’s why more companies are not only
                                reevaluating their website’s design but also
                                partnering with Orido, the web design agency
                                that’s driven more than $2.4 billion in revenue
                                for its clients. With over 50 web design awards
                                under our belt, we're confident we can design a
                                custom website that drives sales for your unique
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className='relative'>
                      <div className='list_inner w-full flex items-center justify-between relative pt-[27px] pb-[26px] pl-[25px] pr-[35px]'>
                        <div className='left w-[40%] flex'>
                          <span className='number inline-block text-[#6244C5] text-[24px] font-dm transition-all duration-300'>
                            02
                          </span>
                          <h3 className='title text-[30px] font-medium pl-[30px] transition-all duration-300'>
                            User Research
                          </h3>
                        </div>
                        <div className='right w-[60%] flex items-center justify-between'>
                          <div className='text pr-[150px]'>
                            <p className='transition-all duration-300'>
                              You can customize a template or make your own from
                              scratch, with an immersive library at your
                              disposal...
                            </p>
                          </div>
                          <div className='arrow leading-[1]'>
                            <img
                              className='svg w-[25px] h-[25px] transition-all duration-300'
                              src='assets/img/svg/top-arrow.svg'
                              alt=''
                            />
                          </div>
                        </div>
                        <a
                          className='orido_tm_full_link absolute inset-0 z-[5]'
                          href='#'
                        />
                        <img
                          className='popup_service_image'
                          src='assets/img/service/2.jpg'
                          alt=''
                        />
                        <div className='service_hidden_details'>
                          <div className='service_popup_informations'>
                            <div className='descriptions'>
                              <p>
                                Orido is a leading web design agency with an
                                award-winning design team that creates
                                innovative, effective websites that capture your
                                brand, improve your conversion rates, and
                                maximize your revenue to help grow your business
                                and achieve your goals.
                              </p>
                              <p>
                                In today’s digital world, your website is the
                                first interaction consumers have with your
                                business. That's why almost 95 percent of a
                                user’s first impression relates to web design.
                                It’s also why web design services can have an
                                immense impact on your company’s bottom line.
                              </p>
                              <p>
                                That’s why more companies are not only
                                reevaluating their website’s design but also
                                partnering with Orido, the web design agency
                                that’s driven more than $2.4 billion in revenue
                                for its clients. With over 50 web design awards
                                under our belt, we're confident we can design a
                                custom website that drives sales for your unique
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className='relative'>
                      <div className='list_inner w-full flex items-center justify-between relative pt-[27px] pb-[26px] pl-[25px] pr-[35px]'>
                        <div className='left w-[40%] flex'>
                          <span className='number inline-block text-[#6244C5] text-[24px] font-dm transition-all duration-300'>
                            03
                          </span>
                          <h3 className='title text-[30px] font-medium pl-[30px] transition-all duration-300'>
                            UI Animation
                          </h3>
                        </div>
                        <div className='right w-[60%] flex items-center justify-between'>
                          <div className='text pr-[150px]'>
                            <p className='transition-all duration-300'>
                              You can customize a template or make your own from
                              scratch, with an immersive library at your
                              disposal...
                            </p>
                          </div>
                          <div className='arrow leading-[1]'>
                            <img
                              className='svg w-[25px] h-[25px] transition-all duration-300'
                              src='assets/img/svg/top-arrow.svg'
                              alt=''
                            />
                          </div>
                        </div>
                        <a
                          className='orido_tm_full_link absolute inset-0 z-[5]'
                          href='#'
                        />
                        <img
                          className='popup_service_image'
                          src='assets/img/service/3.jpg'
                          alt=''
                        />
                        <div className='service_hidden_details'>
                          <div className='service_popup_informations'>
                            <div className='descriptions'>
                              <p>
                                Orido is a leading web design agency with an
                                award-winning design team that creates
                                innovative, effective websites that capture your
                                brand, improve your conversion rates, and
                                maximize your revenue to help grow your business
                                and achieve your goals.
                              </p>
                              <p>
                                In today’s digital world, your website is the
                                first interaction consumers have with your
                                business. That's why almost 95 percent of a
                                user’s first impression relates to web design.
                                It’s also why web design services can have an
                                immense impact on your company’s bottom line.
                              </p>
                              <p>
                                That’s why more companies are not only
                                reevaluating their website’s design but also
                                partnering with Orido, the web design agency
                                that’s driven more than $2.4 billion in revenue
                                for its clients. With over 50 web design awards
                                under our belt, we're confident we can design a
                                custom website that drives sales for your unique
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className='relative'>
                      <div className='list_inner w-full flex items-center justify-between relative pt-[27px] pb-[26px] pl-[25px] pr-[35px]'>
                        <div className='left w-[40%] flex'>
                          <span className='number inline-block text-[#6244C5] text-[24px] font-dm transition-all duration-300'>
                            04
                          </span>
                          <h3 className='title text-[30px] font-medium pl-[30px] transition-all duration-300'>
                            Product Design
                          </h3>
                        </div>
                        <div className='right w-[60%] flex items-center justify-between'>
                          <div className='text pr-[150px]'>
                            <p className='transition-all duration-300'>
                              You can customize a template or make your own from
                              scratch, with an immersive library at your
                              disposal...
                            </p>
                          </div>
                          <div className='arrow leading-[1]'>
                            <img
                              className='svg w-[25px] h-[25px] transition-all duration-300'
                              src='assets/img/svg/top-arrow.svg'
                              alt=''
                            />
                          </div>
                        </div>
                        <a
                          className='orido_tm_full_link absolute inset-0 z-[5]'
                          href='#'
                        />
                        <img
                          className='popup_service_image'
                          src='assets/img/service/4.jpg'
                          alt=''
                        />
                        <div className='service_hidden_details'>
                          <div className='service_popup_informations'>
                            <div className='descriptions'>
                              <p>
                                Orido is a leading web design agency with an
                                award-winning design team that creates
                                innovative, effective websites that capture your
                                brand, improve your conversion rates, and
                                maximize your revenue to help grow your business
                                and achieve your goals.
                              </p>
                              <p>
                                In today’s digital world, your website is the
                                first interaction consumers have with your
                                business. That's why almost 95 percent of a
                                user’s first impression relates to web design.
                                It’s also why web design services can have an
                                immense impact on your company’s bottom line.
                              </p>
                              <p>
                                That’s why more companies are not only
                                reevaluating their website’s design but also
                                partnering with Orido, the web design agency
                                that’s driven more than $2.4 billion in revenue
                                for its clients. With over 50 web design awards
                                under our belt, we're confident we can design a
                                custom website that drives sales for your unique
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <span className='ccc' />
                </div>
              </div>
            </div>
          </div>
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
                            <span className='inline-block relative'>
                              Car Export
                            </span>
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
                                  We live in a world where we need to move
                                  quickly and iterate on our ideas as flexibly
                                  as possible.
                                </p>
                                <p>
                                  Mockups are useful both for the creative phase
                                  of the project - for instance when you're
                                  trying to figure out your user flows or the
                                  proper visual hierarchy - and the production
                                  phase when they phase when they will represent
                                  the target product. Building mockups strikes
                                  the ideal balance ease of modification.
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
                                      <img
                                        src='assets/img/thumbs/4-2.jpg'
                                        alt=''
                                      />
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
                                      <img
                                        src='assets/img/thumbs/4-2.jpg'
                                        alt=''
                                      />
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
                                      <img
                                        src='assets/img/thumbs/4-2.jpg'
                                        alt=''
                                      />
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
                            <span className='inline-block relative'>
                              Felix Photo
                            </span>
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
          <div className='orido_tm_section w-full h-auto clear-both float-left'>
            <div className='orido_tm_testimonials w-full h-auto clear-both float-left bg-[#fafafb] px-0 py-[120px]'>
              <div className='container'>
                <div className='orido_tm_main_title w-full float-left'>
                  <h3 className='tracking-[-2px] text-[56px] font-bold'>
                    <span className='relative'>
                      Valuable feedback
                      <br />
                      from my client
                    </span>
                  </h3>
                </div>
                <div className='testimonials_in w-full h-auto clear-both flex items-center pt-[75px]'>
                  <img
                    className='max-h-[400px] max-w-[350px]'
                    src='assets/img/testimonials/1.jpg'
                    alt=''
                  />
                  <div className='info pl-[70px]'>
                    <div className='text w-full float-left mb-[40px]'>
                      <p className='text-[24px] font-medium leading-[36px] font-dm'>
                        “Awesome website! Easy to use and edit, it has a lot of
                        options to design whatever you need, it is professional
                        and fun. I was very successful creating my profile using
                        designer which gave me unbelievable reach &amp;
                        appreciation.”
                      </p>
                    </div>
                    <div className='details w-full float-left pl-[41px]'>
                      <h3 className='name text-[24px] font-bold mb-[7px]'>
                        <span className='relative inline-block'>
                          Albert Walkers
                        </span>
                      </h3>
                      <span className='job text-[19px] text-[#707070]'>
                        Vivaco Group
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='orido_tm_section w-full h-auto clear-both float-left'
            id='blog'
          >
            <div className='orido_tm_news w-full h-auto clear-both float-left pt-[120px]'>
              <div className='container'>
                <div className='orido_tm_main_title w-full float-left'>
                  <h3 className='tracking-[-2px] text-[56px] font-bold'>
                    <span className='relative'>
                      From my
                      <br />
                      blog post
                    </span>
                  </h3>
                </div>
                <div className='news_list w-full h-auto clear-both float-left mt-[100px]'>
                  <ul className='ml-[-30px]'>
                    <li className='mb-[30px] float-left pl-[30px] w-1/2'>
                      <div className='list_inner w-full h-auto clear-both float-left relative flex items-center bg-[rgba(255,246,217,.4)] py-[20px] pr-[20px] pl-[30px]'>
                        <div className='left w-1/2 relative z-[1] pr-[10px]'>
                          <div className='metabox w-full float-left mb-[10px]'>
                            <ul>
                              <li className='mr-[15px] inline-block'>
                                <span className='text-[16px] relative pl-[10px]'>
                                  <a
                                    className='text-main-color transition-all duration-300'
                                    href='#'
                                  >
                                    John Smith
                                  </a>
                                </span>
                              </li>
                              <li className='inline-block'>
                                <span className='text-[16px] relative pl-[10px]'>
                                  02 June, 2022
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className='title w-full float-left mb-[43px]'>
                            <h3 className='leading-[.9]'>
                              <a href='#'>
                                Diversification of digital marketing stategies
                              </a>
                            </h3>
                          </div>
                          <div className='orido_tm_simple_button'>
                            <a className='line_effect' href='#'>
                              Read More{' '}
                              <img
                                className='svg'
                                src='assets/img/svg/top-arrow.svg'
                                alt=''
                              />
                            </a>
                          </div>
                        </div>
                        <div className='right w-1/2 relative z-[1] overflow-hidden'>
                          <img
                            className='relative opacity-0 min-w-full'
                            src='assets/img/thumbs/24-20.jpg'
                            alt=''
                          />
                          <div
                            className='main absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300'
                            data-img-url='assets/img/news/1.jpg'
                          />
                          <a
                            className='orido_tm_full_link absolute inset-0 z-[5]'
                            href='#'
                          />
                        </div>
                        <span className='shape absolute top-0 right-0 bottom-0'>
                          <img
                            className='svg w-full h-full'
                            src='assets/img/svg/Intersect.svg'
                            alt=''
                          />
                        </span>
                        <div className='news_hidden_details'>
                          <div className='news_popup_informations'>
                            <div className='text'>
                              <p>
                                Orido is a leading web design agency with an
                                award-winning design team that creates
                                innovative, effective websites that capture your
                                brand, improve your conversion rates, and
                                maximize your revenue to help grow your business
                                and achieve your goals.
                              </p>
                              <p>
                                In today’s digital world, your website is the
                                first interaction consumers have with your
                                business. That's why almost 95 percent of a
                                user’s first impression relates to web design.
                                It’s also why web design services can have an
                                immense impact on your company’s bottom line.
                              </p>
                              <p>
                                That’s why more companies are not only
                                reevaluating their website’s design but also
                                partnering with Orido, the web design agency
                                that’s driven more than $2.4 billion in revenue
                                for its clients. With over 50 web design awards
                                under our belt, we're confident we can design a
                                custom website that drives sales for your unique
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className='mb-[30px] float-left pl-[30px] w-1/2'>
                      <div className='list_inner w-full h-auto clear-both float-left relative flex items-center bg-[rgba(255,246,217,.4)] py-[20px] pr-[20px] pl-[30px]'>
                        <div className='left w-1/2 relative z-[1] pr-[10px]'>
                          <div className='metabox w-full float-left mb-[10px]'>
                            <ul>
                              <li className='mr-[15px] inline-block'>
                                <span className='text-[16px] relative pl-[10px]'>
                                  <a
                                    className='text-main-color transition-all duration-300'
                                    href='#'
                                  >
                                    John Smith
                                  </a>
                                </span>
                              </li>
                              <li className='inline-block'>
                                <span className='text-[16px] relative pl-[10px]'>
                                  02 June, 2022
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className='title w-full float-left mb-[43px]'>
                            <h3 className='leading-[.9]'>
                              <a href='#'>
                                Diversification of digital marketing stategies
                              </a>
                            </h3>
                          </div>
                          <div className='orido_tm_simple_button'>
                            <a className='line_effect' href='#'>
                              Read More{' '}
                              <img
                                className='svg'
                                src='assets/img/svg/top-arrow.svg'
                                alt=''
                              />
                            </a>
                          </div>
                        </div>
                        <div className='right w-1/2 relative z-[1] overflow-hidden'>
                          <img
                            className='relative opacity-0 min-w-full'
                            src='assets/img/thumbs/24-20.jpg'
                            alt=''
                          />
                          <div
                            className='main absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300'
                            data-img-url='assets/img/news/2.jpg'
                          />
                          <a
                            className='orido_tm_full_link absolute inset-0 z-[5]'
                            href='#'
                          />
                        </div>
                        <span className='shape absolute top-0 right-0 bottom-0'>
                          <img
                            className='svg w-full h-full'
                            src='assets/img/svg/Intersect.svg'
                            alt=''
                          />
                        </span>
                        <div className='news_hidden_details'>
                          <div className='news_popup_informations'>
                            <div className='text'>
                              <p>
                                Orido is a leading web design agency with an
                                award-winning design team that creates
                                innovative, effective websites that capture your
                                brand, improve your conversion rates, and
                                maximize your revenue to help grow your business
                                and achieve your goals.
                              </p>
                              <p>
                                In today’s digital world, your website is the
                                first interaction consumers have with your
                                business. That's why almost 95 percent of a
                                user’s first impression relates to web design.
                                It’s also why web design services can have an
                                immense impact on your company’s bottom line.
                              </p>
                              <p>
                                That’s why more companies are not only
                                reevaluating their website’s design but also
                                partnering with Orido, the web design agency
                                that’s driven more than $2.4 billion in revenue
                                for its clients. With over 50 web design awards
                                under our belt, we're confident we can design a
                                custom website that drives sales for your unique
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className='mb-[30px] float-left pl-[30px] w-1/2'>
                      <div className='list_inner w-full h-auto clear-both float-left relative flex items-center bg-[rgba(255,246,217,.4)] py-[20px] pr-[20px] pl-[30px]'>
                        <div className='left w-1/2 relative z-[1] pr-[10px]'>
                          <div className='metabox w-full float-left mb-[10px]'>
                            <ul>
                              <li className='mr-[15px] inline-block'>
                                <span className='text-[16px] relative pl-[10px]'>
                                  <a
                                    className='text-main-color transition-all duration-300'
                                    href='#'
                                  >
                                    John Smith
                                  </a>
                                </span>
                              </li>
                              <li className='inline-block'>
                                <span className='text-[16px] relative pl-[10px]'>
                                  02 June, 2022
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className='title w-full float-left mb-[43px]'>
                            <h3 className='leading-[.9]'>
                              <a href='#'>
                                Diversification of digital marketing stategies
                              </a>
                            </h3>
                          </div>
                          <div className='orido_tm_simple_button'>
                            <a className='line_effect' href='#'>
                              Read More{' '}
                              <img
                                className='svg'
                                src='assets/img/svg/top-arrow.svg'
                                alt=''
                              />
                            </a>
                          </div>
                        </div>
                        <div className='right w-1/2 relative z-[1] overflow-hidden'>
                          <img
                            className='relative opacity-0 min-w-full'
                            src='assets/img/thumbs/24-20.jpg'
                            alt=''
                          />
                          <div
                            className='main absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300'
                            data-img-url='assets/img/news/3.jpg'
                          />
                          <a
                            className='orido_tm_full_link absolute inset-0 z-[5]'
                            href='#'
                          />
                        </div>
                        <span className='shape absolute top-0 right-0 bottom-0'>
                          <img
                            className='svg w-full h-full'
                            src='assets/img/svg/Intersect.svg'
                            alt=''
                          />
                        </span>
                        <div className='news_hidden_details'>
                          <div className='news_popup_informations'>
                            <div className='text'>
                              <p>
                                Orido is a leading web design agency with an
                                award-winning design team that creates
                                innovative, effective websites that capture your
                                brand, improve your conversion rates, and
                                maximize your revenue to help grow your business
                                and achieve your goals.
                              </p>
                              <p>
                                In today’s digital world, your website is the
                                first interaction consumers have with your
                                business. That's why almost 95 percent of a
                                user’s first impression relates to web design.
                                It’s also why web design services can have an
                                immense impact on your company’s bottom line.
                              </p>
                              <p>
                                That’s why more companies are not only
                                reevaluating their website’s design but also
                                partnering with Orido, the web design agency
                                that’s driven more than $2.4 billion in revenue
                                for its clients. With over 50 web design awards
                                under our belt, we're confident we can design a
                                custom website that drives sales for your unique
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className='mb-[30px] float-left pl-[30px] w-1/2'>
                      <div className='list_inner w-full h-auto clear-both float-left relative flex items-center bg-[rgba(255,246,217,.4)] py-[20px] pr-[20px] pl-[30px]'>
                        <div className='left w-1/2 relative z-[1] pr-[10px]'>
                          <div className='metabox w-full float-left mb-[10px]'>
                            <ul>
                              <li className='mr-[15px] inline-block'>
                                <span className='text-[16px] relative pl-[10px]'>
                                  <a
                                    className='text-main-color transition-all duration-300'
                                    href='#'
                                  >
                                    John Smith
                                  </a>
                                </span>
                              </li>
                              <li className='inline-block'>
                                <span className='text-[16px] relative pl-[10px]'>
                                  02 June, 2022
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className='title w-full float-left mb-[43px]'>
                            <h3 className='leading-[.9]'>
                              <a href='#'>
                                Diversification of digital marketing stategies
                              </a>
                            </h3>
                          </div>
                          <div className='orido_tm_simple_button'>
                            <a className='line_effect' href='#'>
                              Read More{' '}
                              <img
                                className='svg'
                                src='assets/img/svg/top-arrow.svg'
                                alt=''
                              />
                            </a>
                          </div>
                        </div>
                        <div className='right w-1/2 relative z-[1] overflow-hidden'>
                          <img
                            className='relative opacity-0 min-w-full'
                            src='assets/img/thumbs/24-20.jpg'
                            alt=''
                          />
                          <div
                            className='main absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300'
                            data-img-url='assets/img/news/4.jpg'
                          />
                          <a
                            className='orido_tm_full_link absolute inset-0 z-[5]'
                            href='#'
                          />
                        </div>
                        <span className='shape absolute top-0 right-0 bottom-0'>
                          <img
                            className='svg w-full h-full'
                            src='assets/img/svg/Intersect.svg'
                            alt=''
                          />
                        </span>
                        <div className='news_hidden_details'>
                          <div className='news_popup_informations'>
                            <div className='text'>
                              <p>
                                Orido is a leading web design agency with an
                                award-winning design team that creates
                                innovative, effective websites that capture your
                                brand, improve your conversion rates, and
                                maximize your revenue to help grow your business
                                and achieve your goals.
                              </p>
                              <p>
                                In today’s digital world, your website is the
                                first interaction consumers have with your
                                business. That's why almost 95 percent of a
                                user’s first impression relates to web design.
                                It’s also why web design services can have an
                                immense impact on your company’s bottom line.
                              </p>
                              <p>
                                That’s why more companies are not only
                                reevaluating their website’s design but also
                                partnering with Orido, the web design agency
                                that’s driven more than $2.4 billion in revenue
                                for its clients. With over 50 web design awards
                                under our belt, we're confident we can design a
                                custom website that drives sales for your unique
                                business.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='orido_tm_section w-full h-auto clear-both float-left'>
            <div className='orido_tm_partners w-full h-auto clear-both float-left px-0 pt-[40px] pb-[110px]'>
              <div className='container'>
                <div className='partners_list w-full h-auto clear-both float-left mt-[35px] relative'>
                  <ul className='owl-carousel'>
                    <li className='item'>
                      <a href='#'>
                        <img
                          className='opacity-[.5] transition-all duration-300'
                          src='assets/img/partners/1.png'
                          alt=''
                        />
                      </a>
                    </li>
                    <li className='item'>
                      <a href='#'>
                        <img
                          className='opacity-[.5] transition-all duration-300'
                          src='assets/img/partners/2.png'
                          alt=''
                        />
                      </a>
                    </li>
                    <li className='item'>
                      <a href='#'>
                        <img
                          className='opacity-[.5] transition-all duration-300'
                          src='assets/img/partners/3.png'
                          alt=''
                        />
                      </a>
                    </li>
                    <li className='item'>
                      <a href='#'>
                        <img
                          className='opacity-[.5] transition-all duration-300'
                          src='assets/img/partners/4.png'
                          alt=''
                        />
                      </a>
                    </li>
                    <li className='item'>
                      <a href='#'>
                        <img
                          className='opacity-[.5] transition-all duration-300'
                          src='assets/img/partners/5.png'
                          alt=''
                        />
                      </a>
                    </li>
                    <li className='item'>
                      <a href='#'>
                        <img
                          className='opacity-[.5] transition-all duration-300'
                          src='assets/img/partners/6.png'
                          alt=''
                        />
                      </a>
                    </li>
                    <li className='item'>
                      <a href='#'>
                        <img
                          className='opacity-[.5] transition-all duration-300'
                          src='assets/img/partners/7.png'
                          alt=''
                        />
                      </a>
                    </li>
                    <li className='item'>
                      <a href='#'>
                        <img
                          className='opacity-[.5] transition-all duration-300'
                          src='assets/img/partners/8.png'
                          alt=''
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className='orido_tm_section w-full h-auto clear-both float-left'
            id='contact'
          >
            <div className='orido_tm_contact w-full h-auto clear-both float-left bg-main-color px-0 pt-[135px] pb-[120px] relative'>
              <div className='container'>
                <div className='infobox w-full float-left flex items-center justify-between mb-[116px]'>
                  <div className='video_button'>
                    <a
                      className='popup-youtube'
                      href='https://www.youtube.com/watch?v=7e90gBu4pas'
                    >
                      <img
                        className='anim_circle'
                        src='assets/img/contact/video.png'
                        alt=''
                      />
                      <img
                        className='svg'
                        src='assets/img/svg/play.svg'
                        alt=''
                      />
                    </a>
                  </div>
                  <div className='text py-0 px-[115px]'>
                    <h3 className='font-bold text-[56px] tracking-[-2px] text-white mb-[25px]'>
                      Let's work together
                    </h3>
                    <p className='font-light leading-[32px] text-[rgba(255,255,255,.7)]'>
                      You can express yourself however you want and whenever you
                      want, for free. You can customize a template or make your
                      own.
                    </p>
                  </div>
                  <div className='orido_tm_boxed_button'>
                    <a href='#'>
                      Say Hello{' '}
                      <img
                        className='svg'
                        src='assets/img/svg/send.svg'
                        alt=''
                      />
                    </a>
                  </div>
                </div>
                <div className='connect w-full flex items-center justify-between'>
                  <div className='left'>
                    <ul>
                      <li className='mr-[50px] inline-block'>
                        <span className='name block text-[rgba(255,255,255,.5)] text-[16px] mb-[10px]'>
                          Call:
                        </span>
                        <p className='block text-white text-[36px] font-dm font-medium'>
                          <a className='line_effect text-white' href='#'>
                            +1 (234) 567 890
                          </a>
                        </p>
                      </li>
                      <li className='inline-block'>
                        <span className='name block text-[rgba(255,255,255,.5)] text-[16px] mb-[10px]'>
                          Email:
                        </span>
                        <p className='block text-white text-[36px] font-dm font-medium'>
                          <a className='line_effect text-white' href='#'>
                            <span
                              className='__cf_email__'
                              data-cfemail='3b484e4b4b54494f7b4856524f5315585456'
                            >
                              [email&nbsp;protected]
                            </span>
                          </a>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className='right'>
                    <div className='orido_tm_follow flex items-center'>
                      <span>Follow me:</span>
                      <ul className='flex items-center relative top-[5px] ml-[20px]'>
                        <li className='mr-[20px]'>
                          <a
                            className='inline-block relative w-[56px] h-[56px] bg-[#f6f6f6] rounded-full transition-all duration-300'
                            href='#'
                          >
                            <img
                              className='svg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-all duration-300'
                              src='assets/img/svg/social/be.svg'
                              alt=''
                            />
                          </a>
                        </li>
                        <li className='mr-[20px]'>
                          <a
                            className='inline-block relative w-[56px] h-[56px] bg-[#f6f6f6] rounded-full transition-all duration-300'
                            href='#'
                          >
                            <img
                              className='svg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-all duration-300'
                              src='assets/img/svg/social/dribbble.svg'
                              alt=''
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            className='inline-block relative w-[56px] h-[56px] bg-[#f6f6f6] rounded-full transition-all duration-300'
                            href='#'
                          >
                            <img
                              className='svg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition-all duration-300'
                              src='assets/img/svg/social/instagarm.svg'
                              alt=''
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <span className='element absolute bottom-[-60px] left-0'>
                <img
                  className='svg w-full h-full text-transparent'
                  src='assets/img/svg/elements.svg'
                  alt=''
                />
              </span>
              <span className='element2 absolute right-[200px] top-[150px]'>
                <img
                  className='svg w-full h-full text-transparent'
                  src='assets/img/svg/element-2.svg'
                  alt=''
                />
              </span>
            </div>
          </div>
          <div className='orido_tm_section w-full h-auto clear-both float-left'>
            <div className='orido_tm_copyright w-full h-auto clear-both float-left bg-[#FFC448] py-[25px] px-0'>
              <div className='container'>
                <div className='copyright_inner w-full h-auto clear-both flex items-center justify-between'>
                  <div className='logo'>
                    <img
                      className='max-w-[170px] max-h-[80px]'
                      src='assets/img/logo/logo.png'
                      alt=''
                    />
                  </div>
                  <div className='copy'>
                    <p className='text-main-color text-[16px] font-medium'>
                      © 2023 by{' '}
                      <a
                        className='text-main-color'
                        href='https://themeforest.net/user/marketify'
                        target='_blank'
                      >
                        Marketify.
                      </a>{' '}
                      All Rights Reserved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div> */}
    </div>
  );
}

export default App;
