import React, { Component } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container = styled.div`
height: inherit;
transition: ease-in 200ms;
margin:2.5%;
padding: 20px;
width:calc(100%/6);
background:#e6cdad;
background:#faf2e882;
box-shadow: #faf2e8 18px 15px 24px 2px;
&:hover{
    transform:scale(1.05);
    background:#faf2e8;
    box-shadow: #997d4f 18px 15px 24px 2px;
    h4{
        color:#997d4f;
        text-decoration:unset!important;
    }
    p{
        color:black;
        text-decoration:unset!important;
    }
}
@media(max-width:426px) {
    width:calc(100%/1.5);
    margin: 0 auto;
    margin-bottom:15%;
}
@media(min-width:426px) and (max-width:768px){
    width:calc(100%/2.8);
    margin: 0 auto;
    margin-bottom:15%;
}
@media(min-width:768px) and (max-width:1440px){
    width:calc(100%/3);
    margin: 0 4.5;
    margin-bottom:5%;
}

@media(min-width:788px){
    width:calc(100%/5);
    

}
`

const Content = styled.div`
display: flex;
justify-content: center;

`

const Image = styled.img`
display:block;
margin:0 auto;
width:100%;
height:100%;
border:none;
width:calc(100%/3);
border-radius:0px 0px 7px 7px;
@media(min-width:426px) and (max-width:768px){
    margin: 0px;
    padding:0px;
    
}
`

const Heading = styled.h4`
text-align:center;
padding:20px 0px 0px 0px;
margin:0px;
transition:ease-in 200ms;
color:aliceblue;

`
const Heading2 = styled.h4`
text-align:center;
padding:20px 0px 20px 0px;
margin:0px;
transition:ease-in 200ms;
color:aliceblue;
font-size:14px!important;

`

const Text= styled.div`
    color:aliceblue;
    text-decoration:none;
    text-align:center;
`

const Des= styled.p`
    color:aliceblue;
    text-decoration:none;
    text-align:center;
    transition:ease-in 200ms;
`



class Card extends Component {
    componentDidMount(){
        AOS.init({
          duration : 1000
        })
      }
    render() {
    return (        
        <Container data-aos='fade-up'>
          
            <Heading>
               {this.props.name}
            </Heading>
            <br/>
            <Content>
                <Image src={this.props.img} alt={this.props.alt}/>
            </Content>
            <br/>
            <Heading2>
               {this.props.name2}
            </Heading2>
            <Text>
                <Des>{this.props.message}</Des>
            </Text>
            <br/>
        </Container>  
        );
    }
}

export default  Card;
