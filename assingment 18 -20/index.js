//////////////////// //////  /Assignment	#	18-20 ///////////////////////////////////////////
               ////////////////JAVASCRIPT //////////////////////////////////////////////////



            //    Q1


        //    for( var i =1; i <= 5; i++){
        //         document.write( i+")"+ " hellow world " +"<br>" )
        //     }




        // Q2

        // for(var i =1 ; i<=10;i++ ){
        //     document.write(i + "<br>")
        // }


        // Q3


        // var user = prompt("enter table number")
        // var end = prompt("enter length")

        // for (var i = 1 ; i<= end ; i++){
        //     document.write(` ${user}  x  ${i} = ${user*i} <br> ` )
        // }



        // Q4



        // var arr = ["nokia","samsung","sony","apple"]


        // for(var i = 0; i< arr.length; i++){
        //   document.write(arr[i].toUpperCase() + "<br>  ")
        // }




        // Q5





// var arr = ["mango", "banana", "orange", "  strawberry "];
// for(var i = 0; i < arr.length; i++){
//     document.write( `${arr[i]} <br>  `)
// }
// document.write("<br>")

// for(var b= 0 ; b< arr.length; b++){
//     document.write(  `Element at index ${b}  is ${arr[b]} <br>  `)
// }





// Q6

// var n = parseInt(prompt("enter the  number of items in the array you want "))
// var arr = [];

// for(var i = 0; i< n ; i++){

// var item = prompt("Enter value" +  ( i + 1 )  + " : " )
// arr.push(item)



// }

// document.write(`Number of items : ${n} <br> Items : <br><br> `)
// for(var s= 0 ; s < arr.length; s++){
//     document.write(arr[s].toUpperCase() + "<br>" )
// }



// Q7

// document.write("  <h2>Counting :</h2> ")

//   for(var i= 1; i<= 15; i++){
//     document.write(  ` <span> ${i}  </span> ` +" , ")
//   }


//   document.write("  <h2>Reverse counting :</h2> ")

//   for(var i= 10; i>= 1; i--){
//     document.write(  ` <span> ${i}  </span> ` +" , ")
//   }

//   document.write("  <h2> Even:</h2> ")

//   for(var i= 0; i<= 20; i= i+2){
//     document.write(  ` <span> ${i}  </span> ` +" , ")
//   }
  
//   document.write("  <h2> Odd:</h2> ")

//   for(var i= 1; i<= 19; i= i+2){
//     document.write(  ` <span> ${i}  </span> ` +" , ")
//   }
  

  
//   document.write("  <h2> Series:</h2> ")

//   for(var i= 2; i<= 20; i= i+2){
//     document.write(  ` <span> ${i}k  </span> ` +" , ")
//   }



// Q8


// var arr = ["cake", "apple", "pie", "cookie", "chips", "patties"]

// var user = prompt("welcome to shekhani bakery what do you want to !sir/ ! maaam")

// if(user){
// if(arr.includes(user.toLowerCase())  ){
//     alert(`yes sir ${user} availabel     `)

// }
//    else{
//          alert(`Sorry!! sir ${user} is not availabel `)
// }
// }
// else{
//     alert("sir please say what do you have want?"  )
// }


// Q9



//  var arr = [24,53,78,91,12]
// var largest = Math.max(...arr)
// document.write( `Array Items : ${arr} <br> The largest number is ${largest} `)


// Q10


//  var arr = [24,53,78,91,12]
// var smallest = Math.min(...arr)
// document.write( `Array Items : ${arr} <br> The largest number is ${smallest} `)


// Q11

//  var arr = [24,53,78,91,12]
// var smallest = Math.min(...arr)
// var larger = Math.max(...arr)
// document.write( Array Items : ${arr} <br> The smallest number is ${smallest} <br>The largest number is ${larger})



// Q12


// for( i = 5; i <= 100; i= i+5){
//     document.write( `<span>  ${i} </span> ` + ", ")
// } 


// Q13


// var arr = [
   
//        [ "Student ","Scores"],
//        [ "Ali ",58],
//        [ "Sami ",73],
//        [ "Taha ",89],
//        [ "Inam ",90]


// ]
// document.write(` <center>  <table  border = "1px" align-items: center ;  width = "50px" >`)
// for(var i =0 ; i < arr.length ; i++){
//     document.write("<tr>")
//     for(var a= 0; a< 2; a++){
//         document.write("<td>"+arr[i][a] +" "+"</td>" )       
//     }
//  document.write("<br>")
// document.write("</tr>")

// }

// document.write(" </center>  </table>")


// Q14

// var score = [ 1,10,11,33,44,55]
// var stop = parseFloat(prompt("enter stop value"))

// var index = score.indexOf(stop)
// document.write(score.slice(0, index +1) .join (", ") )


// Q15

// 1 2 3
// 4 5 6
// 7 8 9 
// Matrix with values 1 to 9
// var num = [
//    [1,2,3 ],
//    [4,5,6 ],
//    [7,8,9 ]
   
// ]
  
// for(var i = 0 ; i< num.length; i++){
//     document.write(num[i].join (" ")+ "<br> "  )
// }

// // Q16


// var num = parseFloat(prompt("enter a number"))

// for(var i=0; num>= 0; i++){
// document.write(num)
// num -= 0.5;
// if(num >= 0){
//     document.write(" , ")
// }


// }


// Q17



// for(var i = 0; i<= 20; i++){
//     if(i % 2 == 0){
//         document.write(i + " is even " + "<br>")
//     }
//     else(
//         document.write(i + " is odd " + "<br>")
//     )
// }



// Q18
// var product = 1;

// for(var i = 1; i<= 7 ; i++){
//     if(i% 2 !== 0){
//         product *= i;
//     }
// }
// document.write("the product off odd integer  1 to 7 is : " + product ) 


// Q19


// for(var i = 7; i>= 1; i--){
//     for(var j = 1; j <= i ; j++ ){
//         document.write(" * " )
//     }
//     document.write("<br>")
// }



// Q20

// a part
// for(var i = 1; i<= 4; i++){
//     for(var j = 1; j <= 5; j++ ){
//         document.write(" * " )
//     }
//     document.write("<br>")
// }


// Q 20 b part 

// for(var i = 1; i<= 5; i++){
//     for(var j = 1 ; j <= i; j++){
//         document.write(" * ")
//     }
//     document.write("<br>")
// }

// Q20 b 

// for(var i = 5; i>= 1; i--){
//     for(var j = 1 ; j <= i; j++){
//         document.write(" * ")
//     }
//     document.write("<br>")
// }