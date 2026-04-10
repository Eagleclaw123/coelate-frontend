import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import Navbar from "../Navbar/Navbar"; // Import Navbar

const BreadCrumb = ({
  breadCrumbTitle,
  breadCrumbSubtitle,
  breadCrumbIcon,
  breadCrumbIcon2,
  url,
  url2,
  breadCrumbLink,
  breadCrumbLink2,
  backgroundImage,
}) => {
  return (
    <>
      {/* Transparent Navbar */}
      {/* <div className="fixed w-full top-0 z-50 backdrop-blur-sm bg-white/5">
        <Navbar />
      </div> */}

      <div className="relative z-10 w-screen left-1/2 right-1/2 -mx-[50vw]">
        {/* Full-width image container */}
        <div 
          className="bg-no-repeat bg-cover bg-center h-[500px] sm:h-[600px] w-screen"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          role="img"
          aria-label="Page header background"
        >
          {/* Content container with original padding */}
          <div className="container h-full flex items-center px-6 sm:px-8 md:px-12 lg:px-16 mx-auto">
            <div className="text-left max-w-3xl">
              <h1 className="font-FiraSans font-semibold text-[36px] md:text-[48px] lg:text-[32px] xl:text-[50px] text-white capitalize relative z-10">
                {breadCrumbTitle}
              </h1>
              
              {breadCrumbSubtitle && (
                <p className="font-FiraSans tracking-[0.2px] leading-relaxed text-lg md:text-xl text-white opacity-90 mt-2 mb-6">
                  {breadCrumbSubtitle}
                </p>
              )}
              
              <nav aria-label="Breadcrumb">
                <ul className="flex flex-wrap items-center gap-2 sm:gap-4 text-left">
                  {/* Previous breadcrumb links can go here */}
                  {breadCrumbIcon && (
                    <li className="hidden sm:block" aria-hidden="true">
                      <span className="text-white">{breadCrumbIcon}</span>
                    </li>
                  )}
                  
                  <li>
                    <Link 
                      to={url} 
                      className="font-FiraSans font-medium text-white capitalize transition-colors duration-300 hover:text-PrimaryColor-0"
                    >
                      {breadCrumbLink}
                    </Link>
                  </li>
                  
                  {breadCrumbIcon2 && (
                    <li className="hidden sm:block" aria-hidden="true">
                      <span className="text-white">{breadCrumbIcon2}</span>
                    </li>
                  )}
                  
                  {breadCrumbLink2 && (
                    <li>
                      <Link 
                        to={url2} 
                        className="font-FiraSans font-medium text-white capitalize transition-colors duration-300 hover:text-PrimaryColor-0"
                      >
                        {breadCrumbLink2}
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadCrumb;
