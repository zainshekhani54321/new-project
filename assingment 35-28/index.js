////////////////////....Assignment # 35-38...//////
 ///////////////////....JAVASCRIPT...//////////////








//  Q1


// function abc(a,b){
//       return a + b
// }

// alert(abc(5,6))
// alert(abc(10,20))


// Q2

// function abc(){

//     var current  = new Date()



//     var date = current.toLocaleDateString()
//     var time = current.toLocaleTimeString()
//     document.getElementById('aa').innerHTML = 'current date ' + date +  ' <br> current time  '  + time
// }


// abc()


// Q3

// function abc(){
//     var first = prompt('enter first name ')
//     var last = prompt('enter last  name ')

//     var full = first + " " + last
     
//     document.write('hellow ' + " "  + full + " " + 'welcome'  )
// }

// abc()


// Q4

// function addTwoNumbers() {
//     // Get input values from the user
//     var num1 = parseFloat(prompt("Enter the first number:"));
//     var num2 = parseFloat(prompt("Enter the second number:"));
    
//     // Calculate the sum of the two numbers
//     var sum = num1 + num2;
    
//     // Display the result on the page
//     document.write("The sum of " + num1 + " and " + num2 + " is: " + sum);
// }
// addTwoNumbers()



// Q4


// function cal( num1,num2,operator ){
//     var result;

//     if (operator === '+') {
//         result = num1 + num2;
//     } else if (operator === '-') {
//         result = num1 - num2;
//     } else if (operator === '*') {
//         result = num1 * num2;
//     } else if (operator === '/') {
//         // Handle division by zero
//         if (num2 === 0) {
//             result = "Error! Division by zero.";
//         } else {
//             result = num1 / num2;
//         }
//     } else {
//         result = "Invalid operator!";
//     }

//    return result;

// }

// function cc(){



// var num1 = parseFloat(prompt("Enter the first number:"));
// var num2 = parseFloat(prompt("Enter the second number:"));
// var operator = prompt("Enter the operator (+, -, *, /):");

// var result = cal(num1,num2,operator)
// document.write("The result of " + num1 + " " + operator + " " + num2 + " is: " + result);
        


// }

// cc()



// Q6



//   function abc(a,b){
//     return a + b 
//   }

//   alert(abc(10,10))



// Q7

// function sum(n){
//     if(n === 0 || n=== 1){
//         return 1

//     }

//  return   n * sum(n-1)
// }
// document.write(sum(4  ) + '<br>' )

// document.write(sum(3))


// Q8

// var a =  
// function abc(){
  
    
    
// }

// var user = prompt("enter table number")
// var end = prompt("enter length")

// for (var i = 1 ; i<= end ; i++){
//     document.write(` ${user}  x  ${i} = ${user*i} <br> ` )

// }

      

// Q9

// function calculateHypotenuse(base, perpendicular) {
//     // Inner function to calculate the square of a number
//     function calculateSquare(x) {
//         return x * x;
//     }

//     // Calculate the squares of the base and perpendicular
//     let baseSquare = calculateSquare(base);
//     let perpendicularSquare = calculateSquare(perpendicular);

//     // Calculate the hypotenuse
//     let hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);

//     // Display the result
//     document.write("The Hypotenuse is: " + hypotenuse);
// }

// // Example usage:
// var base = prompt("Enter the base of the triangle:");
// var perpendicular = prompt("Enter the perpendicular of the triangle:");

// base = parseFloat(base);  // Convert inputs to numbers
// perpendicular = parseFloat(perpendicular);

// calculateHypotenuse(base, perpendicular);


//////////////// ye samjna ha




// Q10


// function abc(...e){
//     for(var i = 0 ; i < e.length; i++){
//         document.write(e[i]+ "<br>")
//     }
// }

// abc(10,'zain','ali',20,false)


// Q11


// function abc(...e){
//     var largest = Math.max(...e)
//     document.write(`the largest number is ${largest} `)
// }

// abc(10 ,20,30,40,50,60,100)

// Q12

// function abc( width ,height){
    
//     var a = width *height
//     document.write(a)

// }
// abc(5,10)

// Q13


// function abc(arr){
//     var a = arr.sort((a,b)=> a - b  )
//     return a
// }

// var num = [ 10,9,8,7,6,5,4,3]
// var c = abc(num)
// document.write(c)


// Q14

// function abc(arr){
//     var sum = 0 ;

//     for(var i = 0 ; i < arr.length; i++){
//        sum +=   arr[i]

//     }
//     return sum;
// }

// var num = [1,2,3,4,5,]
// var total = abc(num)
// document.write(total)

// Q15



// var param = function Inner(){
//     return typeof Inner
// }

// alert(param())

// Q16

// function abc(base, exponent){
//      return Math.pow(base,exponent)
// }

// var num = abc(2,5)
// document.write(num)

