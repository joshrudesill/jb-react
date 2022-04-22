
const IconInfoCard = ({ children, icon }) => (
  <div className='card p-3 h-100'>
    { icon ? <i class={`bi bi-${icon} display-3`}></i> : null }

    { children }

  </div>
);

export default IconInfoCard;