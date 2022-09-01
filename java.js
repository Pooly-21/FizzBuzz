function fizzbuzz() {
    var display = document.getElementById('display');
    var divisible = "";
    var displayHTML = "";
  
    for (i = 1; i < 100; i++) {
      if (i % 3 === 0) {
        divisible = "Fizz";
      } else if (i % 5 === 0) {
        divisible = "Buzz";
      } else if (i % 3 === 0 && i % 5 === 0) {
        divisible = "FizzBuzz";
      } else {
        divisible = "";
      }
  
      displayHTML += "<p>" + i + ":" + divisible + "</p>";
    }
    display.insertAdjacentHTML('afterend', displayHTML); 
  }
  
  fizzbuzz();












/*
function FizzBuzz()
{
    for (x = 0; x <= 100; x++) 
    {
        if (x % 3 == 0)
        {
            console.log("Fizz");
        }
        else if (x % 5 == 0)
        {
            console.log("Buzz");
        }
        else if (x % 3 == 0 && x % 5 == 0)
        {
            console.log("FizzBuzz");
        }
        else 
        {
            console.log(i)
        }
    }
}
FizzBuzz();*/