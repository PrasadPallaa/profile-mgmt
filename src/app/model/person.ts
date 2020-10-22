export interface Person {
    readonly id?: number;
    readonly firstName: string;
    readonly lastName: string;
    readonly gender: string;
    readonly email: string;
    readonly phoneNumber: number;
    readonly createdAt?: Date;
    readonly referredBy: string;
    readonly referrelCode: string;
    readonly countryCode: string;
    readonly emailVerfiyStatus?: boolean;
    readonly phoneVerfiyStatus?: boolean;
}
