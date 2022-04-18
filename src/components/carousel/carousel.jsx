import CarouselItem from "./carousel-item";

const Carousel = ({ srcs }) => (
    <div className="container mb-5">
      <div id="pageTopCarousel" className="mx-md-5 carousel carousel-dark slide mt-3" data-bs-ride="carousel">
        <div className="carousel-inner">
          
          {
          srcs.map(s => 
                <CarouselItem key={s.src} src={s.src} active={s.active} />
            )
          }

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#pageTopCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#pageTopCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
);

export default Carousel;