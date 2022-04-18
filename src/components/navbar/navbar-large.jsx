import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectNav } from "../../redux/page/page.selectors";
import NavBarList from "../navbar-list/navbar-list";
import ImageLink from "../image-link/image-link";

const LargeNavBar = ({ pageData, page }) => (
    <nav className="navbar navbar-light navbar-expand-sm c2">
           <NavBarList titles={page === 'home' ? [pageData[0], pageData[1]] : [pageData[2], pageData[1]]}>
                <ImageLink 
                    href={'/'} 
                    classString={'navbar-brand p-1'} 
                    imgId={'logo'}
                    src={'assets/Asset18.png'}
                    alt={'logo'}
                    extraStyle={{maxWidth: '180px'}}
                />
            </NavBarList >
        
    </nav>
);

const mapState = createStructuredSelector({
    pageData: selectNav
});

export default connect(mapState)(LargeNavBar);