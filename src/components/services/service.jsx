const Service = ({ title, price }) => (
  <div class="row border-bottom border-light mb-2">
    <div class="text-start col">
      <h4 class="fw-light">{title}</h4>
    </div>
    <h3 class="text-end col-auto fw-normal">
      {price}
    </h3>
</div>
);

export default Service;