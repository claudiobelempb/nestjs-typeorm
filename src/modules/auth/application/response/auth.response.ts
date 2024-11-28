export namespace AuthResponse {
  export class Signup {
    private firstName: string;
    private lastName: string;
    private email: string;
    private isActive?: boolean;
    private isAmbassador?: boolean;
    private createdAt?: Date;
    private updatedAt?: Date;

    constructor(
      firstName: string,
      lastName: string,
      email: string,
      isActive: boolean,
      isAmbassador: boolean,
      createdAt: Date,
      updatedAt: Date,
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.isActive = isActive;
      this.isAmbassador = isAmbassador;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }

    public getFirstName(): string {
      return this.firstName;
    }

    public setFirstName(firstName: string): void {
      this.firstName = firstName;
    }

    public getLastName(): string {
      return this.lastName;
    }

    public setLastName(lastName: string): void {
      this.lastName = lastName;
    }

    public getEmail(): string {
      return this.email;
    }

    public setEmail(email: string): void {
      this.email = email;
    }

    public isIsActive(): boolean {
      return this.isActive;
    }

    public setIsActive(isActive?: boolean): void {
      this.isActive = isActive;
    }

    public isIsAmbassador?(): boolean {
      return this.isAmbassador;
    }

    public setIsAmbassador?(isAmbassador?: boolean): void {
      this.isAmbassador = isAmbassador;
    }

    public getCreatedAt?(): Date {
      return this.createdAt;
    }

    public setCreatedAt?(createdAt?: Date): void {
      this.createdAt = createdAt;
    }

    public getUpdatedAt(): Date {
      return this.updatedAt;
    }

    public setUpdatedAt?(updatedAt?: Date): void {
      this.updatedAt = updatedAt;
    }
  }
}
