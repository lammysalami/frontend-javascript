// Task 2 - Director/Teacher classes, createEmployee, isDirector, executeWork, teachClass

// Interfaces
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Classes
class Director implements DirectorInterface {
  workFromHome() { return "Working from home"; }
  getCoffeeBreak() { return "Getting a coffee break"; }
  workDirectorTasks() { return "Getting to director tasks"; }
}

class Teacher implements TeacherInterface {
  workFromHome() { return "Cannot work from home"; }
  getCoffeeBreak() { return "Cannot have a break"; }
  workTeacherTasks() { return "Getting to work"; }
}

// createEmployee factory
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// isDirector type predicate
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// executeWork function
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// String literal types and teachClass
type Subjects = "Math" | "History";
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") return "Teaching Math";
  return "Teaching History";
}

// Example usage:
console.log(createEmployee(200).constructor.name); // Teacher
console.log(createEmployee(1000).constructor.name); // Director
executeWork(createEmployee(200)); // Getting to work
executeWork(createEmployee(1000)); // Getting to director tasks
console.log(teachClass("Math"));
console.log(teachClass("History"));
