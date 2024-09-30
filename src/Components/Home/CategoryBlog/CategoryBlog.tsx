import { AllImages } from "@/Components/AllImages/AllImages";
import Image from "next/image";

const CategoryBlog = () => {
    return (
        <div className="my-10 ">
            <div className="flex flex-col md:flex-row justify-center items-center md:gap-28">
                <Image
                    src={AllImages.cat1}
                    alt="category img"
                    width={128}
                    height={128}
                    className=" w-36 cursor-pointer"
                />
                <Image
                    src={AllImages.cat2}
                    alt="category img"
                    width={128}
                    height={128}
                    className=" w-36 cursor-pointer"
                />
                <Image
                    src={AllImages.cat3}
                    alt="category img"
                    width={128}
                    height={128}
                    className=" w-36 cursor-pointer"
                />
                <Image
                    src={AllImages.cat4}
                    alt="category img"
                    width={128}
                    height={128}
                    className=" w-36 cursor-pointer"
                />
            </div>
        </div>
    );
};

export default CategoryBlog;
