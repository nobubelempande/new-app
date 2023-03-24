export class Flight {
    constructor(flightNumber, origin, destination, departureTime, arrivalTime, seatsAvailable, seatCost) {
        this.flightNumber = flightNumber;
        this.origin = origin;
        this.destination = destination;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.seatsAvailable = seatsAvailable;
        this.seatCost = seatCost;
    }
}

// export const Flight = (flightNumber, origin, destination, departureTime, arrivalTime, seatsAvailable, seatCost) => {
//     return {
//         flightNumber : flightNumber,
//         origin : origin,
//         destination : destination,
//         departureTime : departureTime,
//         arrivalTime : arrivalTime,
//         seatsAvailable : seatsAvailable,
//         seatCost : seatCost
//     }
// }