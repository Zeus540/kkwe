import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`

display:inline-block;
border-radius: 0px 10px 0px 0px;
padding: 5px 5px;
position:absolute;
bottom:0px;
`

const Anchor = styled.a`
text-decoration:none;
color:white;
margin:15px 5px;
&:hover{
    color:var(--secondary-color);
  
  }
`

class Footer extends Component {
    render() { 
        return (
            <Container>
                <Anchor href="https://www.instagram.com/kkwecpt" class="icon" alt="instagram" target="_blank" ><i class="fa fa-instagram" alt="instagram"></i></Anchor>
                <Anchor href="https:/www.facebook.com/kkwecpt" class="icon" alt="facebook" target="_blank" ><i class="fa fa-facebook-square" alt="facebook"></i></Anchor>
            </Container>
         );
    }
}
 
export default Footer ;