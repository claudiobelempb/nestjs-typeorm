import { FieldErrors } from 'src/shared/application/validation/validator.interface';
export declare class AppValidationException extends Error {
    error: FieldErrors;
    constructor(error: FieldErrors);
}
