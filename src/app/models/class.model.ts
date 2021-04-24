export class OurClass {
  constructor(
    public className: string,
    public instructor: string,
    public fee: string,
    public topics: string [],
    public startDate: Date,
    public schedule: string [],
    public startTime: string,
    public endTime: string,
    public description: string,
    public imageURL: string,
    public dateAdded: Date,
    public id?: string
  ) {}
}
