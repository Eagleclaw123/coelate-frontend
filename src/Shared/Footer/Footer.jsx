import { Link } from 'react-router-dom';
import footerShape2 from '/images/footer_shape.png';
import footerLogo from '/images/logo1.png';
import footerShape from '/images/choose_rotete.png';
import footerImg from '/images/footer_1.png';
import footerImg2 from '/images/footer_2.png';
import {
  FaAnglesRight,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
  FaXTwitter,
} from 'react-icons/fa6';
import { IoPaperPlaneSharp } from 'react-icons/io5';
import { FaCircle } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className='py-5 md:py-2 bg-black bg-opacity-50'>
        <div className='Container'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7 lg:gap-0 lg:grid-cols-3 lg:items-center'>
            {/* Email section */}
            <div className='flex items-center pl-14 gap-3 md:gap-5'>
              <div className='size-[40px] md:size-[60px] bg-BorderColor2-0 rounded-full flex items-center justify-center text-black'>
                <FaRegEnvelope className='text-[16px] md:text-[22px]' />
              </div>
              <div>
                <h6 className='font-FiraSans text-[13px] md:text-[15px] text-black'>
                  Say Hello
                </h6>
                <Link to='mailto:sales@coelate.com'>
                  <button className='font-FiraSans text-[16px] md:text-xl text-black font-medium'>
                    sales@coelate.com
                  </button>
                </Link>
              </div>
            </div>
            
            {/* Logo section */}
            <div className='flex md:justify-center pl-16 md:border-l lg:border-l-0 xl:border-x-2 border-primaryColor-0 py-1 md:py-2'>
              <Link to='/'>
                <img
                  src={footerLogo}
                  draggable='false'
                  className='h-8 md:h-auto'
                  alt='Coelate Logo'
                />
              </Link>
            </div>
            
            {/* Social icons */}
            <div className='flex pl-14 lg:justify-end'>
              <ul className='flex gap-2 md:gap-3 items-center'>
                {[
                  { 
                    Icon: FaYoutube, 
                    url: 'https://www.youtube.com/@CoelateTechnologies',
                    label: 'youtube'
                
                  },
                  { 
                    Icon: FaXTwitter, 
                    url: 'https://x.com/CoelateTech?t=CV2DhbJjK4Pjiif1rLk-3g&s=08',
                    label: 'Twitter'
                  },
                  { 
                    Icon: FaLinkedinIn, 
                    url: 'https://www.linkedin.com/company/coelate-technologies/',
                    label: 'LinkedIn'
                  },
                  { 
                    Icon: FaInstagram, 
                    url: 'https://www.instagram.com/coelate.tech?igsh=MWVmZzM1b25jbGc4YQ==',
                    label: 'Instagram'
                  }
                ].map((social, index) => (
                  <li key={index}>
                    <a
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={social.label}
                      className='size-[36px] md:size-[48px] flex justify-center items-center rounded-full bg-BorderColor2-0 transition-all duration-500 text-black hover:text-PrimaryColor-0 relative z-10 after:absolute after:rounded-full after:top-0 after:left-0 after:bg-white after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100'
                    >
                      <social.Icon className='text-[12px] md:text-[15px]' />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[url('/images/footer_bg.jpg')] bg-no-repeat bg-center bg-cover relative z-10 pt-[70px] overflow-hidden">
        <img
          src={footerShape}
          draggable='false'
          className='absolute -z-10 left-20 bottom-28 animate-rotational'
          alt='Decoration'
        />

        <img
          src={footerShape}
          draggable='false'
          className='hidden lg:block absolute -z-10 right-20 bottom-22 lg:absolute -z-10 top-30 animate-rotational-mirror'
          alt='Decoration'
        />
        
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {/* Company */}
            <div>
              <h3 className="text-2xl font-bold text-PrimaryColor-0 gradient-underline mb-6">Company</h3>
              <ul className="text-lg leading-loose">
                <li><Link to="/about" className="hover:text-blue-600 font-semibold">About Us</Link></li>
                <li><Link to="/services" className="hover:text-blue-600 font-semibold">Services</Link></li>
                {/* <li><Link to="/careers" className="hover:text-blue-600 font-semibold">Careers</Link></li> */}
                <li><Link to="/contact" className="hover:text-blue-600 font-semibold">Contact Us</Link></li>
              </ul>
            </div>
      
            {/* Solutions */}
            <div>
              <h3 className="text-2xl font-bold text-PrimaryColor-0 gradient-underline mb-6">Services</h3>
              <ul className="text-lg leading-loose">
                <li><Link to="/service/sap_services" className="hover:text-blue-600 font-semibold">SAP Services</Link></li>
                <li><Link to="/service/analytics" className="hover:text-blue-600 font-semibold">Analytics</Link></li>
                <li><Link to="/services/Cloud_services" className="hover:text-blue-600 font-semibold">Cloud Services</Link></li>
                <li><Link to="/service/Cybersecurity_services" className="hover:text-blue-600 font-semibold">Cybersecurity Services</Link></li>
                <li><Link to="/service/staffing" className="hover:text-blue-600 font-semibold">Staffing</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-2xl font-bold text-PrimaryColor-0 gradient-underline mb-6">SAP Services</h3>
              <ul className="text-lg leading-loose">
                <li><Link to="/service/sap_services/s/4hana" className="hover:text-blue-600 font-semibold">S/4HANA</Link></li>
                <li><Link to="/service/sap_services/successfactors" className="hover:text-blue-600 font-semibold">SuccessFactors</Link></li>
                <li><Link to="/service/sap_services/ariba" className="hover:text-blue-600 font-semibold">Ariba</Link></li>
                <li><Link to="/service/sap_services/opentext" className="hover:text-blue-600 font-semibold">Opentext</Link></li>
                <li><Link to="/service/sap_services/Business_technology_platform" className="hover:text-blue-600 font-semibold">Business Technology Platform</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-PrimaryColor-0 gradient-underline mb-0">
                Address
              </h3>
              
              <div className="text-TextColor2-0 space-y-4">
                <div>
                  <h4 className="font-semibold text-TextColor2-0">Dubai, UAE</h4>
                  <p>Business Center 1, M Floor, The Meydan Hotel, Nad Al Sheba</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-TextColor2-0">Denver, USA</h4>
                  <p>Suite 2229, 1312 17th Street, Denver CO 80202</p>
                </div>
                <div>
                  <h4 className="font-semibold text-TextColor2-0">Canada</h4>
                  <p>3700 Green Diamond Rd, Regina, SK, S4V 4B9</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-TextColor2-0">Hyderabad, India</h4>
                  <p>Suite 205, Hiline Complex, Road No. 12, Banjara Hills, Hyderabad-500034</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 border-t border-gray-400 pt-8 text-center">
            <p className="text-lg font-semibold leading-relaxed">
              © {new Date().getFullYear()} Coelate. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;