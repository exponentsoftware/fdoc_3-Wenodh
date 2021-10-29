/*     question             */
// ## DAY 3
// 1. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destruction the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable.
//    ```js
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
let [name, skills, scores, jsScore, reactScore] = [
    student[0],
    student[1],
    student[1],
    student[2][2],
    student[2][3],
];
console.log(name, skills, scores);
console.log(jsScore, reactScore);

//    ```
// 	Write a function called convertArrayToObject which can convert the array to a structured object.

// 	```js
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]],
];
function convertArrayToObject(students) {
    let result = [];
    students.forEach((it) =>
        result.push({
            name: it[0],
            skills: it[1],
            scores: it[2],
        })
    );
    return result;
}
console.log(convertArrayToObject(students));
// 			[
// 				{
// 					name: 'David',
// 					skills: ['HTM','CSS','JS','React'],
// 					scores: [98,85,90,95]
// 				},
// 				{
// 					name: 'John',
// 					skills: ['HTM','CSS','JS','React'],
// 					scores: [85, 80,85,80]
// 				}
// 			]
// 	```
// 	Copy the student object to newStudent without mutating the original object. In the new object add the following ?

// 	1. Add Bootstrap with level 8 to the front end skill sets
// 	2. Add Express with level 9 to the back end skill sets
// 	3. Add SQL with level 8 to the data base skill sets
// 	4. Add SQL without level to the data science skill sets

// 	```js
const student2 = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 },
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [{ skill: 'MongoDB', level: 7.5 }],
        dataScience: ['Python', 'R', 'D3.js'],
    },
};

let newStudent = student2;
newStudent.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 });
newStudent.skills.backEnd.push({ skill: 'Express', level: 9 });
newStudent.skills.dataBase.push({ skill: 'SQL', level: 8 });
newStudent.skills.dataScience.push('SQL');
console.log(JSON.stringify(newStudent));
// 	```

// 	The copied object output should look like this:

// 	```js
// 			{
// 			name: 'David',
// 			age: 25,
// 			skills: {
// 				frontEnd: [
// 					{skill: 'HTML',level: 10},
// 					{skill: 'CSS',level: 8},
// 					{skill: 'JS',level: 8},
// 					{skill: 'React',level: 9},
// 					{skill: 'BootStrap',level: 8}
// 				],
// 				backEnd: [
// 					{skill: 'Node',level: 7},
// 					{skill: 'GraphQL',level: 8},
// 					{skill: 'Express',level: 9}
// 				],
// 				dataBase: [
// 					{ skill: 'MongoDB',level: 7.5},
// 					{ skill: 'SQL',level: 8}
// 				],
// 				dataScience: ['Python','R','D3.js','SQL']
// 			}
// 		}

// 	```
// 	Use the student object to solve the following questions:
//    a. Find the length of student object keys
console.log(Object.keys(student2).length);
//    b. Find the length of the student object values
console.log(Object.values(student2).length);
//    c. Find the length of skills object keys
console.log(Object.keys(student2.skills).length);
//    d. check if the student object has graphicDesign property
console.log(student2.hasOwnProperty('graphicDesign'));
//    e. Iterate the keys of the student object
let keys = Object.keys(student2).forEach((it) => console.log(it));
