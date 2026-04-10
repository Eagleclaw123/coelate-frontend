import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import CloudServices from './CloudServices';

const ServiceDetails = () => {
  const backgroundImage = '/images/ariba.jpg';
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Ariba'} // Add a title if needed
        breadCrumbSubtitle={<>From Savings to Sustainability: Coelate Powers Smarter  {" "}
    <br className="hidden md:block"/>{" "}
Procurement with SAP Ariba Transform Procurement into {" "}
    <br className="hidden md:block"/>{" "}
 a Strategic Growth Engine</>}
        backgroundImage={backgroundImage}
      />
     
      <section className='py-[120px] pl-5 bg-BodyBg4-0'>
        <div className='Container'>
          <div className='grid grid-cols-3 mt-[-62px] md:mt-[-62px] sm:mt-[62px]'>
            <div className='col-span-3 lg:col-span-2 lg:mr-7 2xl:mr-[84px]'>
              <h2 className='font-FiraSans font-semibold text-[29px] leading-[1.2] 2xl:text-[42px] text-gray-900'>
                SAP <span className='text-PrimaryColor2-0'>Ariba</span> Consulting & Implementation Services
              </h2><br/>

              <h4 className='font-FiraSans font-medium text-[16px] sm:text-[26px] lg:text-2xl 2xl:text-[26px] '>Transform Procurement into a Strategic Growth Engine</h4>
              <p className='font-FiraSans text-TextColor2-0 mt-[15px] tracking-[0.5px] leading-[1.6]'>
                At Coelate, we understand procurement isn't just about cutting costs—it's about creating value. As your trusted SAP Ariba implementation partner, we help businesses like yours transform purchasing from a back-office function into a strategic advantage. Our approach blends technical expertise with practical business know-how to optimize your spend, foster meaningful supplier relationships, and build sustainability into every transaction.
              </p>
            </div>

            <div className="col-span-3 lg:col-span-1 flex items-center justify-center mt-8 lg:mt-0">
              <img 
                src="/images/Ariba/supply Chain.png" 
                alt="Ariba" 
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
