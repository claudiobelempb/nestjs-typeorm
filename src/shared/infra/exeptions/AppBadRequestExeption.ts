export class AppBadRequestExeption extends Error {
  constructor(public message: string) {
    super(message);
    this.name = 'BadRequestExeption';
  }
}
