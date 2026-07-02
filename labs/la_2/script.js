//function definition
/**
 * A function that calculates the area of a rectangle
 * @param {int} height 
 * @param {int} width 
 * @returns {int} area 
 */
function calculateArea(height, width)
{
    if(height == null)
    {
        console.log("Height is missing")
    }
    else if(width == null)
    {
        console.log("Width is missing")
    }
    else
    {
        let area = height * width
        return area
    }
    //console.log(" function calculateArea")
    //alert("Function called/executed");

    let area = height * width
    return area 
    //console.log(" function calculateArea")
    //alert("Function called/executed");
}
//return a value is NOT printing out
// execution - called 
console.log(calculateArea(20, 3))
console.log(calculateArea(20)) // width is missing
console.log(calculateArea()) // height is missing

//function expression
const add = function(number_1, number_2)
{
    return number_1 + number_2
}
console.log(add(4, 2))

//arrow functions
const multiply = (x, y) => x * y;

console.log(multiply(2, 3));

/** Javascript Arrays - an ordered list of values stored in a single variable. Each value sits at a numbered position called an index */

const scores =[45, 56, 67, 67, 78];
 
//access array_name[index]
//78
console.log(scores[4]);
//67
console.log(scores[2]);
//56
console.log(scores[1]);
//45
console.log(scores[0]);

let student_names =["omondi", 'wafula','kiprotich','nyambane','toipan']

//print out kiprotich on the console window
console.log(student_names[2])

let governors = [
    [47, "Johnson Sakaja"],
    [1, "Abdullswamad Sherrif"],
    [21, "Irungu Kang'ata"]
];
//The governor of county number 21 is Abdullswamad Sherrif
console.log("The governor of county number ",governors[1][0]," is ",governors[1][1]);

//map (perform an operation on each element)
let double = scores.map(x => x * 2);//multiply each score by 2
console.log(double);

//properties
//the class has j students (student_names)
console.log("The class has " , student_names.length, "students");

//kenya has b governors
console.log("Kenya has ", governors.length, "Governors") ;

//for in
for(let index in scores){
    console.log(scores[index]);
}

//for of
for(let score of scores){
    console.log(score);
}

//for each
scores.forEach(function(score){
    console.log("score: " ,score);
});

const student = {
    name: "Alice",
    age: 20,
    passed: "A" ,
    "admission number": 219122,
    course: "BBIT",
    group: "2A",
    attendance: 20,
    addAttendance: function(){
        this.attendance = this.attendance + 1;
    }
};

//acccesing items
//student name 
console.log('My name is',
    student.name, "from ",
    student["admission number"],
    "university"
);

//a method in the object
student.addAttendance();//add attendance by 1
console.log(student.attendance); //21

//array of objects
const bbit_2b_students = [
    {adm: 1219122 , name: "Emma"},
    {adm: 1219122 , name: "Naomi"},
    {adm: 1219122 , name: "Wangui"},
    {adm: 1219122 , name: "Mwangi"}
];

//Print out the names of all students in bbit 2b using a loop
bbit_2b_students.forEach(function(student){
    console.log("student:", student.name);
});

///@TODO : Show looping of objects

//getting the keys of the object as an array
console.log(Object.keys(student));

//getting the values of the object as an array
console.log(Object.values(student));

//getting both keys and values of the object as an array
console.log(Object.entries(student));

/*JavaScript*/
//@TODO: Show looping objects
//getting the keys  of an object as an array
console.log(Object.keys(student)); //["name", "university", "age", "passed", "grade", "admission number", "course", "group", "attendance", "addAttendance"]

//getting the values of an object as an array
console.log(Object.values(student)); //["Alice", "Strathmore University", 20, true, "A", 220109, "BBIT", "2A", 20, ƒ]

//getting both keys and values of an object as an array
console.log(Object.entries(student)); // [["name", "Alice"], ["university", "Strathmore University"], ["age", 20], ["passed", true], ["grade", "A"], ["admission number", 220109], ["course", "BBIT"], ["group", "2A"], ["attendance", 20], ["addAttendance", ƒ]]

/* DOM - Document Object Model (tree-like structure) */
console.log(document );

//Elements on our page (variables)
const heading = document.querySelector("h1");
console.log(heading);



const aboutSection = document.getElementById('about');
console.log(aboutSection);

//all the sections
const allSections = document.querySelectorAll('section');
console.log(allSections);

const allNavLinks = document.querySelectorAll('nav a');
console.log(allNavLinks);




//getting an element
let aboutParagraph = document.querySelector("#about p");
console.log(aboutParagraph);

//change its text
aboutParagraph.textContent = "This text was changed!";
aboutParagraph.style.color = "red";

//setting/setter - updating the page from js
const previewImage = document.querySelector("img");
console.log(previewImage);

//via the DOM
previewImage.setAttribute("title","New Title of Image");
previewImage.setAttribute("alt","New alternate text for the image");
console.log(previewImage.alt);
console.log(previewImage.title);


//Event Handling  - Events (user events - click, key events, scroll)

//get the element of interest - button with an id of changeTextBtn
let changeTextBtn = document.querySelector("#changeTextBtn");
let demoText = document.querySelector("#demoText");

