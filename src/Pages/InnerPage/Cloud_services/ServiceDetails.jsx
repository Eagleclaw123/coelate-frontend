import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import CloudServices from './CloudServices';

const ServiceDetails = () => {
  const backgroundImage = '/images/cloudser2.jpg';

  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Cloud Services'}
        breadCrumbSubtitle={
          <>
            From Migration to Innovation: Coelate Delivers Cloud {" "}
    <br className="hidden md:block"/>{" "}
 Excellence on Your Terms
          </>
        }
        backgroundImage={backgroundImage}
      />

      <section className='py-[120px] pl-5 pb-14 lg:pb-24 bg-BodyBg4-0'>
        <div className='Container'>
          <div className='grid grid-cols-3 mt-[-62px] sm:mt-[22px] md:mt-[-62px]'>
            <div className='col-span-3 lg:col-span-2 lg:mr-7 2xl:mr-[84px]'>
              <h2 className='font-FiraSans font-semibold text-[32px] tracking-[0.5px] sm:text-2xl 2xl:text-[42px] 2xl:leading-[1.1] text-gray-900'>
                Accelerate Innovation with Scalable, <span className='text-PrimaryColor2-0'>Secure</span> Solutions
              </h2>

              <p className='font-FiraSans text-TextColor2-0 mt-[28px] tracking-[0.6px] leading-[1.6]'>
                At Coelate, we empower businesses to harness the full potential of leading cloud platforms:
                AWS, Microsoft Azure, and Google Cloud (GCP). Our vendor-agnostic approach ensures you receive
                a tailored cloud strategy that truly fits your needs—whether you're modernizing legacy systems,
                developing cloud-native applications, or optimizing costs across your digital infrastructure.
              </p>
            </div>

            <div className='col-span-3 lg:col-span-1 flex items-center justify-center mt-8 lg:mt-0'>
              <img
                src='/images/Cloudser/cloud-services-1.png'
                alt='CloudServices'
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
