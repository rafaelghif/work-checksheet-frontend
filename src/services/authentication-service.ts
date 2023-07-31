import { AxiosError } from "axios";
import { axiosPost } from "./api-service";
import { ApiResponseErrorInterface } from "../types/api-response-type";
import { AuthenticationPayloadInterface, AuthenticationResponseInterface } from "../types/authentication-type";

const apiName = "/authentication";

export const authentication = async (payload: AuthenticationPayloadInterface): Promise<AuthenticationResponseInterface> => {
    try {
        const response: AuthenticationResponseInterface = await axiosPost(`${apiName}/`, payload);
        return response;
    } catch (error) {
        const err = error as AxiosError<ApiResponseErrorInterface>;
        throw err;
    }
}