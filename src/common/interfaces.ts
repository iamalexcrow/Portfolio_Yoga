export interface Review {
  name: string;
  date: string;
  image: string;
  review: string;
  svg: Array<any>;
  link: string;
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
