import React from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <>
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
                src={
                  theme === 'light'
                    ? 'assets/img/logo/logo.png'
                    : 'assets/img/logo/logo-dark.png'
                }
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
          <button
            id='theme-toggle'
            type='button'
            className='text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5'
            onClick={toggleTheme}
          >
            {theme === 'light' ? (
              <svg
                id='theme-toggle-dark-icon'
                className='hidden w-5 h-5'
                style={{ height: '25px', width: '25px' }}
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z'></path>
              </svg>
            ) : (
              <svg
                id='theme-toggle-light-icon'
                className='hidden w-5 h-5'
                fill='currentColor'
                style={{ height: '25px', width: '25px' }}
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
