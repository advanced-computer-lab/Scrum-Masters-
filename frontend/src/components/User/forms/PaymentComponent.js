import StripeCheckout from "react-stripe-checkout";
import {React, useState} from "react";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
const axios = require("axios").default;
const nodemailer =require('nodemailer');
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
        price: "10",
        Productby:"cloud9"
        })
  

        const handler =()=>{
            axios.post("http://localhost:8081/user/sendmail")
             .then(console.log("done!!"));
         }
        return(
 <Container> 
    <Button onClick={handler }>
         SEND MAIL BITCH
        </Button>
    
<StripeCheckout 
stripeKey ="pk_test_51K6M8qJJwEGtsc7Jg1PpI8uJfikDdlKuDksccokEyc3JjTgyysXvjGb1lWZIbyOCjPfNnbs4cBflSwG5xUzmfKq500JtPtmY3p"
token=""
name=""
amount="500"
backgroundcolor="purple"
currency="EGP"
onClick={transporter.sendMail(options,  function(err,info){
    if(err){
      console.log("error!",err);
      return;
    }
    console.log("mail sent successfully")})}



>
  <Button style={{
   backgroundcolor:"pink",
   fontSize:"15px"
  }} onClick={handler}>
    
    
      Make Payment
      </Button>
     
      </StripeCheckout> 
      </Container>
      )
     }
     export default PaymentComponent;