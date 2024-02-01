import { EditUserByIdInputDTO } from "../dtos";

export interface UserDB {
    id: string;
    name: string;
    email: string;
    password: string;
    created_at: string
}

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private createdAt: string
    ) { }

    public getId(): string {
        return this.id
    }
    
    public setId(value: string): void {
        this.id = value
    }

    public getName(): string {
        return this.name
    }

    public setName(value: string): void {
        this.name = value
    }

    public getEmail(): string {
        return this.email
    }

    public setEmail(value: string): void {
        this.email = value
    }

    public getPassword(): string {
        return this.password
    }

    public setPassword(value: string): void {
        this.password = value
    }

    public getCreatedAt(): string {
        return this.createdAt
    }

    public setCreatedAt(value: string): void {
        this.createdAt = value
    }

    public createDBModel(): UserDB{
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password,
            created_at: this.createdAt
        }
    }

    public editDBModel(input: EditUserByIdInputDTO): UserDB{
        return {
            id: this.id,
            name: input.name || this.name,
            email: input.email || this.email,
            password: input.password || this.password,
            created_at: this.createdAt
        }
    }

}