

import NavBarListItem from "../navbar-listitem/navbar-listitem";


const NavBarList = ({ titles, children }) => (
    <div className="container-fluid justify-content-sm-center justify-content-between">
       <ul className="navbar-nav d-none d-sm-flex">
         
            <NavBarListItem href='home' title={titles.home} start={true}/>
            <NavBarListItem href='about' title={titles.about} start={true}/>
        
        </ul>
        {children}
        <ul className="navbar-nav d-none d-sm-flex">
        
            <NavBarListItem href='services' title={titles.services} start={false}/>
            <NavBarListItem href='contact' title={titles.contact} start={false}/>
    
        </ul> 
    </div>
    
);

export default NavBarList;
