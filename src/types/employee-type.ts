export interface EmployeeInterface {
    id: string;
    employeeId: string;
    name: string;
    inActive: boolean;
    createdBy: string;
    updatedBy: string;
    createdAt: string;
    updatedAt: string;
}

export type CreateEmployeeType = Pick<EmployeeInterface, "employeeId" | "name">;
export type UpdateEmployeeType = Partial<EmployeeInterface>;