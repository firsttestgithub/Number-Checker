/*
var su1b_$ = 10;
alert(su1b_$);

var ROSE = "my name is subhan";
alert(ROSE);

var rose = "my father name is thair";
alert(rose);

var modulus = 12 % 5;
var a = modulus + 10;
alert(a);
var b = 10 + 10;
alert(" number of sum = " + b);

var 
// pre increment a++
// post increment ++b
// pre decrement a--
// post decrement a--

var mathEx = 1 + 1 * 3 ;
alert(mathEx);
var mathEx1 = (10 - 4) + 10 * 4;
alert(mathEx1);

var incre = 2;
var a  = incre++;
alert(a);
var pro = prompt("How many cats?");
alert(pro);
/*
var toomanycats = pro + 1;
alert(toomanycats);*/
        /*# legal variable names
        myvar <- "subhan"
        my_var <- "subhan"
        myVar <- "subhan"
        MYVAR <- "subhan"
        .myvar <- "subhan"
        */

        /*# illegal variable names
        2myvar <- "subhan"
        my-var <- "subhan"
        my var <- "subhan"
        -my_var <- "subhan"
        my_v@ar <- "subhan"
        */

        /*  Not legal:
        . You can't enclose in quotaion marks
        . you can't have any spaces in it
        . it cant't be a number or being with a number
        . a variable can't  be any of python's reserved words

            Legal:
            . A varaible should be lowercase letters uppercas letters, numbers and underscores
            . Variable names should be. A 'Rose' and 'rose' is equal 
            
            var userAnswer = prompt("User account yes or not");
            if(userAnswer == "no"){
                alert("congratulation! Make the account");
            
           if(userAnswer){
                var username = prompt("Enter the Username");
                var password = prompt("Enter the Password");
                //alert("login");
           }
         
                if(userAnswer){
                alert("login");
                var username1 = prompt("Enter the name");
                var password1 = prompt("Enter the password");
                    alert("login successful")
                }
                
                else{ 
                    alert("login failed");
            }
        }
        
            if(userAnswer == "yes"){
                var username = prompt("Enter the Username");
                var password = prompt("Enter the Password");
                alert("login");
                if(userAnswer){
                var username1 = prompt("Enter the name");
                var password1 = prompt("Enter the password");
                if(username == username1 && password == password1){
                    alert("you are successful");
                    
                }
                else{
                    alert("login failed");
                }
            }
        }

        var a = prompt("How many cats!");
        var b = a + 1;
        alert(b);
        var age = 16;
        var weight = 34;
        var gender = "male";
        var name = "subhan";
        if(age > 20 || weight > 40 && gender == "male"){
            alert("conditions will be true");
        }
        else{
            alert("conditions are false")
        }
        var mobileRs = 15000;
        var IphoneRs = 100000;
        var mobileName = "samsung";
        var IphoneName = "abc";
        if(mobileRs <= 13000 || mobileName == "samsung" && (IphoneRs > 20000 && IphoneName == "ac")){
            alert("TRUE");
        }
        else{
            alert("FALSE");
        }
               //array declare
        var arr = ["one", "two", "three","four"];
        alert("arr declare: " + arr);
            //array idexing
        var arr1 = arr[0];
        alert(arr1);
        //array methof of pop
        var arr2 = ["apple mango","banana","malta","orange"];
        alert(arr2);
        var arr3 = arr2.pop();
        alert("pop method: " + arr3);

             //array methof of push
             var arr4 = ["monitor", "mouse","C.P.U","printer","keyboard"];
             alert(arr4);
       arr4.splice(2,2, "CD","USB");
             alert("shift method: " + arr4);*/
