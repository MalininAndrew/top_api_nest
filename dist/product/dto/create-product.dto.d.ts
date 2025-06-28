declare class ProductCharacteristicDto {
    name: string;
    value: string;
}
export declare class CreateProductDTO {
    image: string;
    title: string;
    price: number;
    oldPrice?: number;
    credit: number;
    calculatedRating: number;
    description: string;
    advantanges: string;
    disadvantanges: string;
    categories: string[];
    tags: string[];
    characteristics: ProductCharacteristicDto[];
}
export {};
