
const CarouselItem = ({ src, active }) => (
    <div className={`${active ? 'active' : ''} carousel-item`}>
            <img src={src} className="d-block w-100 img-fluid mx-auto rounded-1" style={{maxHeight: '45rem', objectFit: 'cover'}} alt="..."></img>
          </div>
);

export default CarouselItem;