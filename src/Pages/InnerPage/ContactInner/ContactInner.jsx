import { FaArrowRightLong } from 'react-icons/fa6';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import Contact from './Contact';
import Map from './Map';

const ContactInner = () => {
  const backgroundImage = '/images/contactpage.jpg';
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Contact Us'} // Add a title if needed
        breadCrumbSubtitle={<>Coelate helps businesses transform into high-performing <br/> leaders with tailored, industry-focused solutions for <br/> maximum efficiency  </>}
        url={'/contact'} // Update with the correct URL
        backgroundImage={backgroundImage} 
        />
      <Contact />
      <Map />
    </>
  );
};

export default ContactInner;
