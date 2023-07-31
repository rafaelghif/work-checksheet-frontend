import { UserInterface } from "./user-type";

export interface AuthenticationPayloadInterface {
    username: string;
    password: string;
}

export interface AuthenticationResponseInterface {
    message: string;
    data: {
        token: string;
        user: Pick<UserInterface, "id" | "username" | "name" | "role">
    }
}