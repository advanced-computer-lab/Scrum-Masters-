import { React, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SearchFlight from "../../components/admin/forms/SearchFlight";
import ViewFlights from "../../components/admin/ViewFlights";
import axios from "axios";

const Schedule = () => {
  const [data, setData] = useState();
  const [values, setValues] = useState();
  const [submit, setSubmit] = useState(false);
  const onChange = async (e) => {
    if (e) {
      try {
        console.log("this is the target value " + e.target.value + " with length " + e.target.value.length );
        if (e.target.value.length !== 0) {
          await setValues({ ...values, [e.target.name]: e.target.value }); 
        }
         else {
          let name = e.target.name; 
          delete values[name]
         }
        await console.log(values);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const onSubmit = () => {
    //console.log(values)
    setSubmit(!submit);
  };
  useEffect(() => {
    console.log(values);
    axios
      .post("http://localhost:8081/admin/search", values)
      .then((res) => {
        console.log("The response"+ res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [submit]);
  return (
    <Container>
      <h2 style={{ marginTop: "0.5%" }}> All Flights</h2>
      <div style={{ marginTop: "2%" }}>
        <SearchFlight onSubmit={onSubmit} onChange={onChange} />
      </div>
      <div style={{ marginTop: "2%" }}>
        <ViewFlights flights={data} />
      </div>
    </Container>
  );
};

export default Schedule;