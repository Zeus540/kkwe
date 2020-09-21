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
     flex-direction:column ;
  flex-wrap: wrap;
    justify-content: center;
    margin:0 auto;
}
`

function Parallax() {
 
  const [State] = useState([
    {name:"Full Wedding Planning Experience",name2:"R15 000 +", message:"This package is for the couple who needs my assistance in planning their wedding from start to finish, absolutely EVERYTHING!!", img:Card2img,  alt:"image"},
  ]);

  const [State2] = useState([
    {name:"Full Wedding Planning Experience",name2:"R15 000 +", message:"This package is for the couple who needs my assistance in planning their wedding from start to finish, absolutely EVERYTHING!!", img:Card2img,  alt:"image"},
  ]);

   const [State3] = useState([
    {name:"Full Wedding Planning Experience",name2:"R15 000 +", message:"This package is for the couple who needs my assistance in planning their wedding from start to finish, absolutely EVERYTHING!!", img:Card2img,  alt:"image"},
  ]);

return(
   <div className="row">
        <Container  id="Skills">
       
            <Flexed >

            <Fragment>
            {State.map((data, index) => (
            <Card2  key={index} name={data.name} message={data.message} message2={data.message2} message3={data.message3} img={data.img} alt={data.alt}/>))}

            {State2.map((data, index) => (
            <Card2 key={index} name={data.name} message={data.message} message2={data.message2} message3={data.message3} img={data.img} alt={data.alt}/>))}

            {State2.map((data, index) => (
            <Card2 key={index} name={data.name} message={data.message} message2={data.message2} message3={data.message3} img={data.img} alt={data.alt}/>))}
           </Fragment>
       
           </Flexed>
          
        </Container>
        </div>
  );
}

export default Parallax;

