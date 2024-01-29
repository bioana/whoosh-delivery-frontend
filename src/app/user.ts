export interface User {
    id: number | undefined;
    name: string;
    displayNmae: string;
    mail: string;
    password: string;
    role: UserRole;
}

export enum UserRole {
    Customer,
    Delivery,
    Qa,
    Warehouse
}