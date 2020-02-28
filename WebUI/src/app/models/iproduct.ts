import { ICategory } from './icategory';

export interface IProduct {
    Id: number;
    Name: string;
    Code: string;
    Quantity: number;
    Price: number;
    Image: number;
    CategpryId: number;
    Category: ICategory;
}
