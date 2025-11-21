// Task 0 - Student interface + render table
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "Nairobi"
};

const student2: Student = {
  firstName: "Mary",
  lastName: "Smith",
  age: 22,
  location: "Lagos"
};

const studentsList: Student[] = [student1, student2];

// Create table
const table = document.createElement("table");
table.setAttribute("border", "1");
const headerRow = document.createElement("tr");
headerRow.innerHTML = "<th>First Name</th><th>Location</th>";
table.appendChild(headerRow);

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;
  const locCell = document.createElement("td");
  locCell.textContent = student.location;
  row.appendChild(nameCell);
  row.appendChild(locCell);
  table.appendChild(row);
});

document.body.appendChild(table);
