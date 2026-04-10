import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import CloudServices from './CloudServices';

const ServiceDetails = () => {
  const backgroundImage = '/images/s4hana.jpg';
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'S/4HANA'} // Add a title if needed
        breadCrumbSubtitle={<>Your Vision, Our Expertise: Future-Ready SAP S/4HANA {" "}
    <br className="hidden md:block"/>{" "}
 Solutions SAP S/4HANA Implementation & Optimization Services </>}
        backgroundImage={backgroundImage}
      />
      
      <br />
      <CloudServices />
    </>
  );
};

export default ServiceDetails;
