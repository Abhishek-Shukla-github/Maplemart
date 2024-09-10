export type Product = {
    _id: string,
    name: string,
    image: string,
    description: string,
    brand: string,
    category: string,
    price: number,
    countInStock: number,
    rating: number,
    numReviews: number,
}

export type Rating = {
    value: number,
    color?: string,
    text?: string,
}

export type CartItem = Product  & {
    qty: number
}



export type Cart = {
    cartItems: CartItem[],
    itemsPrice: string
    shippingPrice: string
    taxPrice: string
    totalPrice: string
    shippingAddress: {
        address: string;
        city: string;
        postalCode: string;
        country: string;
    }
    paymentMethod: string
}

export type User = {
    _id: string,
    name: string,
    email: string,
    password: string,
    isAdmin: boolean,
    __v: number,
    createdAt: string,
    updatedAt: string
}

export type Review = {
    name: string,
    rating: number,
    comment: string,
    user: string,
    _id: string,
    createdAt: string,
    updatedAt: string
}

export type ReduxStoreType = {
    cart: Cart,
    auth: {
        userInfo: User
    }
}

export type ErrorType = {
    status: number,
    data: {
        message: string,
        stack: string
    }
}

export type OrderItemType = {
    name: string;
    qty: number;
    image: string;
    price: number;
    product: string;
    _id: string;
};

export type OrderType = {
    shippingAddress: {
        address: string;
        city: string;
        postalCode: string;
        country: string;
    };
    _id: string;
    user: {
        _id: string;
        name: string;
        email: string;
    };
    orderItems: OrderItemType[];
    paymentMethod: string;
    itemsPrice: number;
    taxPrice: number;
    shippingPrice: number;
    totalPrice: number;
    isPaid: boolean;
    isDelivered: boolean;
    createdAt: string; // ISO 8601 date-time format
    updatedAt: string; // ISO 8601 date-time format
    deliveredAt: string;
    paidAt: string;
    __v: number;
};
