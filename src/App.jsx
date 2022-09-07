import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main'
import Content from './components/Content/Content';
import Cards from './components/Cards/Cards';
import Wrapper from './components/Wrapper/Wrapper';
import Case from './components/Case/Case';
import Search from './components/Search/Search';
import SignUp from './components/SignUp/SignUp';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <>

      <div className="container">

        <Navbar />
        <Main />
        <Content />
        <Cards />
        <Wrapper />
        <Case />
        <Search/>
        <SignUp />
        <Footer/>
      </div>

    </>
  );
};

export default App;