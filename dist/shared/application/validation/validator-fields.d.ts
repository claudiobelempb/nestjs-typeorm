import { FieldErrors, ValidatorFieldsInterface } from './validator.interface';
export declare abstract class ClassValidatorFields<T> implements ValidatorFieldsInterface<T> {
    errors: FieldErrors;
    validatedData: T;
    validate(data: any): boolean;
}
