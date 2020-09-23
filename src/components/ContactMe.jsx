import React, { Component } from 'react';
import styled from "styled-components";
import Forms from "./form.jsx";
import Un from '../images/contact.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container=styled.div`
   background:#ba9d6d;
    background-size:100% 100%;
    height:100%;
    width:calc(100%/1)
    margin:0px 0px;
    z-index:1;
    position:relative;
    display:flex;
    padding-left:5%;
    @media (max-width:425px){
        height:100%;
        padding:5%;
      }
      @media(max-width:1440px){
        flex-direction:column;
        background-size:100% 100%;
        padding:5%;
        
      }
      @media (min-width:768px){
        height: 100vh;
      }
    
`


const Textcontainer=styled.div`
    background-color:var(--transparent);
    height:100%;
   
    @media(max-width:425px){
        width:100%; 
    }
    @media(min-width:426px) and (max-width:1440px) and  (orientation: landscape){
        width:100%; 
    }

    @media(min-width:1024px){
        width:80%; 
    }
`

const Text=styled.p`
    
    color:white;
    margin:0 auto;
   
@media(max-width:425px){
    width:100%; 
    
}
@media(min-width:425px) and  (orientation: landscape){
    width:100%; 
}
@media(min-width:768px) {
    align-self: center;
    
}
`
const Box=styled.p`
    text-align:left;
    @media(max-width:786px){
        
      }
`


const Heading=styled.h2`
    text-align:center;
    color:white;
    margin:0px;
    padding: 5px 5px;
`
const Holder= styled.div`
margin:0 auto;
text-align:center;
display:flex;
padding:30px 5px;
justify-content:center;
color: white;
`

const FormContainer=styled.div`
    width:Calc(100%/2);
    padding:0px 5% 0px 4% ;
@media(max-width:768px){
    width:Calc(100%/1);
    padding:0px;
}
@media(min-width:1025px){
    width:Calc(100%/3);
}
`
const Block = styled.div`

`

const HeadingBlock = styled.div`

`

const Left = styled.div`
width:60%;
padding-bottom:5%;
@media(max-width:786px){
    width:100%;
    
  }
  @media(max-width:1440px){
    width:100%;
    
  }

`

const Right = styled.div`
width:40%;
@media(max-width:786px){
    display:none;
    
  }
`

const LeftInnerBlock = styled.div`
width:50%;
@media(max-width:786px){
    width:100%;
    
  }

`

const RightInnerBlock = styled.div`
width:50%;
@media(max-width:786px){
    width:100%;
    
  }
`

const Flex = styled.div`
display:flex;
@media(max-width:786px){
    display:flex;
    flex-direction:column;
    background-size:100% 100%;
  }
`

const Img = styled.div`
height:100%
position:relative;

`
const Image = styled.img`
position:absolute;
right:0;
height:100%;
width:100%;

`


class ContactMe extends Component {
    componentDidMount(){
        AOS.init({
          duration : 1000
        })
      }
render() { 
    return (
       
           <Container id="ContactMe" className="overlay">
               <Left>
                <HeadingBlock data-aos='fade-up'>
                
                <Holder>
                <Heading>
                    GET IN TOUCH
                </Heading>
                </Holder>
                </HeadingBlock>
                <Flex>
                <LeftInnerBlock>
                <Textcontainer data-aos='slide-right' >
                    <Block data-aos='fade-up'>
                    <Text >
                    Let’s meet for your free consultation, <br/> whether on Skype or in person at your favourite coffee spot. <br/> Bring along your thoughts, ideas and wishes as I would love to find out about you! <br/> Only Cape Town clients will be met in person. <br/><br/>
                    Please reach out to me by completing the below form, <br/> I will get back to your soonest. 
                    </Text>
                    </Block>
                    <Block data-aos='fade-up'>
                    <Text >
                    Get in touch with me <br/>
                    <br/>
                    <Box><i class="fa fa-envelope"alt="email"></i>&nbsp;&nbsp;Hello@kkwe.co.za</Box> 
                    &nbsp;
                    <Box><i class="fa fa-phone" alt="telephone"></i>&nbsp;&nbsp;084 716 2672 </Box>
                    </Text>
                    </Block>
                    &nbsp;
                    &nbsp;
                    </Textcontainer>
                </LeftInnerBlock>

                <RightInnerBlock>
                <FormContainer  data-aos='fade-up'>
                <Forms/>
                </FormContainer>
              
                </RightInnerBlock>
                </Flex>
               </Left>

                <Right>
                <Img data-aos='slide-left'>
                <Image src={Un}>
</Image>
                </Img>
                </Right>
           </Container>
         
         );
    }
}
 
export default ContactMe;






    




