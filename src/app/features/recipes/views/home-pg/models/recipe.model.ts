export interface Recipe {
  id: number;
  image: string;
  name: string;
  time: string;
  portion: number;
  level: string;
  ingredients: string[];
  directions: string[];
  vegie: boolean;
}
