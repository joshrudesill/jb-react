
const ProductCard = () => (
    <div classNameName="col">
        <div className="mx-auto card h-100" style={{maxWidth: '95%'}}>
                <img src="assets/p1.jpg" className="card-img-top" style="height: 17rem; object-fit: cover;"></img>
                <div className="card-body shadow-sm">
                    <h5 className="card-title">Highlights</h5>
                    <h6 className="card-subtitle  text-muted fw-light">From €30</h6>
                    <p className="card-text">We use the latest techniques to create a personalized color</p>
                </div>
         </div>
    </div>
);

export default ProductCard;