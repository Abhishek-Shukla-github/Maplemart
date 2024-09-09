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