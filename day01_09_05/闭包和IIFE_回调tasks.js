let students = [
  { name: "Susan", ID: 1, score: "90", rank: 6 },
  { name: "Jackson", ID: 2, score: "88", rank: 7 },
  { name: "Bob", ID: 3, score: "45", rank: 18 },
  { name: "Jennie", ID: 3, score: "99", rank: 1 },
  { name: "Amy", ID: 3, score: "39", rank: 21 },
  { name: "Lisa", ID: 3, score: "78", rank: 8 },
];

let studentsFullInfo = students.map(student => {
  return student.name + ': 学号' + student.ID + '总分' + student.score + '排名第' + student.rank;
});

console.log(studentsFullInfo);
// ["Susan：学号1总分90排名第6", "Jackson：学号2总分88排名第7"...]

let failList = students.filter(student => {
  return student.score < 60;
});

console.log(failList);
// [{name : "Bob",ID:3,score:'45',rank:18}, {name : "Amy",ID:3,score:'39',rank:21},]

// ----------------------------------------------------------

let number = 42;
function printNumber() {
  console.log(number);
}
function log() {
  let number = 54;
  printNumber();
}
// Prints 42
log();

// -----------------------------------------------------------------

function merge(arr1) {
  // your code here
  return (arr2) => {
    for (let i = 0; i < arr2.length; i++) {
      arr1.push(arr2[i]);
    }
    arr1.sort((a, b) => a - b);
    return arr1;
  }
}

//测试用例
console.log(merge([1, 5, 8])([2, 4])); // =>[1,2,4,5,8]
console.log(merge([6, 9])([1, 2])); // =>[1,2,6,9]