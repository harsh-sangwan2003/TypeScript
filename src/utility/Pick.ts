interface OrderInfo{

    readonly id : string,
    user:string,
    city:string,
    state:string,
    country:string,
    status:boolean
}

type ShippingInfo = Pick<OrderInfo,"user"|"city"|"state">