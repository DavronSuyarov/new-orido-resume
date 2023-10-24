import React from 'react';

const Error = () => {
  return (
    <>
      <section
        className='vs-error-wrapper space-top space-extra-bottom'
        data-bg-src='assets/img/bg/error-bg.png'
      >
        <div className='container'>
          <div className='row gx-100 text-center text-lg-start'>
            <div className='col-lg-5 col-xl-auto'>
              <img src='assets/img/shape/error-shape.svg' alt='shape' />
            </div>
            <div className='col-lg-7 col-xl'>
              <div className='error-content'>
                <h1 className='error-number'>404</h1>
                <h2 className='error-title'>Ops, Page not found</h2>
                <p className='error-text'>
                  You can search for the page you want here or return to the
                  homepage.
                </p>
                <form action='#' className='search-inline'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Search Keyword....'
                  />
                  <button>
                    <i className='far fa-search' />
                  </button>
                </form>
                <a href='index.html' className='vs-btn style4'>
                  Back To Homepage
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
