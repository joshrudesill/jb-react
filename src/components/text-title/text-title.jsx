const TextTitle = ({ text, extraStyle, children, ...otherProps }) => (
  <div className={extraStyle} {...otherProps}>
    {text}{children}
  </div>
);

export default TextTitle;
