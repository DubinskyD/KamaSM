import React from 'react';
import './App.css';

import Footer from './components/footer/footer.jsx'
import LeftSidebar from './components/left-sidebar/left-sidebar.jsx';
import MainContent from './components/main-content/main-content.jsx';
import Aside from './components/aside/aside.jsx';
import HeaderContainer from './components/header/headerContainer';


const App = (props) => {

  return (
    <div className='main-wrapper'>
      <HeaderContainer />
      <LeftSidebar />
      <MainContent
      // store={props.store}
      // dispatch={props.dispatch}
      // store={props.store}
      />
      <Aside />
      <Footer />
    </div >
  );
}

export default App;
