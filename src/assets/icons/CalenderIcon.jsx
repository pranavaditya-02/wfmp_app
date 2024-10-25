import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Calendericon = (props) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    viewBox="0 0 48 48"
  >
    <Path d="M12.5 6C8.928 6 6 8.928 6 12.5v23c0 3.572 2.928 6.5 6.5 6.5h23c3.572 0 6.5-2.928 6.5-6.5v-23C42 8.928 39.072 6 35.5 6h-23zm0 3h23c1.95 0 3.5 1.55 3.5 3.5V14H9v-1.5C9 10.55 10.55 9 12.5 9zM9 17h30v18.5c0 1.95-1.55 3.5-3.5 3.5h-23C10.55 39 9 37.45 9 35.5V17zm6.5 4a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5zm8.5 0a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5zm8.5 0a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5zm-17 9a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5zm8.5 0a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5z" />
  </Svg>
)
export default Calendericon
