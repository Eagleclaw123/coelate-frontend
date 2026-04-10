import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import CloudServices from './CloudServices';

const ServiceDetails = () => {
  const backgroundImage = '/images/BPT1.jpeg';

  return (
    <>
      <BreadCrumb
        breadCrumbTitle={
          <>
            Business Technology
            <br />
            Platform
          </>
        }
        breadCrumbSubtitle={
          <>
            From Fragmented to Unified: Coelate Turns Integration
            {" "}
    <br className="hidden md:block"/>{" "}
 Complexity into Strategic Advantage
          </>
        }
        backgroundImage={backgroundImage}
      />

      <section className='py-[120px] pl-5 bg-BodyBg4-0'>
        <div className='Container'>
          <div className='grid grid-cols-3 mt-[-62px] md:mt-[-62px] sm:mt-[62px]'>
            <div className='col-span-3 lg:col-span-2 lg:mr-7 2xl:mr-[84px]'>
              <h2 className='font-FiraSans font-semibold text-[38px] leading-[1.2] sm:text-[42px] text-gray-900'>
                <span className='text-PrimaryColor2-0'>Business</span> Technology Platform
              </h2>
              <br />

              <h4 className='font-FiraSans font-medium text-[16px] sm:text-[26px] lg:text-2xl 2xl:text-[26px]'>
                Powering Connected, Intelligent Enterprises
              </h4>

              <p className='font-FiraSans text-TextColor2-0 text-[18px] lg:-[22px] mt-[26px] tracking-[0.5px] leading-[1.6]'>
                At Coelate, we specialize in harnessing SAP BTP Integration Suite to transform fragmented IT
                landscapes into unified business ecosystems. Our deep expertise in integration technologies
                enables organizations to connect applications, automate processes, and unlock real-time
                insights—creating the foundation for truly intelligent enterprises that innovate faster and
                scale smarter.
              </p>
            </div>

            <div className='col-span-3 lg:col-span-1 flex items-center justify-center mt-8 lg:mt-0'>
              <img
                src='/images/BTP/BTP-2.png'
                alt='BPT'
                className='w-full rounded-2xl object-cover'
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
