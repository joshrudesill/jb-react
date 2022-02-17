import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Header from './components/header/header.component';
import { ENG, SP } from './constants';
import { fetchPageStartAsync, updatePageLang } from '../src/redux/page/page.actions'
import { createStructuredSelector } from 'reselect';
import { selectHeader, selectIsPageFetched } from './redux/page/page.selectors';
import WithSpinner from './components/withspinner/withspinner';

const HeaderWS = WithSpinner(Header);

class App extends React.Component {
  componentDidMount() {
    const { fetchPageStartAsync } = this.props;
    fetchPageStartAsync(ENG);
  }
  

  render() {
    const { isLoaded, updatePageLang } = this.props;
    return (
      <div >
        <HeaderWS isLoading={!isLoaded} />
        <button className='btn btn-primary' value={ENG} onClick={() => updatePageLang(ENG)} >ENGLISH</button>
        <button className='btn btn-primary' value={SP} onClick={() => updatePageLang(SP)}>SPANISH</button>
      </div>
    )
  }
}


const mapStateToProps = createStructuredSelector({
  isLoaded: selectIsPageFetched
});

const mapDispatchToProps = dispatch => ({
  fetchPageStartAsync: lang => dispatch(fetchPageStartAsync(lang)),
  updatePageLang: lang => dispatch(updatePageLang(lang))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
