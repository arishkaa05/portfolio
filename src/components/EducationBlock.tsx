import { useState } from "react";

export interface EducationProps  {
  years: string
  place: string
  university: string
  speciality: string
  img: string
};

const EducationBlock: React.FC<{ education: EducationProps }> = ({education}) => {
  const [showImage, setShowImage] = useState(false);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (event: any) => {
    setShowImage(true);
    handleMouseMove(event);
  };

  const handleMouseLeave = () => {
    setShowImage(false);
  };

  const handleMouseMove = (event: { clientX: number; clientY: number; }) => {
    setImagePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div
      className="relative bg-neutral-200 border-b border-neutral-300 w-full hover:cursor-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div className='lg:flex align-center items-center justify-between bg-red md:px-20 px-5 py-4 border-b'>
        <div>
          <div className="text-pink font-semibold text-sm">{education.years}</div>
          <h2 className="font-moret text-2xl ">{education.university}</h2>
          <div className="font-light text-sm text-gray-400">&mdash; {education.place} </div>
        </div>
        <h3 className="font-moret md:text-2xl text-lg text-gray-400">{education.speciality} </h3>
      </div>
      {/* {showImage && (
        <img src={'./../study/' + education.img} 
          alt={education.speciality}
          className="absolute w-[90px] rounded-full h-[90px]"
          style={{
            left: ` ${imagePosition.x}px`,
            top: `${imagePosition.y}px`,
          }}
        />
      )} */}
    </div>
  );
};

export default EducationBlock;