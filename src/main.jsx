import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router';

const helmetContext = {}; // Define helmetContext here

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      {/* <Preloader /> */}
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
