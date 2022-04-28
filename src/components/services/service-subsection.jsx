import Service from "./service";

const ServiceSubsection = ({ title, names }) => (
  <div className="card col-md-8 mx-auto mb-5 border-none shadow shadow-md">
    <div className="card-header border-bottom border-light" style={
          {
            background: 'rgba(203,103,72, 0.2) linear-gradient(90deg, rgba(203,103,72,0.3) 0%, rgba(230,111,151,0.3) 100%)'
          }}>
      <h3 className="text-start fs-2">{title} <i className="bi bi-scissors"></i></h3>
    </div>
    <div className="card-body c3">
      {
        names.map(name => <Service key={name.title} {...name}/>)
      }
    </div>
  </div>
);

export default ServiceSubsection;