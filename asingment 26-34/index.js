// .............................Assignment	#	26-34,......./////////////////////////////
// ..///////////..................JAVASCRIPT....................////////////////////













// Q1



// var num1 = 45
// var round =  Math.round(45) 
// var floor = Math.floor(45)
// var ceil = Math.ceil(45)
//         document.write(number : ${num1} <br> round of value : ${round} <br> floor value : ${floor} <br> ceil value : ${ceil})





// Q2



// var num1 = 32
// var round =  Math.round(-32) 
// var floor = Math.floor(-32)
// var ceil = Math.ceil(-32)
//         document.write(number : ${num1} <br> round of value : ${round} <br> floor value : ${floor} <br> ceil value : ${ceil})




// Q3
// var num1 = 3.45214
// var round =  Math.round(3.45214) 
// var floor = Math.floor(3.45214)
// var ceil = Math.ceil(3.45214)
//         document.write(number : ${num1} <br> round of value : ${round} <br> floor value : ${floor} <br> ceil value : ${ceil})




// Q4


// var num1 = -2.673
// var round =  Math.round(-2.673) 
// var floor = Math.floor(-2.673)
// var ceil = Math.ceil(-2.673)
//         document.write(number : ${num1} <br> round of value : ${round} <br> floor value : ${floor} <br> ceil value : ${ceil})






// Q5


// var num = Math.abs(-4)

// document.write(the absolute value is -4 is : ${num})



// Q6

// var num1 = '4'
// var num =  Math.floor(Math.random() *6 ) + 1
// document.write(random dice value : ${num1} <br> random dixe value : ${num})


// Q7






// var toss = Math.random() *2;
// var ch  = Math.floor(toss)
// if(ch === 0 ){
//     document.write("player 1 head wins")
// }
// else{
//     document.write("player 2 tail wins")
// }

// Q8



// var num = Math.floor(Math.random() *101 )
// document.write(random number between 1 and 100 : ${num} <br> <button>reload this page </button>)

// Q9

// var userInput = prompt("Please enter your weight (e.g., 50kgs, 50.2kilograms):");

// // Parse the numeric value from the input using a regular expression
// var weight = parseFloat(userInput.replace(/,g/ ,''));

// // Check if the input is a valid number
// if (!isNaN(weight)) {
//     document.write("Your weight is: " + weight + " kg");
// } else {
//     document.write("Please enter a valid weight.");
// }



// var user = prompt("enter a weight")

// var weight = parseFloat(user.replace(/,g/ , " "))

// if(!isNaN (weight)){
//     document.write(`your weight is ${user} kg `)

// }
// else{
//     document.write("please enter a valid weight")
// }

// Q10


// var screte = 9;

// var user = parseFloat(prompt("enter a number between 1 to 10"))

// if(isNaN(user)){
//     document.write("alphet are not allowed")
    

// }
// else{


    
// if  (user < 1 || user > 10 ){
//     document.write("please enter a number  between 1 to 10")

// }
// else if(user === screte){
//     document.write("conguration")

// }
// else{
//     document.write("sory this num you are incorect")
// }
// }



// Q11

// // Create a new div element to hold the current date and time
// const dateTimeDiv = document.createElement('div');
// document.body.appendChild(dateTimeDiv);

// // Apply basic styling
// dateTimeDiv.style.fontFamily = 'Arial, sans-serif';
// dateTimeDiv.style.textAlign = 'center';
// dateTimeDiv.style.marginTop = '50px';
// dateTimeDiv.style.fontSize = '30px';
// dateTimeDiv.style.fontWeight = 'bold';

// // Function to update the current date and time
// function updateDateTime() {
//     const now = new Date();
//     const options = {
//         weekday: 'long', 
//         year: 'numeric', 
//         month: 'long', 
//         day: 'numeric',
//         hour: '2-digit', 
//         minute: '2-digit', 
//         second: '2-digit',
//         hour12: true
//     };
//     const formattedDate = now.toLocaleString('en-US', options);
    
//     // Update the div content with the current date and time
//     dateTimeDiv.textContent = formattedDate;
// }

// // Initial update of the date and time
// updateDateTime();

// // Update the date and time every second
// setInterval(updateDateTime, 1000);
// //////////////////////////////////////////////////


// ////only////
// var date = new Date()
// document.write(date)

// Q12

// var mon = new Date()
// var cuee = mon.getMonth()
// // alert(current month ${cuee})

// var monthNames = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];

// // Get the current month name using the month index
// alert(Current month: ${monthNames[cuee]});


// Q13


// var date = new Date()
// var con= date.toString()
// var copy = con.slice(0,3) 
//     alert(today is ${copy} )



// Q14

// var today = new Date(); // Get today's date
// var dayOfWeek = today.getDay(); // Get the day of the week (0-6)

// if (dayOfWeek === 0 || dayOfWeek === 6) {
//     alert("It's Fun day");
// } else {
//     alert("It's a weekday");
// }



// // // Q15

// // // Get the current date
// // const currentDate = new Date();

// // // Extract the day of the month
// // const dayOfMonth = currentDate.getDate();

// // // Check if the day is less than 16
// // if (dayOfMonth < 16) {
// //     document.write("First fifteen days of the month");
// // } else {
// //     document.write("Last days of the month");
// // }


