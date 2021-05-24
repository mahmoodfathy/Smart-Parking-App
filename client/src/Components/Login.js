import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { formContext } from "../Contexts";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const { isSignedIn, setIsSignedIn } = useContext(formContext);
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3001/login",
        data: {
          Email,
          Password,
        },
        withCredentials: true,
      });
      console.log(response);
      if (response.status === 200) {
        setIsSignedIn(true);
        history.push({
          // state: { isSignedIn },
          pathname: "/home",
        });
      }
    } catch (err) {
      const error = err.response;
      console.log(error);
    }
  };

  return (
    <>
      <section className="flex flex-col items-center h-screen bg-gray-100 md:flex-row ">
        <div className="relative hidden w-full h-screen  lg:block md:w-1/3 lg:w-2/3">
          <img
            src="Login.webp"
            alt=""
            className="absolute object-cover w-full h-full"
          />
          <div className="relative z-10 m-12 text-left">
            <a className="flex items-center w-32 mb-4 font-medium text-gray-900 title-font md:mb-10">
              <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-cyan-400 to-lightBlue-500"></div>
              <h2 className="text-lg font-bold tracking-tighter text-red-400 uppercase duration-500 ease-in-out transform ttransition hover:text-lightBlue-500 ">
                Smart Parking
              </h2>
            </a>
            <h1 className="mb-2 text-2xl font-semibold tracking-tighter text-black-700 tsm:text-5xl title-font">
              Discover 10+
              <br />
              Parking spots to save time.
            </h1>
          </div>
        </div>
        <div className="flex w-full h-screen px-6 bg-white md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12 items-left justify-left">
          <div className="w-full py-32 lg:py-6 lg:h-100">
            <h1 className="my-12 text-center text-2xl font-semibold bg-red-300 rounded-md py-1 max-w-3xl tracking-tighter text-white md:hidden  sm:text-3xl ">
              Smart Parking
            </h1>
            <h1 className="my-12 text-2xl font-semibold text-center tracking-tighter text-black-700 sm:text-3xl title-font">
              Sign Up to a new world.
            </h1>
            {/* <div className="flex text-center justify-center"></div> */}
            <form className="mt-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-medium leading-relaxed tracking-tighter text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Your Email "
                  className="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg ext-black-700 focus:border-red-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-red-500 ring-offset-2"
                  autoFocus
                  autoComplete="true"
                  required
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <label className="block text-xs font-medium leading-relaxed tracking-tighter text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Your Password"
                  minLength="6"
                  className="w-full px-4 py-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg ext-black-700 focus:border-red-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-red-500 ring-offset-2"
                  required
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mt-2 text-right">
                <a
                  href="#"
                  className="text-sm font-semibold leading-relaxed text-gray-700 hover:text-black-700 focus:text-black-700"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform bg-red-500 rounded-lg hover:bg-red-400 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
              >
                Log In
              </button>
            </form>
            <p className="mt-8 text-center">
              Need an account?
              <Link
                to="/signup"
                className="font-semibold text-black-500 hover:text-black-400"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
