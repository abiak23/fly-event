import React from "react";
import NavBar from "./navBar";

function Home() {
  const data = [
    {
      img: require("./assets/flyWeddingIcon.png"),
      headeing: "wedding",
      text: "We understand that planning an event is serious business, and we want you to enjoy the journey and keep in mind.",
    },
    {
      img: require("./assets/flyPartyIcon.png"),
      headeing: "Private Parties",
      text: "We understand that planning an event is serious business, and we want you to enjoy the journey and keep in mind.",
    },
    {
      img: require("./assets/flyCorporate.png"),
      headeing: "Corporate Parties",
      text: "We understand that planning an event is serious business, and we want you to enjoy the journey and keep in mind.",
    },
    {
      img: require("./assets/flyHouseWarming.png"),
      headeing: "House Warming",
      text: "We understand that planning an event is serious business, and we want you to enjoy the journey and keep in mind.",
    },
    {
      img: require("./assets/flyMartinety.png"),
      headeing: "Maternity",
      text: "We understand that planning an event is serious business, and we want you to enjoy the journey and keep in mind.",
    },
  ];

  const data2 = [
    { img: require("./assets/flyPhotograpy.png"), text: "Photography" },
    { img: require("./assets/flyDecors.png"), text: "Decors" },
    { img: require("./assets/flyCook.png"), text: "Catering" },
    { img: require("./assets/flyHall.png"), text: "Hall" },
    { img: require("./assets/flyAccomidation.png"), text: "Accomodation" },
    { img: require("./assets/flyTransport.png"), text: "Transport" },
    { img: require("./assets/flyBridal.png"), text: "Bridal & Mehandhi" },
    {
      img: require("./assets/flyMusic.png"),
      text: "Traditional Music & Dance",
    },
    {
      img: require("./assets/flyDj.png"),
      text: "DJ & Lighting",
    },
    { img: require("./assets/flyCake.png"), text: "Cakes" },
    { img: require("./assets/flyGift.png"), text: "Gifts" },
    { img: require("./assets/flyGiftCard.png"), text: "Wedding cards" },
  ];

  const data3 = [
    "PhotoGraphy",
    "wedding",
    "Bridal",
    "Make Up",
    "Catering",
    "Decors",
  ];

  const data4 = [{ img: require("./assets/ft.png"), text: "Photography" }];

  return (
    <div>
      <NavBar />
      <div className="home-container">
        <img src={require("./assets/flyHome.png")} className="home-img" />
        <h3 className="img-overlay-text">
          BEST EVENT PLANNERS IN OUR CITY IN OUR CITY
        </h3>
        <p className="home-para">
          FLY is a wedding planning company based out of Coimbatore. We believe
          that life is meant to be celebrated always in all ways. Whether it is
          a simple dinner party amongst friends and family or a once in a
          lifetime dream wedding, we want to be there to help make the planning
          and execution of that event as fun as the party itself. Our mission is
          to help our clients have an amazing party, and by doing so make the
          world around us a more happier and joyful place.We understand that
          planning an event is serious business, and we want you to enjoy the
          journey and keep in mind the bigger picture and outcome rather than
          stressing out over all of the litle details.
        </p>
        <img
          src={require("./assets/flyhomeFooter.png")}
          className="home-footer"
        />
      </div>
      <div className="home-container" style={{ backgroundColor: "#FFF2EB" }}>
        <h2 className="value-text">We Provide</h2>
        <div className="card-container">
          {data?.map((e, index) => (
            <div className="card" key={index}>
              <img src={e.img} className="card-img" />
              <h4 className="card-heading">{e.headeing}</h4>
              <p className="card-para">{e.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="home-container">
        <img
          src={require("./assets/flyhomeFooter.png")}
          className="home-footer"
        />
        <h2 className="value-text">Service</h2>
        <div className="card2-container">
          {data2?.map((e, index) => (
            <div className="card2" key={index}>
              <img src={e.img} className="card2-img" />
              <p className="card2-text">{e.text}</p>
            </div>
          ))}
          <img
            src={require("./assets/flyhomeFooter.png")}
            className="home-footer"
          />
        </div>
      </div>
      <div className="home-container">
        <h1 className="gallery-header">Gallery</h1>
        <div className="gallery-container">
          {data3?.map((e, index) => (
            <div className="gallery-img-container" key={index}>
              {/* <div className="hover-effect">{e}</div> */}
              <img
                src={require("./assets/flyGallery.jpeg")}
                className="Gallery-img"
              />
            </div>
          ))}
        </div>
        <img
          src={require("./assets/flyhomeFooter.png")}
          className="home-footer"
        />
      </div>
      <footer id="#Contact">
        <div className="bottom">
          <h1>footer</h1>
          <h2>GET IN TOUCH</h2>
          <img src={require("./assets/ft.png")} />
          <p>
            "Life has got all those twists and turns. ... "Keep your face always
            toward the sunshine, and shadows will fall behind you."
          </p>
        </div>
        <div>
          <h2>Contact us</h2>
          <p>
            <a href="tel:+918825587188">8825587188</a>
          </p>

          <p>
            <a href="mailtoabimscpsg@gmail.com">abimscpsg@gmail.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
