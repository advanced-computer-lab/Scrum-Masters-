import { React, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Typography } from "@mui/material";
import Loader from "react-loader-spinner";
import { Grid } from "@mui/material";
import { ListItem } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import StripeCheckout from "react-stripe-checkout";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Divider } from "@mui/material";
import { Box, Stack } from "@mui/material";
import Ticket from "../../../components/user/existing/Ticket";
import { Button } from "@mui/material";
import jwt_decode from "jwt-decode";

const nodemailer = require("nodemailer");
// import { Stack } from "react-bootstrap";

const Itinerary = (props) => {
  console.log(props);
  console.log(props);
  console.log("YOUR OBJECT IS HERE" + props);
  const product = props;
   const[email,setEmail]=useState("");
  const getRightMail = () => {};

  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "maramACL@outlook.com",
      pass: "Benamer1!",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  const options = {
    from: "maramACL@outlook.com",
    to: "marambenamer@yahoo.com",
    subject: "Email trial",
    text: "Let's see",
  };
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log("error!", err);
      return;
    }
    console.log("mail sent successfully");
  });
  var token;
  var decodedToken;
  if (JSON.parse(window.sessionStorage.getItem("existing"))) {
    token = window.sessionStorage.getItem("token");
    decodedToken = jwt_decode(window.sessionStorage.getItem("token"));
  }
  const [loading, setLoading] = useState(true);
  //console.log(input1.flight);
  console.log("hehehe");
  useEffect(() => {
    axios
      .get(`http://localhost:8081/user/profile/${decodedToken.id}`)
      .then((result) => {
        console.log("axios get", result);
        console.log("el email ahuuu!!!!!", result.data.email);
        setEmail(result.data.email);
       
      })
      .catch((err) => console.log(err));
    console.log("Itinerary", props);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [loading]);

  const dynamicTickets = () => {
    var result = [];
    props.departureTickets.forEach((ticket, index) => {
      result.push(<Ticket ticket={ticket} flight={props.departureFlight} />);
      result.push(<div style={{ marginTop: "5px" }}></div>);
      result.push(
        <Ticket
          ticket={props.returnTickets[index]}
          flight={props.returnFlight}
        />
      );
    });
    return result;
  };
  const handler = () => {
    decodedToken.props = props;
    decodedToken.email = email;
    console.log(
      "GIRL HERE ARE THE TOKEN PROPS TICKETS!!!!" +
        JSON.stringify(decodedToken.props.departureTickets)
    );
    console.log("ANA EL emaillllllll!!!!" + JSON.stringify(decodedToken.email));
    const lol = props.departureFlight.arrivalAirport;
    axios
      .post("http://localhost:8081/user/sendmail", decodedToken)
      .then(
        console.log(
          "done!!" + "ELI RAYEH LEL BACKEND HOWA" + JSON.stringify(decodedToken)
        )
      );
  };
  const printer = () => {
    console.log(props.ticket.seatNum);
  };

  const pay = (token) => {
    const body = {
      token,
      product,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .post("http://localhost:8081/user/payment", {
        method: "POST",
        headers,
        body: body,
      })
      .then((response) => {
        console.log("MABROOOOOK girl ehna fl itenirary bndfa3 ahu");
        const { status } = response;
        console.log("STATUS");
      })
      .catch((error) => console.log("GIRL FE MASHAKEL" + error));
  };

  return (
    <Container>
      {loading && (
        <Loader
          type="Plane"
          color="#4ea8de"
          height={100}
          width={100}
          timeout={5000}
        />
      )}
      {!loading && (
        <div>
          <Typography
            variant="h6"
            gutterBottom
            component="header"
            align="left"
            fontStyle="italic"
            style={{ marginTop: "1%", marginLeft: "2%" }}
          >
            Reservation Number: {props.departureTickets[0].reservationId}
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            component="header"
            align="right"
            fontStyle="italic"
            style={{
              marginTop: "0.5px",
              marginLeft: "2px",
              marginBottom: "0px",
            }}
          >
            Total Price: {props.totalPrice} EGP
          </Typography>
          <div>
            <StripeCheckout
              stripeKey="pk_test_51K6M8qJJwEGtsc7Jg1PpI8uJfikDdlKuDksccokEyc3JjTgyysXvjGb1lWZIbyOCjPfNnbs4cBflSwG5xUzmfKq500JtPtmY3p"
              token={pay}
              name=""
              amount={props.totalPrice * 100}
              currency="EGP"
            >
              <Button
                sx={{
                  marginLeft: "0px",
                  marginRight: "500px",
                  marginTop: "0px",
                  marginBottom: "0px",
                }}
              >
                Make Payment
              </Button>
            </StripeCheckout>
          </div>
          <Button
            onClick={handler}
            style={{
              marginLeft: "0px",
              marginRight: "650px",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            E-mail me a copy of my itenerary
          </Button>

          {dynamicTickets()}
        </div>
      )}

      {/* <Button> </Button> */}
    </Container>
  );
};
export default Itinerary;
