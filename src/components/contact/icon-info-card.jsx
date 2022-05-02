
const IconInfoCard = ({ children, icon, ...otherProps }) => (
  <div className='card p-3 h-100' {...otherProps}>
    { icon ? <i class={`bi bi-${icon} display-3`}></i> : null }

    { children }

  </div>
);

export default IconInfoCard;