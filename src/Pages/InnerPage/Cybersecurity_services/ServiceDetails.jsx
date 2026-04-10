import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import CloudServices from './CloudServices';

const ServiceDetails = () => {
  const backgroundImage = '/images/cyber.jpg';

  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Cybersecurity Services'}
        breadCrumbSubtitle={
          <>
            Safeguarding Your Digital Future with Expert {" "}
    <br className="hidden md:block"/>{" "}
Cybersecurity Solutions
          </>
        }
        backgroundImage={backgroundImage}
      />

      <section className='py-[120px] pl-5 pb-16 lg:pb-24 bg-BodyBg4-0'>
        <div className='Container'>
          <div className='grid grid-cols-3 mt-[-74px] sm:mt-[62px] md:mt-[-64px]'>
            <div className='col-span-3 lg:col-span-2 lg:mr-7 2xl:mr-[84px]'>
              <h2 className='font-FiraSans font-semibold text-[28px] leading-[1.2] 2xl:text-[42px] text-gray-900'>
                Safeguarding Your <span className='text-PrimaryColor2-0'>Digital Future</span> with Expert Cybersecurity Solutions
              </h2>
              <br />
              <h4 className='font-FiraSans font-medium text-[14px] sm:text-[26px] lg:text-2xl 2xl:text-[26px]'>
                Empowering Businesses to Thrive Securely in a Digital World
              </h4>

              <p className='font-FiraSans text-TextColor2-0 mt-[26px] tracking-[0.5px] leading-[1.6]'>
                In an era where cyber threats evolve hourly, Coelate delivers comprehensive cybersecurity
                consulting solutions tailored to protect your organization's most valuable assets, ensure
                regulatory compliance, and strengthen your digital resilience. With strategic offices across
                India, the UAE, and the US, we provide round-the-clock expertise to secure your operations on a
                global scale.
              </p>
            </div>

            <div className='col-span-3 lg:col-span-1 flex items-center justify-center mt-8 lg:mt-0'>
              <img
                src='/images/Cybersecu/cyber-security-4.png'
                alt='CyberSecurity'
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
