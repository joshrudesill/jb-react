import React from "react";
import { connect } from "react-redux";
import Header from "../components/header/header.component";
import { createStructuredSelector } from "reselect";
import { selectIsPageFetched } from "../redux/page/page.selectors";
import WithSpinner from "../components/withspinner/withspinner";
import LargeNavBar from "../components/navbar/navbar-large";
import Carousel from "../components/carousel/carousel";
import Wrapper from "../components/wrapper/wrapper";
import ProductCards from "../components/product-card-section/product-card-section";
import ServicesSection from "../components/services/services-section";

const WrapperWS = WithSpinner(Wrapper);

class HomePage extends React.Component {
  render() {
    const { isLoaded } = this.props;
    return (
      <WrapperWS isLoading={!isLoaded}>
        <Header />
        <LargeNavBar page='home'/>
        <ProductCards />
        <Carousel
          srcs={[
            { src: "assets/interior1.jpg", active: true },
            { src: "assets/salong3.jpg", active: false },
            { src: "assets/salong5.jpg", active: false }
          ]}
        />
        <ServicesSection />
      </WrapperWS>
    );
  }
}

const mapState = createStructuredSelector({
  isLoaded: selectIsPageFetched
});

export default connect(mapState)(HomePage);
