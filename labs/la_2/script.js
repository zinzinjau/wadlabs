/**let age =20;
//var course ="BBIT";
//const university ="Strathmore University";
//an external js file (.js)(.css)(.html)
// variables and types
// scope (const & let are block scoped, )var is global
//let age =22;
//ar course ="BCIS";
//const university ="Strathmore University";

//age=40;
//course="BBA";

//if(true){
    //let time ="1:30";
//var day ="4th";
    //const year =2026;
}
//console.log(time);
console.log(day);
console.log(year);*/

/** @param{int} length
*@param{int}width
*@returns area 
 */  


// function definition
function calculateArea(length, width){
    if(length ==null){
        console.log('height missing!')
    }else if (width == null){
        console.log('width missing!')
    } else{ 
        let area = length * width;
    return area;

    }
    
    //console.log("Function calculateArea ");
    //alert("Function called/ executed");
}
// returning a value is not printing out
// function call executtion called
console.log(calculateArea(20,3));// a function call
console.log(calculateArea(20));
console.log(calculateArea());
// function expression
const add = function( number1, number2){
    return number1 + number2;
}

console.log(add(4,2));

// arrow function
const multiply = (x, y) => x * y;
console.log(multiply(4,2));

/** Javascript arrays (related) */
const scores = [45, 56 , 67, 67, 78];

//access
//78 
console.log (scores[5])
//67
console.log (scores[3])

//45
console.log (scores[1])

let student_names = ["omondi","wafula", "kiporticj", "nyamebane","toipan",]

console.log (student_names[3])

let governers = [
    [47, "johnson sakaja"],
    [1, "abdullswamad sherrif"],
   // {21, "irungu kangata"}
]

// governer of county one is abdull blah blah

console.log("the govonor of county number", governers[1][0], "is" , governers[1] [1])

//map (perform an operation on each element)

let double = scores.map(x => x*2) //multiply each score by 2
console.log(double)

//properties
//the class has J students

console.log("the class has", student_names, length, "students");

//kenya has b governers

console.log("kenya has", governers,length, "governers")

//for

for (let index in scores) {
    console.log(scores[index])
}

//for of
for (let score of scores) {
    console.log(scores)
}

//for each
scores.forEach(function(score){
    console.log("score ;", score)
})

const student = {
    name : 'Alice',
    age : 20 ,
    passed : true,
    grade : "A",
    "admission number" : 183380,
    coure : "BBIT",
    group : "2A",
    attendance : 20,
    attendance : function() {
        this.attendance += 1 ;
    }
};

//accessing items
//student name
console.log('my name is', student.name,'from',student["admission number"], "university"
)

//methos in the object

student.addAttendance(); //add attendance  by 1
console.log(student.attendance)

//array of objects



let bbit_2b = [
 {adm: 223251 , name : "blessing"},
 {adm: 192997 , name :"blessing"},
 {adm: 222024 , name : "blessing"},
  {adm: 220941 , name : "blessing"},
 
]
//@TO DO SHOW LOOPING OF OBJECTS
//print out all names of all students in bbit 2b using a loop

//bbit_2b_students.forEach(function(student){
  //  console.log(student);
//})
//getting the keys of an object
//console.log(students.keys().toArray())

//getting the keys of an values
//console.log(students.values().toArray())

//getting the keys of an entries
//console.log(students.entries().toArray())