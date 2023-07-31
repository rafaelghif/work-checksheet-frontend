export interface TaskInterface {
    id: string;
    name: string;
    inActive: boolean;
    createdBy: string;
    updatedBy: string;
    createdAt: string;
    updatedAt: string;
}

export type CreateTaskType = Pick<TaskInterface, "name">;
export type UpdateTaskType = Partial<TaskInterface>;