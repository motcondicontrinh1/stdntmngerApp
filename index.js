//requirements:
// show current student lists
// add new student
// flow chart: hoat dong cua capp

let readlineSync = require('readline-sync');
let fs = require('fs');

let students = [];
const showMenu = () => {
    console.log(`1. Show all students`);
    console.log(`2. Create a new student`);
    console.log(`3. Save and exit`);
    const option = readlineSync.question('> ');
    console.log(option);
    switch (option) {
        case '1':
            showStudents();    
            showMenu(); 
            break;
        case '2':
            showCreateStudent();
            showMenu();   
            break;
        case '3':
            saveAndExit();     
            break;
        default:
            console.log(`Wrong option.`);
            showMenu();
            break;
    };
}

const loadData = () => {
    let fileContent = fs.readFileSync('./data.json');
    students = JSON.parse(fileContent);
}

const showStudents = () => {
    students.forEach(cur => console.log(cur.name, cur.age));
}

const showCreateStudent = () =>{
    var name = readlineSync.question('Name: ');
    var age = readlineSync.question('age: ');
    var student = {
        name: name,
        age: parseInt(age)
    }
    students.push(student); 
}

const saveAndExit = () => {
    var content = JSON.stringify(students);
    fs.writeFileSync('./data.json', content, {econding: 'utf8'});
};

const main = () => {
    loadData();
    showMenu();
}

main();