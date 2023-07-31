export interface ChecksheetPayloadInterface {
    employee: string | null;
    shift: string | null;
    detail: [{
        label: number,
        locations: string[];
        task: string[];
        picture: File[] | null;
    }];
}