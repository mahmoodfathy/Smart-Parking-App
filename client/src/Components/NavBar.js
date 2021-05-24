import { Link, useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useContext } from "react";
import { formContext } from "../Contexts";
import axios from "axios";

const NavBar = () => {
  const { isSignedIn, setIsSignedIn } = useContext(formContext);
  const history = useHistory();
  const handleClick = async (url) => {
    if (!isSignedIn) {
      console.log(url);
      history.push(url);
    } else {
      try {
        const response = await axios({
          method: "GET",
          url: "http://localhost:3001/logout",
          withCredentials: true,
        });
        console.log(response);
        history.push("/");
        setIsSignedIn(false);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <div className="text-gray-700 bg-white ">
        <div className="flex flex-col flex-wrap p-5 mx-auto border-b md:items-center md:flex-row">
          <Link to="/" className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
            <div className="inline-flex items-center">
              <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-cyan-400 to-lightBlue-500"></div>
              <h2 className="font-semibold tracking-tighter text-gray-500 transition duration-1000 ease-in-out transform text-bold lg:mr-8">
                Smart Parking
              </h2>
            </div>
          </Link>
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
            <HashLink
              to="/#pricing"
              smooth
              className="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800 invisible md:visible "
            >
              Pricing
            </HashLink>
            <HashLink
              to="/#contact"
              smooth
              className="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800 invisible md:visible"
            >
              Contact
            </HashLink>
            <HashLink
              to="/#services"
              smooth
              className="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800 invisible md:visible"
            >
              Services
            </HashLink>
          </nav>
          <div className="flex m-auto">
            <button
              onClick={(e) => handleClick("/login")}
              className="items-center justify-center  px-8 py-2 ml-auto font-semibold text-white transition duration-500 ease-in-out transform bg-red-500 rounded-lg hover:bg-red-400 focus:ring focus:outline-none"
            >
              {isSignedIn ? "Logout" : "Login"}
            </button>

            {!isSignedIn && (
              <button
                onClick={(e) => handleClick("/signup")}
                className="items-center  justify-center px-8 py-2 ml-2 font-semibold text-white transition duration-500 ease-in-out transform bg-red-500 rounded-lg hover:bg-red-400 focus:ring focus:outline-none"
              >
                Sign Up
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
