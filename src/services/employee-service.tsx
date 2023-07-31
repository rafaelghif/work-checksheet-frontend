import { AxiosError } from "axios";
import { axiosGet, axiosPatch, axiosPost } from "./api-service";
import { ApiResponseErrorInterface, ApiResponseInterface } from "../types/api-response-type";
import { CreateEmployeeType, EmployeeInterface, UpdateEmployeeType } from "../types/employee-type";

const apiName = "/employee";

export const getEmployees = async (search: string): Promise<EmployeeInterface[]> => {
    try {
        const response: ApiResponseInterface<EmployeeInterface[]> = await axiosGet(`${apiName}/?search=${search}`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const createEmployee = async (payload: CreateEmployeeType): Promise<string> => {
    try {
        const response: ApiResponseInterface<null> = await axiosPost(`${apiName}/`, payload);
        return response.message;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const updateEmployee = async (payload: UpdateEmployeeType): Promise<string> => {
    try {
        const response: ApiResponseInterface<null> = await axiosPatch(`${apiName}/`, payload);
        return response.message;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}