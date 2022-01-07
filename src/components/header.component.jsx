import React from "react";
import { connect } from "react-redux";

const Header = ({ pageData }) => (
    <nav className="navbar bg-dark justify-content-between">
        <div className="text-white mx-3">
            <span>
                <i className="bi bi-telephone" style={{color: 'white'}}></i>
                {
                pageData.header.phoneNumber
                }

             </span>
        </div>
        
        
        <div className="mx-3">
            <a href="https://instagram.com/jara_s_beauty?utm_medium=copy_link"target="_blank">
                <i className="bi bi-instagram mx-1" style={{fontSize: '1.5rem', color: 'white'}}></i>
            </a>

            <i className="bi bi-facebook mx-1" style={{fontSize: '1.5rem', color: 'white'}}></i>
            <i className="bi bi-twitter mx-1" style={{fontSize: '1.5rem', color: 'white'}}></i>

        </div>
    </nav>
);

const mapStateToProps = ({ page }) => ({
    pageData: page.pageData.data
  });

export default connect(mapStateToProps)(Header);