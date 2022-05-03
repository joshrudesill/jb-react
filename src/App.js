import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { ENG } from "./constants";
import { fetchPageStartAsync } from "../src/redux/page/page.actions";
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage.jsx';
import Contact from './pages/contact.jsx';
import Footer from "./components/footer/footer";


class App extends React.Component {
  componentDidMount() {
    const { fetchPageStartAsync } = this.props;
    fetchPageStartAsync(ENG);
  }

  render() {
    return (
        <div>
          <Routes>
            <Route exact path='/' element={ <HomePage/> }/>
            <Route path='/contact' element={ <Contact/> }/>
            <Route path='/contacto' element={ <Contact/> }/>
          </Routes>
          <Footer/>
        </div>
    );
  }
}


const mapDispatch = dispatch => ({
  fetchPageStartAsync: lang => dispatch(fetchPageStartAsync(lang))
});

export default connect(null, mapDispatch)(App);
