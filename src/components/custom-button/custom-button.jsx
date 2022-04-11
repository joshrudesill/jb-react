const CustomButton = ({ classes, children, ...otherProps }) => (
  <button className={classes} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
