import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectNavBar } from "../../redux/page/page.selectors";
import NavBarList from "../navbar-list/navbar-list";
import ImageLink from "../image-link/image-link";

const LargeNavBar = ({ pageData }) => (
    <nav className="navbar navbar-light navbar-expand-sm c2">
        
            <NavBarList titles={pageData}>
                <ImageLink 
                    href={'#'} 
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
    pageData: selectNavBar
});

export default connect(mapState)(LargeNavBar);