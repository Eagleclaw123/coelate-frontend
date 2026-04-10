import Banner from '../../Component1/Banner/Banner';
import ContentSlider from '../../Component1/ContentSlider/ContentSlider';
import Process from '../../Component1/Process copy/Process';
import Testimonial from '../../Component1/Testimonial/Testimonial';
import WhyChoose from '../../Component1/WhyChoose/WhyChoose';
import InnerServices from '../../Component1/InnerServices/InnerServices';



const Home1 = () => {
  return (
    <>
      <Banner />
      <WhyChoose />
      <ContentSlider />
      <br/>
      <Process/>
      <InnerServices />
      <Testimonial />     
    </>
  );
};

export default Home1;
