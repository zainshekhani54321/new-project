//////////////........Assignment	#	21-25.............//////////////////////////
//////////////////.....JAVASCRIPT................../////////////////








// Q1

// var first_name = prompt("enter first name")
// var last_name = prompt("enter last name ")
// var full_name = first_name + "  " + last_name + "    " ;
// document.write( "hellow : " +  full_name )



// Q2
//  var favmob = prompt("enter favourite mobile model")

//     document.write(my favourite phone is : ${favmob} <br>  length of string ${favmob.length})
 

// Q3

// var num = ( "pakistani")

//   document.write(`string : ${num} <br> index of 'n' : ${num.indexOf("n")}  `)



// Q4


// var num = ( "hello world")

//   document.write(`string : ${num} <br> last  index of 'l' : ${num.lastIndexOf("l")}  `)




// Q5



// var num = ( "pakistani")

//   document.write(`string : ${num} <br> character at  index 3 : ${num.charAt("3")}  `)


// Q6

// Write a program that takes two user inputs for first and last
// name using prompt and merge them in a new variable titled
// fullName. Greet the user using his full name.

// using string concat() method.


// var first_name = prompt("enter first name")
// var last_name = prompt("enter last name ")
// var full_name = first_name.concat(" "+ last_name )
// document.write( "hellow : " +  full_name )


// Q7

// var city = ("Hyderabad")
// document.write(`City : ${city} <br> After Replacement : ${city.replace("Hyder", "Islam" )} `)

// Q8


// var message   = ("ali and sami are best firend . they play circket and football together")
// document.write(`Message :${message} <br>  After Replacement : ${message.replace(/and/g, "&" )} `)



// Q9
// var a =("472")
// b = Number(a)
// document.write(value of : ${a} <br> Type : ${typeof(a)} <br> Value of ${a} <br> Type : ${typeof (b)})


// Q10

// ................................................................................

// window.onload = function() {
//     extractDomain();
// }

// function extractDomain() {
//     // Prompt the user to enter a URL (this will pop up as a prompt)
//     let url = prompt("Enter a URL (e.g., www.facebook.com):");

//     // If the URL is not empty and the user entered a valid value
//     if (url) {
//         // Display the full URL with 'URL: ' label
//         let urlElement = document.getElementById("urlDisplay");
//         urlElement.innerHTML = <strong>URL:</strong> ${url};

//         // Remove 'www.' if it exists
//         if (url.startsWith('www.')) {
//             url = url.substring(4);  // Remove the 'www.' part
//         }

//         // Display the domain as a clickable link with 'Domain: ' label
//         let domainElement = document.getElementById("domainDisplay");
//         domainElement.innerHTML = <strong>Domain:</strong> <a href="http://${url}" target="_blank">${url}</a>;
//     } else {
//         alert("Please enter a valid URL.");
//     }
// }
// ...............................................................................


// var  url = prompt("Enter a URL (e.g., www.facebook.com):");

// // If the user entered a URL
// if (url) {
//     // Remove 'www.' if it exists
//     if (url.startsWith('www.')) {
//         url = url.substring(4);  // Remove the 'www.'
//     }

//     // Show the full URL with "URL: "
//     document.body.innerHTML += <h3>URL: ${url}</h3>;

//     // Show the domain as a clickable link with "Domain: "
//     document.body.innerHTML +=
//      `<h3>Domain: <a href="http://${url}" target="_blank">${url}</a></h3>  `;
// } else {
//     alert("Please enter a valid URL.");
// }



// Q11


// var user = ("zain shekhani")

// document.write(`User input: ${user} <br>  Upper case : ${user.toUpperCase()} `   )




// Q12


//  var user = ("ZONG 4G")

//  document.write(`User input: ${user} <br>  lower case : ${user.toLowerCase()} `   )

// Q13

// var a = ("javascript")
// var first = a.slice(0,1).toUpperCase()
// var second = a.slice(1).toLowerCase()
// var merge = first+second
// document.write(      `  <button>reload this page</button><br>    user input : ${a}<br> title case : ${merge}`)


// // Q14
// var num = 35.36;
// var str = num.toString()
// var result = str.replace( '.', '' )
// document.write(result)


// Q15


// var a = "3"
// var b = "3"
// var result = a + b ;

// document.write(` a is ${a} <br> b is ${b} <br> a + b is ${result} `)

