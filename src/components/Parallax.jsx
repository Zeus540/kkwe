import React, {useState,Fragment} from 'react';
import styled from 'styled-components';
import Card2 from './Card2.jsx' 
import Card1img from '../images/icon1.png'
import Card2img from '../images/icon2.png'
import Card3img from '../images/icon3.png'

const Container = styled.div`
padding:0px;
height:100%;
`

const Flexed = styled.div`
display:flex;
flex-direction:row;
justify-content: center;
margin: 0 auto;
width: 100%;
@media(max-width:425px){
      flex-direction:column  ;
      justify-content: center;
      margin:0 auto;
  }
@media(min-width:426px) and (max-width:786px){
     flex-direction:row ;
  flex-wrap: wrap;
    justify-content: center;
    margin:0 auto;
}
`

function Parallax() {
 
  const [State] = useState([
    {name:"Blooming Bachelorette",name2:"Officially a fiancé… Let’s get this party started!", message:"Before a bachelorette blooms into the beautiful bride, a celebration must be had. A bachelorette party is a very special moment in every woman’s life. We celebrate the woman you were, and are becoming. It’s a coming together of your nearest and dearest to relax, let go of the pre-wedding stress and just have some FUN. Whether it’s champagne and massages, or a night out on the town, we can help your entourage make it a night to remember.", img:Card2img,  alt:"image"},
  ]);

  const [State2] = useState([
    {name:"Queen Protea",name2:"You said YES!... Now where to begin?", message:"The Queen Protea experience is one of our most sought after and extensive packages. This is for the couple who need our assistance from the word go. We’re talking setting budgets, creating invitations and navigating the fine art of table seating, right until we see that magnificent moment where you dance the night away as a married couple. From planning your special day and any events leading up to the day, to coordinating with third-party suppliers, as well as on the day coordination – rest comfortably knowing you’re in good hands.", img:Card2img,  alt:"image"},
  ]);

   const [State3] = useState([
    {name:"Delicate Daisy",name2:"The A Team’s very own support team", message:"The Delicate Daisy experience is for the couple who are on it. Your wedding planning process is well underway, with your venue and service providers booked and ready to go. This is where we step in. We would meet a month before your wedding date for a complete hand-over, ensuring you and your fiancé can kick back, relax and enjoy the next month, as we smooth-sail right into your wedding day.", img:Card2img,  alt:"image"},
  ]);

return(
   <div className="row">
        <Container  id="Skills">
       
            <Flexed >

            <Fragment>
            {State.map((data, index) => (
            <Card2  key={index} name={data.name} name2={data.name2} message={data.message} message2={data.message2} message3={data.message3} img={data.img} alt={data.alt}/>))}

            {State2.map((data, index) => (
            <Card2 key={index} name={data.name} name2={data.name2} message={data.message} message2={data.message2} message3={data.message3} img={data.img} alt={data.alt}/>))}

            {State3.map((data, index) => (
            <Card2 key={index} name={data.name} name2={data.name2} message={data.message} message2={data.message2} message3={data.message3} img={data.img} alt={data.alt}/>))}
           </Fragment>
       
           </Flexed>
          
        </Container>
        </div>
  );
}

export default Parallax;

