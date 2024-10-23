import * as React from "react";
import Svg, { Path } from "react-native-svg";


const Loginbg = (props) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={'100%'}
    height={'100%'}
 
    // viewBox="0 0 290 395 "
  >
    <Path
      fill="rgba(0,183,168,0.08)"
      d="M0 290.777V181.653S1.865 56.735 125.105 37.961c42.535-6.48 80.488 7.147 114.279 20.774C303.3 84.509 352.323 110.277 389.293 0v290.777Z"
      data-name="Intersection 1"
      opacity={0.48}
    />
  </Svg>
);


export default Loginbg;
