//KEEP THIS COMMENTED OUT
// function timeOfDay() {
//     var hour = new Date().getHours();
//     var greeting;
//     if (hour < 18) {
//         greeting = "good day!";
//     } else {
//         greeting = "good evening!";
//     }
// }

//DO NOT KEEP COMMENTED OUT
// var hour = new Date().getHours();

// if (hour < 18) {
//     document.write("good day!" + "<br>");

// } else {
//     document.write("good evening!" + "<br>");
// };


//KEEP THIS COMMENTED OUT
// document.write("hello world" + "<br>");
// document.write("hello world" + "<br>");
// document.write("hello world" + "<br>");
// document.write("hello world" + "<br>");
// document.write("hello world" + "<br>");
// document.write("hello world" + "<br>");
// document.write("hello world" + "<br>");
// document.write("hello world" + "<br>");

// ^^ is the same as :


//DO NOT KEEP COMMENTED OUT
// for (let i = 0; i < 10; i++) {
//     document.write("hello world" + "<br>")
// }


// for (i = 0; i < 10; i++) {
//     if (i === 7) {
//         break;
//     }
// }
// document.write("the number is " + i + "<br>");

// var x = 0;
// while (x < 5) {
//     console.log(x);
//     x = x + 1;
// };

// var x = 5;
// while (x < 5) {
//     console.log(x);
//     x = x + 1;
// }

// KEEP THIS COMMENTED OUT
// for (var i = 0; i < 20; i++) {
//     if (i === 0) {
//         document.write(i + ' is even' + "<br>");
//     }
//     else if (x % 2 === 0) {
//         document.write(i + ' is even' + "<br>");
//     }
//     else {
//         document.write(i + ' is odd' + "<br>");
//     }
// }

//DO NOT KEEP COMMENTED OUT
// for (var i = 0; i < 20; i++) {
//     if (i % 2 === 0) {
//         document.write(i + ' is even' + "<br>");
//     } else {
//         document.write(i + ' is odd' + "<br>");
//     }
// };

// var money = 1500.00;
// var bills = 2500.00;

// if (money > bills) {
//     document.write("you are covered!")
// } else {
//     document.write("uh oh!" + "<br>")
// };

// if (money === bills) {
//     document.write("you are covered!")
// } else if (money > bills) {
//     document.write("you're good!")
// } else {
//     document.write("uh oh!" + "<br>")
// };


//KEEP THIS COMMENTED OUT
// if (money > bills) || (money === ) {
//     document.write("you are covered!")
// } else if (money === bills) || (money < 2000) 
// { 
//     else {
//     document.write("uh oh!" + "<br">)
// };

//DO NOT KEEP COMMENTED OUT
// function assignGrade(score) {
//     if (score > 90) {
//         return 'A';
//     } else if (score > 80) {
//         return 'B';
//     } else if (score > 70) {
//         return 'C';
//     } else if (score > 60) {
//         return 'D';
//     } else {
//         return 'F';
//     }

// }

// document.write('your grade is ' + assignGrade(78) + "<br>");
// document.write('your grade is ' + assignGrade(92) + "<br>");
// document.write('your grade is ' + assignGrade(51) + "<br>");

var age = prompt("What is your age?");

if (age >= 18) alert('Welcome!')
else {
    alert('Sorry! Come back in a few years!')
    window.location.href = 'https://www.youtube.com/watch?v=K7l5ZeVVoCA'; //Will take you to Google.

}