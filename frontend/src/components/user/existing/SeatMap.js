import { React, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Modal } from "@mui/material";
import axios from "axios";
import Loader from "react-loader-spinner";
import { SeatSelection } from "@duffel/components";
import { Alert } from "@mui/material";
// import "@duffel/components/dist/SeatSelection.min.css";
import "../../../styles/seatMap.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const SeatMap = (props) => {
  const [error, setError] = useState(false);
  const [passengers, setPassengers] = useState(props.passengers);
  const [firstCabin, setFirstCabin] = useState([]);
  const [businessCabin, setBusinessCabin] = useState([]);
  const [economyCabin, setEconomyCabin] = useState([]);
  const [offer, setOffer] = useState(); //from, to, reserving users
  const [seatMaps, setSeatMaps] = useState();
  const [loading, setLoading] = useState(props.loading);
  const [depatureTickets, setDepartureTickets] = useState(
    props.departureTickets || []
  );
  const [returnTickets, setReturnTickets] = useState(props.returnTickets || []);
  const [initial, setInitial] = useState({});
  console.log(props.passengers, "seat map");
  const createInitial = () => {
    console.log(passengers);
    var pre = { seg_1: {}, seg_2: {} }
    passengers.forEach((passenger) => {
      if (passenger.departureSeat) {
        pre.seg_1[passenger.id] = {
          designator: passenger.departureSeat,
          service: {
            total_currency: "EGP",
            total_amount: "0.0",
            passenger_id: passenger.id,
            id: "ase_" + passenger.departureSeat + "0",
          },
        }
      }
         if (passenger.returnSeat) {
        pre.seg_2[passenger.id] = {
          designator: passenger.returnSeat,
          service: {
            total_currency: "EGP",
            total_amount: "0.0",
            passenger_id: passenger.id,
            id: "ase_" + passenger.returnSeat + "1",
          },
        }
      }
    })
    console.log(pre);
    setInitial(pre);
    };
  const isEditable = (seatNumber, cabinClass, flight) => {
    if (!props.edit)
      return false;
    var flag = false;
    if (flight === "departing") {
      for (let passenger of passengers) {
        if(passenger.departureSeat)//departureTickets
        if (passenger.cabin === cabinClass && passenger.departureSeat === seatNumber) {
          flag = true;
          break;
        }
      }
    } else {
      for (let passenger of passengers) {
        if(passenger.returnSeat)
        if (passenger.cabin === cabinClass && passenger.returnSeat === seatNumber) {
          flag = true;
          break;
        }
      }
    }
    return flag;
  };
  const isAvailable = (seatNumber, cabinClass, flight) => {
    if (flight === "departing")
      return !props.departureSeats.every(
        (object) =>
          (object.seatNum !== seatNumber) | (object.cabin !== cabinClass)
      );
    return !props.returnSeats.every(
      (object) =>
        (object.seatNum !== seatNumber) | (object.cabin !== cabinClass)
    );
  };
  const createOffer = (from, to, passengers, durationOne, durationTwo) => {
    var obj = passengers
      ? {
          slices: [
            {
              segments: [
                {
                  passengers: passengers.map((passenger) => ({
                    passenger_id: passenger.id,
                    cabin_class_marketing_name: "economy", //cabin
                    cabin_class: passenger.cabin_class, //cabin
                  })),
                  origin: {
                    iata_code: from, //FROM
                  },
                  id: "seg_1",
                  duration: "PT" + durationOne.replace(/\s/g, "").toUpperCase(), //pt+duration
                  destination: {
                    iata_code: to, //TO
                  },
                },
              ],
              id: "sli_1",
            },
            {
              segments: [
                {
                  id: "seg_2",
                  passengers: passengers.map((passenger) => ({
                    passenger_id: passenger.id,
                    cabin_class_marketing_name: "economy",
                    cabin_class: passenger.cabin_class,
                  })),
                  origin: {
                    iata_code: to,
                  },
                  destination: {
                    iata_code: from,
                  },
                  duration: "PT" + durationTwo.replace(/\s/g, "").toUpperCase(), //pt+duration
                },
              ],
              id: "sli_2",
            },
          ],
          passengers: passengers.map((passenger) => ({
            type: passenger.type, //adult/child
            id: passenger.id,
          })),

          total_currency: "EGP",
          total_amount: "2748.65", //price so far
          tax_currency: "EGP",
          tax_amount: "419.29",
          base_currency: "EGP",
          base_amount: "2329.36",
          available_services: [],
          allowed_passenger_identity_document_types: [],
          conditions: {},
        }
      : {};
    setOffer(obj);
  };
  const createSeatMaps = () => {
    var maps = [];
    var row = 1;
    props.flights.forEach((flight, index) => {
      var cabin = index === 0 ? props.departureCabin : props.returnCabin;
      var obj = [];
      switch (cabin) {
        case "first":
          obj.push(firstCabin[index]);
          break;
        case "business":
          obj.push(businessCabin[index]);
          break;
        case "economy":
          obj.push(economyCabin[index]);
          break;
        default:
          break;
      }
      var map = {
        id: "sea_" + (index + 1),
        cabins: obj,
        slice_id: "sli_" + (index + 1),
        segment_id: "seg_" + (index + 1),
      };
      maps.push(map);
    });
    setSeatMaps(maps);
  };
  const createEconomyCabin = () => {
    var rows = [];
    props.flights.forEach((flight, index) => {
      rows.push(
        {
          sections: [
            {
              elements: [
                {
                  type: "lavatory",
                },
              ],
            },
            {
              elements: [
                {
                  type: "lavatory",
                },
              ],
            },
          ],
        },
        {
          sections: [
            {
              elements: [
                {
                  type: "exit_row",
                },
              ],
            },
            {
              elements: [
                {
                  type: "exit_row",
                },
              ],
            },
          ],
        }
      );
      var economySeats = flight.economy.noOfSeats;
      var type = index === 0 ? "departing" : "returning";
      var i =
        Math.ceil(flight.firstClass.noOfSeats / 6) +
        Math.ceil(flight.business.noOfSeats / 6) +
        1;
      var totalAvailable =
        Math.ceil(flight.economy.noOfSeats / 6) +
        Math.ceil(flight.business.noOfSeats / 6) +
        Math.ceil(flight.firstClass.noOfSeats / 6);
      for (i; i <= totalAvailable; i++) {
        if (
          i ===
          Math.ceil(flight.economy.noOfSeats / 12) +
            Math.ceil(flight.business.noOfSeats / 6) +
            Math.ceil(flight.firstClass.noOfSeats / 6)
        )
          rows.push({
            sections: [
              {
                elements: [
                  {
                    type: "lavatory",
                  },
                ],
              },
              {
                elements: [
                  {
                    type: "lavatory",
                  },
                ],
              },
            ],
          });
        var sections = [];
        var elements = [];
        var char = "A";
        for (let j = 1; j < 4 && economySeats > 0; j++, economySeats--) {
          var flag = isAvailable("" + i + char, "economy", type);
          var seat = {
            type: "seat",
            name: "",
            disclosures: [],
            designator: "" + i + char,
            // eslint-disable-next-line no-loop-func
            ...(flag && { available_services: [] }),
            ...(!flag && {
              // eslint-disable-next-line no-loop-func
              available_services: passengers.map((passenger, p) => ({
                id: "ase_" + i + char + index,
                total_currency: "EGP",
                total_amount: "0.0",
                passenger_id: "pas_" + (p + 1),
              })),
            }),
          };
          char = String.fromCharCode(char.charCodeAt() + 1);
          elements.push(seat);
        }
        if (elements.length > 0) sections.push({ elements: elements });
        elements = [];
        for (let j = 1; j < 4 && economySeats > 0; j++, economySeats--) {
          flag = isAvailable("" + i + char, "economy", type);
          seat = {
            type: "seat",
            name: "",
            disclosures: [],
            designator: "" + i + char,
            // eslint-disable-next-line no-loop-func
            ...(flag && { available_services: [] }),
            ...(!flag && {
              // eslint-disable-next-line no-loop-func
              available_services: passengers.map((passenger, p) => ({
                id: "ase_" + i + char + index,
                total_currency: "EGP",
                total_amount: "0.0",
                passenger_id: "pas_" + (p + 1),
              })),
            }),
          };
          char = String.fromCharCode(char.charCodeAt() + 1);
          elements.push(seat);
        }
        sections.push({ elements: elements });
        if (sections.length > 0) rows.push({ sections: sections });
      }
      rows.push(
        {
          sections: [
            {
              elements: [
                {
                  type: "exit_row",
                },
              ],
            },
            {
              elements: [
                {
                  type: "exit_row",
                },
              ],
            },
          ],
        },
        {
          sections: [
            {
              elements: [
                {
                  type: "galley",
                },
              ],
            },
            {
              elements: [
                {
                  type: "galley",
                },
              ],
            },
          ],
        }
      );
      setEconomyCabin(
        economyCabin.push({
          rows: rows,
          deck: 0,
          aisles: 1,
          cabin_class: "economy",
        })
      );
      rows = [];
    });
  };
  const createBusinessCabin = () => {
    var rows = [];
    props.flights.forEach((flight, index) => {
      rows.push(
        {
          sections: [
            {
              elements: [
                {
                  type: "lavatory",
                },
              ],
            },
            {
              elements: [
                {
                  type: "lavatory",
                },
              ],
            },
          ],
        }
        // {
        //   sections: [
        //     {
        //       elements: [
        //         {
        //           type: "exit_row",
        //         },
        //       ],
        //     },
        //     {
        //       elements: [
        //         {
        //           type: "exit_row",
        //         },
        //       ],
        //     },
        //   ],
        // }
      );
      var businessSeats = flight.business.noOfSeats;
      var type = index === 0 ? "departing" : "returning";
      var i = Math.ceil(flight.firstClass.noOfSeats / 6) + 1;
      for (
        i;
        i <=
        Math.ceil(flight.business.noOfSeats / 6) +
          Math.ceil(flight.firstClass.noOfSeats / 6);
        i++
      ) {
        var sections = [];
        var elements = [];
        var char = "A";
        for (let j = 1; j < 3 && businessSeats > 0; j++, businessSeats--) {
          var flag = isAvailable("" + i + char, "business", type);
          var seat = {
            type: "seat",
            name: "",
            disclosures: [],
            designator: "" + i + char,
            ...(flag && { available_services: [] }),
            ...(!flag && {
              // eslint-disable-next-line no-loop-func
              available_services: passengers.map((passenger, p) => ({
                id: "ase_" + i + char + index,
                total_currency: "EGP",
                total_amount: "0.0",
                passenger_id: "pas_" + (p + 1),
              })),
            }),
          };
          char = String.fromCharCode(char.charCodeAt() + 1);
          elements.push(seat);
        }
        if (elements.length > 0) sections.push({ elements: elements });
        elements = [];
        for (let j = 1; j < 3 && businessSeats > 0; j++, businessSeats--) {
          flag = isAvailable("" + i + char, "business", type);
          seat = {
            type: "seat",
            name: "",
            disclosures: [],
            designator: "" + i + char,
            ...(flag && { available_services: [] }),
            ...(!flag && {
              // eslint-disable-next-line no-loop-func
              available_services: passengers.map((passenger, p) => ({
                id: "ase_" + i + char + index,
                total_currency: "EGP",
                total_amount: "0.0",
                passenger_id: "pas_" + (p + 1),
              })),
            }),
          };
          char = String.fromCharCode(char.charCodeAt() + 1);
          elements.push(seat);
        }
        if (elements.length > 0) sections.push({ elements: elements });
        if (sections.length > 0) rows.push({ sections: sections });
      }
      rows.push(
        {
          sections: [
            {
              elements: [
                {
                  type: "lavatory",
                },
              ],
            },
            {
              elements: [
                {
                  type: "lavatory",
                },
              ],
            },
          ],
        },
        {
          sections: [
            {
              elements: [
                {
                  type: "exit_row",
                },
              ],
            },
            {
              elements: [
                {
                  type: "exit_row",
                },
              ],
            },
          ],
        }
      );
      setBusinessCabin(
        businessCabin.push({
          rows: rows,
          deck: 0,
          aisles: 1,
          cabin_class: "business",
        })
      );
      rows = [];
    });
  };
  const createFirstCabin = () => {
    var rows = [];
    var i = 1;
    props.flights.forEach((flight, index) => {
      rows.push(
        {
          sections: [
            {
              elements: [
                {
                  type: "galley",
                },
              ],
            },
            {
              elements: [
                {
                  type: "galley",
                },
              ],
            },
          ],
        },
        {
          sections: [
            {
              elements: [
                {
                  type: "exit_row",
                },
              ],
            },
            {
              elements: [
                {
                  type: "exit_row",
                },
              ],
            },
          ],
        }
      );
      var firstSeats = flight.firstClass.noOfSeats;
      var type = index === 0 ? "departing" : "returning";
      for (i = 1; i <= Math.ceil(flight.firstClass.noOfSeats / 6); i++) {
        var sections = [];
        var elements = [];
        var char = "A";
        for (let j = 1; j < 3 && firstSeats > 0; j++, firstSeats--) {
          var flag = isAvailable("" + i + char, "first", type);
          var editable = isEditable("" + i + char, "first", type);
          var seat = {
            type: "seat",
            name: "",
            disclosures: [],
            designator: "" + i + char,
            ...(flag && !editable && { available_services: [] }),
            ...((!flag || editable) && {
              // eslint-disable-next-line no-loop-func
              available_services: passengers.map((passenger, p) => ({
                id: "ase_" + i + char + index,
                total_currency: "EGP",
                total_amount: "0.0",
                passenger_id: "pas_" + (p + 1),
              })),
            }),
          };
          char = String.fromCharCode(char.charCodeAt() + 1);
          elements.push(seat);
        }
        if (elements.length > 0) sections.push({ elements: elements });
        elements = [];
        for (let j = 1; j < 3 && firstSeats > 0; j++, firstSeats--) {
          flag = isAvailable("" + i + char, "first", type);
          editable = isEditable("" + i + char, "first", type);
          seat = {
            type: "seat",
            name: "",
            disclosures: [],
            designator: "" + i + char,
            ...(flag && !editable && { available_services: [] }),
            ...((!flag || editable) && {
              // eslint-disable-next-line no-loop-func
              available_services: passengers.map((passenger, p) => ({
                id: "ase_" + i + char + index,
                total_currency: "EGP",
                total_amount: "0.0",
                passenger_id: "pas_" + (p + 1),
              })),
            }),
          };
          char = String.fromCharCode(char.charCodeAt() + 1);
          elements.push(seat);
        }
        if (elements.length > 0) sections.push({ elements: elements });
        if (sections.length > 0) rows.push({ sections: sections });
      }
      rows.push(
        {
          sections: [
            {
              elements: [
                {
                  type: "lavatory",
                },
              ],
            },
            {
              elements: [
                {
                  type: "lavatory",
                },
              ],
            },
          ],
        }
        // {
        //   sections: [
        //     {
        //       elements: [
        //         {
        //           type: "exit_row",
        //         },
        //       ],
        //     },
        //     {
        //       elements: [
        //         {
        //           type: "exit_row",
        //         },
        //       ],
        //     },
        //   ],
        // }
      );
      setFirstCabin(
        firstCabin.push({
          rows: rows,
          deck: 0,
          aisles: 1,
          cabin_class: "first",
        })
      );
      rows = [];
    });
  };
  useEffect(() => {
    createOffer(
      props.flights[0].departureAirport,
      props.flights[0].arrivalAirport,
      props.passengers,
      props.flights[0].duration,
      props.flights[1].duration
    );
    setTimeout(() => { }, 4000);
    if (props.edit) createInitial();
    createFirstCabin();
    createBusinessCabin();
    createEconomyCabin();
    createSeatMaps();
    setLoading(false);
    props.onFetch();
  }, []);

  const onSubmit = () => {
    var x = document.getElementsByClassName(
      "passenger-selection-passenger__seat-designator"
    );
    if (Array.from(x).length !== passengers.length * 2) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    } else {
      props.handleSeats(Array.from(x));
    }
  };
  return (
    <div>
      {/* {loading && (
        <Loader
          type="Plane"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={5000} //3 secs
        />
      )} */}
      {error && (
        <Alert severity="error">
          Select seats for all passengers for all flights.
        </Alert>
      )}
      {seatMaps && offer && passengers && !loading && (
        <SeatSelection
          passengers={passengers}
          offer={offer}
          seatMaps={seatMaps}
          onSubmit={onSubmit}
          initialSeatSelection={initial}
        ></SeatSelection>
      )}
    </div>
  );
};

export default SeatMap;
