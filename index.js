//requirements:
// show current student lists
// add new student
// flow chart: hoat dong cua capp

let readlineSync = require("readline-sync");
let fs = require("fs");

let students = [];

const deleteAllStudents = () => {
  students.splice(1, students.length - 1);
  const content = JSON.stringify(students);
  fs.writeFileSync("./data.json", content, {
    econding: "utf8"
  });
};

const showMenu = () => {
  console.log(`1. Show all students`);
  console.log(`2. Create a new student`);
  console.log(`3. Save and exit`);
  console.log(`4. Delete all students`);
  const option = readlineSync.question("> ");
  console.log(option);
  switch (option) {
    case "1":
      showStudents();
      showMenu();
      break;
    case "2":
      showCreateStudent();
      showMenu();
      break;
    case "3":
      saveAndExit();
      break;
    case "4":
      deleteAllStudents();
      showMenu();
      break;
    default:
      console.log(`Wrong option.`);
      showMenu();
      break;
  }
};

const loadData = () => {
  let fileContent = fs.readFileSync("./data.json");
  students = JSON.parse(fileContent);
};

const showStudents = () => {
  students.forEach(cur => console.log(cur.name, cur.age));
};

const showCreateStudent = () => {
  var name = readlineSync.question("Name: ");
  var age = readlineSync.question("age: ");
  var student = {
    name: name,
    age: parseInt(age)
  };
  students.push(student);
};

const saveAndExit = () => {
  var content = JSON.stringify(students);
  fs.writeFileSync("./data.json", content, {
    econding: "utf8"
  });
};

const main = () => {
  loadData();
  showMenu();
};

main();
