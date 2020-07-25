import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
background: var(--Section-color);
text-align: center;
z-index:1;
position:relative;
`

const Heading = styled.h2`
color: var(--secondary-color);
margin: 0px;
text-align: center;
padding: 5px 5px;
`
const Sub = styled.p`
color: white;
margin: 0px;
text-align: center;
`

const Para = styled.p`
max-width:90%
color:white
text-align:justify
display:block
margin:0 auto;
padding-bottom:20px;
@media(max-width:768px){
  
}
`

const Holder= styled.div`
margin:0 auto;
text-align:center;
display:flex;
padding:30px 5px;
justify-content:center;
color: white;
`

class TextBanner extends Component {
    render(){ 
        return ( 
            <Container id="AboutUs">
                <Holder className="headings">
          <i class="fa fa-bell-o"></i><Heading className="headings">{this.props.heading}</Heading>
          <i class="fa fa-bell-o"></i>
           </Holder>
                <Sub>{this.props.sub}</Sub>
                <br/>
                <Para>{this.props.paragraph1}</Para>
               
                <Para>{this.props.paragraph2}</Para>
                
                <Para>{this.props.paragraph3}</Para>
                <br/>
                <br/>
            </Container>
        );
    }
}
 
export default TextBanner;