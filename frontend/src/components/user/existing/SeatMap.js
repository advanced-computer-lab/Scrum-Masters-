import { React, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Modal } from "@mui/material";
import axios from "axios";
import { SeatSelection } from "@duffel/components";
// import "@duffel/components/dist/SeatSelection.min.css";
import "../../../styles/seatMap.css";

const SeatMap = (props) => {
  //props: flights: array[dep,ret]
  // depseats,return seats
  //dep and return cabin
  const createOffer = (from, to, passengers) => {
    return {
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
                iata_code: "LHR", //FROM
              },
              id: "seg_1",
              duration: "PT2H48M", //pt+duration
              destination: {
                iata_code: "LIS", //TO
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
                iata_code: "LIS",
              },
              destination: {
                iata_code: "LHR",
              },
              duration: "PT2H48M", //pt+duration
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
    };
  };
  const [passengers, setPassengers] = useState([
    {
      id: "pas_1",
      name: "Gigi Gawanty",
      cabin: "economy",
      type: "adult",
    },
    {
      id: "pas_2",
      name: "Gigi Hadid",
      cabin: "economy",
      type: "adult",
    },
  ]);
  const [firstCabin, setFirstCabin] = useState([]);
  const [businessCabin, setBusinessCabin] = useState([]);
  const [economyCabin, setEconomyCabin] = useState([]);
  const [offer, setOffer] = useState(createOffer("LHR", "LIS", passengers)); //from, to, reserving users
  const [seatMaps, setSeatMaps] = useState([
    //flight 1
    {
      id: "sea_1",
      cabins: [
        {
          rows: [
            {
              sections: [
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "28A",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "28B",
                      available_services: [
                        {
                          id: "ase_1",
                          total_currency: "EGP",
                          total_amount: "1.0",
                          passenger_id: "pas_1",
                        },
                        {
                          id: "ase_1",
                          total_currency: "EGP",
                          total_amount: "1.0",
                          passenger_id: "pas_2",
                        },
                      ],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "28C",
                      available_services: [
                        {
                          id: "ase_0000A8okiQhes3xbKYwUSz",
                          total_currency: "EGP",
                          total_amount: "20.0",
                          passenger_id: "pas_1",
                        },
                      ],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "28D",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "28E",
                      available_services: [
                        {
                          id: "ase_0000A8okiQhes3xbKYwUT4",
                          total_currency: "EGP",
                          total_amount: "0.0",
                          passenger_id: "pas_1",
                        },
                      ],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "28F",
                      available_services: [
                        {
                          id: "ase_0000A8okiQhes3xbKYwUT7",
                          total_currency: "EGP",
                          total_amount: "20.0",
                          passenger_id: "pas_1",
                        },
                      ],
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
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "29A",
                      available_services: [
                        {
                          id: "ase_2",
                          total_currency: "EGP",
                          total_amount: "20.0",
                          passenger_id: "pas_2",
                        },
                      ],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "29B",
                      available_services: [
                        {
                          id: "ase_0000A8okiQi0qkFBLf6m17",
                          total_currency: "EGP",
                          total_amount: "0.0",
                          passenger_id: "pas_1",
                        },
                      ],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "29C",
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "29D",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "29E",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "29F",
                      available_services: [],
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
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "30A",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "30B",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "30C",
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "30D",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "30E",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "30F",
                      available_services: [
                        {
                          id: "ase_3",
                          total_currency: "EGP",
                          total_amount: "20.0",
                          passenger_id: "pas_2",
                        },
                      ],
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
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "31A",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "31B",
                      available_services: [
                        {
                          id: "ase_0000A8okiQiMpQWlMlH3ZQ",
                          total_currency: "EGP",
                          total_amount: "0.0",
                          passenger_id: "pas_1",
                        },
                      ],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "31C",
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "31D",
                      available_services: [
                        {
                          id: "ase_0000A8okiQiMpQWlMlH3ZV",
                          total_currency: "EGP",
                          total_amount: "0.0",
                          passenger_id: "pas_1",
                        },
                      ],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "31E",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "31F",
                      available_services: [],
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
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "32A",
                      available_services: [
                        {
                          id: "ase_0000A8okiQiMpQWlMlH3Zi",
                          total_currency: "EGP",
                          total_amount: "0.0",
                          passenger_id: "pas_1",
                        },
                      ],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "32B",
                      available_services: [
                        {
                          id: "ase_4",
                          total_currency: "EGP",
                          total_amount: "20.0",
                          passenger_id: "pas_2",
                        },
                      ],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "32C",
                      available_services: [
                        {
                          id: "ase_0000A8okiQiio6oLNrRL7a",
                          total_currency: "EGP",
                          total_amount: "0.0",
                          passenger_id: "pas_0000A8oTVsAt8YurG9h4xn",
                        },
                      ],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "32D",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "32E",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "32F",
                      available_services: [
                        {
                          id: "ase_0000A8okiQiio6oLNrRL7g",
                          total_currency: "EGP",
                          total_amount: "0.0",
                          passenger_id: "pas_0000A8oTVsAt8YurG9h4xn",
                        },
                      ],
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
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "33A",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "33B",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "33C",
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "33D",
                      available_services: [
                        {
                          id: "ase_0000A8okiQiio6oLNrRL7x",
                          total_currency: "EGP",
                          total_amount: "0.0",
                          passenger_id: "pas_1",
                        },
                      ],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "33E",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "33F",
                      available_services: [
                        {
                          id: "ase_0000A8okiQj4mn5vOxbcfq",
                          total_currency: "EGP",
                          total_amount: "0.0",
                          passenger_id: "pas_1",
                        },
                      ],
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
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "34A",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "34B",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "34C",
                      available_services: [
                        {
                          id: "ase_0000A8okiQj4mn5vOxbcg5",
                          total_currency: "EGP",
                          total_amount: "0.0",
                          passenger_id: "pas_1",
                        },
                      ],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "34D",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "34E",
                      available_services: [
                        {
                          id: "ase_0000A8okiQjQlTNVQ3luE8",
                          total_currency: "EGP",
                          total_amount: "0.0",
                          passenger_id: "pas_1",
                        },
                      ],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "34F",
                      available_services: [],
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
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "35A",
                      available_services: [
                        {
                          id: "ase_0000A8okiQjQlTNVQ3luEI",
                          total_currency: "EGP",
                          total_amount: "0.0",
                          passenger_id: "pas_1",
                        },
                      ],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "35B",
                      available_services: [
                        {
                          id: "ase_5",
                          total_currency: "EGP",
                          total_amount: "20.0",
                          passenger_id: "pas_2",
                        },
                      ],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "35C",
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "35D",
                      available_services: [
                        {
                          id: "ase_0000A8okiQjQlTNVQ3luEO",
                          total_currency: "EGP",
                          total_amount: "0.0",
                          passenger_id: "pas_1",
                        },
                      ],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "35E",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "35F",
                      available_services: [],
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
                // {
                //   elements: [],
                // },
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
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "36A",
                      available_services: [
                        {
                          id: "ase_0000A8okiQmcZbvjZxGSCT",
                          total_currency: "EGP",
                          total_amount: "20.0",
                          passenger_id: "pas_1",
                        },
                      ],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "36B",
                      available_services: [
                        {
                          id: "ase_0000A8okiQmcZbvjZxGSCW",
                          total_currency: "EGP",
                          total_amount: "0.0",
                          passenger_id: "pas_1",
                        },
                      ],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "36C",
                      available_services: [
                        {
                          id: "ase_0000A8okiQmcZbvjZxGSCZ",
                          total_currency: "EGP",
                          total_amount: "20.0",
                          passenger_id: "pas_1",
                        },
                      ],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "36D",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "36E",
                      available_services: [
                        {
                          id: "ase_0000A8okiQmcZbvjZxGSCe",
                          total_currency: "EGP",
                          total_amount: "0.0",
                          passenger_id: "pas_1",
                        },
                      ],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "36F",
                      available_services: [
                        {
                          id: "ase_0000A8okiQmcZbvjZxGSCh",
                          total_currency: "EGP",
                          total_amount: "20.0",
                          passenger_id: "pas_1",
                        },
                      ],
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
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "37A",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "37B",
                      available_services: [
                        {
                          id: "ase_0000A8okiQmyYIDJb3Qjkm",
                          total_currency: "EGP",
                          total_amount: "0.0",
                          passenger_id: "pas_1",
                        },
                      ],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "37C",
                      available_services: [
                        {
                          id: "ase_0000A8okiQmyYIDJb3Qjkp",
                          total_currency: "EGP",
                          total_amount: "0.0",
                          passenger_id: "pas_1",
                        },
                      ],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "37D",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "37E",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "37F",
                      available_services: [
                        {
                          id: "ase_6",
                          total_currency: "EGP",
                          total_amount: "20.0",
                          passenger_id: "pas_2",
                        },
                      ],
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
            },
          ],
          deck: 0,
          aisles: 1,
          cabin_class: "economy",
        },
      ],
      slice_id: "sli_1",
      segment_id: "seg_1",
    },
    //flight 2
    {
      id: "sea_2",
      cabins: [
        {
          // wings: {
          //   last_row_index: 2,
          //   first_row_index: 0,
          // },
          rows: [
            {
              sections: [
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "1A",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "1B",
                      available_services: [
                        {
                          id: "ase_0000A8okiQhes3xbKYwUS1",
                          total_currency: "EGP",
                          total_amount: "1.0",
                          passenger_id: "pas_1",
                        },
                      ],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "1C",
                      available_services: [
                        {
                          id: "ase_0000A8okiQhes3xbKYwUSz",
                          total_currency: "EGP",
                          total_amount: "20.0",
                          passenger_id: "pas_1",
                        },
                      ],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "1D",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "1E",
                      available_services: [
                        {
                          id: "ase_0000A8okiQhes3xbKYwUT4",
                          total_currency: "EGP",
                          total_amount: "0.0",
                          passenger_id: "pas_1",
                        },
                      ],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "1F",
                      available_services: [
                        {
                          id: "ase_0000A8okiQhes3xbKYwUT7",
                          total_currency: "EGP",
                          total_amount: "20.0",
                          passenger_id: "pas_1",
                        },
                        {
                          id: "ase_0000A8okiQhes3xbKYwUT7",
                          total_currency: "EGP",
                          total_amount: "20.0",
                          passenger_id: "pas_2",
                        },
                      ],
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
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "2A",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "2B",
                      available_services: [
                        {
                          id: "ase_0000A8okiQi0qkFBLf6m17",
                          total_currency: "EGP",
                          total_amount: "0.0",
                          passenger_id: "pas_1",
                        },
                      ],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "2C",
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "2D",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "2E",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "2F",
                      available_services: [],
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
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "3A",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "3B",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "3C",
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "3D",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "3E",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "3F",
                      available_services: [],
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
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "4A",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "4B",
                      available_services: [
                        {
                          id: "ase_0000A8okiQiMpQWlMlH3ZQ",
                          total_currency: "EGP",
                          total_amount: "0.0",
                          passenger_id: "pas_1",
                        },
                      ],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "4C",
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "4D",
                      available_services: [
                        {
                          id: "ase_0000A8okiQiMpQWlMlH3ZV",
                          total_currency: "EGP",
                          total_amount: "0.0",
                          passenger_id: "pas_1",
                        },
                      ],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "4E",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "4F",
                      available_services: [],
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
                // {
                //   elements: [],
                // },
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
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "5A",
                      available_services: [
                        {
                          id: "ase_0000A8okiQmcZbvjZxGSCT",
                          total_currency: "EGP",
                          total_amount: "20.0",
                          passenger_id: "pas_1",
                        },
                      ],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "5B",
                      available_services: [
                        {
                          id: "ase_0000A8okiQmcZbvjZxGSCW",
                          total_currency: "EGP",
                          total_amount: "0.0",
                          passenger_id: "pas_1",
                        },
                      ],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "5C",
                      available_services: [
                        {
                          id: "ase_0000A8okiQmcZbvjZxGSCZ",
                          total_currency: "EGP",
                          total_amount: "20.0",
                          passenger_id: "pas_1",
                        },
                      ],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "5D",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "5E",
                      available_services: [
                        {
                          id: "ase_0000A8okiQmcZbvjZxGSCe",
                          total_currency: "EGP",
                          total_amount: "0.0",
                          passenger_id: "pas_1",
                        },
                      ],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "5F",
                      available_services: [
                        {
                          id: "ase_0000A8okiQmcZbvjZxGSCh",
                          total_currency: "EGP",
                          total_amount: "20.0",
                          passenger_id: "pas_1",
                        },
                      ],
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
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "6A",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "6B",
                      available_services: [
                        {
                          id: "ase_0000A8okiQmyYIDJb3Qjkm",
                          total_currency: "EGP",
                          total_amount: "0.0",
                          passenger_id: "pas_1",
                        },
                      ],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "6C",
                      available_services: [
                        {
                          id: "ase_0000A8okiQmyYIDJb3Qjkp",
                          total_currency: "EGP",
                          total_amount: "0.0",
                          passenger_id: "pas_1",
                        },
                        {
                          id: "ase_0000A8okiQmyYIDJb3Qjkp",
                          total_currency: "EGP",
                          total_amount: "20.0",
                          passenger_id: "pas_2",
                        },
                      ],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "6D",
                      available_services: [],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "6E",
                      available_services: [
                        {
                          id: "ase_7",
                          total_currency: "EGP",
                          total_amount: "20.0",
                          passenger_id: "pas_2",
                        },
                      ],
                    },
                    {
                      type: "seat",
                      name: "",
                      disclosures: [],
                      designator: "6F",
                      available_services: [
                        {
                          id: "ase_8",
                          total_currency: "EGP",
                          total_amount: "20.0",
                          passenger_id: "pas_2",
                        },
                      ],
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
            },
          ],
          deck: 0,
          aisles: 1,
          cabin_class: "first",
        },
      ],
      slice_id: "sli_2",
      segment_id: "seg_2",
    },
  ]);
  const isAvailable = (seatNumber, cabinClass, flight) => {
    console.log(props.departureSeats, "        ", props.returnSeats);
    if (flight[0] === "departing")
      return (
        props.departureSeats.filter(
          (object) =>
            object.seatNum === seatNumber && object.cabin === cabinClass
        ).length > 0
      );
    return (
      props.returnSeats.filter(
        (object) => object.seatNum === seatNumber && object.cabin === cabinClass
      ).length > 0
    );
  };
  const createPassengers = (passengers) => {
    //passengers are the users with their details
    return [
      passengers.map((passenger) => ({
        id: passenger.id, //user
        name: passenger.firstName + " " + passenger.lastName, //user
        cabin: passenger.cabin, //cabin
        type: passenger.type, //passed from search/reservation
      })),
    ];
  };
  const createSeatMaps = () => {
    var maps = [];
    var row = 1;
    props.flights.forEach((flight, index) => {
      var cabin = index === 0 ? props.departureCabin : props.returnCabin;
      var obj = [];
      switch (cabin) {
        case "first": obj.push(firstCabin[index]); break;
        case "business": obj.push(businessCabin[index]); break;
        case "economy": obj.push(economyCabin[index]); break;
        default: break;
      }
      var map = { id: "sea_" + (index + 1), cabins: obj, slice_id: "sli_" + (index + 1), segment_id: "seg_" + (index + 1) };
      maps.push(map);
    });
    console.log("maps", maps);
    setSeatMaps(maps);
  };
  const createEconomyCabin = () => {
    var rows = [];
    console.log(props.flights);
    props.flights.forEach((flight, index) => {
      console.log(flight[0]);
      var economySeats = flight[0].economy.noOfSeats;
      var type = index === 0 ? "departing" : "returning";
      var i =
        Math.ceil(flight[0].firstClass.noOfSeats / 6) +
        Math.ceil(flight[0].business.noOfSeats / 6) +
        1;
      for (
        i;
        i <=
        Math.ceil(flight[0].economy.noOfSeats / 6) +
          Math.ceil(flight[0].business.noOfSeats / 6) +
          Math.ceil(flight[0].firstClass.noOfSeats / 6);
        i++
      ) {
        var sections = [];
        var elements = [];
        var char = "A";
        for (let j = 1; j < 4 && economySeats > 0; j++, economySeats--) {
          var seat = {
            type: "seat",
            name: "",
            disclosures: [],
            designator: "" + i + char,
            // eslint-disable-next-line no-loop-func
            available_services: isAvailable("" + i + char, "economy", type)
              ? []
              : [
                  passengers.map((passenger, p) => ({
                    id: "ase_" + i + char + index,
                    total_currency: "EGP",
                    total_amount: "0.0",
                    passenger_id: "pas_" + (p+1),
                  })),
                ],
          };
          char = String.fromCharCode(char.charCodeAt() + 1);
          elements.push(seat);
        }
        if (elements.length > 0) sections.push({ elements: elements });
        elements = [];
        for (let j = 1; j < 4 && economySeats > 0; j++, economySeats--) {
          seat = {
            type: "seat",
            name: "",
            disclosures: [],
            designator: "" + i + char,
            // eslint-disable-next-line no-loop-func
            available_services: isAvailable("" + i + char, "economy", type)
              ? []
              : [
                  // eslint-disable-next-line no-loop-func
                  passengers.map((passenger, p) => ({
                    id: "ase_" + i + char + index,
                    total_currency: "EGP",
                    total_amount: "0.0",
                    passenger_id: "pas_" + (p+1),
                  })),
                ],
          };
          char = String.fromCharCode(char.charCodeAt() + 1);
          elements.push(seat);
        }
        if (elements.length > 0) sections.push({ elements: elements });
        if (sections.length > 0) rows.push({ sections: sections });
      }
      setEconomyCabin(
        economyCabin.push({
          rows: rows,
          deck: 0,
          aisles: 1,
          cabin_class: "economy",
        })
      );
    });
  };
  const createBusinessCabin = () => {
    var rows = [];
    console.log(props.flights);
    props.flights.forEach((flight, index) => {
      console.log(flight[0]);
      var businessSeats = flight[0].business.noOfSeats;
      var type = index === 0 ? "departing" : "returning";
      var i = Math.ceil(flight[0].firstClass.noOfSeats / 6) + 1;
      for (
        i;
        i <=
        Math.ceil(flight[0].business.noOfSeats / 6) +
          Math.ceil(flight[0].firstClass.noOfSeats / 6);
        i++
      ) {
        var sections = [];
        var elements = [];
        var char = "A";
        for (let j = 1; j < 4 && businessSeats > 0; j++, businessSeats--) {
          var seat = {
            type: "seat",
            name: "",
            disclosures: [],
            designator: "" + i + char,
            // eslint-disable-next-line no-loop-func
            available_services: isAvailable("" + i + char, "business", type)
              ? []
              : [
                  passengers.map((passenger, p) => ({
                    id: "ase_" + i + char + index,
                    total_currency: "EGP",
                    total_amount: "0.0",
                    passenger_id: "pas_" + (p+1),
                  })),
                ],
          };
          char = String.fromCharCode(char.charCodeAt() + 1);
          elements.push(seat);
        }
        if (elements.length > 0) sections.push({ elements: elements });
        elements = [];
        for (let j = 1; j < 4 && businessSeats > 0; j++, businessSeats--) {
          seat = {
            type: "seat",
            name: "",
            disclosures: [],
            designator: "" + i + char,
            // eslint-disable-next-line no-loop-func
            available_services: isAvailable("" + i + char, "business", type)
              ? []
              : [
                  // eslint-disable-next-line no-loop-func
                  passengers.map((passenger, p) => ({
                    id: "ase_" + i + char + index,
                    total_currency: "EGP",
                    total_amount: "0.0",
                    passenger_id: "pas_" + (p+1),
                  })),
                ],
          };
          char = String.fromCharCode(char.charCodeAt() + 1);
          elements.push(seat);
        }
        if (elements.length > 0) sections.push({ elements: elements });
        if (sections.length > 0) rows.push({ sections: sections });
      }
      setBusinessCabin(
        businessCabin.push({
          rows: rows,
          deck: 0,
          aisles: 1,
          cabin_class: "business",
        })
      );
    });
  };
  // console.log(createFirstCabin());
  const createFirstCabin = () => {
    var rows = [];
    var i = 1;
    console.log(props.flights);
    props.flights.forEach((flight, index) => {
      console.log(flight[0]);
      var firstSeats = flight[0].firstClass.noOfSeats;
      var type = index === 0 ? "departing" : "returning";
      for (i = 1; i <= Math.ceil(flight[0].firstClass.noOfSeats / 6); i++) {
        var sections = [];
        var elements = [];
        var char = "A";
        for (let j = 1; j < 4 && firstSeats > 0; j++, firstSeats--) {
          var seat = {
            type: "seat",
            name: "",
            disclosures: [],
            designator: "" + i + char,
            // eslint-disable-next-line no-loop-func
            available_services: isAvailable("" + i + char, "first", type)
              ? []
              : [
                  passengers.map((passenger, p) => ({
                    id: "ase_" + i + char + index,
                    total_currency: "EGP",
                    total_amount: "0.0",
                    passenger_id: "pas_" + (p+1),
                  })),
                ],
          };
          char = String.fromCharCode(char.charCodeAt() + 1);
          elements.push(seat);
        }
        if (elements.length > 0) sections.push({ elements: elements });
        elements = [];
        for (let j = 1; j < 4 && firstSeats > 0; j++, firstSeats--) {
          seat = {
            type: "seat",
            name: "",
            disclosures: [],
            designator: "" + i + char,
            // eslint-disable-next-line no-loop-func
            available_services: isAvailable("" + i + char, "first", type)
              ? []
              : [
                  // eslint-disable-next-line no-loop-func
                  passengers.map((passenger, p) => ({
                    id: "ase_" + i + char + index,
                    total_currency: "EGP",
                    total_amount: "0.0",
                    passenger_id: "pas_" + (p+1),
                  })),
                ],
          };
          char = String.fromCharCode(char.charCodeAt() + 1);
          elements.push(seat);
        }
        if (elements.length > 0) sections.push({ elements: elements });
        if (sections.length > 0) rows.push({ sections: sections });
      }
      setFirstCabin(
        firstCabin.push({
          rows: rows,
          deck: 0,
          aisles: 1,
          cabin_class: "first",
        })
      );
      console.log(i);
    });
  };

  useEffect(() => {
    createFirstCabin();
    createBusinessCabin();
    createEconomyCabin();
    createSeatMaps();
    console.log(firstCabin);
    console.log(businessCabin);
    console.log(economyCabin);
  }, []);

  const onSubmit = () => {
    var x = document.getElementsByClassName(
      "passenger-selection-passenger__seat-designator"
    );
    Array.from(x).forEach((y) => {
      console.log(y.innerText);
    });
  };
  return seatMaps && offer && passengers ? (
    <SeatSelection
      passengers={passengers}
      offer={offer}
      seatMaps={seatMaps}
      onSubmit={onSubmit}
    ></SeatSelection>
  ) : null;
};

export default SeatMap;
