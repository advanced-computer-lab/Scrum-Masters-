import React from 'react';
import { Container } from 'react-bootstrap';
import { Modal } from '@mui/material';
import { SeatSelection } from '@duffel/components';
 import "@duffel/components/dist/SeatSelection.min.css";
import '../../styles/seatMap.css';

const SeatMap = () => {
  const passengers = [
    {
      id: 'pas_0000A8oTVsAt8YurG9h4xn',
      name: 'Amelia Earhart economy',
      cabin: 'economy',
    },
    {
      id: 'pas_0000A8oTVsAt8YurG9h4xnn',
      name: 'Amelia Earhart First',
      cabin: 'first_class',
    },
  ];

  const offer = {
    slices: [
      {
        segments: [
          {
            passengers: [
              {
                baggages: [
                  {
                    type: 'checked',
                    quantity: 1,
                  },
                ],
                passenger_id: 'pas_0000A8oTVsAt8YurG9h4xnn',
                fare_basis_code: 'Y20LGTN2',
                cabin_class_marketing_name: 'Economy',
                cabin_class: 'first_class',
              },
              {
                baggages: [
                  {
                    type: 'checked',
                    quantity: 1,
                  },
                ],
                passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                fare_basis_code: 'Y20LGTN2',
                cabin_class_marketing_name: 'Economy',
                cabin_class: 'economy',
              },
            ],
            origin: {
              name: 'Heathrow Airport',
              longitude: -0.458118,
              latitude: 51.470311,
              id: 'arp_lhr_gb',
              city: {
                type: 'city',
                name: 'London',
                longitude: null,
                latitude: null,
                id: 'cit_lon_gb',
                time_zone: null,
                iata_country_code: 'GB',
                iata_code: 'LON',
                iata_city_code: 'LON',
                city_name: '',
              },
              time_zone: 'Europe/London',
              icao_code: 'EGLL',
              iata_country_code: 'GB',
              iata_code: 'LHR', //FROM
              iata_city_code: 'LON',
              city_name: 'London',
            },
            id: 'seg_0000A8oTVsOiJ9yVx2A7Vo',
            duration: 'PT2H48M',
            distance: '1664.7559640438405',
            destination: {
              name: 'Lisbon Portela Airport',
              longitude: -9.135643,
              latitude: 38.778446,
              id: 'arp_lis_pt',
              city: null,
              time_zone: 'Europe/Lisbon',
              icao_code: 'LPPT',
              iata_country_code: 'PT',
              iata_code: 'LISSS', //TO
              iata_city_code: 'LIS',
              city_name: 'Lisbon',
            },
            aircraft: {
              name: 'Boeing 777-300',
              id: 'arc_00009VMF8AhXSSRnQDI6HE',
              iata_code: '773',
            },
            origin_terminal: '2',
            operating_carrier_flight_number: '6443',
            operating_carrier: {
              name: 'Duffel Airways',
              id: 'arl_00009VME7D6ivUu8dn35WK',
              iata_code: 'ZZ',
            },
            marketing_carrier_flight_number: '6443',
            marketing_carrier: {
              name: 'Duffel Airways',
              id: 'arl_00009VME7D6ivUu8dn35WK',
              iata_code: 'ZZ',
            },
            destination_terminal: '7',
            departing_at: '2021-09-29T23:00:00',
            arriving_at: '2021-09-30T01:48:00',
          },
        ],
        origin: {
          type: 'airport',
          name: 'Heathrow Airport',
          longitude: -0.458118,
          latitude: 51.470311,
          id: 'arp_lhr_gb',
          city: {
            type: 'city',
            name: 'London',
            longitude: null,
            latitude: null,
            id: 'cit_lon_gb',
            time_zone: null,
            iata_country_code: 'GB',
            iata_code: 'LON',
            iata_city_code: 'LON',
            city_name: '',
          },
          time_zone: 'Europe/London',
          icao_code: 'EGLL',
          iata_country_code: 'GB',
          iata_code: 'LHR',
          iata_city_code: 'LON',
          city_name: 'London',
        },
        id: 'sli_0000A8oTVsOiJ9yVx2A7Vp',
        duration: 'PT2H48M',
        destination: {
          type: 'airport',
          name: 'Lisbon Portela Airport',
          //longitude: -9.135643,
          latitude: 38.778446,
          //id: 'arp_lis_pt',
          city: null,
          time_zone: 'Europe/Lisbon',
          icao_code: 'LPPT',
          iata_country_code: 'PT',
          iata_code: 'LIS',
          iata_city_code: 'LIS',
          city_name: 'Lisbon',
        },
        conditions: {
          change_before_departure: {
            allowed: true,
            penalty_currency: 'GBP',
            penalty_amount: '470.00',
          },
        },
        origin_type: 'airport',
        fare_brand_name: 'Basic',
        destination_type: 'airport',
      },
      {
        segments: [
          {
            passengers: [
              {
                baggages: [
                  {
                    type: 'checked',
                    quantity: 1,
                  },
                ],
                passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                fare_basis_code: 'Y20LGTN2',
                cabin_class_marketing_name: 'Economy',
                cabin_class: 'first_class',
              },
              {
                baggages: [
                  {
                    type: 'checked',
                    quantity: 1,
                  },
                ],
                passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                fare_basis_code: 'Y20LGTN2',
                cabin_class_marketing_name: 'Economy',
                cabin_class: 'economy',
              },
            ],
            origin: {
              // name: 'Lisbon Portela Airport',
              // longitude: -9.135643,
              // latitude: 38.778446,
              // id: 'arp_lis_pt',
              // city: null,
              // time_zone: 'Europe/Lisbon',
              // icao_code: 'LPPT',
              // iata_country_code: 'PT',
              iata_code: 'LIS',
              iata_city_code: 'LIS',
              city_name: 'Lisbon',
            },
            // id: 'seg_0000A8oTVsP4HqG5y8KP44',
            // duration: 'PT2H48M',
            // distance: '1664.7559640438405',
            destination: {
              name: 'Heathrow Airport',
              longitude: -0.458118,
              latitude: 51.470311,
              id: 'arp_lhr_gb',
              city: {
                type: 'city',
                name: 'London',
                longitude: null,
                latitude: null,
                id: 'cit_lon_gb',
                time_zone: null,
                iata_country_code: 'GB',
                iata_code: 'LON',
                iata_city_code: 'LON',
                city_name: '',
              },
              time_zone: 'Europe/London',
              icao_code: 'EGLL',
              iata_country_code: 'GB',
              iata_code: 'LHR',
              iata_city_code: 'LON',
              city_name: 'London',
            },
            aircraft: {
              name: 'Boeing 777-300',
              id: 'arc_00009VMF8AhXSSRnQDI6HE',
              iata_code: '773',
            },
            origin_terminal: '2',
            operating_carrier_flight_number: '2159',
            operating_carrier: {
              name: 'Duffel Airways',
              id: 'arl_00009VME7D6ivUu8dn35WK',
              iata_code: 'ZZ',
            },
            marketing_carrier_flight_number: '2159',
            marketing_carrier: {
              name: 'Duffel Airways',
              id: 'arl_00009VME7D6ivUu8dn35WK',
              iata_code: 'ZZ',
            },
            destination_terminal: '7',
            departing_at: '2021-10-19T23:00:00',
            arriving_at: '2021-10-20T01:48:00',
          },
        ],
        origin: {
          type: 'airport',
          name: 'Lisbon Portela Airport',
          longitude: -9.135643,
          latitude: 38.778446,
          id: 'arp_lis_pt',
          city: null,
          time_zone: 'Europe/Lisbon',
          icao_code: 'LPPT',
          iata_country_code: 'PT',
          iata_code: 'LIS',
          iata_city_code: 'LIS',
          city_name: 'Lisbon',
        },
        id: 'sli_0000A8oTVsP4HqG5y8KP45',
        duration: 'PT2H48M',
        destination: {
          type: 'airport',
          name: 'Heathrow Airport',
          longitude: -0.458118,
          latitude: 51.470311,
          id: 'arp_lhr_gb',
          city: {
            type: 'city',
            name: 'London',
            longitude: null,
            latitude: null,
            id: 'cit_lon_gb',
            time_zone: null,
            iata_country_code: 'GB',
            iata_code: 'LON',
            iata_city_code: 'LON',
            city_name: '',
          },
          time_zone: 'Europe/London',
          icao_code: 'EGLL',
          iata_country_code: 'GB',
          iata_code: 'LHR',
          iata_city_code: 'LON',
          city_name: 'London',
        },
        conditions: {
          change_before_departure: {
            allowed: true,
            penalty_currency: 'GBP',
            penalty_amount: '470.00',
          },
        },
        origin_type: 'airport',
        fare_brand_name: 'Basic',
        destination_type: 'airport',
      },
    ],
    passengers: [
      {
        type: 'adult',
        id: 'pas_0000A8oTVsAt8YurG9h4xn',
      },
    ],
    owner: {
      name: 'Duffel Airways',
      id: 'arl_00009VME7D6ivUu8dn35WK',
      iata_code: 'ZZ',
    },
    id: 'off_0000A8oTVsP4HqG5y8KP46',
    conditions: {
      refund_before_departure: {
        allowed: false,
      },
      change_before_departure: {
        allowed: true,
        penalty_currency: 'GBP',
        penalty_amount: '470.00',
      },
    },
    updated_at: '2021-06-30T13:45:51.377737Z',
    total_emissions_kg: '863',
    total_currency: 'GBP',
    total_amount: '2748.65',
    tax_currency: 'GBP',
    tax_amount: '419.29',
    payment_requirements: {
      requires_instant_payment: false,
      price_guarantee_expires_at: '2021-07-02T13:45:51Z',
      payment_required_by: '2021-07-03T13:45:51Z',
    },
    passenger_identity_documents_required: false,
    live_mode: false,
    expires_at: '2021-06-30T14:00:51.375243Z',
    created_at: '2021-06-30T13:45:51.377737Z',
    base_currency: 'GBP',
    base_amount: '2329.36',
    available_services: [],
    allowed_passenger_identity_document_types: [],
  };
  const seatMap = [
    {
      id: 'sea_0000A8okiQhItNg1JSmCuW',
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
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '28A',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '28B',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQhes3xbKYwUS1',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xnn',
                        },
                        {
                          id: 'ase_0000A8okiQhes3xbKYwUS1',
                          total_currency: 'GBP',
                          total_amount: '1.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '28C',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQhes3xbKYwUSz',
                          total_currency: 'GBP',
                          total_amount: '20.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '28D',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '28E',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQhes3xbKYwUT4',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '28F',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQhes3xbKYwUT7',
                          total_currency: 'GBP',
                          total_amount: '20.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '28H',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '28J',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '28K',
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
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '29A',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '29B',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQi0qkFBLf6m17',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '29C',
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '29D',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '29E',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '29F',
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '29H',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '29J',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '29K',
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
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '30A',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '30B',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '30C',
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '30D',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '30E',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '30F',
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '30H',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQi0qkFBLf6m1T',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '30J',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQi0qkFBLf6m1W',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '30K',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQiMpQWlMlH3ZK',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
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
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '31A',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '31B',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQiMpQWlMlH3ZQ',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '31C',
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '31D',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQiMpQWlMlH3ZV',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '31E',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '31F',
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '31H',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQiMpQWlMlH3Zb',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '31J',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '31K',
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
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '32A',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQiMpQWlMlH3Zi',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '32B',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '32C',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQiio6oLNrRL7a',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '32D',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '32E',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '32F',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQiio6oLNrRL7g',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '32H',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQiio6oLNrRL7k',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '32J',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQiio6oLNrRL7n',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '32K',
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
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '33A',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '33B',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '33C',
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '33D',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQiio6oLNrRL7x',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '33E',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '33F',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQj4mn5vOxbcfq',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '33H',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQj4mn5vOxbcfu',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '33J',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQj4mn5vOxbcfx',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '33K',
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
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '34A',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '34B',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '34C',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQj4mn5vOxbcg5',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '34D',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '34E',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQjQlTNVQ3luE8',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '34F',
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '34H',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '34J',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '34K',
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
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '35A',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQjQlTNVQ3luEI',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '35B',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '35C',
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '35D',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQjQlTNVQ3luEO',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '35E',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '35F',
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '35H',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQjmk9f5R9wBmP',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '35J',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQjmk9f5R9wBmS',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '35K',
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
                      type: 'lavatory',
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'lavatory',
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'lavatory',
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
                      type: 'exit_row',
                    },
                  ],
                },
                {
                  elements: [],
                },
                {
                  elements: [
                    {
                      type: 'exit_row',
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
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '36A',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQmcZbvjZxGSCT',
                          total_currency: 'GBP',
                          total_amount: '20.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '36B',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQmcZbvjZxGSCW',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '36C',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQmcZbvjZxGSCZ',
                          total_currency: 'GBP',
                          total_amount: '20.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '36D',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '36E',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQmcZbvjZxGSCe',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '36F',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQmcZbvjZxGSCh',
                          total_currency: 'GBP',
                          total_amount: '20.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '36H',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '36J',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQmcZbvjZxGSCm',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '36K',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQmyYIDJb3Qjkg',
                          total_currency: 'GBP',
                          total_amount: '20.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
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
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '37A',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '37B',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQmyYIDJb3Qjkm',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '37C',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQmyYIDJb3Qjkp',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '37D',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '37E',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '37F',
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '37Z',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQmyYIDJb3Qjkx',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xnn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '37J',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '37K',
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
                      type: 'galley',
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'galley',
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'galley',
                    },
                  ],
                },
              ],
            },
          ],
          deck: 0,
          aisles: 2,
          cabin_class: 'first_class',
        },
        {
          // wings: {
          //   last_row_index: 3,
          //   first_row_index: 0,
          // },
          rows: [
            {
              sections: [
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '28A',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '28B',
                      available_services: [
                        // {
                        //   id: 'ase_0000A8okiQhes3xbKYwUS1',
                        //   total_currency: 'GBP',
                        //   total_amount: '1.0',
                        //   passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        // },
                        // {
                        //   id: 'ase_0000A8okiQmyYIDJb3Qjkp',
                        //   total_currency: 'GBP',
                        //   total_amount: '0.0',
                        //   passenger_id: 'pas_0000A8oTVsAt8YurG9h4xnn',
                        // },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '28C',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQhes3xbKYwUSz',
                          total_currency: 'GBP',
                          total_amount: '20.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '28D',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '28E',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQhes3xbKYwUT4',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '28F',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQhes3xbKYwUT7',
                          total_currency: 'GBP',
                          total_amount: '20.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '28H',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '28J',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '28K',
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
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '29A',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '29B',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQi0qkFBLf6m17',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '29C',
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '29D',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '29E',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '29F',
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '29H',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '29J',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '29K',
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
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '30A',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '30B',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '30C',
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '30D',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '30E',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '30F',
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '30H',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQi0qkFBLf6m1T',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '30J',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQi0qkFBLf6m1W',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '30K',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQiMpQWlMlH3ZK',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
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
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '31A',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '31B',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQiMpQWlMlH3ZQ',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '31C',
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '31D',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQiMpQWlMlH3ZV',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '31E',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '31F',
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '31H',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQiMpQWlMlH3Zb',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '31J',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '31K',
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
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '32A',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQiMpQWlMlH3Zi',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '32B',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '32C',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQiio6oLNrRL7a',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '32D',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '32E',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '32F',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQiio6oLNrRL7g',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '32H',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQiio6oLNrRL7k',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '32J',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQiio6oLNrRL7n',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '32K',
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
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '33A',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '33B',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '33C',
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '33D',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQiio6oLNrRL7x',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '33E',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '33F',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQj4mn5vOxbcfq',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '33H',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQj4mn5vOxbcfu',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '33J',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQj4mn5vOxbcfx',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '33K',
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
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '34A',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '34B',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '34C',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQj4mn5vOxbcg5',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '34D',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '34E',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQjQlTNVQ3luE8',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '34F',
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '34H',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '34J',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '34K',
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
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '35A',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQjQlTNVQ3luEI',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '35B',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '35C',
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '35D',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQjQlTNVQ3luEO',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '35E',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '35F',
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '35H',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQjmk9f5R9wBmP',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '35J',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQjmk9f5R9wBmS',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '35K',
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
                      type: 'lavatory',
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'lavatory',
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'lavatory',
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
                      type: 'exit_row',
                    },
                  ],
                },
                {
                  elements: [],
                },
                {
                  elements: [
                    {
                      type: 'exit_row',
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
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '36A',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQmcZbvjZxGSCT',
                          total_currency: 'GBP',
                          total_amount: '20.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '36B',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQmcZbvjZxGSCW',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '36C',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQmcZbvjZxGSCZ',
                          total_currency: 'GBP',
                          total_amount: '20.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '36D',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '36E',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQmcZbvjZxGSCe',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '36F',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQmcZbvjZxGSCh',
                          total_currency: 'GBP',
                          total_amount: '20.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '36H',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '36J',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQmcZbvjZxGSCm',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '36K',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQmyYIDJb3Qjkg',
                          total_currency: 'GBP',
                          total_amount: '20.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
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
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '37A',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '37B',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQmyYIDJb3Qjkm',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '37C',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQmyYIDJb3Qjkp',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },
                      ],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '37D',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '37E',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '37F',
                      available_services: [],
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '37H',
                      available_services: [
                        {
                          id: 'ase_0000A8okiQmyYIDJb3Qjkp',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xn',
                        },

                        {
                          id: 'ase_0000A8okiQmyYIDJb3Qjkp',
                          total_currency: 'GBP',
                          total_amount: '0.0',
                          passenger_id: 'pas_0000A8oTVsAt8YurG9h4xnn',
                        },
                      ],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '37J',
                      available_services: [],
                    },
                    {
                      type: 'seat',
                      name: '',
                      disclosures: [],
                      designator: '37K',
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
                      type: 'galley',
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'galley',
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'galley',
                    },
                  ],
                },
              ],
            },
          ],
          deck: 0,
          aisles: 2,
          cabin_class: 'economy',
        },
      ],
      slice_id: 'sli_0000A8oTVsOiJ9yVx2A7Vp',
      segment_id: 'seg_0000A8oTVsOiJ9yVx2A7Vo',
    },
  ];
  return (
    <SeatSelection
      passengers={passengers}
      offer={offer}
      seatMaps={seatMap}
    ></SeatSelection>
  );
};

export default SeatMap;
