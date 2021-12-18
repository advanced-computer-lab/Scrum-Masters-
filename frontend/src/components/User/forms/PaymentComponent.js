import StripeCheckout from "react-stripe-checkout";
import {React, useState} from "react";
import { Button } from "@mui/material";


const PaymentComponent = () =>{ 
    const [product,setProduct] =useState({
        name:"Pay for reservation",
        price: "10",
        Productby:"cloud9"
        })

        return(


<StripeCheckout 
stripeKey ="pk_test_51K6M8qJJwEGtsc7Jg1PpI8uJfikDdlKuDksccokEyc3JjTgyysXvjGb1lWZIbyOCjPfNnbs4cBflSwG5xUzmfKq500JtPtmY3p"
token=""
name=""
amount="500"
backgroundcolor="purple"




>
  <Button style={{
   backgroundcolor:"pink",
   fontSize:"15px"
   




  }}>
      Make Payment
      </Button>
      </StripeCheckout> 
      )
     }
     export default PaymentComponent;