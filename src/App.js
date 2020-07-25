import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav.jsx'
import Jumbotron from './components/Jumbotron.jsx'
import TextBanner from './components/TextBanner.jsx'
import ContactMe from './components/ContactMe.jsx'
import Footer from './components/Footer.jsx'
import Events from './components/Events.jsx'
import Gallery3 from './components/Gallery3.jsx'



function App() {

  const [State1] = useState([
    {key:"",
    heading:"Hello There!",
    sub:"Welcome to KwaKuhle!",
    paragraph1:"I believe in celebrating life to the fullest, no occasion is too small or too big. I want to assist you in creating the most memorable and beautiful moments by offering my services to achieve this! ",
    paragraph2:"Below you will find the different packages for Wedding Planning as well as the Eventing services that I offer. ",
    paragraph3:"At KwaKuhle, I believe in combining your vision and my experience to deliver a memorable and unique occasion. It would be my absolute pleasure to assist you! ",



}
  ]);

  return (
    <div className="App">
      <Nav id="Nav"/>

      <Jumbotron/>

      {State1.map((data, index) => (
            <TextBanner key={index}  heading={data.heading} sub={data.sub} paragraph1={data.paragraph1} paragraph2={data.paragraph2} paragraph3={data.paragraph3}/>))}       


 <Gallery3/>
 <Events/>
           <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
