import { Link } from "react-router-dom";
const Testmonials = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-4 mb-8 md:mb-0 flex-between items-center p-8">
      <div className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
        <p className="text-gray-600 dark:text-white">
          <span className="font-bold text-red-500 text-lg">“</span>
          To get social media testimonials like these, keep your customers
          engaged with your social media accounts by posting regularly yourself
          <span className="font-bold text-red-500 text-lg">”</span>
        </p>
        <div className="flex items-center mt-4">
          <Link to="#" className="block relative">
            <img
              alt="profil"
              src="/girl.jpg"
              className="mx-auto object-cover rounded-full h-10 w-10 "
            />
          </Link>
          <div className="flex flex-col ml-2 justify-between">
            <span className="font-semibold text-red-500 text-sm">
              Susan Ahmed
            </span>
            <span className="dark:text-gray-400 text-xs flex items-center">
              User of Smart Parking
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
        <p className="text-gray-600 dark:text-white">
          <span className="font-bold text-red-500 text-lg">“</span>
          To get social media testimonials like these, keep your customers
          engaged with your social media accounts by posting regularly yourself
          <span className="font-bold text-red-500 text-lg">”</span>
        </p>
        <div className="flex items-center mt-4">
          <Link to="#" className="block relative">
            <img
              alt="profil"
              src="/guy1.jpg"
              className="mx-auto object-cover rounded-full h-10 w-10 "
            />
          </Link>
          <div className="flex flex-col ml-2 justify-between">
            <span className="font-semibold text-red-500 text-sm">Michael</span>
            <span className="dark:text-gray-400 text-xs flex items-center">
              User of Smart Parking
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
        <p className="text-gray-600 dark:text-white">
          <span className="font-bold text-red-500 text-lg">“</span>
          To get social media testimonials like these, keep your customers
          engaged with your social media accounts by posting regularly yourself
          <span className="font-bold text-red-500 text-lg">”</span>
        </p>
        <div className="flex items-center mt-4">
          <Link to="#" className="block relative">
            <img
              alt="profil"
              src="/guy2.jpg"
              className="mx-auto object-cover rounded-full h-10 w-10 "
            />
          </Link>
          <div className="flex flex-col ml-2 justify-between">
            <span className="font-semibold text-red-500 text-sm">
              Mahmood Fathy
            </span>
            <span className="dark:text-gray-400 text-xs flex items-center">
              User of Smart Parking
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testmonials;
