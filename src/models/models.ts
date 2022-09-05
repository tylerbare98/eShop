export interface productProps {
  id: string, title: string, price: number, rating: number, imgSRC: string
}

export interface checkoutState{
    list: productProps[];
}