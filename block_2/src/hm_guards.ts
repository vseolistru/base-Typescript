interface Order {
    address: string
}

interface TelephoneOrder extends Order {
    callNumber: string
}

interface InternetOrder extends Order {
    email: string
}

type PossibleOrders = TelephoneOrder | InternetOrder | undefined

function isAnInternetOrder (order:PossibleOrders): order is InternetOrder {
    //return !!order && 'email' in order
    return (order as InternetOrder).email !== undefined
}

function isATelephoneOrder (order:PossibleOrders): order is TelephoneOrder {
    return (order as TelephoneOrder).callNumber !== undefined
}

function makeOrder (order: PossibleOrders) {
    if (isAnInternetOrder(order)) {
        console.log(order.email)
    }
    else if (isATelephoneOrder(order)) {
        console.log(order.callNumber)
    }
}