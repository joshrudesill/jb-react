
const Footer = () => (
  <section id="foot">
        <div className="container-fluid p-5 mt-5" style={
          {
            background: 'rgb(228,181,181) linear-gradient(90deg, rgba(228,181,181,1) 0%, rgba(231,167,130,1) 80%)'
          }}>
            <footer>
                <div>
                    <div className="row">
                        <div className="col">
                            <div className="ps-0 display-5">Jaras Beauty</div>
                            <div className="h5 text-muted">Designed by Josh Rudesill</div>
                        </div>
                        <div className="col text-end">
                          <div>
                            <span role="button" className="mt-3">
                              <i className="bi bi-facebook display-5 m-1 mt-3" style={{color: '#3b5998'}}></i>
                              <i className="bi bi-instagram display-5 m-1 mt-3" style={{color: '#FD1D1D'}}></i>
                              <i className="bi bi-twitter display-5 m-1 mt-3" style={{color: '#1DA1F2'}}></i>
                            </span>
                          </div>
                            <div className="fs-5 mt-2">+34 952 78 61 61</div>
                            <div className="fs-5 mt-1">jarasbeauty@gmail.com</div>
                        </div>
                    </div>
                    
                </div>
            </footer>
        </div>
      </section>
);

export default Footer;