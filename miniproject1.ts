class Students {
  name: string;
  age: number;
  gender?: string;
  nationality: string;

  constructor(
    name: string,
    age: number,
    nationality: string,
    gender: string = "Female"
  ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
  }

  getNationality() {
    console.log(`The student's nationality is ${this.nationality}`);
  }
}
class Undergraduates extends Students implements Iundergrad {
  batch: number;
  GPA: number;
  constructor(
    name: string,
    age: number,
    nationality: string,
    batch: number,
    gender: string,
    GPA: number
  ) {
    super(name, age, gender, nationality);
    this.batch = batch;
    this.GPA = GPA;
  }
}

interface Iundergrad {
  name: string;
  age: number;
  gender?: string;
  nationality: string;
  batch: number;
  GPA: number;
  getNationality(): void;
}

let underGrad = new Undergraduates("Edward", 22, "Canadian", 1, "Male", 4);
underGrad.getNationality();
