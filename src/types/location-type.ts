export interface LocationInterface {
    id: string;
    name: string;
    inActive: boolean;
    createdBy: string;
    updatedBy: string;
    createdAt: string;
    updatedAt: string;
}

export type CreateLocationType = Pick<LocationInterface, "name">;
export type UpdateLocationType = Partial<LocationInterface>;