

const NavBarListItem = ({ title, start, ...otherProps }) => (
    <li className="nav-item">
        <a  className={`nav-link fw-light mx-2 ${ start ? 'me-md-5' : 'ms-md-5'} text-decoration-none`}
            aria-current="page" 
            style={{
                fontSize: '1.5rem', 
                cursor: 'pointer',
                textDecoration: 'none !important'
            }}
            {...otherProps}
            >
            { title }
        </a>
    </li>
);

export default NavBarListItem;