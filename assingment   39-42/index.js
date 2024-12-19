..........   SWITCH	STATEMENTS	
..........    AND	
..........  WHILE… DO-WHILE	LOOPS



..........  Assignment	#	39-42

.......... JAVASCRIPT



 Q1

 var age = prompt('enter age ')

 var message;
 switch(true){
     case (age = 18)
     message = 'old enought'
     break;

     default
         message = too young
         break;

 }
 document.write(message)




  Q2
 Take user input
 var num = prompt('Enter a number');

  Convert the input to a number
 num = Number(num);

  Use the modulo operator (%) to check divisibility
 switch(num % 3) {
     case 0
         alert('Number is divisible by 3');
         break;
     default
         alert('Number is not divisible by 3');
         break;
 }


 Q3




 var num1 = +prompt('enter value 1')
 var operator = prompt('enter opretor  (+ , -,  ,)   ')
 var num2 = +prompt('enter value 2')
 var result;
  function calculate(num1,num2,operator){

     switch(operator){
         case '+'
         result = num1 + num2;
         break;

         case '-'
             result = num1 - num2;
             break;

            
         case ''
             result = num1  num2;
             break;
            
         case ''
             result = num1  num2;
             break;
            
         case '%'
             if(num1 == 0){
                 result = 'error cannot be divide by zero'
             }
             else{
                
                 result = num1 - num2;
             }
             break;

       default
         result = 'please valid a number'
        
     }

 return  result;



  }

  var a = calculate(num1,num2,operator)
  document.write( a)



 Q4


 var arr = ['sunday','mon','tues','wed','thursday','friday','saturday']
 var date =  new Date()
 var dd =date.getDay()
 document.write(arr[dd])


 Q5


  Get the current date
 var date = new Date();

  Get the day of the week as a number (0-6)
 var dd = date.getDay();

  Check if today is not Saturday (6) or Sunday (0)
 if (dd === 0  dd === 6) {
      If it's either Saturday or Sunday
     document.write('It's the weekend!');
 } else {
      If it's a weekday (Monday to Friday)
     document.write('Today is a working day.');
 }



 Q6

 function abc(){
      var checkcar = prompt('enter fovourite  car')
     var result;
      switch(checkcar){
         case 'bmw'
         document.write(` german car   for   ${checkcar}   `)
      break

      case 'ford'
         document.write(` american car for  ${checkcar}   `)
 break

         case 'alto'
             document.write(` franch  car  for   ${checkcar}   `)
             break

             default
                 document.write(`unknown car ${checkcar}  `)
          }

         
      }

    
  return result



 abc()

  Q7
 function checkFruit() {
     var text;
     var fruits = prompt(Enter a fruit name);
     switch(fruits) {
     case Banana
     text = Banana is good!;
     case Orange
     text = I am not a fan of orange.;
     case Apple
     text = How you like them apples;
     default
  text = I have never heard of that
  }
  document.write( text);
 }
 checkFruit();

 Q8



 function displayMarksRange(grade) {
     var marksRange;
    
     switch(grade.toUpperCase()) {   toUpperCase() ensures case-insensitivity
         case 'A'
             marksRange = 'Marks = 90 and  100';
             break;
         case 'B'
             marksRange = 'Marks = 60 and  70';
             break;
         case 'C'
             marksRange = 'Marks = 50 and  60';
             break;
         case 'D'
             marksRange = 'Marks = 40 and  50';
             break;
         case 'F'
             marksRange = 'Marks  40';
             break;
         default
             marksRange = 'Invalid grade entered';
             break;
     }

     document.write(marksRange);
 }

  Example usage
 var grade = prompt(Enter a grade (A, B, C, D, F));
 displayMarksRange(grade);


 Q9



 var month = prompt('enter month eg (1,2,3,4,5,6,7,8,9,10,11,12)')

 var result;

 switch(month){
     case '1'
         result = 'january'
       break;
       case '2'
         result = 'febuary'
       break;
       case '3'
         result = 'march'
       break;
       case '4'
         result = 'april'
       break;
       case '5'
         result = 'may'
       break;
       case '6'
         result = 'june'
       break;
       case '7'
         result = 'july'
       break;
       case '8'
         result = 'august'
       break;
       case '9'
         result = 'september'
       break;
       case '10'
         result = 'october'
       break;
       case '11'
         result = 'november'
       break;
       case '12'
         result = 'december'
       break;

       default
         result = 'invalid month'



 }

 document.write(result)



 Q10



 var a = prompt(enter value)

  var b  =(a = 18  old enought too young )
  document.write(b)






 Q11


 var a  = 1

 while(a = 5){
     document.write(  a+')'  +  hellow world +'br ' )
     a++
 }

 Q12


 var a = 1 

  while (a = 10){
     document.write(a+br)
     a++
  }



 Q13

 var num1 = prompt('enter teble number')
 var end = prompt('enter teble length')
 var i = 1
 while(i = end){
     document.write(`${num1} x  ${i} = ${num1 i} br `)
     i++
 }




 var num1 = prompt('enter table')
 var end = prompt('enter table length')
 for(var i= 0; i = end;i++ ){
     document.write(`${num1} x  ${i} = ${num1 i} br `)
 }


 Q14


 var a = ['Nokia',' Samsung', 'Apple', 'Sony', 'Huawei']
 var i = 0
 while( i  a.length ){
     document.write(a[i] + br)
     i++

 }

 Q15



 var arr  = ['apple', 'banana', 'mango',' orange', 'strawberry']

 var i = 0 
 while(i  arr.length){
     document.write(${arr[i]} br ) 
     i++
    
 }

 document.write('br')
 document.write('br')
 document.write(elemeny at index 0 is ${arr[0]} br)
 document.write(elemeny at index 1 is ${arr[1]}br)
 document.write(elemeny at index 2 is ${arr[2]}br)
 document.write(elemeny at index 3 is ${arr[3]}br)
 document.write(elemeny at index 4 is ${arr[4]}br)


 Q16



 var n = prompt('enter number of items ')
 var arr = []
 var i = 0

 while(i  n){
     var item = prompt(enter items  ${i+1}   )
     arr.push(item)
     i++
 }
 document.write('array items  '  + i + br +br )
 i=0
 while(i  arr.length){
     document.write(`${arr[i]} br `)
     i++
 }






 Q17


 var i = 1
   document.write('strongcounting strong'  +'br'+'br')
    while(i = 15){
     
     document.write( i+, )
     i++
    
 }
 document.write('br')
 document.write('br')

 var i = 10
 document.write('strong   Reverse  counting strong'  +'br'+'br')
    while(i = 1){
     
     document.write( i+, )
     i--
    
 }


 document.write('br')
 document.write('br')

 var i = 0
 document.write('strong  Even strong'  +'br'+'br')
    while(i  = 20 ){
     
     document.write( i+ , )
     i= i+1 ;i++
    
 }



 document.write('br')
 document.write('br')

 var i = 1
 document.write('strong  Odd strong'  +'br'+'br')
    while(i  = 20 ){
     
     document.write( i+ , )
     i= i+1 ;i++
    
 }


 document.write('br')
 document.write('br')

 var i = 2
 document.write('strong  Series strong'  +'br'+'br')
    while(i  = 20 ){
     
     document.write( i+ k, )
    i= i+2 
    
 }


 Q18




 var arr = ['cake', 'apple', 'pie','cookie', 'chips', 'patties']

 var user =prompt(welcome abc bakery whats your order sir  mam)

 var i = 0
 while(i  arr.length){
     if(arr[i] === user){
         document.write(`${user} is available at index  ${arr.indexOf(user)} `)
         break
     }
     i++
 }    

 if(i === arr.length ){
     document.write(`${user} is not available in the bakery   `)
 }



 var a = 0
 var i = 0 
 var arr = [
     ['students','scores'],
     ['zain',15],
     ['ali',11],
     ['zubair',13],
     ['usman',14],


 ]
 document.write('table border=1px  ')
 while(i 4){
     document.write('tr')
     while(a  2){
         document.write( td + arr[i][a] +  td   )
          a++
        
     }
    
  document.write(br)
    i++
    a=0
    document.write('tr')
 
 }
 document.write('table')



 Q20




 var arr = [12,13,14,15,16,17]
 var user = prompt('kha tk value chachia (12,13,14,15,16,17)')
 var found = false
 user =  Number(user)
 var i = 0
 while(i  arr.length){
     document.write(arr[i] +    )
     if(arr[i] === user ){
         found = true
         break;
     }
     i++
 }
 if(!found){
     document.write (  ' br stop value ')
 }


 Q21


 var arr = [

     [1,2,3],
     [4,5,6],
     [7,8,9]
 ]

 var i = 0
 var a = 0

 while(i 3){
     while(a  3){

         document.write(arr[i][a] +    )
         a++
     }

     document.write('br' )
     i++
     a=0
 }


 Q22


 var num = parseFloat(prompt(enter a number))

 while(num  0){
     document.write(num+  )
     num -= 0.5
 }

 Q23


 var i = 0
 while ( i = 20){
     if(i % 2 === 0){
         document.write(i +  even+ br)
    
     }    
        else{
         document.write(i + odd+ 'br')
         }
    
       i++  
    
 }


 Q24


 var i = 0
 var product = 1
 while( i = 7){
     if(i%2   !== 0){
         product = i
     }
     i++
 }
 document.write( the product of odd integer from 1 to 7 is  ${product})




 Q25
 var i = 7
 var j = 0
 
 while(i= 1){
     while(j  i ){
    document.write('')
    j++
     }
    
  document.write('br')
  i--
  j=0
    
 }


 Q25
 var i = 1
 var j = 0
 
 while(i 5){
     while(j  5 ){
    document.write('')
    j++
     }
    
  document.write('br')
  i++
  j=0
    
 }




 Q26


 var i = 5
 var j = 0
 
 while(i= 1){
     while(j  i ){
    document.write('')
    j++
     }
    
  document.write('br')
  i--
  j=0
    
 }


 Q27


 var i = 1
 var j = 0
 
 while(i= 5){
     while(j  i ){
    document.write('')
    j++
     }
    
  document.write('br')
  i++
  j=0
    
 }









    for(var i = 1 ; i  5; i++){
      for(var j = 0 ; j  5 ; j++){
          document.write('')
      }
      document.write('br')
    }