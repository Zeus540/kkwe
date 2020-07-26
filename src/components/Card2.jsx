import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
height: inherit;
transition: ease-in 200ms;
margin:1%;
padding: 20px;
background:transparent;
width:calc(100%/4);
background:var(--primary-color);
box-shadow: coral 0px 1px 24px 0px;
border-radius:10px;
&:hover{
    transform:scale(1.05);
    background:coral;
    box-shadow: var(--Section-color) 0px 1px 24px 0px;
    h4{
      
        text-decoration:unset!important;
    }
}
@media(max-width:425px){
    width:calc(100%/1.5);
    margin: 0 auto;
    margin-bottom:15%;
}
@media(min-width:426px) and (max-width:559px){
    width:calc(100%/2.5);
    margin: 0 auto;
    margin-bottom:15%;
}



@media(min-width:559px) and (max-width:1024px)  {
    width:calc(100%/3);
    margin-bottom:2%;
    margin: 0 auto;
}

@media(min-width:426px) and (max-width:768px)  {
    width:calc(100%/2);
    margin-bottom:2%;
    margin: 0 auto;
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
const Heading3 = styled.h4`
text-align:left;
padding:10px;
padding:20px;
margin:0px;
transition:ease-in 200ms;
color:aliceblue;
&:hover{
    transform:scale(1.2);
    text-decoration:underline;
}
`

const Heading = styled.h4`
text-align:center;
padding:10px;
padding:20px;
margin:0px;
transition:ease-in 200ms;
color:aliceblue;
&:hover{
    transform:scale(1.2);
    text-decoration:underline;
}
`


const Text= styled.div`
    color:aliceblue;
    text-decoration:none;
    text-align:left; 
`

const Des= styled.p`
    color:aliceblue;
    text-decoration:none;
    text-align:left; 
`

const List= styled.ul`
    color:aliceblue;
    line-height:20px;
    padding-left:15%;
  
`
const Item= styled.li`
    color:aliceblue;
    width:80%;
    padding-left:10px;

`

class Card extends Component {
   
    render() {
    return (        
        <Container>
            <Heading>
               {this.props.name}
            </Heading>
            <Heading>
               {this.props.name2}
            </Heading>
            <Content>
                <Image src={this.props.img} alt={this.props.alt}/>
            </Content>
            <br/>
            <Text>
                <Des>{this.props.message}</Des>
            </Text>
            <br/>
            <Text>
                <Des>{this.props.message2}</Des>
            </Text>
            <br/>
            <Text>
                <Heading3>{this.props.message3}</Heading3>
            </Text>
            &nbsp;
                <List>
                    <Item><Des>{this.props.item1}</Des></Item>
                    &nbsp;
                    <Item><Des>{this.props.item2}</Des></Item>
                    &nbsp;
                    <Item><Des>{this.props.item3}</Des></Item>
                </List>
        </Container>  
        );
    }
}

export default  Card;
