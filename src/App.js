import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Header from './components/header/header.component';
import { ENG } from './constants';
import { fetchPageStartAsync, updatePageLang } from '../src/redux/page/page.actions'
import { createStructuredSelector } from 'reselect';
import { selectIsPageFetched } from './redux/page/page.selectors';
import WithSpinner from './components/withspinner/withspinner';
import LargeNavBar from './components/navbar/navbar-large';

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
      <div>
        <HeaderWS isLoading={!isLoaded} />
        <LargeNavBarWS isLoading={!isLoaded} />
      </div>
        
    )
  }
}


const mapState = createStructuredSelector({
  isLoaded: selectIsPageFetched
});

const mapDispatch = dispatch => ({
  fetchPageStartAsync: lang => dispatch(fetchPageStartAsync(lang)),
  updatePageLang: lang => dispatch(updatePageLang(lang))
});


export default connect(mapState, mapDispatch)(App);