///...//////



// or



// var days = new Date()
// var ob = days.getMonth()
// if(ob < 16 ){
//     document.write('firs')
// }
// else{
//     document.write('last')
// }




// Q16

// var date = new Date()
// var time = new Date().getTime()
// var min =  date.getTime()
// var minn = min/ (1000*60)
// document.write  ( "curent Date :" +  date+ '<br>'+ 
//   'elapsed milisecond since january 1,1970 :' +  time +'<br>'    + ' Elapsed  minutes since january 1,1970 :'       +   min )

// Q17

// var hours = new Date()
// var get = hours.getHours()
// if(get < 12){
//     alert('its am ')
// }
// else{
//     alert('its pm')
//}


// Q18

// var date = new Date('2020 11 31')
// document.write(date)

// Q19

// // Create a Date object for 1st Ramadan (June 18, 2015)
// const ramadanStartDate = new Date(2015, 5, 18);  // Month is 0-indexed, so 5 represents June

// // Create a Date object for the current date
// const currentDate = new Date();

// // Calculate the difference in time (milliseconds)
// const timeDifference = currentDate - ramadanStartDate;

// // Convert the time difference from milliseconds to days
// const daysSinceRamadan = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// // Alert the result
// alert("Days since 1st Ramadan (June 18, 2015): " + daysSinceRamadan);



// Q20

// var  date =     new Date()

// var mm = new Date('2015-01-01T00:00:00')

// var mili = date - mm

// var ss =   Math.floor(mili / 1000)
// document.write(ss)





// Q21

// var dd = new Date()

// var date = new Date()
// date.setHours(date.getHours()-1)
// document.write(dd + '<br>' + date   )


// Q22


    // var date = new Date()
    // date.setFullYear(date.getFullYear()-100)
    // document.write(date)


    // Q23



    // age calculater 




// var gg = new Date()

// var ss = gg.getFullYear()
// var age = 20
// var dd = ss - age







//     var date = new Date()
//     var date1 = date.getTime()

//     var dob = new Date('8 feb 2003')
//     var date2 = dob.getTime()

//     var minus = date1 -date2
//     var formula  = minus/(1000*60*60*24*365)
    
//     document.write (  'your age is : '  +   Math.floor(formula) + '<br>'+ ' your birth year is : '  + dd )






// Q24


// function generateBill() {
//     // Hardcoded values
//     const customerName = "zain shekhani";
//     const numberOfUnits = 300;
//     const chargesPerUnit = 20;
//     const lateSurcharge = 50;

//     // Calculate amounts
//     const netAmount = (numberOfUnits * chargesPerUnit).toFixed(2);
//     const grossAmount = (+(netAmount) + lateSurcharge).toFixed(2);

//     // Get current month and year
    
// var arr = ['j','f','m','a','m','j','j','a','s','o','november','dec']
// var mon = new Date()
// var s = mon.getMonth()
// var b = new Date()
// var c = b.getFullYear()

//     // Bill content
//     var billContent = `
//         <h2>K-Electric Bill</h2>
//         <p><strong>Customer Name:</strong> ${customerName}</p>
//         <p><strong> Month:</strong> ${arr[s] +' : '+ c}</p>
//         <p><strong>Number of Units:</strong> ${numberOfUnits}</p>
//         <p><strong>Charges per Unit:</strong> ₨ ${chargesPerUnit.toFixed(2)}</p>
//         <p><strong>Net Amount Payable (within Due Date):</strong> ₨ ${netAmount}</p>
//         <p><strong>Late Payment Surcharge:</strong> ₨ ${lateSurcharge.toFixed(2)}</p>
//         <p><strong>Gross Amount Payable (after Due Date):</strong> ₨ ${grossAmount}</p>
//     `;

//         // Append the bill to the body
//     document.body.innerHTML = billContent;
// }

// // Call the function to generate the bill
// generateBill();

// // var arr = ['j','f','m','a','m','j','j','a','s','o','november','dec']
// // var mon = new Date()
// // var s = mon.getMonth()
// // var b = new Date()
// // var c = b.getFullYear()
// // document.write(arr[s] +' : '+ c )







// function abc (){

//  var coustumernme = 'zain'
//  var numberofunit = 450
//  var chargesperunit = 14
//  var lateSurcharge = 500
   

//    var netAmount = (numberofunit * chargesperunit.toFixed(2))
//    var grossAmount = (netAmount +lateSurcharge)

//    var arr = ['j','f','m','a','m','j','j','a','s','o','n','december']
//    var date = new Date()
//    var s = date.getMonth()




//    var bill = `
//            <h1>k- electric bill</h1>
//            coustumer name :<strong> ${coustumernme} </strong><br>
//            month :<strong> ${arr[s]}</strong><br>    
//           number of units :<strong> ${numberofunit}</strong><br>
//           charges per unit : <strong>${chargesperunit}</strong>

//           <br><br>

//           net amount payble (with in due date ) :<strong> ${netAmount}</strong><br>
//           late payment surcharge : <strong>${lateSurcharge}</strong><br>
//           gross amount payble (after due date):<strong> ${grossAmount}</strong>
   
   
   
   
   
//    `

//     document.body.innerHTML= bill

// }

// abc()