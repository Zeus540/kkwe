import React, { Component,Fragment } from 'react';
import styled from 'styled-components';


const Container =styled.div`
background-color:var(--transparent);
border:none;
border-radius:10px;
color:white;
display: flex;
justify-content: center;
@media(max-width:678px){
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
}
`

const Form =styled.form`
display:flex;
flex-direction:column;
width: 100%;

justify-content:space-around;
@media(max-width:425px){
  
}
`

const Input =styled.input`
border:none;
background:transparent;
border-bottom:2px solid var(--secondary-color);
min-height:35px;
margin-bottom:5px;
margin-top:5px;
color:aliceblue;
width:100%;
border-radius:0px 0px 0px 10px;
`

const Validate =styled.input`
border:none;
border:none;
border-left:2px solid var(--secondary-color);
border-bottom:2px solid var(--secondary-color);
min-height:35px;
margin-top:5%;
margin-bottom:5px;
color:aliceblue;
background:transparent;
width:35%;
border-radius:0px 0px 0px 10px;
`

const Submit=styled.input`
border:none;
border-bottom:2px solid var(--Section-color);
min-height:40px;
background:var(--Section-color);
margin-bottom:5px;
margin-top:10px;
color:white;
padding:0px 15px;
border-radius:10px;
&:hover{
    background:var(--secondary-color);
    color: var(--Section-color);
    border:none;
  }
`

const Label =styled.label`
display:flex;
flex-direction:column;
color:white;
`

const Textarea =styled.textarea`
border:none;
border-left:2px solid var(--secondary-color);
border-bottom:2px solid var(--secondary-color);
border-radius:0px 0px 0px 10px;
margin-bottom:20px;
margin-top:10px;
background:transparent;
width: 100%;
color:white;
`

const Field =styled.fieldset`

`


class Forms extends Component {
  
    render() { 
        return (
            
           <Container>
               <Fragment>
            <div id="message" class="c-message"></div>
            </Fragment>
                <Form method="post" action="contact.php" name="contactform" id="contactform" class="form c-form">
					<Field>
                        <Label htmlFor="name">Name</Label>
                        
						<Input name="name" type="text" id="name" placeholder="Your Name" />
                        &nbsp;
                        <Label htmlFor="email">Email</Label>
                        
						<Input name="email" type="text" id="email" placeholder="Your E-mail" />
                        &nbsp;
                        <Label htmlFor="comments">Message</Label>
                        &nbsp;  
						<Textarea name="comments" id="comments" placeholder="Message" rows="15" cols="50" ></Textarea>

                        <Label htmlFor="verify">Verify</Label>
                        &nbsp;
						<Validate name="verify" type="text" id="verify" placeholder="How much is 3 + 1 =" />
                       
                        <br/>
						<Submit type="submit" class="submit btn outline" id="submit" value="Send message" />
					</Field>
				</Form>
            </Container>
         );
    }
}
 
export default Forms;