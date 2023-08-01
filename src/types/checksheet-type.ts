interface DetailChecksheetInterface {
    label: number,
    locations: string[];
    task: string[];
}

export interface ChecksheetPayloadInterface {
    employee: string | null;
    shift: string | null;
    picture: File[] | undefined;
    isKnowSupervisor: boolean;
    isKnowClient: boolean;
    isClean: boolean;
    details: DetailChecksheetInterface[];
}