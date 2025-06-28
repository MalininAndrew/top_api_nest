declare enum TopLevelCategory {
    Courses = 0,
    Services = 1,
    Books = 2,
    Products = 3
}
declare class HhDataDto {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
}
declare class TopPageAdvantagesDto {
    title: string;
    description: string;
}
export declare class CreateTopPageModelDto {
    firstCategory: TopLevelCategory;
    secondCategory: string;
    alias: string;
    title: string;
    category: string;
    hh?: HhDataDto;
    advantages: TopPageAdvantagesDto[];
    seoText: string;
    tagsTitle: string;
    tags: string[];
}
export {};
