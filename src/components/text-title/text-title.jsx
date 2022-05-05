const TextTitle = ({ text, extraStyle, children, leadingIcon, ...otherProps }) => (
  <div className={extraStyle} {...otherProps}>
    {leadingIcon ? <i className={`bi bi-${leadingIcon}`}></i> : ''}
    {text}
    {children}
  </div>
);

export default TextTitle;
