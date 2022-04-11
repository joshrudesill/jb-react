import Service from "./service";

const ServiceSubsection = ({ title, names }) => (
  <div class="card border-0 col-md-8 mx-auto mb-4" >
    <div class="card-header c1 border-bottom border-light">
      <h3 class="text-start fs-2">{title} <i class="bi bi-scissors"></i></h3>
    </div>
    <div class="card-body c1">
      {
        names.map(name => <Service {...name}/>)
      }
    </div>
  </div>
);

export default ServiceSubsection;