/*
        var prom = prompt("what is your name");
        prom = prom.toUpperCase();
        var arr = ["subhan","anus","ameen"]
        for(var i = 0; i < arr.length; i++)     {
            if(prom == arr[i]){
                alert("the name will be right");
            }
        }

      var firstName = ["Usman","Muzammil","Mailk","Humza"]
        var LastName = ["Adil","Arif","Ahmer","Yousuf"]
        for(j = 0; j < firstName.length;j++){
            for(k = 0; k < LastName.length; k++)
            console.log(firstName[j] + LastName[k]);
        }

        var str = prompt("Type the name");
        var firstChar  = str.slice(0,1);
        var othersChar = str.slice(1);
        var a = firstChar.toUpperCase();
        var b = othersChar.toLocaleLowerCase();
        console.log(a + b);

        var month = prompt("Enter a month");
        var charsInMonth = month.length;
        var monthAbbrev;
        if(charsInMonth > 3){
            monthAbbrev = month.slice(0,3)
            console.log(monthAbbrev);
        }
        var str1 = prompt("Enter somw text");
        var numchars = str1.length;
        for(var i = 0; i < numchars; i++){
            if(str1.slice(i, i + 1)=== " "){
                alert("No double spaces");
                break;
            }
        }
      var a = "34.324324";
      var b = Number(a);
      console.log(b);
      var c = 342344;
      var d = c.toString();
      console.log(d);
      var e = Math.round(10.54445);
      console.log(e);
      

var date = new Date();
console.log(date);
var day = date.getDay();
console.log(day);
var year = date.getFullYear();
console.log(year);

var dayNames = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"]
var now = new Date();
var theDay = now.getDay();
var nameOfDay = dayNames[theDay]
console.log(nameOfDay);

var m = prompt("Enter the marks");

if((m >= 80)&&(m<=100)){
    alert("Grade A")
}
else if((m >= 70)&&(m<=79)){
    alert("Grade B")
}
else if((m >= 60)&&(m<=69)){
    alert("Grade C")
}
else if((m >= 50)&&(m<=59)){
    alert("Grade D")
}
else{
    alert("failed")
}

        //Date
var today = new Date();
        //GETTime
var msToday = today.getTime();
console.log(today);
console.log(msToday);
        //datecreat
var doomsday = new Date("30 june, 2035")
var msDoomsday = doomsday.getTime();
console.log(doomsday);
console.log(msDoomsday);
        //sub
var msDiff = msDoomsday - msToday;
console.log(msDiff)
var dDiff = msDiff / (1000 * 60 * 60 * 24);
console.log(dDiff);
var math = Math.floor(dDiff);
console.log(math);

function myFunction(name){
    alert(name);
}
myFunction("Hi subhan")
myFunction("Hi Hassan")
myFunction("Hi Faizan")
function date(){
var now = new Date();
var theHr = now.getHours();
var theMin = now.getMinutes();
alert("Current time " + theHr + ":" + theMin)
}
date();
date();

var date1 = new Date();
date1.setSeconds(45);
console.log(date1);
var month = "March";

function showMessage(month,string,num){
alert(month+string+num);
}
showMessage(month," 's winner number is",23)
function calTot(merchTot){
/*var merchTot = prompt("Enter your value");
var orderTt;
if(merchTot >= 100){
    orderTt = merchTot; 
    
}
else if (merchTot < 50.0){
    orderTt = merchTot + 5;
    
}
else{
    orderTt = merchTot + 5 + (.03 * (merchTot - 50));
}
return orderTt;
}

calTot();

var prom = prompt("Enter your number");
if(prom > 0){
    alert("It is a positive number");
}
else if(prom < 0){
    alert("it is negative number");
}
else{
    alert("It is equal to zero");
}

var temp = prompt("Enter your temperature");
if(temp > 35){
    alert("It is hot!")
}
else if(temp >= 20 && temp <= 35){
    alert("Nice day")
}
else if(temp < 20){
alert("It is cold")
}
else{
    alert("no temperature")
}

var m = prompt("Enter your marks")
if(m >= 80){
    alert("Grade of A+")
}
else if(m >= 70 && m < 80){
    alert("Grade of A")
}

else if(m >= 60 && m < 70){
alert("grade of B")
}

else if(m >= 50 && m < 60){
    alert("grade of C")
    }

else if(m >= 40 && m < 50){
        alert("grade of D")
        }  

else if(m >= 30 && m < 40){
            alert("grade of E")
            }   
            else{
                alert("Ungraded")
            }


// program to print the text
// declaring a function
function greet(name1){
    
    console.log("Hello " + name1 + ":")
}
// variable name can be different

var name1 = prompt("Enter a name: ")
// calling function
greet(name1);

function add(a,b){
    console.log(a+b)
}
add(3,4);
add(4,4);

var number1 = parseFloat(prompt("Enter first number: "))
var number2 = parseFloat(prompt("Enter second number: "))
function add1(c,d){
    return c * d;
}
var result = add1(number1,number2)
console.log("The sum is " + result);
// program to add two numbers using a function
// declaring a function
/*
var days = prompt("Enter your day");
switch (days){
    case "Monday":
    console.log("Week of first day")
    break;
    case "Tuesday":
    console.log("Week of second day")
    break;   
    default:
    console.log("no day") 
}*/
    //Exercise  
//var side1 = 5;
//var side2 = 6;
//var side3 = 7;

//var s = (side1 + side2 + side3)/2;
//var area =  Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));

//document.write(area);
// Write a JavaScript program to display the current day and time
// in the following format.
//Today is : Tuesday.
//Current time is : 10 PM : 30 : 38?
/*
document.write("<br>"+"<br>")
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
document.write("Today is : " + daylist[day]);
document.write("<br>"+"<br>")
var hour = today.getHours();
var minute = today.getMinutes();
var second  = today.getSeconds();
var currentDate = ("Current time is : " + hour + " PM : " + minute + " : " + second);
document.write(currentDate);
    //Exercise 3
    document.write("<br>"+"<br>")
var today1 = new Date();
var date = today1.getDate();
var month = today1.getMonth()+1;
var year = today1.getFullYear();
if(date < 10){
    date = '0'+date;
}
if(month < 10){
    month = '0'+month;
}
today1 = date+'-'+month+'-'+year;
document.write(today1);

var num = Math.ceil(Math.random() * 10);
console.log(num);
var gnum = prompt('Guess the number between 1 and 10 inclusive');
if(num == gnum){
    console.log("Mathched")
}

else{
    console.log("not matched")
}

var today2 = new Date();
var cmas=new Date(today2.getFullYear(), 11, 25);
console.log(cmas)

function multiplyBy(){
var num1 = document.getElementById('inp-1').value;
var num2 = document.getElementById('inp-1').value;
document.getElementById('result').innerHTML = num1 * num2;
}

function divideBy(){
    var num1 = document.getElementById('inp-1').value;
    var num2 = document.getElementById('inp-1').value;
    document.getElementById('result').innerHTML = num1 / num2;
    }
    var str = "subhan";
    var a  = "";
    for(var i = str.length; i>=0; i--){
        a = a + str.charAt(i);
    }
    console.log(a);
    var str1 = "apple"
    var b = str1.charAt(5)+str1.charAt(4)+str1.charAt(3)+str1.charAt(2)+str1.charAt(1)+str1.charAt(0);
    console.log(b)*/
    function check(){
    var num1 = document.getElementById('inp').value; 

    if(num1 == ""){
        alert("no answer")
    }
    else if(num1%2 == 0){
        alert("Even number")
    }
   
    else{
        alert("Odd number")
    }
   
}
