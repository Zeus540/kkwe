import React from 'react';
import './App.css';
import Nav from './components/Nav.jsx'
import Jumbotron from './components/Jumbotron.jsx'
import TextBanner from './components/TextBanner.jsx'
import ContactMe from './components/ContactMe.jsx'
import Footer from './components/Footer.jsx'
import Events from './components/Events.jsx'
import Gallery3 from './components/Gallery3.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';



class App extends React.Component {

  render(){
    return(
      <div >
       
        <Nav id="Nav" />
        <Jumbotron/>
        <TextBanner></TextBanner>  
        <Gallery3/>
        <Events/>
        <ContactMe/>
        <Footer/>
        
      </div>
    )
  }
};

export default App;






