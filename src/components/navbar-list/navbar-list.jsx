import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectNavBar } from "../../redux/page/page.selectors";

import NavBarListItem from "../navbar-listitem/navbar-listitem";

const NavBarList = ({ pageData }) => (
    <ul className="navbar-nav d-none d-sm-flex">
        <NavBarListItem title={pageData.home}/>
        <NavBarListItem title={pageData.about}/>
        <NavBarListItem title={pageData.contact}/>
        <NavBarListItem title={pageData.services}/>
    </ul>
);

const mapState = createStructuredSelector({
    pageData: selectNavBar
});

export default connect(mapState)(NavBarList);
