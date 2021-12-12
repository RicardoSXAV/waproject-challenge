export interface IProduct {
  id?: number;
  name: string;
  image?: string;
  price: number;
  description: string;

  createdDate?: Date;
  updatedDate?: Date;
}
