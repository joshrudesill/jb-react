
const NavBarSmall = () => (
  <nav className="navbar navbar-light d-sm-none p-0">
        <div className="container-fluid">
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img id="logo" src="assets/Asset18.png" alt="logo" style={{maxWidth: '190px'}}></img></h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link eng" style={{fontSize: '1.5rem'}} aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link eng" style={{fontSize: '1.5rem'}} href="#services">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link eng" style={{fontSize: '1.5rem'}} href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link eng" style={{fontSize: '1.5rem'}} href="#">Contact</a>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </nav>
);

export default NavBarSmall;