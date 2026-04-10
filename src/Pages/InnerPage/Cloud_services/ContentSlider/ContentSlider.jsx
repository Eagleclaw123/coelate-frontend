import "./content-slider.css";
import icon from '/images/marqee_star.png';

const ContentSlider = () => {
  return (
    <div className='relative z-40' >
      {/* Section Heading */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          <span className="text-PrimaryColor2-0">Our Cloud</span>   Platform Highlights  
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
        </p>
      </div>

      {/* Slider Content */}
      <div className='content-slider-section2'>
        <div className='content-slider'>
          <div className='content-slider-content'>
            <h1>AWS</h1>
          </div>
          <div className='content-slider-content'>
            <img src={icon} draggable='false' />
          </div>
          <div className='content-slider-content'>
            <h1>Azure</h1>
          </div>
          <div className='content-slider-content'>
            <img src={icon} draggable='false' />
          </div>
          <div className='content-slider-content'>
            <h1>GCP</h1>
          </div>
          <div className='content-slider-content'>
            <img src={icon} draggable='false' />
          </div>
          <div className='content-slider-content'>
            <h1>EC2, S3, Lambda  </h1>
          </div>
          <div className='content-slider-content'>
            <img src={icon} draggable='false' />
          </div>
          <div className='content-slider-content'>
            <h1>Redshift Analytics   </h1>
          </div>
          <div className='content-slider-content'>
            <img src={icon} draggable='false' />
          </div>
          <div className='content-slider-content'>
          <h1> Azure Virtual Machines</h1>
          </div>
          <div className='content-slider-content'>
            <img src={icon} draggable='false' />
          </div>
          <div className='content-slider-content'>
            <h1> EC2, S3, Lambda  </h1>
          </div>  
          
          <div className='content-slider-content'>
            <img src={icon} draggable='false' />
          </div>
          <div className='content-slider-content'>
            <h1> Azure DevOps  </h1>
          </div>
          <div className='content-slider-content'>
            <h1> Hybrid Cloud with Arc   </h1>
          </div>
          <div className='content-slider-content'>
            <img src={icon} draggable='false' />
          </div>
          <div className='content-slider-content'>
            <h1>BigQuery  </h1>
          </div>
          <div className='content-slider-content'>
            <img src={icon} draggable='false' />
          </div>
          <div className='content-slider-content'>
            <h1>Anthos for Multi-Cloud  </h1>
          </div>
          <div className='content-slider-content'>
            <img src={icon} draggable='false' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSlider;
