import * as React from "react";
import Svg, { Path } from "react-native-svg";

const DownArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 15}  // Default width is set to 20
    height={props.height || 15} // Default height is set to 20
    viewBox="0 0 510 300"
    {...props}  // Pass down any additional props
  >
    <Path
      d="M15.7 118.4C6.8 120.8 0 129.5 0 138.5c0 9.2-2.6 6.3 123.3 132.3 73.6 73.7 120.7 120.1 123.2 121.4 5.4 2.8 13.6 2.8 19 0 2.5-1.3 49.6-47.7 123.2-121.4 93.1-93.1 119.7-120.3 121.2-123.8 2.6-5.6 2.6-11.3.2-16.5-4.6-9.9-13.8-14.6-24.6-12.3-5 1-6.1 2.1-117.3 113.1L256 343.5 143.7 231.3 31.5 119.2l-5.3-1.1c-2.9-.6-5.4-1.1-5.5-1-.1 0-2.3.6-5 1.3z"
      fill={props.color || "#002A6B"} // Default color is set to '#002A6B'
    />
  </Svg>
);

export default DownArrow;