import { AxiosError } from "axios";
import { ApiResponseInterface, ApiResponseErrorInterface } from "../types/api-response-type";
import { ChecksheetInterface, ChecksheetPayloadInterface } from "../types/checksheet-type";
import { axiosGet, axiosPost } from "./api-service";

const apiName = "/checksheet";

export const getChecksheet = async (year: string, month: string, role: string, search: string): Promise<ChecksheetInterface[]> => {
    try {
        const response: ApiResponseInterface<ChecksheetInterface[]> = await axiosGet(`${apiName}/get/year/${year}/month/${month}/role/${role}/?search=${search}`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}


export const getYearChecksheet = async (): Promise<string[]> => {
    try {
        const response: ApiResponseInterface<string[]> = await axiosGet(`${apiName}/year`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const getMonthChecksheet = async (): Promise<string[]> => {
    try {
        const response: ApiResponseInterface<string[]> = await axiosGet(`${apiName}/month`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const createChecksheet = async (payload: ChecksheetPayloadInterface): Promise<string> => {
    try {
        const response: ApiResponseInterface<null> = await axiosPost(`${apiName}/create`, payload, true);
        return response.message;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const approveChecksheet = async (payload: Pick<ChecksheetInterface, "id">): Promise<string> => {
    try {
        const response: ApiResponseInterface<null> = await axiosPost(`${apiName}/approve`, payload);
        return response.message;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

