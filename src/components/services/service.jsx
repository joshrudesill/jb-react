const Service = ({ title, price }) => (
  <div className="row border-bottom border-light mb-2">
    <div className="text-start col">
      <h4 className="fw-light">{title}</h4>
    </div>
    <h3 className="text-end col-auto fw-normal">
      {price}
    </h3>
</div>
);

export default Service;