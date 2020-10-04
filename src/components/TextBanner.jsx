import React, { Component } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Top from '../images/over.png'

const Container = styled.div`
background:#faf2e8;
text-align: center;
position: relative;
z-index: 2;
`

const Heading = styled.h2`
color:#ac946e;
margin: 0px;
text-align: center;
padding: 5px 5px;
`


const Para = styled.p`
max-width:70%
color:black;
text-align:center;
display:block
margin:0 auto;
padding-bottom:20px;
@media(max-width:768px){
  max-width:unset;
  padding:5%;
}
`

const Holder= styled.div`
margin:0 auto;
text-align:center;

padding:30px 0px 0px 0px;
justify-content:center;
color: white;
`


const Holder2= styled.div`
margin:0 auto;
text-align:center;
display:flex;
padding:30px 5px;
justify-content:center;
color: white;
`
const Block = styled.div`

`
const Image = styled.img`
position: absolute;
right: 0px;
height: 220%;
z-index: 125;

@media(max-width:1440px){
  display:none;
}
`

class TextBanner extends Component {
    componentDidMount(){
        AOS.init({
          duration : 500
        })
      }
    render(){ 
        return ( 
            <Container id="AboutUs" >
             
              <Image data-aos='slide-left'  src={Top} alt={this.props.alt}/>
       
                 <Block data-aos='fade-up'>
                <Holder className="headings">
          <Heading className="headings">Welcome</Heading>
          <Heading>What a pleasure it is to meet you here.</Heading>
           </Holder>

   
         
          

           </Block>
          
                <br/>
                <Block data-aos='fade-up'>
                  
                <Para>
                At KwaKuhle, we believe your wedding day should be ALL about you and your partner, and the love you share for each other. We will ensure that your wedding celebrations are as magical as you envision it to be, with all the fun, laughter, tears, romance and excitement. So whether you’re just recently engaged or a few months into your wedding planning process, we’ve got a celebration package to suit your needs as you step into the next chapter of your lives.
                </Para>
                </Block>
                <br/>
                <br/>
            </Container>
        );
    }
}
 
export default TextBanner;








  


