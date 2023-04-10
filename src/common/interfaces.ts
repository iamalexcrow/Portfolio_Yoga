export interface Review {
  name: string;
  date: string;
  image: string;
  review: string;
  links: Array<any>;
}

export interface IPriceCard {
  title: string;
  description: string;
  price: string[];
}

export interface StringState {
  value: string;
  error: boolean;
}
