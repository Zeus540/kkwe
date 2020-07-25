import React, { Component,Fragment } from 'react';
import styled from 'styled-components';

const Container = styled.div`
background-color:var(--Section-color);
width:100%;
padding: 2% 0% 2% 0%;
position:relative;
@media(max-width:425px){
    display:flex;
    flex-direction:column;
    text-align:center;
    position:unset;
}
`

const Copyright = styled.p`
color:white;
text-align:left;
font-size:12px;

    @media(max-width:425px){
        
        margin: 0px;
}
`

const Legal = styled.div`

padding: 0px 5% 0% 5%;
`
const Dev = styled.div`
background:var(--secondary-color);
padding: 0px 5% 0% 5%;
`

const Credit = styled.p`
background:var(--secondary-color);;
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
                <Legal>
                <Copyright><Span>KKWE  &copy;</Span> &nbsp;All Right Reserved Copyright 2020</Copyright>
                </Legal>
            </Container>
           
            <Dev>
            <Credit>Created by&nbsp;<Span>&nbsp;KKWE  &copy;</Span></Credit>
            </Dev>
            </Fragment>
         );
    }
}
 
export default Footer ;