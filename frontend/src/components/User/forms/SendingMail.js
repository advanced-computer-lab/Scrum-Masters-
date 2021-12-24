
import StripeCheckout from "react-stripe-checkout";
import {React, useState} from "react";
import { Button , Container} from "@mui/material";
const axios = require("axios").default;


const nodemailer =require('nodemailer');
const SendingMail = () => {

const handler =()=>{
   axios.post("http://localhost:8081/user/sendmail")
    .then(console.log("done!!"));
}

    return(

     <Container>
   
<Button onClick={handler}>
  Click me to send mail!!
</Button>


</Container>
)
    }

export default SendingMail;