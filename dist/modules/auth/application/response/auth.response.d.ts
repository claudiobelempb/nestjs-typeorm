export declare namespace AuthResponse {
    class Signup {
        private firstName;
        private lastName;
        private email;
        private isActive?;
        private isAmbassador?;
        private createdAt?;
        private updatedAt?;
        constructor(firstName: string, lastName: string, email: string, isActive: boolean, isAmbassador: boolean, createdAt: Date, updatedAt: Date);
        getFirstName(): string;
        setFirstName(firstName: string): void;
        getLastName(): string;
        setLastName(lastName: string): void;
        getEmail(): string;
        setEmail(email: string): void;
        isIsActive(): boolean;
        setIsActive(isActive?: boolean): void;
        isIsAmbassador?(): boolean;
        setIsAmbassador?(isAmbassador?: boolean): void;
        getCreatedAt?(): Date;
        setCreatedAt?(createdAt?: Date): void;
        getUpdatedAt(): Date;
        setUpdatedAt?(updatedAt?: Date): void;
    }
}
