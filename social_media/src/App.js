import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Footer from './components/footer/footer.jsx'
import LeftSidebar from './components/left-sidebar/left-sidebar.jsx';
import MainContent from './components/main-content/main-content.jsx';
import Aside from './components/aside/aside.jsx';
import HeaderContainer from './components/header/headerContainer';

import { initializeApp } from './redux/reducers/app-reducer';
import Preloader from './components/common/preloader';


class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='main-wrapper'>
        <HeaderContainer />
        <LeftSidebar />
        <MainContent />
        <Aside />
        <Footer />
      </div >
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);
//Routing 80 (compose+withrouter)