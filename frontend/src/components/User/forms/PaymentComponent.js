import StripeCheckout from "react-stripe-checkout";
import {React, useState} from "react";
import { Button, TableBody } from "@mui/material";
import { Container } from "@mui/material";
const axios = require("axios").default;
const nodemailer =require('nodemailer');
const stripe= require("stripe")("pk_test_51K6M8qJJwEGtsc7Jg1PpI8uJfikDdlKuDksccokEyc3JjTgyysXvjGb1lWZIbyOCjPfNnbs4cBflSwG5xUzmfKq500JtPtmY3p");
const transporter = nodemailer.createTransport({
    service:"hotmail",
    auth: {
      user:"maramACL@outlook.com",
      pass:"Benamer1!"
    }
   
 
 
  })
  const options ={
    from:"maramACL@outlook.com",
    to:"marambenamer@yahoo.com",
    subject:"Email trial",
    text:"Let's see"
  };
const PaymentComponent = () =>{ 
  
    const [product,setProduct] =useState({
        name:"Pay for reservation",
        price: "5000",
        Productby:"cloud9"
        })
  

    
         const pay =(token) =>{
           const body={
          token,
          product
        }
         
         const headers = {
           "Content-Type":"application/json"
         }
         
         axios
         .post("http://localhost:8081/user/payment",{
          method: "POST", headers, body:body
         
         }
         ).then((response) =>{
           console.log('MABROOOOOK')
           const {status} = response;
          
          
            
           console.log("STATUS"); 
         }).catch(error => console.log("GIRL FE MASHAKEL"+error));
        };
        return(
 <Container> 

    
<StripeCheckout 
stripeKey ="pk_test_51K6M8qJJwEGtsc7Jg1PpI8uJfikDdlKuDksccokEyc3JjTgyysXvjGb1lWZIbyOCjPfNnbs4cBflSwG5xUzmfKq500JtPtmY3p"
token={pay}
name=""
amount={product.price}
backgroundcolor="purple"
currency="EGP"



>
  <Button style={{
   backgroundcolor:"pink",
   fontSize:"15px"
  }} >
    
    
      Make Payment
      </Button>
     
      </StripeCheckout> 
      </Container>
      )
     }
     export default PaymentComponent;