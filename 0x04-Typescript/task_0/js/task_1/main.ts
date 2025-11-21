// Task 1 - Teacher interface, Directors, printTeacher, StudentClass

// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allow additional properties like contract
}

// Example teacher object with extra property contract
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false
};
console.log(teacher3);

// Directors extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// printTeacher function + interface
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// StudentClass with interfaces
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// quick usage
const s = new StudentClass("Alice", "Johnson");
console.log(s.displayName());
console.log(s.workOnHomework());
