interface OrderInfo{

    readonly id : string,
    user:string,
    city:string,
    state:string,
    country:string,
    status:boolean
}

// Pick<Type, Keys>
type ShippingInfo = Pick<OrderInfo,"user"|"city"|"state">