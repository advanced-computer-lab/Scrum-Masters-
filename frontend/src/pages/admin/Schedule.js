import { React, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SearchFlight from "../../components/admin/forms/SearchFlight";
import ViewFlights from "../../components/admin/ViewFlights";
import axios from "axios";
import Typography from "@mui/material/Typography";

const Schedule = () => {
  const [data, setData] = useState();
  const [values, setValues] = useState();
  const [submit, setSubmit] = useState(false);
  const [remove, setRemove] = useState(false);
  const [update, setUpdate] = useState(false);
  const onChange = async (e) => {
    if (e) {
      try {
        console.log(
          "this is the target value " +
            e.target.value +
            " with length " +
            e.target.value.length
        );
        if (e.target.value.length !== 0) {
          if (
            e.target.name === "departureAirport" ||
            e.target.name === "arrivalAirport"
          )
            await setValues({
              ...values,
              [e.target.name]: e.target.value.toUpperCase(),
            });
          else await setValues({ ...values, [e.target.name]: e.target.value });
        } else {
          let name = e.target.name;
          delete values[name];
        }
        await console.log(values);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const onDelete = () => {
    setRemove(!remove);
  };
  const onUpdate = () => {
    setUpdate(!update);
  };
  const onSubmit = () => {
    setSubmit(!submit);
  };
  useEffect(() => {
    window.sessionStorage.setItem("existing", false);
    window.sessionStorage.setItem("admin", true);
    var e = new Event("storage");
    e.originalEvent = {
      key: "admin",
      oldValue: false,
      newValue: true,
    };
    console.log(e);
    window.dispatchEvent(e);
    axios
      .post("http://localhost:8081/admin/search", values)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [submit, remove, update]);
  return (
    <Container>
      {/* <Typography
        variant="h5"
        gutterBottom
        component="div"
        style={{ marginTop: "1%" }}
      >
        Flights Schedule
      </Typography> */}
      <div style={{ marginTop: "2%" }}>
        <SearchFlight onSubmit={onSubmit} onChange={onChange} />
      </div>
      <div style={{ marginTop: "2%" }}>
        <ViewFlights flights={data} onDelete={onDelete} onUpdate={onUpdate} />
      </div>
    </Container>
  );
};

export default Schedule;
