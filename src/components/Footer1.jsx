import React, { Component } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container = styled.div`
background-color:var(--Section-color);
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
    componentDidMount(){
        AOS.init({
          duration : 2000
        })
      }
    render() { 
        return ( 
           
            <Container data-aos='fade-up'>
                      
                           
                               
                               <Anchor href="https://www.facebook.com" class="icon" alt="instagram"> <i class="fa fa-instagram" alt="instagram"></i></Anchor>
                               
                                <Anchor href="https://www.facebook.com" class="icon" alt="facebook"><i class="fa fa-facebook-square" alt="facebook"></i></Anchor>
                                

                    
                 
            </Container>
           
         );
    }
}
 
export default Footer ;