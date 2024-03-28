interface Iundergrad {
  name: string;
  age: number;
  gender?: string;
  nationality: string;
  batch: number;
  getNationality(): void;
}

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
  constructor(
    name: string,
    age: number,
    nationality: string,
    batch: number,
    gender: string = "Male"
  ) {
    super(name, age, gender, nationality);
    this.batch = batch;
  }
}

let student1 = new Students("Jaira", 25, "Venezuelan");
let underGrad = new Undergraduates("Edward", 22, "Canadian", 1);
console.log(student1);
console.log(underGrad);
underGrad.getNationality();
