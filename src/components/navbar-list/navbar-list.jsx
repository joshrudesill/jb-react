

import NavBarListItem from "../navbar-listitem/navbar-listitem";
import { Link } from 'react-router-dom';

const NavBarList = ({ titles, children }) => (
    <div className="container-fluid justify-content-sm-center justify-content-between">
       <ul className="navbar-nav d-none d-sm-flex">
            {
                titles[0] === 'Home' || titles[0] === 'Inicio' ? (
                <Link to='/'>
                    <NavBarListItem title={titles[0]} start={true}/>
                </Link>
                ) : 
                <NavBarListItem href='#services' title={titles[0]} start={true}/>
            }
                
            
        </ul>
        {children}
        <ul className="navbar-nav d-none d-sm-flex">
            <Link to={'/' + titles[1].toLowerCase()}>
                <NavBarListItem href={titles[1]} title={titles[1]} start={false}/>
            </Link>
        </ul> 
        <ul>
            <Link to='/contact'>
                <div className='fs-3 pt-2 text-secondary d-sm-none'>{titles[1]}</div>
            </Link>
            
        </ul>
    </div>
    
);

export default NavBarList;
