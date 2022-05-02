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
import Schedule from "../components/contact/schedule";
import ContactInfo from "../components/contact/contact-info";
import Address from "../components/contact/address";
import ContactForm from "../components/contact/contact-form";
import ContactMap from "../components/contact/contact-map";
import MissionStatement from "../components/contact/mission-statement";


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
            <Address/>
            <ContactInfo/>
          </ContactRow>

          <ContactRow rowRules='row row-cols-1 row-cols-lg-2 g-2 mt-1'>
            <Schedule/>
            <ContactMap/>
          </ContactRow>

          <ContactRow rowRules='row row-cols-1 row-cols-lg-2 g-2 mt-1'>
            <ContactForm/>
            <MissionStatement/>
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
