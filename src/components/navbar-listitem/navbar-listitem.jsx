

const NavBarListItem = ({ title, start, href }) => (
    <li className="nav-item">
        <a  className={`nav-link fw-light mx-2 ${ start ? 'me-md-5' : 'ms-md-5'}`}
            aria-current="page" 
            style={{
                fontSize: '1.5rem', 
                cursor: 'pointer'
            }}
            href={'#' + href}
            >
            { title }
        </a>
    </li>
);

export default NavBarListItem;