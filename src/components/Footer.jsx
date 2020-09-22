import React, { Component,Fragment } from 'react';
import styled from 'styled-components';


const Container = styled.div`
background-color:#997d4f;
width:100vw;
padding: 1% 0% 1% 0%;
position:relative;
padding-left:5%;
`

const Copyright = styled.p`
color:white;
text-align:left;
font-size:12px;

    @media(max-width:425px){
        
        margin: 0px;
}
`

const Span = styled.span`
font-size:17px;
&:hover{
    color:var(--secondary-color);
  }
`



class Footer extends Component {
    render() { 
        return ( 
            <Fragment>              
            <Container>
        
               
                <Copyright><Span> &copy; 2020  KwaKuhle Wedding & Events</Span> </Copyright>
               
            </Container>
            </Fragment>
         );
    }
}
 
export default Footer ;