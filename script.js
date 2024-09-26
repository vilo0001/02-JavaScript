// 1 - Student Grades Analysis
console.log("1 - Student Grades Analysis");
let grades = [84,95,64,86,90,92,75,99]
console.log(`There are ${grades.length} grades in the class.`);
console.log(" ");

console.log("Grades:");

function gradeToLetter (grade) {
    let letterGrade;
    if(grade < 60) letterGrade = "F";
    else if(grade < 70) letterGrade = "D";
    else if(grade < 80) letterGrade = "C";
    else if(grade < 90) letterGrade = "B";
    else letterGrade = "A";
    return letterGrade;
}

for(let i=0; i<grades.length; i++) {
    const grade = grades[i];
    console.log(`${grade}: ${gradeToLetter(grade)}`);
}
console.log(" ");

let gradeSum = 0;
for(let i=0; i<grades.length; i++) {
    gradeSum += grades[i];
}
const averageGrade = gradeSum/grades.length;

let classPerformance;
if(averageGrade < 70) classPerformance = "Needs Improvement";
else if(averageGrade < 80) classPerformance = "Satisfactory";
else if(averageGrade < 90) classPerformance = "Good";
else classPerformance = "Excellent";

console.log(`Overall Class Performance: ${classPerformance}`);
console.log(" ");

let maxGrade;
for(let i=0; i<grades.length; i++) {
    if(i===0) maxGrade = grades[i];
    else if(grades[i] > maxGrade) maxGrade = grades[i];
}
console.log(`Highest Grade: ${maxGrade} ${gradeToLetter(maxGrade)}`);
let minGrade;
for(let i=0; i<grades.length; i++) {
    if(i===0) minGrade = grades[i];
    else if(grades[i] < minGrade) minGrade = grades[i];
}
console.log(`Lowest Grade: ${minGrade} ${gradeToLetter(minGrade)}`);
console.log(`Average Grade: ${averageGrade.toFixed(1)}`);
console.log(" ");
console.log(" ");



// Treasure Hunter
console.log("2 - Treasure Hunter");
const island = ['T', '-', '-', 'T', '-'];

console.log(`There are ${island.length} moves in the island.`);

let treasureCount = 0;
for(let i=0; i<island.length; i++) {
    if(island[i] === "T") {
        console.log(`Treasure found at move ${i+1} :)`);
        treasureCount++;
    }
    else console.log("No treasure found :(");
}
console.log(" ");
console.log(`There were ${treasureCount} treasures in the island.`);
console.log(" ");
console.log(" ");



// Startup Name Generator
console.log("3 - Startup Name Generator");

function randomRange (min, max) { // Return random integer between min and max value.
    return Math.floor(Math.random()*(max-min+1))+min;
}

function getStartupName() {
    const firstWords = ["Tech", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital"];
    const secondWords = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path"];

    const randomNumber_one = randomRange(0,firstWords.length-1); // "-1" to avoid out of bounds.
    const randomNumber_two = randomRange(0,secondWords.length-1);

    const startupName = `${firstWords[randomNumber_one]} ${secondWords[randomNumber_two]}`;

    console.log(`Your startup name could be ${startupName}`);
}

getStartupName();