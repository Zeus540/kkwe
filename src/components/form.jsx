import React, { Component,Fragment } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';

const Container =styled.div`
background-color:var(--transparent);
border:none;
border-radius:10px;
color:white;
display: flex;
justify-content: center;
flex-direction:column;  
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
border-bottom:2px solid white;
min-height:35px;
margin-bottom:5px;
margin-top:5px;
color:aliceblue;
width: 100%;
@media(max-width:786px){
    width:100%;
    
  }

`

const Validate =styled.input`
border:none;
border:none;
border-left:2px solid white;
border-bottom:2px solid white;
min-height:35px;
margin-top:5%;
margin-bottom:5px;
color:aliceblue;
background:transparent;
@media(max-width:786px){
    width:100%;
    
  }
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
@media(max-width:786px){
    width:100%;
    
  }
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
border-left:2px solid white;
border-bottom:2px solid white;
margin-bottom:20px;
margin-top:10px;
background:transparent;
color:white;
width: 100%;
@media(max-width:786px){
    width:100%;
    
  }
`

const Field =styled.fieldset`
width: 100%;
`


class Forms extends Component {
  
    render() { 
        return (
            
           <Container>
            <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
            </Container>
         );
    }
}
 
export default Forms;