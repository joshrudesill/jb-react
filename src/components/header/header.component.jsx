import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectHeader } from "../../redux/page/page.selectors";
const Header = ({pageData}) => (
    <nav className="navbar bg-dark justify-content-between">
        <div className="text-white mx-3">
            <span>
                <i className="bi bi-telephone" style={{color: 'white'}}></i>
                {pageData.phoneNumber}
                {pageData.headerName}
             </span>
        </div>
        
        
        <div className="mx-3">
            <a href="https://instagram.com/jara_s_beauty?utm_medium=copy_link">
                <i className="bi bi-instagram mx-1" style={{fontSize: '1.5rem', color: 'white'}}></i>
            </a>

            <i className="bi bi-facebook mx-1" style={{fontSize: '1.5rem', color: 'white'}}></i>
            <i className="bi bi-twitter mx-1" style={{fontSize: '1.5rem', color: 'white'}}></i>

        </div>
    </nav>
);

const mapStateToProps = createStructuredSelector ({
    pageData: selectHeader
});

export default connect(mapStateToProps)(Header);