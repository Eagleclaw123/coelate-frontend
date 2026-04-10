import "./content-slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faLock,
  faSitemap,
  faRocket,
  faChartLine,
  faUsers,
  faHandshake,
  faLifeRing,
  faArrowTrendUp,
  faCogs,
  faBoxOpen
} from "@fortawesome/free-solid-svg-icons";

const services = [
  { name: "MANAGED SERVICES", icon: faSitemap },
{ name: "CLOUD COMPUTING", icon: faCloud },
{ name: "RISE WITH SAP", icon: faRocket },
{ name: "GROW WITH SAP", icon: faArrowTrendUp },
{ name: "SUCCESSFACTORS", icon: faUsers },
{ name: "END-TO-END IMPLEMENTATION", icon: faCogs },
{ name: "ADVISORY SERVICES", icon: faHandshake },
{ name: "ON-DEMAND SUPPORT", icon: faLifeRing },
{ name: "CYBERSECURITY", icon: faLock },
{ name: "ANALYTICS", icon: faChartLine },
{ name: "SAP S/4HANA MIGRATION", icon: faBoxOpen },
{ name: "INTEGRATION SERVICES", icon: faCogs }

];

const ContentSlider = () => {
  const repeatedServices = [...services, ...services]; // To loop the animation

  return (
    <div className="ribbon-container">
      <div className="ribbon-track">
        {repeatedServices.map((service, index) => (
          <span key={index} className="ribbon-item">
            <FontAwesomeIcon icon={service.icon} className="ribbon-icon" />
            {service.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ContentSlider;
