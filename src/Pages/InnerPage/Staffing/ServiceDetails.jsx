import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import CloudServices from './CloudServices';

const ServiceDetails = () => {
  const backgroundImage = '/images/staffing.jpg';
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'STAFFING'}
        breadCrumbSubtitle={<>Your Partner for Agile, Scalable, and Future-Ready Talent Solutions {" "}
    <br className="hidden md:block"/>{" "}
 across globally.</>}
        backgroundImage={backgroundImage}
      />
     
      <section className='py-[120px] pl-5 pb-[89px] 2xl:pb-14 bg-BodyBg4-0'>
        <div className='Container'>
          <div className='grid grid-cols-3 mt-[-62px] sm:mt-[62px] md:mt-[-60px]'>
            <div className='col-span-3 lg:col-span-2 lg:mr-7 2xl:mr-[84px]'>
              <h2 className='font-FiraSans font-semibold text-[32px] leading-[1.2] 2xl:text-[42px] text-gray-900'>
              Connecting <span className='text-PrimaryColor2-0'>Vision </span>  with Talent That Delivers
              </h2>

              {/* <h4 className='font-FiraSans font-medium text-[16px] sm:text-[26px] lg:text-2xl xl:text-[26px]'>
                Smart Talent. Seamless Delivery. Scalable Growth.
              </h4> */}

              <p className='font-FiraSans text-TextColor2-0 mt-[26px] tracking-[0.5px] leading-[1.6]'>
               At Coelate, we understand that great teams create great outcomes. With footprints across India, the UAE, and the U.S., we deliver workforce solutions that help businesses adapt, grow, and lead. From tech talent and interim professionals to full-time leadership, we align the right people with the right roles—quickly and efficiently.
              </p>
            </div>

            <div className="col-span-3 lg:col-span-1 flex items-center justify-center mt-8 lg:mt-0">
              <img 
                src="/images/Staffing/staffing-IT.png" 
                alt="Staffing" 
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section> 
      <CloudServices />
    </>
  );
};

export default ServiceDetails;
