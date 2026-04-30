const ImageGrid = () => {
  // Office images (replace with actual images)
  const images = [
    // '/images/office.jpg',
    "/images/office6.jpg",
    "/images/office2.jpg",
    "/images/office3.jpg",
    "/images/office4.jpg",
  ];

  // Office locations data
  const offices = [
    {
      city: "Hyderabad, India",
      address:
        "Suite 205, Hiline Complex, Road No. 12, Banjara Hills, Hyderabad-500034",
      phone: "+91 8500545536",
    },
    {
      city: "Dubai, UAE",
      address: "Business Center 1, M Floor, The Meydan Hotel, Nad Al Sheba",
      phone: "",
    },
    {
      city: "Denver, USA",
      address: "Suite 2229, 1312 17th Street, Denver CO 80202",
      phone: "+130 3827 7857",
    },
    {
      city: "Canada",
      address: "3700 Green Diamond Rd, Regina, SK, S4V 4B9",
      phone: "+130 3827 7857",
    },
  ];

  return (
    <section className="py-12 mt-[-85px] 2xl:mt-0 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="font-FiraSans font-semibold text-center mb-12 text-gray-900 text-[32px] md:text-[40px] lg:text-[44px] xl:text-[48px] leading-tight relative pb-4">
          Spaces Built for{" "}
          <span className="text-PrimaryColor2-0">Creativity</span> & Growth
        </h1>

        {/* Mobile Layout (below 576px) - Image with address below */}
        <div className="sm:hidden grid grid-cols-1 gap-8 mb-16">
          {images.map((image, index) => (
            <div key={`mobile-office-${index}`} className="group">
              {/* Image Card */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={image}
                  alt={`Office ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={600}
                  height={450}
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white text-xl font-medium">
                    {offices[index]?.city}
                  </h3>
                </div>
              </div>

              {/* Office Info - Only on mobile */}
              <div className="mt-4 bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-start mb-4">
                  <div className="bg-PrimaryColor-0/10 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-PrimaryColor-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {offices[index].city}
                    </h3>
                    <p className="text-gray-600">{offices[index].address}</p>
                  </div>
                </div>
                {offices[index].phone && (
                  <div className="flex items-center mt-4">
                    <svg
                      className="w-5 h-5 text-gray-400 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a
                      href={`tel:${offices[index].phone.replace(/ /g, "")}`}
                      className="text-gray-700 hover:text-PrimaryColor2-0 transition-colors"
                    >
                      {offices[index].phone}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Default Layout (576px and above) - Original layout */}
        <div className="hidden sm:block">
          {/* Image Grid */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {images.map((image, index) => (
              <div 
                key={`image-${index}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`Office ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={600}
                  height={450}
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white text-xl font-medium">{offices[index]?.city}</h3>
                </div>
              </div>
            ))}
          </div> */}

          {/* Office Locations */}
          {/* Desktop & Tablet Layout (≥576px) */}
          <div className="hidden sm:grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden border border-gray-100"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={images[index]}
                    alt={office.city}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className="text-white text-xl font-medium">
                      {office.city}
                    </h3>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-PrimaryColor-0/10 p-3 rounded-lg mr-4">
                      <svg
                        className="w-6 h-6 text-PrimaryColor-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {office.city}
                      </h3>
                      <p className="text-gray-600">{office.address}</p>
                    </div>
                  </div>

                  {office.phone && (
                    <div className="flex items-center mt-4">
                      <svg
                        className="w-5 h-5 text-gray-400 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <a
                        href={`tel:${office.phone.replace(/ /g, "")}`}
                        className="text-gray-700 hover:text-PrimaryColor2-0 transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
