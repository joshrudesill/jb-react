import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Header from './components/header/header.component';
import { ENG } from './constants';
import { fetchPageStartAsync } from '../src/redux/page/page.actions'
import { createStructuredSelector } from 'reselect';
import { selectIsPageFetched } from './redux/page/page.selectors';
import WithSpinner from './components/withspinner/withspinner';
import LargeNavBar from './components/navbar/navbar-large';
import Carousel from './components/carousel/carousel';
import TopBody from './components/top-body/top-body';

const HeaderWS = WithSpinner(Header);
const LargeNavBarWS = WithSpinner(LargeNavBar);

class App extends React.Component {
  componentDidMount() {
    const { fetchPageStartAsync } = this.props;
    fetchPageStartAsync(ENG);
  }
  

  render() {
    const { isLoaded } = this.props;
    return (
      <TopBody>
        <HeaderWS isLoading={!isLoaded} />
        <LargeNavBarWS isLoading={!isLoaded} />
        <Carousel srcs={[{src: 'assets/interior1.jpg', active: true},{src: 'assets/salong3.jpg', active: false},{src: 'assets/salong5.jpg', active: false}]} />
      </TopBody>
    )
  }
}


const mapState = createStructuredSelector({
  isLoaded: selectIsPageFetched
});

const mapDispatch = dispatch => ({
  fetchPageStartAsync: lang => dispatch(fetchPageStartAsync(lang))
});


export default connect(mapState, mapDispatch)(App);
