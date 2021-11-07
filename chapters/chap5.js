document.write("<h1> Chapter 5  </h1>");
document.write("<h2> Math Expressions  </h2>");

// Q1
var num1 = 3;
var num2 = 5;
var sum = num1 +num2;
document.write("Sum of "+num1+" and "+num2+" is "+sum);
document.write("<hr>");

// Q2
var sub = num1 -num2;
document.write("Subtraction of "+num1+" and "+num2+" is "+sub);
document.write("<br>");

var mul = num1 *num2;
document.write("Multiplication of "+num1+" and "+num2+" is "+mul);
document.write("<br>");
var div = num1 /num2;
document.write("Division of "+num1+" and "+num2+" is "+div);
document.write("<hr>");


// Q3
// a:
var vr;
// b:
document.write("<br> Value of variable after declaration is "+vr);
// c:
vr =5;
document.write("<br> Initial value : "+vr);
vr++;
document.write("<br> Value after increment is: : "+vr);
vr=vr+7;
document.write("<br> Value after addition is: : "+vr);
vr--;
document.write("<br> Value after decrement is: : "+vr);
vr=vr%3;
document.write("<br> The remainder is: : "+vr);
document.write("<hr>");



// Q4
var cost=600;
var qun=+prompt("How many movie tickets you wants to buys?? ");
tot=cost* qun;
document.write("<br> Total cost to buy "+qun+" tickets to a movie is "+tot+" PKR");
document.write("<hr>");

// Q5
var num =+prompt("Table number ?? ");
document.write("<br>");
document.write("<br> Table of "+num);
document.write("<br>");
for(i=1;i<=10;i++){
    mul=num*i;
    document.write(num+" x "+i+" = "+mul);
    document.write("<br>");
}
document.write("<hr>");

// Q6

var cel = +prompt("Enter temperature in celsius?? ");
var F = (cel*9/5)+32;
document.write(cel+"oC is "+F+"oF");
document.write("<br>");
var Fah = +prompt("Enter temperature in fahrenhitrate?? ");
var C = (Fah-32)*5/9;
document.write(Fah+"oF is "+C+"oC");
document.write("<hr>");

// Q7
var item1 = +prompt("Price of item 1?? ");
var item2 = +prompt("Price of item 2?? ");
var qun1 = +prompt(" Ordered quantity of item 1?? ");
var qun2 = +prompt(" Ordered quantity of item 2?? ");
var ship=100;
var tot_cost=(item1*qun1)+(item2*qun2)+ship;
document.write(" <h3> Shopping Cart </h3> ");
document.write("<br>");
document.write("Price of item 1 is "+item1);
document.write("<br>");
document.write(" Quantity of item 1 is"+qun1);
document.write("<br>");
document.write("Price of item 2 is "+item2);
document.write("<br>");
document.write(" Quantity of item 2 is "+qun2);
document.write("<br>");
document.write("Shipping charges is:"+ship);
document.write("<br>");
document.write("The total cost is "+tot_cost);
document.write("<hr>");

// Q8
var tot_mrk= 980;
var obt_mrk = 804;
var per= obt_mrk*100/tot_mrk;
document.write(" <h3> Marks Sheet </h3> ");
document.write("<br>");
document.write("<br> Total marks: "+tot_mrk);
document.write("<br> Marks obtained: "+obt_mrk);
document.write("<br> Percentage: "+per);
document.write("<hr>");


// Q9
var dollar_rate = 104.80,riyal_rate = 28,dollars =10, riyals =25;
var convt_dollar=dollar_rate*dollars;
var convt_riyal=riyal_rate*riyals;
document.write(" <h3> Currency in PKR </h3> ");
document.write("<br>");
document.write("<br> Total Currency in PKR: "+(convt_dollar+convt_riyal));
document.write("<hr>");


// Q 10.
var exp= 10+5*10/2;
document.write("<br> Expression X = 10+5*10/2;  <br> X = "+exp);
document.write("<hr>");


// Q 11.
var current_yr=+prompt("Current year: ");
var birth_yr=+prompt("Current year: ");
var age = current_yr-birth_yr;
document.write(" <h3> Age Calculator </h3> ");
document.write("<br>");
document.write("<br> Current Year: "+current_yr);
document.write("<br> Birth Year: "+birth_yr);
document.write("<br> Your age is: "+age);
document.write("<hr>");


// Q 12.
var Radius = 20;
pi= 3.142;
var circumference = 2*pi * Radius;
var area = pi*(Radius*Radius);
document.write(" <h3> The Geometrizer </h3> ");
document.write("<br>");
document.write("<br> Radius of a circle: "+Radius);
document.write("<br> The circumference is : "+circumference);
document.write("<br> The area is: "+area);
document.write("<hr>");