//we are handling the click event for the button with an id of  changeTextBtn
    changeTextBtn.addEventListener("click", function(event){
    console.log("someone clicked me!");
    demoText.textContent = "I have been changed when you clicked";
    demoText.style.color = "orange";
    demoText.style.fontSize =  "16px";
});

//use case 2 
let highlightSectionsBtn = document.querySelector("#highlightSectionsBtn")
highlightSectionsBtn.addEventListener("click", function(event){
//one
    document.querySelector("#about").classList.toggle("section-highlight");

    //highlight all the sections
    //document.querySelectorAll("section").classList.toggle("section-highlight")//

    document.querySelectorAll("section").forEach(function(section){
        section.classList.toggle("section-highlight");
    });
    
});

// get the textbox with id nameInput
document.querySelector("#nameInput").addEventListener("input",function(event){


document.querySelector("#nameOutput").textContent = 
"Hello " +  document.querySelector("#nameInput").value + "!";

    });
//case 4 - character counter
let gtaCommentTextArea = document.querySelector("#commentInput");
let charCountParagraph = document.querySelector("#charCount");

gtaCommentTextArea.addEventListener("input",function(e){
//code goes here aka what will be executed when the
//event hapens

//count the number of characters
let numberOfChars = gtaCommentTextArea.value.lenghth;
//update the paragraph
charCountParagraph.textContent = "Characters : "+numberOfChars;

//prevent the user from typing after 60
if (numberOfChars >= 60){
    e.preventDefault();
    gtaCommentTextArea.readOnly = true;
}else{
    //update the pararaph
    charCountParagraph.textContent = "Characters: " + numberOfChars
    
}
//number of words

});


//case 5 - keyboard events
let keyOutput = document.querySelector("#keyOutput"); 
//the event listener
//when you press a key anywhere on the page cause
//we have attached it to the entire page not just one elemnt
document.addEventListener("keydown",function(event){
    //updating the paragraph
    keyOutputParagraph.textContent = `You pressed: event.key}`;
});

//case 6 - todo list, wish list
let wishListInput = document.querySelector("#wishlistInput");
let wishListButton = document.querySelector("#wishlistForm button");
//<ul></ul>
let wishList = document.querySelector("#wishlistItems");

wishListButton.addEventListener("click",function(event){
    //prevent the form from being submitted
    event.preventDefault();

    //read whatever is in the wishListInput
    let wishListInputValue = wishListInput.value;
    console.log(wishListInputValue);

    //update the list if the wishListInputValue !=null
if(wishListInputValue!= null){
    //console.log(wishlistInputValue);
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.textContent = "Delete";
    li.textContent = wishListInputValue;
    li.textContent = wishListInputValue;

    //we append the list to the UL
    wishListItems.appendChild(li);

    //finally we clear what the user typed in the input field
    wishListInput.value = "";
    }
});

//case 6b - removing items from the wish list   
let deleteButtons = document.querySelectorAll("#wishlistItems button");
//console.log("deleteButtons");

//iterate a.k.a loop through the buttons
deleteButtons.forEach(button =>{
button.addEventListener("click", event => {
    //console.log("delete button clicked!");
    
    //in css
    //how do we get the first list item in an unordered list
    //given that the ul has an id of #wishlistItems
    //#wishlistItems Li
    //#wishlistItems Li
    //#wishlistItems Li

    //querySelector - returns the first matching element
    //let first_li = document.querySelector("#wishlistItems li"); //first one
    //first_li.remove();
    //for one or for many
    //<li><button>Delete</button></li>
    //@TODO , how do you use parent, parentElement

    button.closest("li").remove();
    //button.parentElement.remove();

});
});

//case 7 - submit form / validation
//show that someone filled the form
let submitButton = document.querySelector("#feedbackForm button");
let feedbackForm = document.querySelector("#feedbackForm");
feedbackForm.addEventListener("submit" , event => {
    //prevent the form from being submitted normally
    event.preventDefault();

    //console.log("submit button clicked!");

    //get the values filled in the form
    const name = document.querySelector("#fanName");//name
    const email = document.querySelector("#fanEmail");//email
    const message = document.querySelector("#fanMessage");//message, trxtArea

    feedbackOutput.innerHTML = 
    "<strong>Thank you for your feedback!</strong><br>" +  
    "<p>Name: " + name.value + "</p>" +
    "<p>Email: " + email.value + "</p>" +
    "<p>Message: " + message.value + "</p>";

    //clear the form fields
    name.value = "";
    email.value = "";
    message.value = "";

    //add success message to the output div
    feedbackOutpuut.classList.add("success-text");

});

//forgotten
let resetButton = document.querySelector("#resetBtn");
resetButton.addEventListener("click", event => {
    // undo the changed text
    demoText.textContent = 
    "Click the button to modify this text using JavaScript!";
    demoText.style.color = "black";
    demoText.style.fontSize = "16px";

    //undo the highlighted sections
    //toggle will remove
    document.querySelectorAll("section").forEach(function(section){
        section.classList.remove("section-highlight");
    });
    

});