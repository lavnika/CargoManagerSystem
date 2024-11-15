export class CargoFare {

    cargoFareID?:number
    sourceLocation?:string
    destinationLocation?: string
    weight?: number
    volume?: number
    modeOfTransport?: string
    shippingDate?:Date
    arrivalDate?: Date
    fareAmount?:number
    additionalCharges?:number
    totalAmount?:number
    cargoOrderId?:number;
}
