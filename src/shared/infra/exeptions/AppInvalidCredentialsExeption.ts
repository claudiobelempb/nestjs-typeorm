export class AppValidationException extends Error {}

export class AppInvalidCredentialsException extends Error {
  constructor(public error: string) {
    super();
    this.name = 'InvalidCredentialsExeption';
  }
}
