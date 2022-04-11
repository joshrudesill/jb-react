const TextTitle = ({ text, extraStyle, ...otherProps }) => (
  <div className={extraStyle} {...otherProps}>
    {text}
  </div>
);

export default TextTitle;
