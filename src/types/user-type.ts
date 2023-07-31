export type RoleType = "Super User" | "Administrator" | "Client" | "Basic";

export interface UserInterface {
    id: string;
    username: string;
    password: string;
    name: string;
    photoUrl: string;
    role: RoleType;
    inActive: boolean;
    createdBy: string;
    updatedBy: string;
    createdAt: string;
    updatedAt: string;
}