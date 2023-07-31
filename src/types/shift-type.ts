export interface ShiftInterface {
    id: string;
    name: string;
    inActive: boolean;
    createdBy: string;
    updatedBy: string;
    createdAt: string;
    updatedAt: string;
}

export type CreateShiftType = Pick<ShiftInterface, "name">;
export type UpdateShiftType = Partial<ShiftInterface>;