export class User {
  private days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  private months = [
    "Jan",
    "Fev",
    "Mar",
    "Avr",
    "Mai",
    "Juin",
    "Juil",
    "Aout",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  private name: string;
  private firstname: string;
  private email: string;
  private created_at?: number;
  private updated_at?: number;

  constructor(
    name: string,
    firstname: string,
    email: string,
    created_at: number = 0,
    updated_at: number = 0
  ) {
    this.name = name;
    this.firstname = firstname;
    this.email = email;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  getName() {
    return this.name;
  }

  getFirstname() {
    return this.firstname;
  }

  getEmail() {
    return this.email;
  }

  getCreatedAt() {
    return this.created_at;
  }

  getCreatedAtString() {
    if (this.created_at && this.created_at !== 0) {
      let date = new Date(this.created_at);
      return `${this.days[date.getDay()]} ${date.getDate()} ${
        this.months[date.getMonth()]
      } ${date.getFullYear()}`;
    }
    return "Not Assign";
  }

  getUpdateAt() {
    return this.updated_at;
  }

  getUpdateAtString() {
    if (this.updated_at && this.updated_at !== 0) {
      let date = new Date(this.updated_at);
      return `${this.days[date.getDay()]} ${date.getDate()} ${
        this.months[date.getMonth()]
      } ${date.getFullYear()}`;
    }
    return "Not Assign";
  }

  setName(val: string) {
    this.name = val;
  }

  setFirstname(val: string) {
    this.firstname = val;
  }

  setEmail(val: string) {
    this.email = val;
  }

  setCreatedAt(val: number) {
    this.created_at = val;
  }

  setUpdateAt(val: number) {
    this.updated_at = val;
  }
}
