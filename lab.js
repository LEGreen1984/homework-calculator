function dividethis(number1, number2){
  var answer = parseInt(number1) / parseInt(number2);
  alert(answer);
}

function addthis(number1,number2){
  var answer = parseInt(number1) + parseInt(number2);
  alert(answer);
}

function subtractthis(number1, number2){
  var answer = parseInt(number1) - parseInt(number2);
  alert(answer);
}
function multiplythis(number1, number2){
  var answer = parseInt(number1) * parseInt(number2);
  alert(answer);
}

function squareroot(number1){
  parseInt(number1)
  alert(Math.sqrt(number1));
}

function powerOf(number1, number2){
  parseInt(number1)
  parseInt(number2)
  var answer = Math.pow(number1, number2)
  alert(answer)
}


var need = 1

while (need > 0){
 var calculator = prompt ("hello, would you like to use a (b)asic or (a)dvanced calculator?").toLowerCase();
    if (calculator == "b"){
     var basicFunction = prompt("Would you like to use the (a)dd (d)ivide, (m)ultiply or (s)ubtract?").toLowerCase();
    }
      if (calculator == "b" && basicFunction == "d"){
        var number = prompt("enter a number");
        var divideBy = prompt("divide by")
        dividethis(number, divideBy)
      }
      else if (calculator == "b" && basicFunction == "a"){
        var numberToAdd = prompt("enter a number");
        var nowAdd = prompt("Plus");
      addthis(numberToAdd, nowAdd);
      }

      else if (calculator == "b" && basicFunction == "m"){
        var numberToMultiply = prompt("enter a number");
        var multiplyBy = prompt("Times by")
        multiplythis(numberToMultiply, multiplyBy);
      }
      else if (calculator == "b" && basicFunction == "s"){
        var number = prompt("enter a number");
        var takeAway = prompt("minus")
        subtractthis(number, takeAway);
      }

      if (calculator == "a")
      {var basicFunction = prompt("Would you like to use the (s)quare root or (p)ower of?").toLowerCase();
      }
        if (calculator == "a" && basicFunction == "s"){
          var number = prompt("enter a number");
          squareroot(number);
        }
        else if (calculator == "a" && basicFunction == "p"){
          var number = prompt("enter a number");
          var powerTo = prompt("to the power of");
          powerOf(number,powerTo);
        }
    }
