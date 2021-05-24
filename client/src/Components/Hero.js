import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
      <div className="container mx-auto px-6 flex relative py-16">
        <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
          <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
          <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
            Be on
            <span className="text-5xl sm:text-7xl">Time</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white">
            Your Time matters the most , so get the most out of it by changing
            the way you park , stop looking for parking spots , don't know what
            to do? Just use smart Parking out of the box and save time !
          </p>
          <div className="flex mt-8">
            <Link
              to="/login"
              className="uppercase py-2 px-4 rounded-lg bg-red-500 border-2 border-transparent text-white text-md mr-4 hover:bg-red-400"
            >
              Get started
            </Link>
            <Link
              to="#"
              className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-red-500 text-red-500 dark:text-white hover:bg-red-400 hover:text-white text-md"
            >
              Read more
            </Link>
          </div>
        </div>
        <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
          <img
            src="/smart-park.gif"
            alt="smart-park"
            className="max-w-xs md:max-w-sm m-auto"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
