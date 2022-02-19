import React from "react";
import NavBarList from "../navbar-list/navbar-list";

const LargeNavBar = () => (
    <nav className="navbar navbar-light navbar-expand-sm c2">
        <div className="container-fluid justify-content-sm-center justify-content-between">
            <NavBarList />
        </div>
    </nav>
);

export default LargeNavBar;