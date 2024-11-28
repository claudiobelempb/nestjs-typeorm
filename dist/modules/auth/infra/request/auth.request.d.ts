export declare namespace AuthRequest {
    class Signup {
        private firstName;
        private lastName;
        private email;
        private password;
        private password_confirm;
        constructor(firstName: string, lastName: string, email: string, password: string, password_confirm?: string);
        getFirstName(): string;
        setFirstName(firstName: string): void;
        getLastName(): string;
        setLastName(lastName: string): void;
        getEmail(): string;
        setEmail(email: string): void;
        getPassword(): string;
        setPassword(password: string): void;
        getPasswordConfirm(): string;
        setPasswordConfirm(password_confirm: string): void;
    }
}
