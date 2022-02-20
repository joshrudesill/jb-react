

import NavBarListItem from "../navbar-listitem/navbar-listitem";


const NavBarList = ({ titles, children }) => (
    <div className="container-fluid justify-content-sm-center justify-content-between">
       <ul className="navbar-nav d-none d-sm-flex">
         
            <NavBarListItem  title={titles.home} />
            <NavBarListItem  title={titles.about} />
        
        </ul>
        {children}
        <ul className="navbar-nav d-none d-sm-flex">
         
            <NavBarListItem  title={titles.services} />
            <NavBarListItem  title={titles.contact} />
    
        </ul> 
    </div>
    
);



export default NavBarList;
