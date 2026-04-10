import { Link } from 'react-router-dom';
import Logo from '/images/logo1.png';
import Logo2 from '/images/logo1.png';
import './navbar.css';
import { useEffect, useRef, useState } from 'react';
import {
  FaArrowUp,
  FaChevronDown,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from 'react-icons/fa6';
import { FaPhoneAlt, FaTimes } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { IoMdPaperPlane } from 'react-icons/io';
import { LuMoveRight } from 'react-icons/lu';
import { ImFacebook2 } from 'react-icons/im';
import { BiSearch } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { GiPhone } from 'react-icons/gi';
import { LiaTimesSolid } from 'react-icons/lia';
import { IoSearch } from 'react-icons/io5';

const Navbar = () => {
  // Refs
  const menuSideBarRef = useRef(null);
  const sidebarContentRef = useRef(null);
  const bodyOverlay2Ref = useRef(null);
  const closeBtn2Ref = useRef(null);
  const menuBarRef = useRef(null);
  const offcanvasRef = useRef(null);
  const bodyOverlayRef = useRef(null);
  const closeBtnRef = useRef(null);
  const searchContentRef = useRef(null);
  const bodyOverlay3Ref = useRef(null);
  const searchInputRef = useRef(null);

  // State
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sticky header effect
  useEffect(() => {
    const isSticky = () => {
      const header = document.querySelector('.header-sticky');
      const scrollTop = window.scrollY;
      scrollTop >= 250
        ? header.classList.add('is-sticky')
        : header.classList.remove('is-sticky');
    };

    window.addEventListener('scroll', isSticky);
    return () => window.removeEventListener('scroll', isSticky);
  }, []);

  // Menu sidebar toggle
  useEffect(() => {
    const toggleSidebar = (action) => {
      const sidebarContent = sidebarContentRef.current;
      const bodyOverlay = bodyOverlay2Ref.current;
      
      if (sidebarContent && bodyOverlay) {
        if (action === 'open') {
          sidebarContent.classList.add('opened');
          bodyOverlay.classList.add('apply');
        } else {
          sidebarContent.classList.remove('opened');
          bodyOverlay.classList.remove('apply');
        }
      }
    };

    const menuSideBar = menuSideBarRef.current;
    const closeBtn2 = closeBtn2Ref.current;
    const bodyOverlay2 = bodyOverlay2Ref.current;

    if (menuSideBar && closeBtn2 && bodyOverlay2) {
      menuSideBar.addEventListener('click', () => toggleSidebar('open'));
      closeBtn2.addEventListener('click', () => toggleSidebar('close'));
      bodyOverlay2.addEventListener('click', () => toggleSidebar('close'));
    }

    return () => {
      if (menuSideBar && closeBtn2 && bodyOverlay2) {
        menuSideBar.removeEventListener('click', () => toggleSidebar('open'));
        closeBtn2.removeEventListener('click', () => toggleSidebar('close'));
        bodyOverlay2.removeEventListener('click', () => toggleSidebar('close'));
      }
    };
  }, []);

  // Offcanvas menu toggle
  useEffect(() => {
    const toggleOffcanvas = (action) => {
      const offcanvas = offcanvasRef.current;
      const bodyOverlay = bodyOverlayRef.current;
      
      if (offcanvas && bodyOverlay) {
        if (action === 'open') {
          offcanvas.classList.add('opened');
          bodyOverlay.classList.add('apply');
        } else {
          offcanvas.classList.remove('opened');
          bodyOverlay.classList.remove('apply');
        }
      }
    };

    const menuBar = menuBarRef.current;
    const closeBtn = closeBtnRef.current;
    const bodyOverlay = bodyOverlayRef.current;

    if (menuBar && closeBtn && bodyOverlay) {
      menuBar.addEventListener('click', () => toggleOffcanvas('open'));
      closeBtn.addEventListener('click', () => toggleOffcanvas('close'));
      bodyOverlay.addEventListener('click', () => toggleOffcanvas('close'));
    }

    return () => {
      if (menuBar && closeBtn && bodyOverlay) {
        menuBar.removeEventListener('click', () => toggleOffcanvas('open'));
        closeBtn.removeEventListener('click', () => toggleOffcanvas('close'));
        bodyOverlay.removeEventListener('click', () => toggleOffcanvas('close'));
      }
    };
  }, []);

  // Mobile menu dropdowns
  useEffect(() => {
    const headerIcon = `<span class="header-icon"><svg fill="currentColor" viewBox="0 0 320 512" height="15px" width="15px" xmlns="http://www.w3.org/2000/svg"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg></span>`;

    const mainMenuContent = document.querySelector('.main-menu-content');
    const mainMenuMobile = document.querySelector('.main-menu-mobile');

    if (mainMenuContent && mainMenuMobile) {
      const navContent = mainMenuContent.outerHTML;
      mainMenuMobile.innerHTML = navContent;

      document.querySelectorAll('.main-menu-mobile .has-dropdown > a').forEach((arrow) => {
        if (['home', 'careers'].includes(arrow.textContent.trim().toLowerCase())) return;

        const arrowBtn = document.createElement('BUTTON');
        arrowBtn.classList.add('dropdown-toggle-btn');
        arrowBtn.innerHTML = headerIcon;
        arrow.appendChild(arrowBtn);

        arrowBtn.addEventListener('click', (e) => {
          e.preventDefault();
          arrowBtn.classList.toggle('dropdown-opened');
          arrow.parentElement.classList.toggle('expanded');
          arrow.parentElement.parentElement.classList.add('dropdown-opened');
          
          arrow.parentElement.parentElement.querySelectorAll('.submenu').forEach((submenu) => {
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
          });

          arrow.parentElement.parentElement.querySelectorAll('.has-dropdown').forEach((sibling) => {
            if (sibling !== arrow.parentElement) {
              sibling.classList.remove('dropdown-opened');
              sibling.querySelectorAll('.submenu').forEach((submenu) => {
                submenu.style.display = 'none';
              });
            }
          });
        });
      });
    }
  }, []);

  // Search handlers
  const handleMenuSearchClick = () => document.body.classList.add('search-active');
  const handleCloseSearchClick = () => document.body.classList.remove('search-active');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      searchInputRef.current.value = '';
      bodyOverlay3Ref.current?.classList.remove('apply');
      searchContentRef.current?.classList.remove('opened');
    }, 2000);
  };

  // Menu data for consistent rendering
  const mainMenuItems = [
    { path: '/', title: 'Home', dropdown: false },
    { path: '/about', title: 'About', dropdown: false },
    { 
      path: '/services', 
      title: 'Services', 
      dropdown: true,
      subItems: [
        { 
          title: "SAP Services", 
          path: "/service/sap_services",
          subItems: [
            { title: "SAP S/4HANA", path: "/service/sap_services/s/4hana" },
            { title: "SuccessFactors", path: "/service/sap_services/successfactors" },
            { title: "Ariba", path: "/service/sap_services/ariba" },
            { title: "OpenText", path: "/service/sap_services/opentext" },
            { title: "Business Technology Platform", path: "/service/sap_services/Business_technology_platform" },
          ]
        },
        {
          title: "Analytics",
          path: "Service/analytics",
        },
        { 
          title: "Cloud Services", 
          path: "/services/Cloud_services",
          subItems: []
        },
        { title: "Cybersecurity Services", path: "/service/Cybersecurity_services" },
        { title: "Staffing", path: "/service/staffing" }
      ]
    },
    // { path: '/careers', title: 'Careers', dropdown: false },
    // { 
    //   path: '/blog', 
    //   title: 'Blog', 
    //   dropdown: true,
    //   subItems: [
    //     { title: "Blog Details", path: "/blog_details" }
    //   ]
    // },
    { path: '/contact', title: 'Contact', dropdown: false }
  ];

  return (
    <div data-lenis-prevent>
      {/* Top Contact Bar */}
      {/* <header className="bg-[#007cbc] relative z-10 before:absolute before:top-0 before:-left-[10%] before:w-3/5 before:h-full before:bg-[#d76913] before:-skew-x-[30deg] before:-z-10 after:absolute after:top-0 after:left-1/2 after:translate-x-[5px] after:w-1 after:h-full after:bg-[#d76913] after:-skew-x-[30deg] after:-z-10">
        <div className='Container flex items-center justify-between h-[50px]'>
          <div className='flex items-center gap-8'>
            <div className='sm:flex items-center gap-2 hidden'>
              <h6 className='text-lg text-white'><HiOutlineMail /></h6>
              <Link to={'/'} className='font-FiraSans text-[15px] text-white transition-all duration-500 hover:text-white'>
                info@coelate.com
              </Link>
            </div>
            <div className='md:flex items-center gap-2 hidden'>
              <h6 className='text-white [transform:rotateX(180deg)]'><GiPhone /></h6>
              <Link to={'/'} className='font-FiraSans text-[15px] text-white transition-all duration-500 hover:text-white'>
                +980 123 (4587) 584
              </Link>
            </div>
          </div>
          <div className='flex items-center gap-5'>
            <h5 className='font-FiraSans font-medium text-sm uppercase text-white'>Follow Us :</h5>
            <ul className='flex gap-5 items-center'>
              {[
                { icon: <ImFacebook2 size={'14'} />, path: '/' },
                { icon: <FaXTwitter />, path: '/' },
                { icon: <FaLinkedinIn />, path: '/' },
                { icon: <FaInstagram />, path: '/' }
              ].map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className='transition-all duration-500 text-TextColor-0 hover:text-PrimaryColor2-0'>
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header> */}

      {/* Main Navigation */}
      <div id='header-sticky' className=' header-sticky bg-white'>
              <div className='Container '>
          <div className='rounded-md flex items-center justify-between lg:grid lg:grid-cols-12'>
            <div className='col-span-2'>
              <div className='header-logo'>
                <Link to={'/'}>
                  <img src={Logo} draggable='false' alt="Company Logo" />
                </Link>
              </div>
            </div>

            <div className='col-span-7 hidden lg:block'>
              <div className='header-main-menu text-right'>
                <nav className='main-menu-content'>
                  <ul>
                    {mainMenuItems.map((item, index) => (
                      <li key={index} className={item.dropdown ? 'has-dropdown' : ''}>
                        <Link to={item.path}>
                          {item.title}
                          {item.dropdown && <span><FaChevronDown /></span>}
                        </Link>
                        {item.dropdown && item.subItems && (
                          <ul className="submenu services-menu">
                            {item.subItems.map((subItem, subIndex) => (
                              <li key={subIndex} className={subItem.subItems?.length ? 'has-dropdown submenu-item' : ''}>
                                <Link to={subItem.path}>
                                  {subItem.title}
                                  {subItem.subItems?.length > 0 && (
                                    <span className="submenu-arrow"><FaChevronDown /></span>
                                  )}
                                </Link>
                                {subItem.subItems?.length > 0 && (
                                  <ul className="submenu">
                                    {subItem.subItems.map((nestedItem, nestedIndex) => (
                                      <li key={nestedIndex}>
                                        <Link to={nestedItem.path}>{nestedItem.title}</Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            <div className='col-span-3'>
              <div className='header-right-box flex items-center gap-5 justify-end'>
                {/* <div className='hidden lg:block relative before:absolute before:top-1/2 before:-translate-y-1/2 before:-right-[27px] before:h-20 before:w-[1px] before:bg-white before:opacity-20'>
                  <Link to={'/contact'} className='bg-PrimaryColor-0 font-FiraSans text-white capitalize text-[15px] font-medium px-[31px] py-[15px] rounded-md overflow-hidden flex items-center gap-1 border border-PrimaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-BodyBg2-0 before:-z-10 before:scale-0 before:transition-all before:duration-500 hover:before:scale-100'>
                    get a quote<span></span>
                    <LuMoveRight size={'19'} />
                  </Link>
                </div> */}
{/* <div className='header-sidebar flex lg:hidden size-[50px] bg-BodyBg-0 rounded-md items-center justify-center cursor-pointer' ref={menuSideBarRef}>
<button className='menu-sidebar'>
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div> */}
                <div className='header-sidebar flex lg:hidden size-[50px] bg-BodyBg-0 rounded-md items-center justify-center cursor-pointer'>
                  <button ref={menuBarRef} className='menu-bar'>
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offcanvas Menu */}
      <div className='offcanvas-area'>
        <div ref={offcanvasRef} className='offcanvas'>
          <div className='offcanvas_close-btn'>
            <button ref={closeBtnRef} className='close-btn'><FaTimes /></button>
          </div>
          <div className='offcanvas_logo'>
            <Link to={'/'}><img src={Logo2} draggable='false' alt="Company Logo" /></Link>
          </div>
          <div className='offcanvas_title'>
            <p>Business consultation provides expert advice to improve performance.</p>
          </div>
          <div className='main-menu-mobile lg:none'></div>
          <div className='offcanvas_contact-info'>
            <div className='offcanvas_contact-title'><h5>Contact Us</h5></div>
            <ul>
              <li>🏢<Link to={'/'}>   F.No. 205, Hiline Complex, Road No. 12, Banjara Hills Hyderabad- 500034 Telangana.</Link></li>
              <li>🏢<Link to={'/'}>   Business Center 1, M Floor, The Meydan Hotel, And Al Sheba Dubai, U.A.E.</Link></li>
              <li>🏢<Link to={'/'}>  Suite 2229,1312,17th Street , Denver CO 80202 USA.</Link></li>
              
              <li>✉️<Link to={'/'}> sales@coelate.com</Link></li>
            </ul>
          </div>
          {/* <div className='offcanvas_input'>
            <div className='offcanvas_input-title'><h4>Get Update</h4></div>
            <form action='#' method='post'>
              <div className='relative'>
                <input type='email' name='email' placeholder='Enter E-Mail' required />
                <button type='submit'><IoMdPaperPlane /></button>
              </div>
            </form>
            <div className='status'></div>
          </div> */}
          {/* <div className='offcanvas_social'>
            <div className='social-icon'>
              {[FaFacebookF, FaXTwitter, FaPinterestP, FaLinkedinIn].map((Icon, index) => (
                <Link key={index} to={'/'}><Icon /></Link>
              ))}
            </div>
          </div> */}
        </div>
      </div>
      <div ref={bodyOverlayRef} className='body-overlay'></div>

      {/* Sidebar Content */}
      <div className='sidebar-content'>
        <div ref={sidebarContentRef} className='sidebar'>
          <div className='sidebar_close-btn'>
            <button ref={closeBtn2Ref} className='close-btn2'><FaTimes /></button>
          </div>
          <div className='sidebar_logo'>
            <Link to={'/'}><img src={Logo2} draggable='false' alt="Company Logo" /></Link>
          </div>
          <div className='sidebar_title'><p></p></div>
          <div>
            <div className='sidebar_service-title'><h5>What Services We Provide?</h5></div>
            <ul className='service_list'>
              {[
                { title: 'Sap Services', path: '/service/sap_services' },
                { title: 'Cloud Services', path: '/services/Cloud_services' },
                { title: 'CyberSecurity ', path: '/service/Cybersecurity_services' },
                { title: 'Staffing', path: '/service/staffing' },
              ].map((service, index) => (
                <li key={index}>
                  <Link to={service.path}><button>{service.title}</button></Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='sidebar_contact-info'>
            <div className='sidebar_contact-title'><h5>Have Questions? Contact Our Team!</h5></div>
            <ul>
              <li><MdLocationPin /><Link to={'/'}>F.No. 205, Hiline Complex, Road No. 12, Banjara Hills Hyderabad- 500034 Telangana.</Link></li>
              <li><FaEnvelope /><Link to={'/'}> info@coelate.com</Link></li>
              <li><FaPhoneAlt /><Link to={'/'}>+48 555 223 224</Link></li>
            </ul>
          </div>
          <div className='sidebar_input'>
            <div className='offcanvas_input-title'><h4>Get Update</h4></div>
            <form action='#' method='post'>
              <div className='relative'>
                <input type='email' name='email' placeholder='Enter E-Mail' required />
                <button type='submit'><IoMdPaperPlane /></button>
              </div>
            </form>
          </div>
          {/* <ul className='sidebar-social-icon hidden lg:flex xl:hidden'>
            {[FaFacebookF, FaXTwitter, FaPinterestP, FaLinkedinIn].map((Icon, index) => (
              <li key={index}><Link to={'/'}><Icon /></Link></li>
            ))}
          </ul> */}
        </div>
      </div>
      <div ref={bodyOverlay2Ref} className='body-overlay2'></div>

      {/* Search Popup */}
      <div className='search-popup'>
        <button className='close-search' onClick={handleCloseSearchClick}><LiaTimesSolid /></button>
        <button className='close-search2' onClick={handleCloseSearchClick}><FaArrowUp /></button>
        <form method='post' onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              type='search'
              name='search-field'
              placeholder='Search Here'
              required
              className='font-FiraSans placeholder:font-FiraSans'
              ref={searchInputRef}
            />
            <button type='submit' disabled={isSubmitting}>
              {isSubmitting ? <span>Loading...</span> : <IoSearch />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Navbar;