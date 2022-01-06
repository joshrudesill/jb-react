import React from 'react';
import './App.css';
import { getSiteData } from './firebase/firebase.utils';
import { setPageData } from './redux/page/page.actions';
import { connect } from 'react-redux';


class App extends React.Component {
  componentDidMount() {
    const {setPageData} = this.props;

    getSiteData('en').then (
      (data) => setPageData(data),
        (err) => console.log(err)
      );
  }

  render() {
    return (
      <div className='display-1 text-center m-5'>
        <button className='btn btn-primary' value={'en'} onClick={() => this.changeLang('en')}>ENGLISH</button>
        <button className='btn btn-primary' value={'sp'} onClick={() => this.changeLang('sp')}>SPANISH</button>
        <div>
          {this.props.pageData.data}
        </div>
      </div>
    )
  }

  changeLang = lang => {
    if (lang !== this.props.pageData.lang) {
      getSiteData(lang).then (
        (data) => {console.log(data); this.props.setPageData(data)},
          (err) => console.log(err)
        );
    }
  }
}

const mapStateToProps = ({ page }) => ({
  pageData: page.pageData
});

const mapDispatchToProps = dispatch => ({
  setPageData: data => dispatch(setPageData(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
