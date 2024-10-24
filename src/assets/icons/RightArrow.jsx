import * as React from "react";
import Svg, { Path } from "react-native-svg";

const RightArrow = (props) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0C356A" // Deep blue color
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Path d="M8 4l8 8-8 8" />
  </Svg>
);

export default RightArrow;