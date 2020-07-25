import React, {useState,Fragment} from 'react';
import styled from 'styled-components';
import Card from './Card.jsx'
import Card2 from './Card2.jsx' 
import Drip from '../images/css.png'

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
     flex-direction:column ;
  flex-wrap: wrap;
    justify-content: center;
    margin:0 auto;
}
`

function Parallax() {
 
  const [State] = useState([
    {name:"Full Wedding Planning Experience",name2:"R15 000 +", message:"This package is for the couple who needs my assistance in planning their wedding from start to finish, absolutely EVERYTHING!!",message2:"This package includes co-ordination with third party suppliers and any additional necessary events leading up to the wedding day including the on the day coordination of wedding", img:Drip,  alt:"image"},
    
  ]);
  const [State2] = useState([
    {name:"On the Day Experience",name2:"R5 000 +", message:"This package is for the couple that has got the entire wedding planning process done and dusted – well done!! ",message2:"I’d love to meet you a month before the big day in order for us go over every detail to ensure that you day goes off smoothly",message3:"This package includes : ",item1:"Handing over of wedding details for final communication with third party suppliers ",item2:"Final handover of the wedding program  ",item3:"Wedding Day Coordination (08:00am – 00:00pm)", img:Drip,  alt:"image"},
    
  ]);

 
return(
   <div className="row">
        <Container  id="Skills">
       
            <Flexed >

            <Fragment>
            {State.map((data, index) => (
            <Card key={index} name={data.name} name2={data.name2} message={data.message} message2={data.message2} message3={data.message3} img={data.img} Link={data.Link}  alt={data.alt}/>))}

            {State2.map((data, index) => (
            <Card2 key={index} name={data.name} name2={data.name2} message={data.message} message2={data.message2} message3={data.message3} item1={data.item1} item2={data.item2} item3={data.item3} img={data.img} Link={data.Link}  alt={data.alt}/>))}
           </Fragment>
       
           </Flexed>
          
        </Container>
        </div>
  );
}

export default Parallax;

