
const IconInfoCard = ({ children, icon }) => (
  <div className='card p-3 h-100'>
    <i class={`bi bi-${icon} display-3`}></i>

    { children }

  </div>
);

export default IconInfoCard;