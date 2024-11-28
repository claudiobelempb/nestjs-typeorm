export class AppInvalidPasswordExeption extends Error {
  constructor(public message: string) {
    super(message);
    this.name = 'InvalidPasswordExeption';
  }
}
