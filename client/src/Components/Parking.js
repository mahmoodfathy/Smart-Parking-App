import mqtt from "mqtt";
import "@lottiefiles/lottie-player";
import { useRef, useState, useEffect } from "react";
const connectUrl = "ws://localhost:8083/mqtt";

// client.on("message", (topic, message) => {
//   console.log("received message：", topic, message.toString());
//   const msgObj = JSON.parse(message.toString());
//   setSensorOn(msgObj);
// });

let clientConnection = mqtt.connect(connectUrl, {});

function Parking() {
  let [client, setClient] = useState(null);
  const [connectStatus, setConnectStatus] = useState("");
  const [sensorOn, setSensorOn] = useState([]);

  useEffect(() => {
    setClient(clientConnection);
    if (client) {
      clientConnection.subscribe("testtopic", (err) => {
        console.log(`Subscribe to topic test topic`);
        // if (!err) {
        //   setInterval(() => {
        //   //prettier-ignore
        //   client.publish(
        //       "testtopic",
        //      `{ "status":false,"id":1 }`,
        //       {
        //         qos: 2,
        //       }
        //     );
        //   }, 5000);
        // }
      });
      client.on("connect", () => {
        setConnectStatus("Connected");
      });
      client.on("error", (err) => {
        console.error("Connection error: ", err);
        client.end();
      });
      client.on("reconnect", () => {
        setConnectStatus("Reconnecting");
      });
      client.on("message", (topic, message) => {
        console.log("received message：", topic, message.toString());
        const msgObj = JSON.parse(message.toString());
        console.log(msgObj);
        // setSensorOn({ ...sensorOn, msgObj });
        setSensorOn((oldState) => {
          let newState = [...oldState];
          let updateFlag = false;
          newState = newState.map((element) => {
            if (element.id === msgObj.id) {
              updateFlag = true;
              return msgObj;
            } else {
              return element;
            }
          });
          if (updateFlag) {
            return [...newState];
          } else {
            return [...newState, msgObj];
          }
        });
      });
    }
    return () => {
      clientConnection.unsubscribe("testtopic");
    };
  }, [client]);
  const img = useRef(null);
  if (img.current) {
    console.log(img.current.id);
  }
  //prettier-ignore
  const parkingSpots = {
    "1": "/grey-car.png",
    "2": "/green-car.png",
    "3":"/red-car.png"
  };
  // const filteredSpots = parkingSpots.filter((spot) => spot.id == sensorOn.id);
  // console.log(filteredSpots);

  return (
    <div className="App">
      <p className="text-red-500 text-2xl text center">{connectStatus}</p>

      <div className="flex justify-center ">
        <img src="Parking-spot.png" />;
      </div>
      {sensorOn.map((spot) => {
        if (parkingSpots[spot.id] && spot.status) {
          let styles;
          if (spot.id == 2) {
            styles = {
              maxWidth: "100%",
              height: "auto",
              transform: `translateY(100px)`,
              position: "absolute",
              top: "0px",
              left: "370px",
            };
          }
          if (spot.id == 1) {
            styles = {
              maxWidth: "100%",
              height: "auto",
              transform: `translateY(100px)`,
              position: "absolute",
              top: "0px",
              left: "490px",
            };
          }
          if (spot.id == 3) {
            styles = {
              maxWidth: "100%",
              height: "auto",
              transform: `translateY(100px)`,
              position: "absolute",
              top: "0px",
              left: "600px",
            };
          }
          return (
            <div key={spot.id} className="flex ">
              <img
                ref={img}
                style={styles}
                src={parkingSpots[spot.id]}
                className="App-logo"
                alt="logo"
              />
            </div>
          );
        } else {
          console.log(sensorOn);
        }
      })}
    </div>
  );
}

export default Parking;
