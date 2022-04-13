import Service from "./service";

const ServiceSubsection = ({ title, names }) => (
  <div className="card col-md-8 mx-auto mb-5 border-secondary shadow shadow-sm">
    <div className="card-header c4 border-bottom border-light">
      <h3 className="text-start fs-2">{title} <i className="bi bi-scissors"></i></h3>
    </div>
    <div className="card-body c1">
      {
        names.map(name => <Service key={name.title} {...name}/>)
      }
    </div>
  </div>
);

export default ServiceSubsection;