

const NavBarListItem = ({ title }) => (
    <li className="nav-item">
        <a className="nav-link fw-light mx-2 me-md-5 eng" aria-current="page" style={{fontSize: '1.5rem', cursor: 'pointer'}}>{title}</a>
    </li>
);

export default NavBarListItem;