// Q16

// var a = "3"
// var b = "3"
// var result = a - b ;

// document.write(` a is ${a} <br> b is ${b} <br> a + b is ${result} `)

// Q17

// var user = prompt("enter your user name ")

// for(var i = 0 ; i < user.length; i++){

//     var charcode = user.charCodeAt(i)

// if(charcode === 33 ||charcode === 44 || charcode=== 46 || charcode ===64 ){
//     alert("Please enter a valid username without special characters: @, ., ,, !")
//     break;
    
// }



// }
// if(i === user.length){
// document.write("user name is valid " + user )
// }

// Q18

// var bakery = ["cake","apple","pie"]
// var user = prompt("welcome to abs bakery")
// var match = false
// var userlower = user.toLowerCase()
// for(var i = 0 ; i < bakery.length; i++){
//     if(userlower === bakery[i]){
//         match = true
//         document.write(`${bakery[i]} is available `)
//         break
//     }
// }
//     if(!match === true)
//         document.write(`we are sory ${user} is not availble `)
    

// Q19

// var string1 = prompt("enter the first string")
// var string2 = prompt("enter the second string")

// if(string1 === string2){

// document.write("both string are equal ")
// }if (string1 > string2) {
//     document.write(`${string1} is greater than ${string2} `)
    
// } else {
//     document.write(${string1} is less than ${string2})
// }



// Q20


// // Take password input from the user
// let password = prompt("Enter your password:");

// // Check if password is at least 6 characters long
// if (password.length < 6) {
//     alert("Invalid password! It must be at least 6 characters long.");
// }
// // Check if password starts with a number
// else if (password[0] >= '0' && password[0] <= '9') {
//     alert("Invalid password! It should not start with a number.");
// }
// // Check if password contains both alphabets and numbers
// else {
//     let hasLetter = false;
//     let hasNumber = false;

//     // Loop through each character in the password
//     for (let i = 0; i < password.length; i++) {
//         if (password[i] >= 'a' && password[i] <= 'z' || password[i] >= 'A' && password[i] <= 'Z') {
//             hasLetter = true;
//         }
//         if (password[i] >= '0' && password[i] <= '9') {
//             hasNumber = true;
//         }
//     }

//     if (hasLetter && hasNumber) {
//         alert("Password is valid.");
//     } else {
//         alert("Invalid password! It must contain both letters and numbers.");
//     }
// }




// Q21

// var univercity = "univercity of karcachi"
// var arrayuni = univercity.split("")
// for(var i = 0 ; i <arrayuni.length; i++ ){
//     document.write(arrayuni[i]+ "<br>" )
// }



// Q22

// var user = "pakistan"
// var useri = user.charAt(7)
// document.write(user input : ${user} <br> last charcter of input : ${useri})
 


// Q23

// // Define the string
// var sentence = "The quick brown fox jumps over the lazy dog";
// var zain = sentence.toLowerCase().split( " ")
//  var count = 0;
// for(var i = 0 ; i < zain.length; i++){
//     if(zain[i] === "the"){
//         count++;
//     }
// }

// document.write(`text : ${sentence}<br> they are ${count} occurence(s) of the word 'the' `)




// Q24


// var str = "Pakistan";
// var vowelsCount = 0;
// var consonantsCount = 0;

// // Convert the string to lowercase to make the check case-insensitive
// str = str.toLowerCase();

// // Loop through each character of the string
// for (var i = 0; i < str.length; i++) {
//     var char = str[i];

//     // Check if the character is a vowel
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//         vowelsCount++;
//     }
//     // Check if the character is a consonant (alphabetic and not a vowel)
//     else if (char >= 'a' && char <= 'z') {
//         consonantsCount++;
//     }
// }

// // Display the counts of vowels and consonants
// document.write("Vowels: " + vowelsCount + "<br>");
// document.write("Consonants: " + consonantsCount);






// var str = "pakistan"
// var vow = 0;
// var cons = 0 ;

// var str = str.toLowerCase()

// for(var i = 0 ; i < str.length; i++){
//  var  char = str[i]
//     if(char === "a" || char === "i" || char === "i"|| char === "o" || char === "u"){
//         vow++;
//     }
//     else if(char > "a" && char < "z"){
//         cons++
//     }


// }

// document.write(`vowels : ${vow} <br> `)
// document.write(`consunant : ${cons}  `)