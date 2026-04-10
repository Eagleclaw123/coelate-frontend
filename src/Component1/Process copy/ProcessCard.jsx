import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const ProcessCard = ({
  
  processTitle,
  processDesc,
  processBtn,
  hoverBgImage,
  processIcon,
}) => {
  return (
    <div className="bg-white group relative overflow-hidden flex flex-col justify-between p-8 rounded-lg shadow-lg border border-gray-200 transition-all duration-500 min-h-[450px]">

      {/* Background Image and Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-0"
        style={{
          backgroundImage: `url(${hoverBgImage})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-50 transition-all duration-500 z-0"></div>

      {/* Card Content */}
      <div className="relative z-10 flex flex-col h-full ">
        {/* Icon */}
        <div className="size-[78px] mb-4 flex items-center justify-center rounded-full transition-all duration-500 group-hover:bg-PrimaryColor-0">
          <img
            src={processIcon}
            draggable="false"
            className="transition-all duration-500 group-hover:brightness-0 group-hover:invert"
            alt="Icon"
          />
        </div>

        {/* Title */}
        <h5 className="font-FiraSans font-bold text-PrimaryColor-0 text-xl mb-3 transition-all duration-500 group-hover:text-white">
          {processTitle}
        </h5>

        {/* Description */}
        <p className="font-FiraSans text-TextColor2-0 tracking-[0.5px] leading-relaxed flex-grow transition-all duration-500 group-hover:text-white">
          {processDesc}
        </p>

        {/* Button */}
        <div className="inline-block mt-6">
          <Link
            to="#"
            className="text-[22px] text-[#007cbc] transition-all duration-500 group-hover:translate-x-1 group-hover:text-white"
          >
            {processBtn}
          </Link>
        </div>
      </div>

    </div>
  );
};

export default ProcessCard;
