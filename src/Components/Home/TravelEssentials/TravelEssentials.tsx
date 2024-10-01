import { AllImages } from "@/Components/AllImages/AllImages";
import Sectiontitle from "@/Components/Shared/SectionTitle/Sectiontitle";
import Image from "next/image";
import { Rate } from "antd";
const TravelEssentials = () => {
  const data = [
    {
      id: "1",
      image: AllImages.shop1,
      name: "Shoes",
      price: "$250.00",
      ratings: <Rate className="text-buttonColor" />,
    },
    {
      id: "2",
      image: AllImages.shop2,
      name: "Camera tripod",
      price: "$200.00",
      ratings: <Rate className="text-buttonColor" />,
    },
    {
      id: "3",
      image: AllImages.shop3,
      name: "Raincoat",
      price: "$200.00",
      ratings: <Rate className="text-buttonColor" />,
    },
    {
      id: "4",
      image: AllImages.shop4,
      name: "DSLR camera",
      price: "$1700.00",
      ratings: <Rate className="text-buttonColor" />,
    },
    {
      id: "5",
      image: AllImages.shop5,
      name: "Watter bottle",
      price: "$25.00",
      ratings: <Rate className="text-buttonColor" />,
    },
  ];
  return (
    <div className="bg-primaryBackground">
      <div className="container mx-auto py-20">
        <Sectiontitle
          heading="Travel Essentials OItems"
          subHeading="Find your"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20">
          {data.map((product) => (
            <div key={product.id}>
              <Image
                src={product.image}
                alt="travel Essentials img"
                height={0}
                width={0}
                className="object-cover"
              ></Image>
              <div className="text-center ">
                <p className="text-neutral-600 font-serif italic text-lg">
                  {product.price}{" "}
                </p>
                <p className="text-xl md:text-2xl font-bold uppercase hover:text-buttonColor transition-all my-1">
                  {product.name}{" "}
                </p>
                <p>{product.ratings} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelEssentials;
