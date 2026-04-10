import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import ContentSlider from '../../../Component1/ContentSlider/ContentSlider';
import Work from '../AboutInner/Work/Work'
import About from '../AboutInner/About'
import Clients from '../AboutInner/Clients'


const AboutInner = () => {
  const backgroundImage = '/images/aboutus.jpg';
  return (
    <>
     
       <div className="animate-fade-in">
      
      <BreadCrumb
      
        breadCrumbTitle={'About'} // Add a title if needed
        breadCrumbSubtitle={<>Coelate Transforms IT challenges into growth with tailored strategies{" "}
    <br className="hidden md:block"/>{" "}
 cutting-edge tech, and exceptional customer experiences  </>}
        url={'/about'} // Update with the correct URL
        backgroundImage={backgroundImage} // Pass the background image prop
      />
      </div>
      <About/>
      <br/> 
      <ContentSlider />
    
      <Work/>
      <Clients/>
    </>
  );
};

export default AboutInner;
