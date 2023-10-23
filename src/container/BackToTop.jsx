import React from 'react';

const BackToTop = () => {
  return (
    <>
      <div className='mouse-cursor cursor-outer' />
      <div className='mouse-cursor cursor-inner' />
      <div className='progressbar'>
        <a href='#'>
          <span className='text'>To Top</span>
        </a>
        <span className='line' />
      </div>
    </>
  );
};

export default BackToTop;
