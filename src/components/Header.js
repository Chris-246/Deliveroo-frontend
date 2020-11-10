import React from "react";
import logo from "../img/deliveroo-logo.svg";

const Header = ({ data, isLoading }) => {
  return (
    <div className="header container">
      <div className="logocontain">
        <img src={logo} alt="logo deliveroo" className="logo" />
      </div>

      {isLoading ? (
        <span>Page is loading ...</span>
      ) : (
        <div className="restaurant">
          <div>
            <h2 className="restauname">{data.restaurant.name}</h2>
            <p className="restaudesc">{data.restaurant.description}</p>
          </div>
          <img alt="restaurant" src={data.restaurant.picture} />{" "}
        </div>
      )}
    </div>
  );
};

export default Header;
