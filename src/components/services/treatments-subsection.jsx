
const Treatment = ({ desc, title, icon, blurbs }) => (
  <div className="row row-cols-1 mb-2 justify-content-center mx-0">
    <div className="col col-12 col-md-8 p-2 card me-md-2 m-2 c2 shadow shadow-md">
      <div className="text-end">
          {
            blurbs.map(blurb => 
              <div 
                className="ms-1 p-1 text-muted d-inline rounded bg-warning shadow shadow-sm"
              >{blurb}</div>
              )
          }
        </div>
        <div className="card-body mt-0">
          <h3 className="eng card-subtitle display-5 text-start"><i className={`${'bi bi-' + icon}`}></i> {title}</h3>
          <div className="text-muted text-start fs-5 mb-2">{desc}</div>
        </div>   
      </div>
  </div>
);

export default Treatment;