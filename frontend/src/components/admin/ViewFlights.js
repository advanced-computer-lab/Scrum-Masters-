import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const ViewFlights = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8081/admin/search")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });
  return <div>{data && <div>{data[0].flightNumber}</div>}</div>;
};

export default ViewFlights;
