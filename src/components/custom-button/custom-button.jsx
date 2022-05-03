import { Link } from "react-router-dom";

const CustomButton = ({ classes, to, children, ...otherProps }) => (
  <Link to={to}>
    <button className={classes} {...otherProps}>
      {children}
    </button>
  </Link>
);

export default CustomButton;
