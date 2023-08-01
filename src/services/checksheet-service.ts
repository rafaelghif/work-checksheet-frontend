import { AxiosError } from "axios";
import { ApiResponseInterface, ApiResponseErrorInterface } from "../types/api-response-type";
import { ChecksheetPayloadInterface } from "../types/checksheet-type";
import { axiosPost } from "./api-service";

const apiName = "/checksheet";

export const createChecksheet = async (payload: ChecksheetPayloadInterface): Promise<string> => {
    try {
        const response: ApiResponseInterface<null> = await axiosPost(`${apiName}/create`, payload, true);
        return response.message;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}
