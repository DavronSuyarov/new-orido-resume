import React from 'react';

const Info = () => {
  return (
    <>
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
                    You can express yourself however you want and whenever you
                    want, for free. You can customize a template or make your
                    own from scratch, with an immersive library at your
                    disposal. You can express yourself however you want and
                    whenever you free.
                  </p>
                  <p>
                    You can customize a template or make your own from scratch,
                    with an immersive library at your disposal.
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
                        <span className='relative inline-block'>Skills</span>{' '}
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
                              Photoshop <span className='font-bold'>(85%)</span>
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
                              Indesign <span className='font-bold'>(75%)</span>
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
                              <span className='company'>Amazon College</span>
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
                    <span className='title relative z-[2]'>Written Book</span>
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
                    <span className='title relative z-[2]'>Own Projects</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