// Q17


    // function abc(){
    //     return Math.floor(Math.random() * 6  )+1 


    // }
    // var num = abc()
    // document.write(num) 

    // Q18


        // function abc(){
 
        //     var d = '32243'
        //     return d.split('').reverse().join('')
        // }
        // var a = abc()
        // document.write(a)

        // Q19

        // function isPalindrome(str) {
        //     // Remove any non-alphanumeric characters and convert the string to lowercase
        //     let cleanedStr = str.replace().toLowerCase();
            
        //     // Reverse the cleaned string and check if it's equal to the original cleaned string
        //     let reversedStr = cleanedStr.split('').reverse().join('');
            
        //     return cleanedStr === reversedStr;  // Return true if palindrome, false otherwise
        // }
        
        // // Example usage:
        // var str1 = "222";
        // var str2 = "hello";
        
        // document.write(isPalindrome(str1));  // Outputs: true
        // document.write(isPalindrome(str2));  // Outputs: false
        

        // Q20

        // function abc(){
        //      var a ='the quick brown fox'
        //      var b = a.split(' ').map(function(word){
        //         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        //      }).join(' ')
        //      document.write( a + '<br>' + b)
        // }
        // abc()
        

        // Q21


        // function abc(str){
           
        //  var words = str.split(' ')
        //  var longest = ''
         
        //  for(var i = 0 ; i < words.length; i++ ){
        //     if(words[i].length > longest.length){
        //         longest = words[i]
        //     }
        //  }  
        //  return longest;


        // }
        // var result = abc('zain is toooooooooo  the word')
        // var ss = ('zain is toooooooooo  tthe word')
        // document.write ( ss    +'<br>' +    result)

        // Q22


        // function abc(str){

        //     str.split(' ')
        //     var count = ''
        //     var vowel = ['a','e','i','o','u']

        //     for(var i = 0 ; i < str.length; i++){
        //         if(vowel.includes(str[i] ) ){
        //             count++
        //         }
        //     }

        //     return count
        // }
        // var total = abc('The quick brown fox' )
        // document.write(total)


        // Q23

        // function abc(zain){
           
        //     return typeof zain
        // }


        // var r1 = abc(123)
        // var r2= abc('123')
        // var r3 = abc(true)
        // var r4 = abc([])
        // var r5 = abc(function(){})
        // var r6 = abc(undefined)


        



        // document.write(r1+'<br>')
        // document.write(r2+'<br>')
        // document.write(r3+'<br>')
        // document.write(r4+'<br>')
        // document.write(r5+'<br>')
        // document.write(r6+'<br>')



        // Q24


// function abc(str){
//     var count = ''
    
//      for(var i = 0 ; i < str.length; i++ ){
//         if(!count.includes(str[i])  ){
//             count += str[i]
//         }
     
        
//     }
//     return count;
// }
//  var a = "thequickbrownfoxjumpsoverthelazydog";
//  var total = abc(a)
//  document.write(total)


// Q25



//  function abc(str , letter){
//      var count = 0
  
      
//       for(var i = 0; i < str.length; i++ ){
//         if(str[i] == letter  ){
//             count++
//         }
//       }

//       return count
//  }
//  var str = 'zaina '
//  var letter = 'a'

//  var total = abc(str , letter )
//  document.write(   str +'<br>'+   total)


// Q26




// function age(birthyear , currentyear){

//     var age1 = currentyear - birthyear
//     var age2  = age1 - 1
   

//     var date = new Date()
//     var ss = date.getFullYear()
//     var age = age1
//     var d = ss - age
 

  

//     document.write( ` birth year : ${d}     <br> current year : ${ss}  <br><br>  they are either ${age1} or ${age2} years old `)


// }

// age (2004,2024 )


// Q27


// function age(age, amountperday){
  
     
     
//     var name = 'biscut'
//     // var age = 15
//     var maxage = 85
//     // var amountperday = 2
//     var age1 = maxage - age
//     var year = 365
//    var total = age1 * year * amountperday
//     document.write(`favourite snack  : ${name} <br> current age : ${age} <br> extimate maxium age : ${maxage} 
        
//           <br>   amount of snack per day : ${amountperday} <br><br>
//           you will need ${total} ${name} you will until die ${maxage}
        
//         `)

         



// }
// age(15,2)
// age(12,3)
// age(11,4)
// // age()




// Q28

//  function circumference(radius){
//     var zain = 2 * Math.PI * radius
//     document.write(the circumference is : ${zain.toFixed(2)} <br>)
//  }
// function area(radius){

//     var zain1 = Math.PI * radius * radius
//    document.write(the area is : ${zain1.toFixed(2)}  <br>)
// }


// var radius = 5

// circumference(radius)
// area(radius)





// // Q29


// function faran(){
//     var cels = 77

//     var far = (cels * 9/5)+32

//     document.write(far.toFixed(2) + cels + '<br>' )

// }
// function abc(){

//     var far = 77 
//     var cels = (far - 32 ) * 5/9 

//     document.write(cels.toFixed(2)+ far  + "<br>")
// }

// faran()
// abc()
// function celsiusToFahrenheit() {
//     // Store a Celsius temperature
//     let celsius = 25;  // Example Celsius value
    
//     // Convert Celsius to Fahrenheit
//     let fahrenheit = (celsius * 9/5) + 32;
    
//     // Output the result
//     document.write(celsius + "°C is " + fahrenheit.toFixed(2) + "°F.<br>");
// }

// function fahrenheitToCelsius() {
//     // Store a Fahrenheit temperature
//     let fahrenheit = 77;  // Example Fahrenheit value
    
//     // Convert Fahrenheit to Celsius
//     let celsius = (fahrenheit - 32) * 5/9;
    
//     // Output the result
//     document.write(fahrenheit + "°F is " + celsius.toFixed(2) + "°C.<br>");
// }

// // Example usage:
// celsiusToFahrenheit();
// fahrenheitToCelsius();