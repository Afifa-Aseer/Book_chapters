document.write("<h2> Chapter 12 - 13 </h2>")
// Q1:
// var ch= prompt("Type a charcher: ");
// c= typeof ch;
// if (c== "number"){
// document.write("string");
// }
// else{
//     document.write("number");
// }


// Q2:
var l_num1=+prompt("Largest number \n Enter 1st number: ");
var l_num2=+prompt("Largest number \n Enter 2nd number: ");
if(l_num1>l_num2){
    document.write(l_num1+" is largest number.between "+l_num1+" and "+l_num2);
}
else if(l_num1<l_num2){
    document.write(l_num2+" is largest number.between "+l_num1+" and "+l_num2);
}
else {
    document.write(l_num1+" "+l_num2+" both are equal");
}
document.write("<hr>");


// Q3:
var num=+prompt("check the number is positive, negative or zero.\n Enter a number: ");
if(num >0){
    document.write(num +" is +ve number. ");
}
else if(num <0){
    document.write(num+" is -ve number.");
}
else{
    document.write(num +" number is zero");
}
document.write("<hr>");

// Q4
var cha=prompt("Checking vowel \n Type a character: ");
if(cha =='a'||cha =='e'||cha =='i'||cha =='o'||cha =='u'){
    document.write("Given character is vowel? True");
}
else{
    document.write("Given character is vowel? False");
}
document.write("<hr>");

// Q5
var password = 123456789;
var pass=prompt("Enter Your Password: ");
if(pass==""){
    document.write(" Please enter your password");
}
else if(password == pass){
    document.write("Correct! The password you entered matches the original password");
}
else{
    document.write("Incorrect password");
}
document.write("<hr>");

// Q6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}
