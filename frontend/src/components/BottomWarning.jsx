/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
const BottomWarning = ({ label
    , buttonText, to
}) => {
  return (
      <div className="py-2 text-sm font-semibold flex justify-center">
          <div>{label}</div>
          <Link className="pointer underline pl-1 cursor-pointer font-bold" to={to}>
              {buttonText}
          </Link>
      </div>
  )
}

export default BottomWarning