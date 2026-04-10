import workIcon from '/images/steps_1.png';
import workIcon3 from '/images/steps_3.png';
import WorkCard from './WorkCard';
import serviceShape4 from '/images/tir.png';


const WorkData = [
  {
    id: 1,
    // workNumber: '01',
    workIcon: workIcon,
    workTitle: 'Our Mission',
    workDesc:
      'At Coelate, our mission extends beyond traditional IT consulting. We strive to exceed client expectations at every interaction by delivering world-class services that drive measurable business success globally. Through unwavering transparency, adaptive agility, and relentless pursuit of excellence, we ensure each client achieves their strategic objectives while building lasting trust and satisfaction throughout our partnership.',
  },
  
  {
    id: 2,
    // workNumber: '02',
    workIcon: workIcon3,
    workTitle: 'Our Vision',
    workDesc:
      'Coelate aims to become the recognized global leader in IT consulting, setting new industry standards in innovation, client satisfaction, and sustainable growth. We envision a future where our name becomes synonymous with transformative digital solutions that empower organizations to thrive amid constant technological evolution and market challenges.',
  },
];

const Work = () => {
  return (
    <section className='pt-[38px] pb-[30px] bg-[url(/images/blog3_bg.png)] bg-no-repeat bg-cover bg-center  relative z-10'>
     <div 
           className='absolute -z-10 top-[5%] left-[85%] animate-rotate hidden 2xl:block' >
             <img
               src={serviceShape4}
               draggable='false'
             />
           </div>
     
      <div className='Container'>
        <div className='text-center '>
          <h5 className='font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase flex items-center justify-center gap-2 mb-3 '>
            
          </h5>
          <h1 className='font-FiraSans font-semibold font-extrabold text-gray-900 text-[28px] leading-8 sm:text-[36px] sm:leading-[46px] md:text-[40px] md:leading-[58px] lg:text-[40px] lg:leading-[50px] xl:text-[44px] xl:leading-[54px] 2xl:text-[42px] 2xl:leading-[60px] mt-5'>
          How We <span className="text-PrimaryColor2-0">Get Things</span> Done

            
          </h1>
          
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 mt-[54px]'>
          {WorkData.map(
            ({
              id,
              workNumber,
              workIcon,
              workTitle,
              workDesc,
              workUrl,
              workBtn,
            }) => {
              return (
                <>
                  <div key={id}>
                    <WorkCard
                      workNumber={workNumber}
                      workIcon={workIcon}
                      workTitle={workTitle}
                      workDesc={workDesc}
                      workUrl={workUrl}
                      workBtn={workBtn}
                    />
                  </div>
                </>
              );
            }
          )}
        </div>
        <div className='text-center mt-9 px-7 mx-auto'>
          
        </div>
      </div>
    </section>
  );
};

export default Work;
