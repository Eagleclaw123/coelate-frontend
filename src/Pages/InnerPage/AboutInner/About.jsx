import aboutThumb from '/images/about.jpg';
import aboutShape from '/images/about_shape_3.png';
import aboutShape2 from '/images/about_shape4.png';
import border from '/images/hero_border.png';
import thumb from '/images/like1.png';
import { Link } from 'react-router-dom';
import { FaRegThumbsUp } from 'react-icons/fa';

const About = () => {
  return (
    <section className='pb-[60px] pt-[70px] mt-[-110px] lg:pt-28 xl:pt-[170px] relative z-10'>
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 lg:gap-10 2xl:gap-16 items-center'>
          {/* Updated Image Section with Padding Top */}
          <div className='relative z-10 pt-20 sm:pt-14 md:pt-16 lg:pt-20'> {/* Added responsive padding here */}
            <span className='absolute right-40 top-0 -z-10 h-96 w-52 blur-[150px] bg-PrimaryColor-0 bg-opacity-70 rounded-full'></span>
            <img
              src={aboutThumb}
              draggable='false'
              className='w-full 2xl:w-[inherit] lg:-ml-4 xl:-ml-16 h-96 w-52 rounded-lg'
              alt="About Coelate Technologies"
            />
            <div className='absolute sm:mr-12 -top-[-38px] sm:-top-16 right-6 md:-top-8 lg:-top-14 sm:right-2 md:right-8 lg:right-0 xl:right-8 xl:-top-20 2xl:-top-[0px] 2xl:right-[6px] size-[85px] sm:size-[142px] md:size-[180px] lg:size-[140px] xl:size-[180px] bg-BodyBg-0 rounded-full flex items-center justify-center border-2 sm:border-[5px] border-white'>
              <div className='size-16 sm:size-24 md:size-32 lg:size-24 xl:size-[120px] animate-rotational'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 250.5 250.5'
                  className='overflow-visible'
                >
                  <path
                    d='M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125'
                    id='e-path-35ee1b2'
                    className='fill-transparent'
                  ></path>
                  <text className='font-FiraSans text-[32px] uppercase'>
                    <textPath
                      id='e-text-path-35ee1b2'
                      href='#e-path-35ee1b2'
                      startOffset='0%'
                      className='fill-HeadingColor-0'
                    >
                      * Coelate Technologies *
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <img
                  src={thumb}
                  draggable='false'
                  alt="Thumbs up icon"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className='relative z-10'>
            <h5 className='font-FiraSans font-medium  pl-3 text-sm sm:text-base text-PrimaryColor-0 uppercase mb-3'>
              About Coelate
            </h5>
            <h1 className='font-FiraSans font-semibold  pl-3 text-gray-900 text-[30px] leading-[1.2]  sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[40px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[52px] relative pb-4'>
              We Helps Grow the Creative <span className="text-PrimaryColor2-0"> IT Industry </span>
              <img
                src={border}
                draggable='false'
                className='absolute  pl-3 bottom-0'
                alt="Border decoration"
              />
            </h1>
            <p className='font-FiraSans text-[16px] text-TextColor2-0 pt-6 pl-3 tracking-[0.5px] leading-[1.6]'>            
            Founded in 2021, Coelate has rapidly emerged as a forward-thinking global IT consultancy dedicated to empowering organizations through innovative technology solutions. With strategically positioned offices across India, The UAE, and The United States, we bring together international expertise and deep local market understanding to deliver seamless implementation, support, and consulting services tailored to each client's unique needs.              <br/>
              <br/>
               </p>
            {/* <div className='grid items-center grid-cols-1 gap-7 sm:gap-1 md:gap-7 lg:gap-1 2xl:gap-7 sm:grid-cols-2 border-b border-BorderColor-0 mt-9 pb-7 mb-9'>
             
            </div> */}
            <div className='inline-block  pl-3 '>
              <Link to={'/contact'}>
                <button className='primary-btn3'>
                  <FaRegThumbsUp />
                  {`Get Started now`}
                </button>
              </Link>
            </div>
            <img
              src={aboutShape}
              draggable='false'
              className='absolute -z-10 bottom-5 left-72 animate-dance3'
              alt="Decorative shape"
            />
          </div>
        </div>
      </div>
      <img
        src={aboutShape2}
        draggable='false'
        className='absolute -z-10 bottom-14 right-5 animate-wiggle hidden 2xl:block'
        alt="Decorative shape"
      />
    </section>
  );
};

export default About;