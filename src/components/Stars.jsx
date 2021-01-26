import React from "react";
import { ReactComponent as Gold } from "../assets/IconStarGold.svg";
import { ReactComponent as White } from "../assets/IconStarWhite.svg";

const Stars = (props) => {
  // Takes in a number. Returns an array of star elements proportional to rating
  const countStars = (goldStarCount) => {
    let starArray = [];
    while (starArray.length < 5) {
      if (starArray.length < goldStarCount) {
        starArray.push(<Gold />);
      } else {
        starArray.push(<White />);
      }
    }
    return starArray;
  };

  return <div> {countStars(props.stars)}</div>;
};

export default Stars;