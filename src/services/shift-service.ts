import { AxiosError } from "axios";
import { axiosGet, axiosPatch, axiosPost } from "./api-service";
import { ApiResponseErrorInterface, ApiResponseInterface } from "../types/api-response-type";
import { CreateShiftType, ShiftInterface, UpdateShiftType } from "../types/shift-type";

const apiName = "/shift";

export const getShifts = async (search: string): Promise<ShiftInterface[]> => {
    try {
        const response: ApiResponseInterface<ShiftInterface[]> = await axiosGet(`${apiName}/?search=${search}`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const getActiveShifts = async (): Promise<ShiftInterface[]> => {
    try {
        const response: ApiResponseInterface<ShiftInterface[]> = await axiosGet(`${apiName}/active`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const createShift = async (payload: CreateShiftType): Promise<string> => {
    try {
        const response: ApiResponseInterface<null> = await axiosPost(`${apiName}/`, payload);
        return response.message;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const updateShift = async (payload: UpdateShiftType): Promise<string> => {
    try {
        const response: ApiResponseInterface<null> = await axiosPatch(`${apiName}/`, payload);
        return response.message;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}