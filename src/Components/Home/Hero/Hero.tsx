import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import { AllImages } from '@/Components/AllImages/AllImages';
import { MdOutlineArrowOutward } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { GiFountainPen } from "react-icons/gi";

const contentStyle: React.CSSProperties = {
  color: '#fff',
  textAlign: 'center',
  background: 'rgba(0, 0, 0, 0.5)', 
};

const Hero: React.FC = () => (
  <Carousel autoplay>
    {/* First slide: Amazoi Rainforest */}
    <div className="relative h-screen"> 
      <Image
        src={AllImages.hero1}
        alt="hero image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0" 
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4" style={contentStyle}>
        {/* Date and Author */}
        <div className='flex justify-center items-center gap-10 font-serif italic'>
          <h3 className="text-sm flex justify-center items-center gap-2"><MdOutlineDateRange /> October 11, 2019</h3>
          <h3 className="text-sm flex justify-center items-center gap-2"><GiFountainPen /> Alisa Michaels</h3>
        </div>
        {/* Headline and Paragraph */}
        <h1 className="text-2xl lg:text-4xl font-bold uppercase">Discover the Beauty of the Amazoi Rainforest</h1>
        <p className="mt-2 text-center">
          Explore the dense, green foliage of the Amazoi Rainforest, where nature thrives in all its glory. A paradise for travelers, this exotic location offers breathtaking views, wildlife encounters, and adventure like no other.
        </p>
        {/* Read More Button */}
        <button className='btn bg-buttonColor px-5 py-2 my-5 font-semibold flex justify-center items-center gap-2'>
          Read More
          <MdOutlineArrowOutward className='h-5 w-5'/>
        </button>
      </div>
    </div>

    {/* Second slide */}
    <div className="relative h-screen">
      <Image
        src={AllImages.hero2}
        alt="hero image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4" style={contentStyle}>
        <div className='flex justify-center items-center gap-10 font-serif italic'>
          <h3 className="text-sm flex justify-center items-center gap-2"><MdOutlineDateRange /> November 15, 2020</h3>
          <h3 className="text-sm flex justify-center items-center gap-2"><GiFountainPen /> John Doe</h3>
        </div>
        <h1 className="text-2xl lg:text-4xl font-bold uppercase">Explore the Mystical Mountains of Tibet</h1>
        <p className="mt-2 text-center">Embark on a journey through the mystical mountains of Tibet, where adventure meets tranquility. Discover hidden monasteries and connect with nature in one of the most spiritual places on Earth.</p>
        <button className='btn bg-buttonColor px-5 py-2 my-5 font-semibold flex justify-center items-center gap-2'>Read More
          <MdOutlineArrowOutward className='h-5 w-5'/>
        </button>
      </div>
    </div>

    {/* Third slide */}
    <div className="relative h-screen">
      <Image
        src={AllImages.hero3}
        alt="hero image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4" style={contentStyle}>
        <div className='flex justify-center items-center gap-10 font-serif italic'>
          <h3 className="text-sm flex justify-center items-center gap-2"><MdOutlineDateRange /> August 5, 2021</h3>
          <h3 className="text-sm flex justify-center items-center gap-2"><GiFountainPen /> Sarah Lee</h3>
        </div>
        <h1 className="text-2xl lg:text-4xl font-bold uppercase">Wander Through the Streets of Paris</h1>
        <p className="mt-2 text-center">Take a walk through the charming streets of Paris, the city of love. From the iconic Eiffel Tower to the bustling cafes, Paris offers an unforgettable experience for every traveler.</p>
        <button className='btn bg-buttonColor px-5 py-2 my-5 font-semibold flex justify-center items-center gap-2'>Read More
          <MdOutlineArrowOutward className='h-5 w-5'/>
        </button>
      </div>
    </div>
  </Carousel>
);

export default Hero;
