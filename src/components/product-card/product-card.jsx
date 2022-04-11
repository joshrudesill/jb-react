const ProductCard = ({ title, desc, price, asset }) => (
  <div classNameName="col">
    <div className="mx-auto card h-100" style={{ maxWidth: "95%" }}>
      <img
        src={asset}
        className="card-img-top"
        style={{ height: "17rem", objectFit: "cover" }}
        alt=""
      ></img>
      <div className="card-body shadow shadow-sm">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle text-muted fw-light">{price}</h6>
        <p className="card-text">{desc}</p>
      </div>
    </div>
  </div>
);

export default ProductCard;
