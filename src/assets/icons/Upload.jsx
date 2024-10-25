import * as React from "react"
import Svg, { Path } from "react-native-svg"
const upload = (props) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    viewBox="0 0 48 48"
  >
    <Path d="M23.979 6a1.5 1.5 0 0 0-1.04.44l-6 6a1.5 1.5 0 1 0 2.122 2.12l3.439-3.439V32.5a1.5 1.5 0 1 0 3 0V11.121l3.44 3.44a1.5 1.5 0 1 0 2.12-2.122l-6-6A1.5 1.5 0 0 0 23.98 6zM11.5 17C8.48 17 6 19.48 6 22.5v14c0 3.02 2.48 5.5 5.5 5.5h25c3.02 0 5.5-2.48 5.5-5.5v-14c0-3.02-2.48-5.5-5.5-5.5h-2a1.5 1.5 0 1 0 0 3h2c1.398 0 2.5 1.102 2.5 2.5v14c0 1.398-1.102 2.5-2.5 2.5h-25A2.478 2.478 0 0 1 9 36.5v-14c0-1.398 1.102-2.5 2.5-2.5h2a1.5 1.5 0 1 0 0-3h-2z" />
  </Svg>
)
export default upload
