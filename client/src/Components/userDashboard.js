import { useContext, useState, useEffect } from "react";
import { formContext } from "../Contexts";
import {
  LoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Link } from "react-router-dom";
import Admin from "./Admin";
import axios from "axios";
const UserDashboard = () => {
  const { isSignedIn, isAdmin } = useContext(formContext);
  const [parkings, setParkings] = useState([]);
  const containerStyle = {
    width: "400px",
    height: "400px",
  };
  const getParkings = async () => {
    try {
      const response = await axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:3001/parking",
      });
      console.log(response);
      setParkings(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getParkings();
  }, []);
  const center = {
    lat: 29.953756400000003,
    lng: 31.5370003,
  };
  const divStyle = {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15,
  };
  const [showInfo, setShowInfo] = useState(false);
  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };
  if (!isAdmin) {
    return (
      <>
        {isSignedIn && (
          <div className="flex justify-center">
            <LoadScript googleMapsApiKey="">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={8}
              >
                {parkings.map((parking) => {
                  return (
                    <>
                      <Marker
                        label="Parking"
                        clickable
                        onClick={handleInfoClick}
                        position={{
                          lat: parseFloat(parking.lat),
                          lng: parseFloat(parking.lng),
                        }}
                      />
                      {showInfo && (
                        <InfoWindow
                          position={{
                            lat: parseFloat(parking.lat),
                            lng: parseFloat(parking.lng),
                          }}
                        >
                          <div style={divStyle}>
                            <Link
                              to="/parking"
                              className="font-semibold text-red-500 text-sm"
                            >
                              {parking.parkingName}
                            </Link>
                          </div>
                        </InfoWindow>
                      )}
                    </>
                  );
                })}
              </GoogleMap>
            </LoadScript>
          </div>
        )}
      </>
    );
  } else {
    return <Admin />;
  }
};
export default UserDashboard;
