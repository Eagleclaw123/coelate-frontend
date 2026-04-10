import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import CloudServices from './CloudServices';

const ServiceDetails = () => {
  const backgroundImage = '/images/opentext.jpg';

  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Open Text'}
        breadCrumbSubtitle={
          <>
            From Content Chaos to Intelligent Workflows: Coelate Delivers {" "}
    <br className="hidden md:block"/>{" "}

            OpenText & VIM Excellence Empower Your Business with {" "}
    <br className="hidden md:block"/>{" "}

            Intelligent Content & Process Automation
          </>
        }
        backgroundImage={backgroundImage}
      />

      <section className='py-[120px] pl-5 bg-BodyBg4-0'>
        <div className='Container'>
          <div className='grid grid-cols-3 mt-[-62px] md:mt-[-62px] sm:mt-[62px]'>
            <div className='col-span-3 lg:col-span-2 lg:mr-7 2xl:mr-[84px]'>
              <h2 className='font-FiraSans font-semibold text-[34px] leading-[1.2] 2xl:text-[42px] text-gray-900'>
                OpenText & <span className='text-PrimaryColor2-0'>VIM Solutions</span>
              </h2>
              <br />
              <h4 className='font-FiraSans font-medium text-[16px] sm:text-[26px] lg:text-2xl 2xl:text-[26px]'>
                Empower Your Business with Intelligent Content & Process Automation
              </h4>

              <p className='font-FiraSans text-TextColor2-0 mt-[26px] tracking-[0.5px] leading-[1.6]'>
                At Coelate, we serve as your dedicated OpenText implementation partner,
                combining powerful enterprise content management solutions with specialized
                Vendor Invoice Management (VIM) consulting to transform how businesses
                handle information and automate critical processes. Our expertise spans the
                entire content lifecycle—from initial system design through implementation,
                integration, and continuous optimization. As an independent consultancy, we
                focus on your unique business requirements—creating flexible, integrated
                systems that eliminate silos and accelerate growth.
              </p>
            </div>

            <div className='col-span-3 lg:col-span-1 flex items-center justify-center mt-8 lg:mt-0'>
              <img
                src='/images/opentext/VIM-OPEN-TEXT.png'
                alt='OpenText VIM integration visual'
                className='w-full rounded-2xl object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      <CloudServices />
      <br />
    </>
  );
};

export default ServiceDetails;
