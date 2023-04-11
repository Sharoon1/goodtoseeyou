
//Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it


function funClick () {
 
    
    function getValue (value1) {
        return function getValue2 (value2){
            document.getElementById("showData").innerHTML = value1 + value2; 
        }
        }
        let num1 = getValue(+prompt("Enter Number 1:"))
        num1(+prompt("Enter Number"))
}




// Write a recursive function that searches an array for a specific value. The
//function should return true if the value is found, and false if it is not. You
//can assume that the array is not nested

function funClick2 () {
    let aray = ["sunday","monday","tuesday", "wednesday","thursday","friday","saturday"]
    let inte = prompt("Enter the days Names")
    console.log(aray)
    if(inte === aray[0] || inte === aray[1] || inte === aray[2] || inte === aray[3] || inte === aray[4] || inte === aray[5] || inte === aray[6] ){
       console.log("true")
       document.getElementById("sec").innerText = "True Exist in list (see console)"
    }else{
        console.log("false")
        document.getElementById("sec").innerText = "False not Exist in list (see console)"
    
    }

}





// Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.
function funClick3  () {
    document.getElementById("parag").innerHTML = "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere sed assumenda officia aliquid, ab aliquam nesciunt. Aspernatur odio accusamus, adipisci deserunt modi omnis, natus eos quam sapiente dicta blanditiis! Odit.</p>"
}








//Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item


// let ar = ["That was owsem"];
// let ulf = document.getElementById("detf");
// let bf = document.getElementById("btnf")
// bf.addEventListener("click",function () {
//     ar.forEach(function (e){
//         li = document.createElement('li')
//         li.innerText = e;
//         ulf.innerText = li;
//         ar.append(li)
//     })
// })
function funClick4 () {
    let pmp = prompt("Enter name")
    listNode = document.getElementById("detf"),
    liNode = document.createElement('li'),
    txtNode = document.createTextNode (pmp);
    liNode.appendChild(txtNode)
    listNode.appendChild(liNode)
}







//Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color

let changeColor = document.getElementById("great");
setInterval(
    function(){ 
        changeColor.innerHTML = "<h1>sharoon</h1>"
        let abc1 = Math.round(Math.random() * 1000000);
        changeColor.style.backgroundColor = "#" + abc1;
    }
    ,
100)





//Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

let ara =[];
function dataemploy () {
    let employes = {
        name: "alil",
        fathername:"akber",
        gander:"mael",
        education:"intermediate",
    }
 ara.push(employes);
 console.log(ara);
 let stringfiy = JSON.stringify(ara)
 localStorage.setItem("Employes",stringfiy)


}
















//Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object





let prestudents = localStorage.getItem("students")
let students = prestudents ? JSON.parse(prestudents): [];
function datasudents () {
let std = {name: prompt("Enter name"),
fatherName :prompt("Enter Father Name"),
rolNo : +prompt("Enter rolno"),
className: prompt("Enter Class Name")
    }
    students.push(std);
    console.log(students);

    let stringfiy = JSON.stringify(students);
    localStorage.setItem("students", stringfiy);
}




//Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.
function saveToLocalStorage(obj) {
    // Save each property of the object to localStorage
    for (let prop in obj) {
      localStorage.setItem(prop, obj[prop]);
    }
  
    
    let newObj = {};
  
    
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      newObj[key] = localStorage.getItem(key);
    }
  
   
    return newObj;
  }
  let myObj = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  let retrievedObj = saveToLocalStorage(myObj);
  
  console.log(retrievedObj); 
    