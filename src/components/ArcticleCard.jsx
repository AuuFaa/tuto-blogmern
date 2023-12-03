import React from 'react';
import images from '../constants/images';

export const ArcticleCard = ({className}) => {
  return (
    <div className={`rounded-xl  overflow-hidden shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] ${className} `}>
      <img src={images.PostImage} alt="title" className="w-full object-cover object-center h-auto" />
    </div>
  );
};
