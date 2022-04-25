import React from "react";
import { connect } from "react-redux";
import Header from "../components/header/header.component";
import { createStructuredSelector } from "reselect";
import { selectIsPageFetched } from "../redux/page/page.selectors";
import WithSpinner from "../components/withspinner/withspinner";
import LargeNavBar from "../components/navbar/navbar-large";
import Wrapper from "../components/wrapper/wrapper";
import ContactRow from "../components/contact/contact-row";
import TextTitle from "../components/text-title/text-title";
import IconInfoCard from "../components/contact/icon-info-card";
import Schedule from "../components/contact/schedule";


const WrapperWS = WithSpinner(Wrapper);

class Contact extends React.Component {
  render() {
    const { isLoaded } = this.props;
    return (
      <WrapperWS isLoading={!isLoaded}>
        <Header />
        <LargeNavBar page='contact'/>
        <div class='container-xl mt-5'>
          <TextTitle
            text='Get in Contact'
            extraStyle='display-5 text-center mb-5'
          />
          <ContactRow rowRules='row row-cols-1 row-cols-md-2 g-2'> 
            <IconInfoCard icon='geo-alt'>
              <TextTitle 
                text='Av. Juan Vargas, 2, 29670 Marbella, Malaga, Spain'
                extraStyle='fs-4 m-3'
              />
            </IconInfoCard>
            <IconInfoCard>
              <span role="button" className="mt-3">
                <i className="bi bi-facebook display-4 m-1 mt-3" style={{color: '#3b5998'}}></i>
                <i className="bi bi-instagram display-4 m-1 mt-3" style={{color: '#FD1D1D'}}></i>
                <i className="bi bi-twitter display-4 m-1 mt-3" style={{color: '#1DA1F2'}}></i>
              </span>
                <TextTitle 
                  text=' +34 952 78 61 61'
                  extraStyle='fs-2 m-2'
                  leadingIcon='telephone'
                />
                <TextTitle 
                  text=' jarasbeauty@gmail.com'
                  extraStyle='fs-4 m-2'
                  leadingIcon='envelope'
                />
            </IconInfoCard>
          </ContactRow>
          <ContactRow rowRules='row row-cols-1 row-cols-lg-2 g-2 mt-1'>
            <Schedule />
          </ContactRow>
        </div>
      </WrapperWS>
    );
  }
}

const mapState = createStructuredSelector({
  isLoaded: selectIsPageFetched
});

export default connect(mapState)(Contact);
