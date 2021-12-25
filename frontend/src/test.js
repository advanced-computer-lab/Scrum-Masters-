import React from "react";
import EditSeat from "./pages/user/signed/EditSeat";

const test = () => {
  const data = {
    input: {
      noOfChildren: 0,
      noOfAdults: 2,
      departureAirport: "JPN",
      arrivalAirport: "JFK",
      departureDate: "2021-11-01T00:00:00.000Z",
      arrivalDate: "2021-11-03T00:00:00.000Z",
      cabin: "economy",
    },
    oldReservation: {
      _id: "61b0a36e2173f72667abb54a",
      userId: "61aa2eb9d3eee0b9e4921105",
      cabinClass: "economy",
      departingFlightId: {
        economy: {
          noOfSeats: 100,
          childPrice: 750,
          adultPrice: 1000,
          baggageAllowance: 2,
          availableSeats: 74,
        },
        business: {
          noOfSeats: 20,
          childPrice: 1100,
          adultPrice: 1800,
          baggageAllowance: 2,
          availableSeats: 6,
        },
        firstClass: {
          noOfSeats: 10,
          childPrice: 1500,
          adultPrice: 3000,
          baggageAllowance: 3,
          availableSeats: 7,
        },
        _id: "61aa788fd08900b12612c04b",
        flightNumber: 1234,
        departureTime: "22:04",
        arrivalTime: "13:04",
        departureDate: "2021-11-01T00:00:00.000Z",
        arrivalDate: "2021-11-03T00:00:00.000Z",
        departureAirport: "JPN",
        arrivalAirport: "JFK",
        __v: 0,
        noOfSeats: 130,
        availableSeats: 87,
        duration: "15h 0m",
        id: "61aa788fd08900b12612c04b",
      },
      returnFlightId: {
        economy: {
          noOfSeats: 30,
          childPrice: 750,
          adultPrice: 1000,
          baggageAllowance: 2,
          availableSeats: 0,
        },
        business: {
          noOfSeats: 30,
          childPrice: 1100,
          adultPrice: 1800,
          baggageAllowance: 2,
          availableSeats: 16,
        },
        firstClass: {
          noOfSeats: 30,
          childPrice: 1500,
          adultPrice: 3000,
          baggageAllowance: 3,
          availableSeats: 27,
        },
        _id: "61ad2748c1007c4cf2ed1fb2",
        flightNumber: 1233123,
        departureTime: "22:55",
        arrivalTime: "22:56",
        departureDate: "2021-11-03T00:00:00.000Z",
        arrivalDate: "2021-11-03T00:00:00.000Z",
        departureAirport: "JFK",
        arrivalAirport: "JPN",
        __v: 0,
        noOfSeats: 90,
        availableSeats: 43,
        duration: "0h 1m",
        id: "61ad2748c1007c4cf2ed1fb2",
      },
      totalPrice: 4000,
      __v: 0,
      id: "61b0a36e2173f72667abb54a",
    },
    oldDepartingTickets: [
      {
        _id: "61b0a36e2173f72667abb550",
        seatNum: "9E",
        ticketType: "departing",
        passengerType: "adult",
        firstName: "Ahmed",
        lastName: "Serry",
        cabin: "economy",
        flightId: "61aa788fd08900b12612c04b",
        reservationId: "61b0a36e2173f72667abb54a",
        price: 1000,
        passportNumber: "12332",
        __v: 0,
        id: "61b0a36e2173f72667abb550",
      },
    ],
    oldReturningTickets: [
      {
        _id: "61b0a36e2173f72667abb552",
        seatNum: "13F",
        ticketType: "return",
        passengerType: "adult",
        firstName: "Ahmed",
        lastName: "Serry",
        cabin: "economy",
        flightId: "61ad2748c1007c4cf2ed1fb2",
        reservationId: "61b0a36e2173f72667abb54a",
        price: 1000,
        passportNumber: "12332",
        __v: 0,
        id: "61b0a36e2173f72667abb552",
      },
    ],
  };

  const newOne = {
    _id: "61a67c27e60d868d8b93a41a",
    id: "61a67c27e60d868d8b93a41a",
    flightNumber: 123,
    departureTime: "10:31",
    arrivalTime: "00:35",
    departureDate: "2021-11-30T00:00:00.000Z",
    arrivalDate: "2021-11-30T00:00:00.000Z",
    duration: "0h 1m",
    departureAirport: "CAI",
    arrivalAirport: "YUL",
    economy: {
      noOfSeats: 50,
      childPrice: 750,
      adultPrice: 1000,
      availableSeats: 43,
    },
    business: {
      noOfSeats: 10,
      childPrice: 1100,
      adultPrice: 1800,
      availableSeats: 10,
    },
    firstClass: {
      noOfSeats: 10,
      childPrice: 1500,
      adultPrice: 3000,
      baggageAllowance: 3,
      availableSeats: 0,
    },
  };

  const newTwo = {
    id: "61a67c48e60d868d8b93a41c",
    flightNumber: 456,
    departureTime: "18:32",
    arrivalTime: "23:47",
    duration: "0h 1m",
    departureDate: "2021-11-30T00:00:00.000Z",
    arrivalDate: "2021-11-30T00:00:00.000Z",
    departureAirport: "YUL",
    arrivalAirport: "CAI",
    economy: {
      noOfSeats: 50,
      childPrice: 750,
      adultPrice: 1000,
      availableSeats: 43,
    },
    business: {
      noOfSeats: 10,
      childPrice: 1100,
      adultPrice: 1800,
      availableSeats: 10,
    },
    firstClass: {
      noOfSeats: 10,
      childPrice: 1500,
      adultPrice: 3000,
      baggageAllowance: 3,
      availableSeats: 0,
    },
  };

  return (
    //case changing seats of same flights

    // <EditSeat
    //   numberOfPassengers={data.oldDepartingTickets.length}
    //   firstFlight={data.oldReservation.departingFlightId}
    //   secondFlight={data.oldReservation.returnFlightId}
    //   firstTickets={data.oldDepartingTickets}
    //   secondTickets={data.oldReturningTickets}
    //   cabin={data.oldReservation.cabinClass}
    //   edit={true}
    // />

    //case changing one flight (either one)
    // <EditSeat
    //   numberOfPassengers={data.oldDepartingTickets.length}
    //   firstFlight={newOne}
    //   firstTickets={data.oldDepartingTickets}
    //   cabin={data.oldReservation.cabinClass}
    //   edit={false}
    // />

    //case changing one flight (either one) --- new cabin
    <EditSeat
      numberOfPassengers={data.oldDepartingTickets.length}
      firstFlight={newOne}
      firstTickets={data.oldDepartingTickets}
      secondFlight={newTwo}
      cabin={"first"} //new cabin 
      edit={false}
    />
  );
};

export default test;
