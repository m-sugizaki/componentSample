export class Member {
  id: number;
  name: string;
  pass: string;

//  constructor(key, name, pass) {
  constructor(id, name, pass) {
    this.id = id;
    this.name = name;
    this.pass = pass;
  }
}
