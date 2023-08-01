import { EmployeeInterface } from "./employee-type";
import { LocationInterface } from "./location-type";
import { ShiftInterface } from "./shift-type";
import { TaskInterface } from "./task-type";

interface DetailChecksheetInterface {
    label: number,
    locations: string[];
    tasks: string[];
}

export interface ChecksheetPayloadInterface {
    employee: string | null;
    shift: string | null;
    pictures: File[] | undefined;
    isKnowSupervisor: boolean;
    isKnowClient: boolean;
    isClean: boolean;
    details: DetailChecksheetInterface[];
}

interface ChecksheetDetailInterface {
    id: string;
    createdAt: string;
    updatedAt: string;
    ChecksheetId: string;
}

interface CheckSheetPicture {
    id: string;
    photoUrl: string;
    createdAt: string;
    updatedAt: string;
    ChecksheetId: string;
}

export interface ChecksheetDetailWithLocationAndTaskInterface extends ChecksheetDetailInterface {
    Locations: Pick<LocationInterface, "id" | "name">[];
    Tasks: Pick<TaskInterface, "id" | "name">[];
}

export interface ChecksheetInterface {
    id: string;
    date: string;
    isClean: boolean;
    status: "request" | "approve";
    createdAt: string;
    updatedAt: string;
    ChecksheetDetails: ChecksheetDetailWithLocationAndTaskInterface[],
    Employee: Pick<EmployeeInterface, "id" | "employeeId" | "name">;
    Shift: Pick<ShiftInterface, "id" | "name">;
    ChecksheetPictures: CheckSheetPicture[];
}