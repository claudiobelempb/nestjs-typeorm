import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export namespace AuthRequest {
  export class Signup {
    @MaxLength(32)
    @IsString()
    @IsNotEmpty()
    private firstName: string;

    @MaxLength(32)
    @IsString()
    @IsNotEmpty()
    private lastName: string;

    @MaxLength(100)
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    private email: string;

    @MaxLength(100)
    @IsString()
    @IsNotEmpty()
    private password: string;

    @MaxLength(100)
    @IsString()
    @IsNotEmpty()
    private password_confirm: string;

    constructor(
      firstName: string,
      lastName: string,
      email: string,
      password: string,
      password_confirm?: string,
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.password_confirm = password_confirm;
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

    public getPassword(): string {
      return this.password;
    }

    public setPassword(password: string): void {
      this.password = password;
    }

    public getPasswordConfirm(): string {
      return this.password_confirm;
    }

    public setPasswordConfirm(password_confirm: string): void {
      this.password_confirm = password_confirm;
    }
  }
}
