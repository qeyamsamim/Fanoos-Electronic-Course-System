export class Student {
  constructor(
    public firstName: string,
    public lastName: string,
    public gender: string,
    public email: string,
    public contactNum: string,
    public occupation?: string,
    public company?: string,
    public skype?: string,
    public facebook?: string,
    public imageURL?: string,
    public id?: string
  ) {}
}
