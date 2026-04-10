/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const WorkCard = ({
  workNumber,
  workIcon,
  workTitle,
  workDesc,
  workUrl,
  workBtn,
}) => {
  return (
    <div className="relative group h-[680px] 2xl:h-[420px] px-[38px] lg:px-6 xl:px-[38px] pt-10 pb-7 rounded-l-lg overflow-hidden bg-[url('/images/steps_bg.png')] bg-cover bg-center bg-no-repeat z-10">
      {/* <div className="absolute top-1 right-7">
        <h6 className="font-FiraSans text-PrimaryColor-0 text-lg relative before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-9 before:bg-PrimaryColor-0 before:w-8 before:h-[1px]">
          {workNumber}
        </h6>
      </div> */}
      <div className="size-[76px] rounded-full bg-BodyBg-0 flex items-center justify-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:scale-0 before:-z-10 before:transition-all before:duration-500 group-hover:before:scale-100 mb-6">
        <img
          src={workIcon}
          draggable="false"
          className="transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]"
        />
      </div>
      <Link to={workUrl}>
        <button className="font-FiraSans text-left font-medium text-xl text-PrimaryColor-0">
          {workTitle}
        </button>
      </Link>
      <p className="font-FiraSans text-TextColor2-0 tracking-[0.5px] leading-[1.6] pt-3 pb-6">{workDesc}</p>
      <Link to={workUrl}>
        <button className="text-PrimaryColor-0 text-2xl">{workBtn}</button>
      </Link>
    </div>
  );
};

export default WorkCard;