import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import { AllImages } from "@/Components/AllImages/AllImages";
import { MdOutlineArrowOutward } from "react-icons/md";

const Destination = () => {
  return (
    <div className="bg-primaryBackground">
      <div className="py-20 container mx-auto ">
        <Carousel arrows infinite={false}>
          <div>
            <div className="relative">
              <Image
                src={AllImages.destination1}
                alt="destination image"
                layout="responsive"
                width={1000}
                height={600}
                className="object-cover w-full"
              />
              <div className="absolute w-full md:w-auto  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  md:transform md:-translate-x-2.5">
                <div className="bg-[#f1f1e7] p-2 md:p-8  opacity-90 text-center">
                  <p className="text-neutral-500 font-serif italic text-lg md:text-xl">
                    Popular
                  </p>
                  <h1 className="text-lg md:text-2xl lg:text-3xl font-bold uppercase">
                    Colorado
                  </h1>
                  <p className="text-neutral-500 text-sm md:text-lg lg:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci atque odio accusamus iure ratione ab ipsam,
                    nesciunt vero? Amet, iure?
                  </p>
                  <div className="flex justify-center items-center">
                    <button className="btn px-4 md:px-5 md:py-2 md:my-5 font-bold text-sm md:text-lg lg:text-xl flex justify-center items-center gap-2 transition-all">
                      Read More
                      <MdOutlineArrowOutward className="h-4 w-4 md:h-5 md:w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className=" text-center py-10 bg-gray-800">
              {" "}
              <div>
                <div className="relative">
                  <Image
                    src={AllImages.destination1}
                    alt="destination image"
                    layout="responsive"
                    width={1000}
                    height={600}
                    className="object-cover w-full"
                  />
                  <div className="absolute w-full md:w-auto  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  md:transform md:-translate-x-2.5">
                    <div className="bg-[#f1f1e7] p-2 md:p-8  opacity-90 text-center">
                      <p className="text-neutral-500 font-serif italic text-lg md:text-xl">
                        Popular
                      </p>
                      <h1 className="text-lg md:text-2xl lg:text-3xl font-bold uppercase">
                        Colorado
                      </h1>
                      <p className="text-neutral-500 text-sm md:text-lg lg:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci atque odio accusamus iure ratione ab ipsam,
                        nesciunt vero? Amet, iure?
                      </p>
                      <div className="flex justify-center items-center">
                        <button className="btn px-4 md:px-5 md:py-2 md:my-5 font-bold text-sm md:text-lg lg:text-xl flex justify-center items-center gap-2 transition-all">
                          Read More
                          <MdOutlineArrowOutward className="h-4 w-4 md:h-5 md:w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </h3>
          </div>
          <div>
            <h3 className=" text-center py-10 bg-gray-800">
              {" "}
              <div>
                <div className="relative">
                  <Image
                    src={AllImages.destination1}
                    alt="destination image"
                    layout="responsive"
                    width={1000}
                    height={600}
                    className="object-cover w-full"
                  />
                  <div className="absolute w-full md:w-auto  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  md:transform md:-translate-x-2.5">
                    <div className="bg-[#f1f1e7] p-2 md:p-8  opacity-90 text-center">
                      <p className="text-neutral-500 font-serif italic text-lg md:text-xl">
                        Popular
                      </p>
                      <h1 className="text-lg md:text-2xl lg:text-3xl font-bold uppercase">
                        Colorado
                      </h1>
                      <p className="text-neutral-500 text-sm md:text-lg lg:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci atque odio accusamus iure ratione ab ipsam,
                        nesciunt vero? Amet, iure?
                      </p>
                      <div className="flex justify-center items-center">
                        <button className="btn px-4 md:px-5 md:py-2 md:my-5 font-bold text-sm md:text-lg lg:text-xl flex justify-center items-center gap-2 transition-all">
                          Read More
                          <MdOutlineArrowOutward className="h-4 w-4 md:h-5 md:w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </h3>
          </div>
          <div>
            <h3 className=" text-center py-10 bg-gray-800">
              {" "}
              <div>
                <div className="relative">
                  <Image
                    src={AllImages.destination1}
                    alt="destination image"
                    layout="responsive"
                    width={1000}
                    height={600}
                    className="object-cover w-full"
                  />
                  <div className="absolute w-full md:w-auto  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  md:transform md:-translate-x-2.5">
                    <div className="bg-[#f1f1e7] p-2 md:p-8  opacity-90 text-center">
                      <p className="text-neutral-500 font-serif italic text-lg md:text-xl">
                        Popular
                      </p>
                      <h1 className="text-lg md:text-2xl lg:text-3xl font-bold uppercase">
                        Colorado
                      </h1>
                      <p className="text-neutral-500 text-sm md:text-lg lg:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci atque odio accusamus iure ratione ab ipsam,
                        nesciunt vero? Amet, iure?
                      </p>
                      <div className="flex justify-center items-center">
                        <button className="btn px-4 md:px-5 md:py-2 md:my-5 font-bold text-sm md:text-lg lg:text-xl flex justify-center items-center gap-2 transition-all">
                          Read More
                          <MdOutlineArrowOutward className="h-4 w-4 md:h-5 md:w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </h3>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Destination;
