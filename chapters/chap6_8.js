
document.write("<h1> Chapters 6 to 9  </h1>");
document.write("<h2> Math Expressions  </h2>");
// Q1.
var a = 10;
document.write("<h5> Result </h5><br>");
document.write("The value of a is : "+a);


document.write("<hr><br><br>The value of ++a is : "+(++a));
document.write("<br>Now the value of a is : "+a);

document.write("<br><br>The value of a++ is : "+(a++));
document.write("<br>Now the value of a is : "+a);


document.write("<br><br>The value of --a is : "+(--a));
document.write("<br>Now the value of a is : "+a);

document.write("<br><br>The value of a-- is : "+(a--));
document.write("<br>Now the value of a is : "+a);


// Q2.
var a = 2,b=1,result ;
var result= --a - --b + ++b + b--;
document.write("<br><br><br>a is "+a);
document.write("<br>b is "+b);
document.write("<br>result is "+result);



// Q3
var var1=prompt("Your beautiful name, Sir?? ");
document.write("<br><br>Hello "+var1+" Nice to meet you!")

document.write("<br>");

// Q4
var num =+prompt("Enter number of table : ");
document.write("<br>");
document.write("<br> Multipication table of "+num);
document.write("<br>");
for(i=0;i<=10;i++){
    mul=num*i;
    document.write(num+" x "+i+" = "+mul);
    document.write("<br>");
}

// Q5
var sub1= prompt("Enter 1st subject name: ");
var sub2= prompt("Enter 2nd subject name: ");
var sub3= prompt("Enter 3rd subject name: ");
var sub1_marks=+prompt("Enter obtained marks out of 100 :");
var sub2_marks=+prompt("Enter obtained marks out of 100 :");
var sub3_marks=+prompt("Enter obtained marks out of 100 :");
obt= sub1_marks + sub2_marks+ sub3_marks;
per= (obt*100)/300;

document.write("<table><tr><td><h3> Subjects </td><td> Total_Marks </td><td> Obtained_Marks </td><td> Percentage </td></tr>");
    document.write("<br>");
    document.write("<br>");
document.write("<tr><td> "+sub1+" </td><td> 100 </td><td>"+sub1_marks+"</td><td>  "+sub1_marks+"%</td></tr>");
document.write("<br>");
document.write("<tr><td> "+sub2+" </td><td> 100 </td><td>"+sub2_marks+"</td><td>  "+sub2_marks+"%</td></tr>");
document.write("<br>");
document.write("<tr><td> "+sub3+" </td><td> 100 </td><td>"+sub3_marks+"</td><td>  "+sub3_marks+"%</td></tr>");
document.write("<hr>");
document.write("<tr><td> " + " </td><td> 300 </td><td>"+obt+"</td><td>  "+per+"%</td></tr>");

