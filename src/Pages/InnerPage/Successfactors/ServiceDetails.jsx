import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import CloudServices from './CloudServices';

const ServiceDetails = () => {
  const backgroundImage = '/images/Hrsucess.jpg';
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'SuccessFactors'}
        breadCrumbSubtitle={<>Elevate HR Excellence with Coelate’s Human  Experience {" "}
    <br className="hidden md:block"/>{" "}
 Management Expertise From Hire to  Retire: Coelate {" "}
    <br className="hidden md:block"/>{" "}
 Powers HR Innovation with SAP SuccessFactors.</>}
        backgroundImage={backgroundImage}
      />
     
      <section className='py-[120px] pl-5 bg-BodyBg4-0'>
        <div className='Container'>
          <div className='grid grid-cols-3 mt-[-62px] md:mt-[-62px] sm:mt-[62px]'>
            <div className='col-span-3 lg:col-span-2 lg:mr-7 2xl:mr-[84px]'>
              <h2 className='font-FiraSans font-semibold text-[32px] leading-[1.2] 2xl:text-[42px] text-gray-900'>
                Transform<span className='text-PrimaryColor2-0'> HR Management</span>
              </h2>
              <p className='font-FiraSans text-TextColor2-0 mt-[26px] tracking-[0.5px] leading-[1.6]'>
                Elevate your human resources operations with Coelate's comprehensive SAP SuccessFactors expertise. We help forward-thinking
                organizations transform their HR functions into strategic growth drivers through effective implementation of the world's leading 
                cloud-based Human Experience Management (HXM) platform.<br/><br/>
                As an independent consultancy, we deliver carefully tailored solutions that align SAP SuccessFactors with your unique organizational 
                objectives—ensuring seamless integration, rapid user adoption, and measurable return on investment across your HR technology landscape.
              </p>
            </div>
            <div className="col-span-3 lg:col-span-1 flex items-center justify-center mt-8 lg:mt-0">
              <img 
                src="/images/HR_1.jpg" 
                alt="SuccessFactors" 
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
