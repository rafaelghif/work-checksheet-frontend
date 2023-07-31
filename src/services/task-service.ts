import { AxiosError } from "axios";
import { axiosGet, axiosPatch, axiosPost } from "./api-service";
import { ApiResponseErrorInterface, ApiResponseInterface } from "../types/api-response-type";
import { CreateTaskType, TaskInterface, UpdateTaskType } from "../types/task-type";

const apiName = "/task";

export const getTasks = async (search: string): Promise<TaskInterface[]> => {
    try {
        const response: ApiResponseInterface<TaskInterface[]> = await axiosGet(`${apiName}/?search=${search}`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const getActiveTasks = async (): Promise<TaskInterface[]> => {
    try {
        const response: ApiResponseInterface<TaskInterface[]> = await axiosGet(`${apiName}/active`);
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const createTask = async (payload: CreateTaskType): Promise<string> => {
    try {
        const response: ApiResponseInterface<null> = await axiosPost(`${apiName}/`, payload);
        return response.message;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}

export const updateTask = async (payload: UpdateTaskType): Promise<string> => {
    try {
        const response: ApiResponseInterface<null> = await axiosPatch(`${apiName}/`, payload);
        return response.message;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}