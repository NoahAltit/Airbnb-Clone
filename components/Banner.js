import Image from "next/image";
import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src={banner} layout="fill" objectFit="cover" />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-white font-bold lg:text-3xl md:text-2xl sm:text-sm">
          Book a trip. Host travellers. All on Airbnb.
        </p>

        <div className="space-x-10 my-5 ">
          <button className="homeBtn">Explore</button>
          <button className="homeBtn">Host</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
