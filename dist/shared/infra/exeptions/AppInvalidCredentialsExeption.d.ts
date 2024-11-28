export declare class AppValidationException extends Error {
}
export declare class AppInvalidCredentialsException extends Error {
    error: string;
    constructor(error: string);
}
