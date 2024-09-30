import { AllImages } from "@/Components/AllImages/AllImages";
import Sectiontitle from "@/Components/Shared/SectionTitle/Sectiontitle";
import Image from "next/image";
import React from "react";
import { GiFountainPen } from "react-icons/gi";
import { MdOutlineArrowOutward, MdOutlineDateRange } from "react-icons/md";

const TravelTips = () => {
  return (
    <div className="container mx-auto my-20">
      <Sectiontitle
        subHeading={"Go through On"}
        heading={"Travel Essientials Tips"}
      />
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-20 ">
        <div>
          <Image
            src={AllImages.tips1}
            alt="tips img"
            height={0}
            width={0}
            className="object-cover"
          ></Image>
        </div>
        <div className="mx-2 md:mx-0">
          <div className="flex justify-between items-center gap-10 font-serif italic mt-5 mb-2">
            <h3 className="text-sm flex items-center gap-2">
              <MdOutlineDateRange /> October 11, 2019
            </h3>
            <h3 className="text-sm flex items-center gap-2">
              <GiFountainPen /> Alisa Michaels
            </h3>
          </div>
          <h1 className="text-xl md:text-3xl font-bold uppercase">
            Moving trough: the everyday urban jungle of your city
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            velit consectetur aliquid quo nostrum ex debitis id tempore
            temporibus? Quas?...
          </p>
          <button className="btn py-2 my-5 font-bold flex justify-start items-center gap-2">
            Read More
            <MdOutlineArrowOutward className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-20 ">
        <div className="mx-2 md:mx-0">
          <div className="flex justify-between items-center gap-10 font-serif italic mt-5 mb-2">
            <h3 className="text-sm flex items-center gap-2">
              <MdOutlineDateRange /> October 11, 2019
            </h3>
            <h3 className="text-sm flex items-center gap-2">
              <GiFountainPen /> Alisa Michaels
            </h3>
          </div>
          <h1 className="text-xl md:text-3xl font-bold uppercase">
            Moving trough: the everyday urban jungle of your city
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            velit consectetur aliquid quo nostrum ex debitis id tempore
            temporibus? Quas?...
          </p>
          <button className="btn py-2 my-5 font-bold flex justify-start items-center gap-2">
            Read More
            <MdOutlineArrowOutward className="h-5 w-5" />
          </button>
        </div>
        <div>
          <Image
            src={AllImages.tips2}
            alt="tips img"
            height={0}
            width={0}
            className="object-cover"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default TravelTips;
