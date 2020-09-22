import React, { Component,Fragment } from 'react';
import styled from 'styled-components';


const Container = styled.div`
background-color:#997d4f;
width:100vw;

`

const Copyright = styled.p`
color:white;
text-align:left;
font-size:12px;

    @media(max-width:425px){
        
        margin: 0px;
}
`





class Footer extends Component {
    render() { 
        return ( 
            
            <Container>
        
               
                <Copyright>&copy; 2020  KwaKuhle Wedding & Events </Copyright>
               
            </Container>
            
         );
    }
}
 
export default Footer ;