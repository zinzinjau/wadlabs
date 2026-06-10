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