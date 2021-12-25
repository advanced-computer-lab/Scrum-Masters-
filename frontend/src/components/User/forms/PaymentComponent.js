import StripeCheckout from "react-stripe-checkout";
import {React, useState} from "react";
import { Button, TableBody } from "@mui/material";
import { Container } from "@mui/material";
  import jwt_decode from "jwt-decode";
const axios = require("axios").default;
// 
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
const PaymentComponent = (props) =>{ 
  console.log("eltoken ahu!")
    const [product,setProduct] =useState({
        name:"Pay for reservation",
        price: props.price,
        Productby:"cloud9"
        })
  
      //    const mailat =()=> {
      //  console.log (JSON.parse(decodedToken.email))
      //    }
      var token;
        var decodedToken ;
      if (JSON.parse(window.sessionStorage.getItem("existing"))){
       token = window.sessionStorage.getItem("token");
         decodedToken = jwt_decode(window.sessionStorage.getItem("token"));
      }

      const sendawy =() =>{
     axios.post("http://localhost:8081/user/sendmail",decodedToken)
      .then(console.log("done!!"));
      }
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
     <Button onClick={sendawy}>
       sendawy!
     </Button>

      {/* <Button onClick={mailat}>SEND MAILAT WKHALAS!</Button> */}
      </Container>
      )
     }
     export default PaymentComponent;