type UserRequestProps = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirm: string;
};
export declare namespace UserRequest {
    class Create implements Omit<UserRequestProps, 'id'> {
        readonly firstName: string;
        readonly lastName: string;
        readonly email: string;
        readonly password: string;
        readonly passwordConfirm: string;
    }
    class Update implements Omit<UserRequestProps, 'id' | 'firstName' | 'lastName' | 'email' | 'password' | 'passwordConfirm'> {
        readonly firstName: string;
        readonly lastName: string;
    }
    class UpdatePassword implements Omit<UserRequestProps, 'id' | 'firstName' | 'lastName' | 'email'> {
        passwordConfirm: string;
        readonly password: string;
        readonly oldPassword: string;
    }
}
export {};
