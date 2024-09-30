'use client';
import { AllImages } from "@/Components/AllImages/AllImages"; 
import Sectiontitle from "@/Components/Shared/SectionTitle/Sectiontitle";
import Image from "next/image"; 
import { GiFountainPen } from "react-icons/gi"; 
import { MdOutlineDateRange } from "react-icons/md"; 
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination,   } from 'swiper/modules';

const FeaturedBlogs: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Sectiontitle subHeading={"Explore our new"} heading={"featured blogs"} />
      
      <div className="my-10">
        <Swiper
          spaceBetween={10}
          freeMode={true} 
          mousewheel={true}
          pagination={{
            clickable: true,
          }} 
          modules={[FreeMode, Pagination,]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="relative flex flex-col justify-end p-4 ">
              <Image
                src={AllImages.featured1}
                alt="featured img"
                height={0}
                width={0}
                className="object-cover"
              />
              <div className="flex justify-between items-center gap-10 font-serif italic mt-5 mb-2">
                <h3 className="text-sm flex items-center gap-2">
                  <MdOutlineDateRange /> October 11, 2019
                </h3>
                <h3 className="text-sm flex items-center gap-2">
                  <GiFountainPen /> Alisa Michaels
                </h3>
              </div>
              <h1 className="font-bold text-lg md:text-2xl uppercase ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ab!
              </h1>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="relative flex flex-col justify-end p-4 ">
              <Image
                src={AllImages.featured2}
                alt="featured img"
                height={0}
                width={0}
                className="object-cover"
              />
              <div className="flex justify-between items-center gap-10 font-serif italic mt-5 mb-2">
                <h3 className="text-sm flex items-center gap-2">
                  <MdOutlineDateRange /> October 11, 2019
                </h3>
                <h3 className="text-sm flex items-center gap-2">
                  <GiFountainPen /> Alisa Michaels
                </h3>
              </div>
              <h1 className="font-bold text-lg md:text-2xl uppercase ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ab!
              </h1>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative flex flex-col justify-end p-4 ">
              <Image
                src={AllImages.featured3}
                alt="featured img"
                height={0}
                width={0}
                className="object-cover"
              />
              <div className="flex justify-between items-center gap-10 font-serif italic mt-5 mb-2">
                <h3 className="text-sm flex items-center gap-2">
                  <MdOutlineDateRange /> October 11, 2019
                </h3>
                <h3 className="text-sm flex items-center gap-2">
                  <GiFountainPen /> Alisa Michaels
                </h3>
              </div>
              <h1 className="font-bold text-lg md:text-2xl uppercase ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ab!
              </h1>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative flex flex-col justify-end p-4 ">
              <Image
                src={AllImages.featured4}
                alt="featured img"
                height={0}
                width={0}
                className="object-cover"
              />
              <div className="flex justify-between items-center gap-10 font-serif italic mt-5 mb-2">
                <h3 className="text-sm flex items-center gap-2">
                  <MdOutlineDateRange /> October 11, 2019
                </h3>
                <h3 className="text-sm flex items-center gap-2">
                  <GiFountainPen /> Alisa Michaels
                </h3>
              </div>
              <h1 className="font-bold text-lg md:text-2xl uppercase ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ab!
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex flex-col justify-end p-4 ">
              <Image
                src={AllImages.featured4}
                alt="featured img"
                height={0}
                width={0}
                className="object-cover"
              />
              <div className="flex justify-between items-center gap-10 font-serif italic mt-5 mb-2">
                <h3 className="text-sm flex items-center gap-2">
                  <MdOutlineDateRange /> October 11, 2019
                </h3>
                <h3 className="text-sm flex items-center gap-2">
                  <GiFountainPen /> Alisa Michaels
                </h3>
              </div>
              <h1 className="font-bold text-lg md:text-2xl uppercase ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ab!
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex flex-col justify-end p-4 ">
              <Image
                src={AllImages.featured1}
                alt="featured img"
                height={0}
                width={0}
                className="object-cover"
              />
              <div className="flex justify-between items-center gap-10 font-serif italic mt-5 mb-2">
                <h3 className="text-sm flex items-center gap-2">
                  <MdOutlineDateRange /> October 11, 2019
                </h3>
                <h3 className="text-sm flex items-center gap-2">
                  <GiFountainPen /> Alisa Michaels
                </h3>
              </div>
              <h1 className="font-bold text-lg md:text-2xl uppercase ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ab!
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex flex-col justify-end p-4 ">
              <Image
                src={AllImages.featured1}
                alt="featured img"
                height={0}
                width={0}
                className="object-cover"
              />
              <div className="flex justify-between items-center gap-10 font-serif italic mt-5 mb-2">
                <h3 className="text-sm flex items-center gap-2">
                  <MdOutlineDateRange /> October 11, 2019
                </h3>
                <h3 className="text-sm flex items-center gap-2">
                  <GiFountainPen /> Alisa Michaels
                </h3>
              </div>
              <h1 className="font-bold text-lg md:text-2xl uppercase ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ab!
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
