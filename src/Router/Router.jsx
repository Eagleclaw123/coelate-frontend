import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Home1 from '../Pages/Home1/Home1';
import ErrorPage from '../Shared/ErrorPage/ErrorPage';
import AboutInner from '../Pages/InnerPage/AboutInner/AboutInner';
import ContactInner from '../Pages/InnerPage/ContactInner/ContactInner';
import S4hana from '../Pages/InnerPage/S4shana/ServiceDetails';
import Successfactors from '../Pages/InnerPage/Successfactors/ServiceDetails';
import Business_platform_technologies from '../Pages/InnerPage/Business_platform_technologies/ServiceDetails';
import Cloud_services from'../Pages/InnerPage/Cloud_services/ServiceDetails';
import Cybersecurity_services from '../Pages/InnerPage/Cybersecurity_services/ServiceDetails';
import Opentext from '../Pages/InnerPage/Opentext/ServiceDetails';
import Arbia from '../Pages/InnerPage/Arbia/ServiceDetails';
import Staffing from '../Pages/InnerPage/Staffing/ServiceDetails';
import Service from '../Pages/InnerPage/Service/Service';
import SapServices from '../Pages/InnerPage/Sap_services/SapServices';
import Analytics from '../Pages/InnerPage/Analytics/ServiceDetails';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home1 />,
      },
    ],
  },
  
  {
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: '/about',
        element: <AboutInner />,
      },
      
      {
        path: '/services',
        element: <Service />,
      },
      {
        path:'/service/sap_services',
        element:<SapServices/>
      },
      {
      path:'/service/sap_services/s/4hana',
      element:<S4hana/>,
     },
     {
      path:'/service/sap_services/successfactors',
      element:<Successfactors/>,
     },
     {
      path:'/service/sap_services/Business_technology_platform',
      element:<Business_platform_technologies/>,
     },
    {
      path:'/service/sap_services/ariba',
      element:<Arbia/>,
    },
    {
      path:'/service/sap_services/opentext',
      element:<Opentext/>,
    },
    {path:'Service/analytics',
      element:<Analytics/>,

    },
    {
      path:'/services/Cloud_services',
      element:<Cloud_services/>,
    },
    
    {
      path:'/service/Cybersecurity_services',
      element:<Cybersecurity_services/>,
    },
    {
      path:'/service/staffing',
      element:<Staffing/>
    },
     {
      path: '/careers',
      element: <ContactInner />,
    },
     
      {
        path: '/contact',
        element: <ContactInner />,
      },
    ],
  },
]);

export default router;
