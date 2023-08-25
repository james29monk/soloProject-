// Problem 1
// Harvest season is soon approaching in the Atlanta area and some of the local grocers are
// trying to decide which fruits are going to be marketed the heaviest in the upcoming sales
// paper. It has been decided that fruits that begin with a vowel should be prioritized for
// customer consumption. Given the following list crops, return a new list that only contains
// crops that begin with a vowel






let crops = [
"Apple", "Banana", "Orange", "Grape", "Watermelon", "Strawberry",
"Mango", "Pineapple", "Kiwi", "Blueberry", "Peach", "Pear",
"Cherry", "Plum", "Raspberry", "Blackberry", "Lemon", "Lime",
"Coconut", "Pomegranate", "Cranberry", "Grapefruit", "Fig", "Papaya",
"Guava", "Melon", "Apricot", "Nectarine", "Kiwi", "Passion Fruit",
"Lychee", "Dragon Fruit", "Avocado", "Mango", "Star Fruit", "Persimmon",
"Cantaloupe", "Honeydew", "Clementine", "Tangerine", "Kiwifruit", "Rambutan",
"Mulberry", "Date", "Elderberry", "Ackee", "Durian", "Plantain", "Quince",
"Soursop", "Feijoa"
]

// First i need to create a variable for an array "vowelsArr" to compare the crops array to 

let vowelArr = ['A','E','I','O','U']
//Then i create a function so i can just plug in any array
function filterCrops(Arr) {
  // I create an empty array to return my filtered crops 
    const filteredCrops = [];
    //I us a for loop to loop through any array i put in the function
    for (let i = 0; i < Arr.length; i++) {
      // I use includes() to check my arr for the requirements
      // if the vowelArr = Arr[i] at postion [0]of that element then return true 
      // then it pushes that element into the empty array
        if (vowelArr.includes(Arr[i][0])) {
            filteredCrops.push(Arr[i]);
        }
    }
    console.log(filteredCrops)
}
filterCrops(crops)






// Problem 2:
// Write a JavaScript program to manage student records. The program should allow you to:
// Add a new student with their name, ID, and grades.
// Calculate and display the average grade of a student.
// Find and display the student with the highest average grade.
// List all students and their information.



// For this problem i was able to add a new student 
//and caculate all the avereges but 
//i couldn't find a way to get take the highest averege and display the student 

 const students = [
{name: "Alice Smith",ID: "001",grades: {math: 85,science: 92,history: 78,english: 88},},
{name: "Bob Johnson",ID: "002",grades: {math: 78,science: 84,history: 92,english: 76},},
{name: "Eva Williams",ID: "003",grades: {math: 95,science: 89,history: 70,english: 91},}
];


//First i had to make a function that took 3 parameters of for each part of the object i wanted to plug in 
function addStudent(name, ID, grades) {
    const newStudent = {
      name: name,
      ID: ID,
      grades: grades,
    };
    //Then i wanted to push the new object into the students array 
    students.push(newStudent);
}
addStudent("david","004",{math: 100,science: 90,history: 100,english: 100})

//This function logs the average grade 
function average(){
let aveArr = []
for (let i=0;i<students.length;i++) {
    let sumGrades = students[i].grades.math+students[i].grades.science+students[i].grades.history+students[i].grades.english
    let newArr = sumGrades/4
    aveArr.push(newArr)
} 
return aveArr
}
console.log(average())



//This function just list out all the students in the sundents array 
  function listAllStudents() {
    // I used a for of loop so that i can loop through students array and a assign the value to the students variable
    for (const student of students) {
      console.log(`Name: ${student.name}`);
      console.log(`ID: ${student.ID}`);
      console.log(`Grades:`, student.grades);

    }
  }
  

  listAllStudents();








// Problem 3:
// Write a JavaScript function that generates the Fibonacci sequence up to a specified number
// of terms. The function should take the number of terms as input and return an array of the
// Fibonacci sequence.





function fibonacciSequence(numTerms) {
  //If numTerms is <= 0 then a empty array is returned 
  if (numTerms <= 0) {
    return [];
  } else if (numTerms === 1) {
    //If numTerms is equal to 1 then it returns an array with 1 element 
    return [0];
  } else if (numTerms === 2) {
  // And so on 
    return [0, 1]
  }

  const sequence = [0, 1];
// The for loop is to end the fibSequence when i is less the numTerms
  for (let i = 2; i < numTerms; i++) {
    //This line is what creates the Sequence (take the term before and add the term behind it then push it to the next term)
    const nextTerm = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextTerm)
  }
//Then return sequence to the fibonacci function 
  return sequence
}

const numTerms = 20
const fibonacciSequences = fibonacciSequence(numTerms)
console.log(fibonacciSequences)