/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function NavigationLink(props) {
  return (
    <Link to={props.to} style={{ background: props.bg, color: props.color }}>
      {props.text}
    </Link>
  );
}

export default NavigationLink;
