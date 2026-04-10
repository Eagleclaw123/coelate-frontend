import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import CloudServices from './CloudServices';

const ServiceDetails = () => {
  const backgroundImage = '/images/Analytis_1.jpg';
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Analytics'} // Add a title if needed
        breadCrumbSubtitle={<>Transform Raw Data into Strategic Decisions with{" "}
    <br className="hidden md:block"/>{" "}
 Power BI, Tableau & SAP SAC</>}
        backgroundImage={backgroundImage}
      />
     
      <section className='py-[80px] pl-5 bg-BodyBg4-0'>
        <div className='Container'>
          <div className='grid grid-cols-3 mt-[-62px] md:mt-[-62px] sm:mt-[62px] 2xl:mt-[1px]'>
            <div className='col-span-3 lg:col-span-2 lg:mr-7 2xl:mr-[84px]'>
              <h2 className='font-FiraSans font-semibold text-[28px] leading-[1.2] sm:text-[32px] 2xl:text-[40px] text-gray-900'>
                <span className='text-PrimaryColor2-0'> Analytics & Business</span> Intelligence Services
              </h2><br/>

              <h4 className='font-FiraSans font-medium text-[14px]  sm:text-[26px] lg:text-2xl 2xl:text-[26px] '>Unlock Business Insights That Drive Measurable Growth</h4>

              <p className='font-FiraSans text-TextColor2-0 mt-[15px] tracking-[0.5px] leading-[1.6]'>
                At Coelate, we help organizations unlock the full value of their data through market-leading analytics platforms: Microsoft Power BI, Tableau, and SAP Analytics Cloud (SAC). Our global team creates tailored solutions—from intuitive dashboards to predictive models and enterprise reporting—that transform complex data into clear business strategies.<br/><br/>
              </p>
            </div>

            <div className="col-span-3 lg:col-span-1 flex items-center justify-center mt-8 lg:mt-0">
              <img 
                src="/images/Analytics/Business-Analytics.png" 
                alt="Analytics" 
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
