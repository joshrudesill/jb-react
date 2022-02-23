import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectHeader, selectLanguage, selectLinks } from "../../redux/page/page.selectors";
import { ENG, SP } from '../../constants';
import { updatePageLang } from "../../redux/page/page.actions";

const Header = ({ pageData, updatePageLang, currentLanguage, links }) => (
    <nav className="navbar bg-dark justify-content-between">
        <div className="text-white mx-3">
            <span>
                <i className="bi bi-telephone" style={{color: 'white'}}></i>
                 {pageData.phoneNumber}
             </span>
        </div>
        
        <div className="text-white">
            <span className="d-flex">
                <div className="me-1" 
                    onClick={() => {
                        if (currentLanguage === SP) { 
                            updatePageLang(ENG) 
                        }
                    }} 
                    style={{cursor: 'pointer', textDecoration: `${currentLanguage === ENG ? 'underline' : 'none'}`}}>EN</div>
                <div>|</div>
                <div className="ms-1" 
                    onClick={() => {
                        if (currentLanguage === ENG) {
                            updatePageLang(SP) 
                            }
                        }} 
                    style={{cursor: 'pointer', textDecoration: `${currentLanguage === SP ? 'underline' : 'none'}`}}>ES</div>
            </span>
            
        </div>
        <div className="mx-3">
            <a href={links.instagram}>
                <i className="bi bi-instagram mx-1" style={{fontSize: '1.5rem', color: 'white'}}></i>
            </a>
            <i className="bi bi-facebook mx-1" style={{fontSize: '1.5rem', color: 'white'}}></i>
            <i className="bi bi-twitter mx-1" style={{fontSize: '1.5rem', color: 'white'}}></i>

        </div>
    </nav>
);

const mapState = createStructuredSelector({
    pageData: selectHeader,
    links: selectLinks,
    currentLanguage: selectLanguage
});

const mapDispatch = dispatch => ({
    updatePageLang: lang => dispatch(updatePageLang(lang))
  });

export default connect(mapState, mapDispatch)(Header);