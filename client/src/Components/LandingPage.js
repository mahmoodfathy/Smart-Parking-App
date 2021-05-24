import Footer from "./Footer";
import Hero from "./Hero";
import Pricing from "./Pricing";
import RightHeader from "./RightHeader";
import Testmonials from "./Testmonials";
import Title from "./Title";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Title
        title={"It's not a smart Park"}
        subtitle={"if you don't have a way to move fast"}
        id="1"
      />
      <section id="services">
        <RightHeader
          src={"/google-map.gif"}
          title={"Google Maps 🗺️"}
          explanation={
            "Open your google maps to check for all the nearest parking spots"
          }
        />
      </section>
      <Title id="2" title={"Get Instant Directions "} />
      <RightHeader
        src={"/map-lines.gif"}
        title={"Instant Directions ➡️"}
        explanation={
          "Get instant directions to the nearest parking spots , it's easy as a piece of cake !"
        }
      />
      <Title
        title={"Your Parking spot "}
        subtitle={"is waiting for you to take"}
      />
      <RightHeader
        src={"/smart-park2.gif"}
        title={"Parking Spots 🅿️"}
        explanation={
          "Know your parking spot even before you begin to drive to the parking slot, we got plenty of parking spots so you dont have to worry about anything "
        }
      />
      <Title title={"It's Super Easy "} />
      <RightHeader
        src={"/jeep-park.gif"}
        title={"Park and it's done! 🎉"}
        explanation={
          "Get instant feedback on your app to whether a spot parked or not , you dont have to do anything it just works , get real time feedback on your spot , park and it's done"
        }
      />
      <div className="mb-3">
        <section id="pricing">
          <Title title="Pricing " />
        </section>
      </div>
      <Pricing />

      <Title s title="Users Keep Us Going " />
      <Testmonials />
      <section id="contact">
        <Footer />
      </section>
    </>
  );
};
export default LandingPage;
