import { useContext, useReducer, useState } from "react";
import { formContext } from "../Contexts";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
const Admin = () => {
  const { setIsSignedIn } = useContext(formContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        url: "http://localhost:3001/parking",
        withCredentials: true,
        method: "POST",
        data: {
          lat,
          lng,
          parkingName,
          contactInfo,
        },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const [formState, setFormState] = useReducer(
    (old, updates) => ({ ...old, ...updates }),
    { lat: "", lng: "", parkingName: "", contactInfo: "" }
  );
  const [passwordError, setPasswordError] = useState("");
  const { lat, lng, parkingName, contactInfo } = formState;

  return (
    <>
      {
        <section className="text-gray-700 text-center ">
          <div className="flex justify-center">
            <h1 className="text-center mt-12 flex font-semibold justify-center items-center text-white bg-red-500 py-2 w-36   rounded-md">
              Smart Parking
            </h1>
          </div>
          <div className="container px-8 pt-24 pb-24 mx-auto lg:px-4">
            <div className="flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -m-2">
                  <div className="w-full p-2">
                    <div className="relative">
                      <input
                        type="text"
                        id="lat"
                        name="lat"
                        placeholder="Latitude"
                        className="w-full px-4 py-2 text-red-500  bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0"
                        value={lat}
                        onChange={(e) => {
                          setFormState({ lat: e.target.value });
                        }}
                      />
                    </div>
                  </div>

                  <div className="w-full p-2">
                    <input
                      type="lng"
                      id="lng"
                      name="lng"
                      placeholder="Longitude"
                      value={lng}
                      onChange={(e) => {
                        setFormState({ lng: e.target.value });
                      }}
                      className="w-full px-4 py-2 mr-4 text-base text-red-500 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0"
                    />
                  </div>
                  <div className="w-full p-2">
                    <input
                      id="ParkingName"
                      name="ParkingName"
                      placeholder="Parking Name"
                      value={parkingName}
                      onChange={(e) => {
                        setFormState({ parkingName: e.target.value });
                      }}
                      className="w-full px-4 py-2 mr-4 text-base text-red-500 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0"
                    />
                  </div>
                  <div className="w-full p-2">
                    <input
                      value={contactInfo}
                      onChange={(e) => {
                        setFormState({ contactInfo: e.target.value });
                      }}
                      id="contactInfo"
                      name="contactInfo"
                      placeholder="contact info"
                      className="w-full px-4 py-2 mr-4 text-base text-red-500 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0"
                    />
                  </div>

                  <div className="w-full p-2 ">
                    <button className="w-full px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-red-500 rounded-lg hover:bg-red-400 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      }
      {/* {isSignedUp && <Login />} */}
    </>
  );
};
export default Admin;
