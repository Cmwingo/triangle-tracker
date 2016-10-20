$(document).ready(function() {
    //UI Logic
    var side1 = prompt("what is the length of side one?");
    var side2 = prompt("what is the length of side two?");
    var side3 = prompt("what is the length of side three?");



    //Business Logic
    side1 = parseInt(side1);
    side2 = parseInt(side2);
    side3 = parseInt(side3);
    sum1_2 = side1 + side2;
    sum2_3 = side2 + side3;
    sum1_3 = side1 + side3;

    if(side1 === side2 && side2 === side3 && side1 === side3) {
      alert("Your triangle is equalateral.");
    } else if(side1 === side2 || side2 === side3 || side1 === side3) {
      alert("your triangle is isosceles.");
    } else if(sum1_2 <= side3 || sum2_3 <= side1 || sum1_3 <= side2) {
      alert("Your triangle is not actually a triangle.")
    } else {
      alert("your triangle is scalene.");
    }
});
